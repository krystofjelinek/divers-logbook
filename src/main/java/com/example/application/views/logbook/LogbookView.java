package com.example.application.views.logbook;

import com.example.application.backend.Dive;
import com.example.application.backend.DiveController;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.crudui.crud.impl.GridCrud;

import java.io.Serializable;

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
         crud.setFindAllOperation(diveController::getDives);

         add(crud);

       /* crud.setCrudListener(new CrudListener<Dive>() {
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
*/


    }



}

