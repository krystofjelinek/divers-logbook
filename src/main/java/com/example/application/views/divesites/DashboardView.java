package com.example.application.views.divesites;

import com.example.application.backend.DiveRepository;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;

@PageTitle("Dashboard")
@Route(value = "dashboard", layout = MainLayout.class)
public class DashboardView extends VerticalLayout implements Serializable {
    private static final long serialVersionUID = 2121010853008479565L;
    /*@Autowired
    private DiveRepository diveRepository;*/
   /* public long getCount() {
        return diveRepository.count();
    }*/

    public DashboardView(@Autowired DiveRepository diveRepository) {
        setSpacing(false);
        HorizontalLayout layout1 = new HorizontalLayout();
        layout1.add(new H2("Total dives completed: " + diveRepository.count()));
        layout1.add(new H2("Deepest dive: " ));
        add(layout1);

        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");


    }




}
