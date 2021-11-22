package com.example.application.views.logbook;

import com.example.application.views.MainLayout;
import com.example.application.views.addanewlog.ReadWriteUtilityForFile;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("logbook")
@Route(value = "", layout = MainLayout.class)
public class LogbookView extends VerticalLayout {

    public LogbookView() {
        setSpacing(false);
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");
        Header();
    }

    public void Header() {
        HorizontalLayout header = new HorizontalLayout();
        header.add(new H1("Diving logbook"));

        add(header,new Paragraph(ReadWriteUtilityForFile.logdata.getLocationdata() + " " + ReadWriteUtilityForFile.logdata.getDivesitedata()));
    }
}

