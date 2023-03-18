package com.example.application.views.divesites;

import com.example.application.backend.Dive;
import com.example.application.backend.DiveRepository;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
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

    public DashboardView(@Autowired DiveRepository diveRepository) {
        setSpacing(false);
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");

        HorizontalLayout layout1 = new HorizontalLayout();
        Image img1x = new Image("images/DiveSite.jpg","Failed to load image");
        img1x.setHeight("250px");
        img1x.setWidth("auto");
        if(diveRepository.findFirstByOrderByMaxdepthdataDesc()==null){
            H2 header1 = new H2("Total dives completed: " + "0");
            header1.addClassName("header2");
            layout1.add(img1x,header1);
        }
        else {
            H2 header1 = new H2("Total dives completed: " + diveRepository.count());
            header1.addClassName("header2");
            layout1.add(img1x,header1);
        }



        HorizontalLayout layout2 = new HorizontalLayout();
        Image img2x = new Image("images/MaxDepth.jpg","Failed to load image");
        img2x.setHeight("250px");
        img2x.setWidth("auto");
        Dive dive = diveRepository.findFirstByOrderByMaxdepthdataDesc();
        if (dive==null){
            H2 header2 = new H2("Max. depth achieved: " + "0");
            header2.addClassName("header2");
            layout2.add(img2x,header2);
        } else {
        Double maxDepth = dive.getMaxdepthdata();
        H2 header2 = new H2("Max. depth achieved: " + maxDepth);
        header2.addClassName("header2");
        layout2.add(img2x,header2);}
        add(layout1,layout2);
    }
}
