package com.example.application.views.logbook;

import com.example.application.backend.Dive;
import com.example.application.backend.DiveController;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.crudui.crud.CrudListener;
import org.vaadin.crudui.crud.impl.GridCrud;

import java.io.Serializable;
import java.util.Collection;

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
         crud.getGrid().setItemDetailsRenderer(
                 new ComponentRenderer<>(dive -> {
                     VerticalLayout layout = new VerticalLayout();
                     layout.add(new Label("Date: " +
                             dive.getDateofdivedata()));

                     /*layout.add(new Label("Year of birth: " +
                             person.getYearOfBirth()));*/
                     return layout;
                 }));

         //crud.getGrid().removeAllColumns();
         /*crud.getGrid().addColumn(Dive::getDateofdivedata).setHeader("Date");
         crud.getGrid().addColumn(Dive::getMaxdepthdata).setHeader("Max. depth [m]");
         crud.getGrid().addColumn(Dive::getDivesitedata).setHeader("Dive site");
         crud.getGrid().addColumn(Dive::getBuddydata).setHeader("Buddy");
         crud*/
        crud.getGrid().setDetailsVisibleOnClick(true);
         crud.getGrid().addThemeVariants(GridVariant.LUMO_ROW_STRIPES,
                GridVariant.MATERIAL_COLUMN_DIVIDERS, GridVariant.LUMO_COLUMN_BORDERS);
         add(crud);




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




}

