package com.example.application.views.logbook;

import com.example.application.backend.Dive;
import com.example.application.backend.DiveController;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.crudui.crud.CrudListener;
import org.vaadin.crudui.crud.impl.GridCrud;

import java.io.Serializable;
import java.util.Collection;
import java.util.stream.Stream;

@StyleSheet("/themes/divers-logbook/styles.css")
@PageTitle("Logbook")
@Route(value = "", layout = MainLayout.class)
public class LogbookView extends VerticalLayout implements Serializable {
    private static final long serialVersionUID = 291333796254030283L;

    public LogbookView(@Autowired DiveController diveController) {
        addClassName("list-view");
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");

         var crud = new GridCrud<>(Dive.class);
         crud.setUpdateOperationVisible(false);
         crud.setAddOperationVisible(false);
         crud.setClickRowToUpdate(false);
         crud.getGrid().setItemDetailsRenderer(createDiveDetailsRenderer());
         crud.getGrid().removeAllColumns();
         crud.getGrid().addColumn(Dive::getDateofdivedata).setHeader("Date").setAutoWidth(true);
         crud.getGrid().addColumn(Dive::getMaxdepthdata).setHeader("Max. depth [m]").setAutoWidth(true);
         crud.getGrid().addColumn(Dive::getBottomtimedata).setHeader("Bottom time").setAutoWidth(true);
         crud.getGrid().addColumn(Dive::getDivesitedata).setHeader("Dive site").setAutoWidth(true);

         crud.getGrid().addColumn(Dive::getBuddydata).setHeader("Buddy").setAutoWidth(true);
         crud.getGrid().setDetailsVisibleOnClick(true);
         //crud.getGrid().addThemeVariants(GridVariant.LUMO_NO_BORDER);
         crud.getGrid().setAllRowsVisible(true);
         Paragraph paragraph = new Paragraph("Click on row to see details about particular dive");
         HorizontalLayout layout = new HorizontalLayout();
         layout.add(paragraph);
         add(crud,layout);

        crud.setCrudListener(new CrudListener<Dive>() {
            @Override
            public Collection<Dive> findAll() {
                return diveController.getDives();
            }
            @Override
            public Dive add(Dive dive) {
                return diveController.saveDive(dive);
            }
            @Override
            public Dive update(Dive dive) {
                return null;
            }
            @Override
            public void delete(Dive dive) {
                diveController.deleteDive(dive);
            }
        });
    }

    private static ComponentRenderer<DiveDetailsFormLayout,Dive> createDiveDetailsRenderer() {
        return new ComponentRenderer<>(
                DiveDetailsFormLayout::new,
                DiveDetailsFormLayout::setDive);
    }

    private static class DiveDetailsFormLayout extends FormLayout {
        private final TextField divesiteField = new TextField("Dive site");
        private final TextField locationField = new TextField("Location");
        private final TextField dateofdiveField = new TextField("Date of dive");
        private final TextField starttimeField = new TextField("Start time");
        private final TextField bottomtimeField = new TextField("Bottom time");
        private final TextField endtimeField = new TextField("End time");
        private final TextField maxdepthField = new TextField("Max. depth");
        private final TextField avgdepthField = new TextField("Avg. depth");
        private final TextField tankinField = new TextField("Tank pressure - start");
        private final TextField tankoutField = new TextField("Tank pressure - end");
        private final TextField waterconditionsField = new TextField("Water conditions");
        private final TextField typeofdiveField = new TextField("Type of dive");
        private final TextField airtempField = new TextField("Air temperature");
        private final TextField watertempField = new TextField("Water temperature");
        private final TextField weightsField = new TextField("Amount of weights");
        private final TextField weightcomfortField = new TextField("Weight comfort");
        private final TextField heatField = new TextField("Exposure protection");
        private final TextField heatcomfortField = new TextField("Heat comfort");
        private final TextField notesField = new TextField("Notes");
        private final TextField buddyField = new TextField("Buddy");
        private final TextField eduField = new TextField("Educational");
        private final TextField diveclubField = new TextField("Dive club");
        private final TextField instructorField = new TextField("Instructor");
        private final TextField feelingField = new TextField("Feeling");

        public DiveDetailsFormLayout() {
            Stream.of(divesiteField, locationField, dateofdiveField, starttimeField, bottomtimeField, endtimeField,
                    maxdepthField, avgdepthField, tankinField, tankoutField, waterconditionsField, typeofdiveField,
                    airtempField, watertempField, weightsField, weightcomfortField, heatField, heatcomfortField,
                    notesField, buddyField, eduField, diveclubField, instructorField, feelingField).forEach(field -> {
                field.setReadOnly(true);
                add(field);
            });
        }

        public void setDive(Dive dive) {
            divesiteField.setValue(dive.getDivesitedata());
            locationField.setValue(dive.getLocationdata());
            dateofdiveField.setValue(dive.getDateofdivedata().toString());
            starttimeField.setValue(dive.getStarttimedata().toString());
            bottomtimeField.setValue(dive.getBottomtimedata().toString());
            endtimeField.setValue(dive.getEndtimedata().toString());
            maxdepthField.setValue(dive.getMaxdepthdata().toString());
            avgdepthField.setValue(dive.getAvgdepthdata().toString());
            tankinField.setValue(dive.getTankindata());
            tankoutField.setValue(dive.getTankoutdata());
            waterconditionsField.setValue(dive.getWaterconditionsdata());
            typeofdiveField.setValue(dive.getTypeofdivedata());
            airtempField.setValue(dive.getAirtempdata());
            watertempField.setValue(dive.getWatertempdata());
            weightsField.setValue(dive.getWeightsdata());
            weightcomfortField.setValue(dive.getWeightcomfortdata());
            heatField.setValue(dive.getHeatdata());
            heatcomfortField.setValue(dive.getHeatcomfortdata());
            notesField.setValue(dive.getNotesdata());
            buddyField.setValue(dive.getBuddydata());
            eduField.setValue(dive.getEdudata());
            diveclubField.setValue(dive.getDiveclubdata());
            instructorField.setValue(dive.getInstructordata());
            feelingField.setValue(dive.getFeelingdata());
        }
    }
}

