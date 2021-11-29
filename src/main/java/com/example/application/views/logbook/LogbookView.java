package com.example.application.views.logbook;

import com.example.application.views.MainLayout;
import com.example.application.views.addanewlog.ReadWriteUtilityForFile;
import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("logbook")
@Route(value = "", layout = MainLayout.class)
@StyleSheet("./styles.css")
public class LogbookView extends VerticalLayout {
    Grid<ReadWriteUtilityForFile.logdata> logdataGrid = new Grid<>(ReadWriteUtilityForFile.logdata.class);

    public LogbookView() {
        addClassName("list-view");
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");
        configureGrid();
        add(logdataGrid);
    }


    private void configureGrid() {
        logdataGrid.addClassName("grid");
        logdataGrid.setSizeFull();
        logdataGrid.removeColumnByKey("feelingdata");
        logdataGrid.removeColumnByKey("starttimedata");
        logdataGrid.removeColumnByKey("endtimedata");
        logdataGrid.removeColumnByKey("airtempdata");
        logdataGrid.removeColumnByKey("watertempdata");
        logdataGrid.removeColumnByKey("diveclubdata");
        logdataGrid.removeColumnByKey("heatcomfortdata");
        logdataGrid.removeColumnByKey("heatdata");
        logdataGrid.removeColumnByKey("instructordata");
        logdataGrid.removeColumnByKey("notesdata");
        logdataGrid.removeColumnByKey("typeofdivedata");
        logdataGrid.removeColumnByKey("tankindata");
        logdataGrid.removeColumnByKey("tankoutdata");
        logdataGrid.removeColumnByKey("waterconditionsdata");
        logdataGrid.removeColumnByKey("weightcomfortdata");
        logdataGrid.removeColumnByKey("weightsdata");
        logdataGrid.removeColumnByKey("avgdepthdata");

        logdataGrid.getColumns().forEach(logdataColumn -> logdataColumn.setAutoWidth(true));
        logdataGrid.setColumns("dateofdivedata", "locationdata", "divesitedata", "maxdepthdata","bottomtimedata","buddydata","edudata");

        logdataGrid.getColumnByKey("dateofdivedata").setHeader("Date");
        logdataGrid.getColumnByKey("bottomtimedata").setHeader("Bottom time");
        logdataGrid.getColumnByKey("buddydata").setHeader("Buddy");
        logdataGrid.getColumnByKey("maxdepthdata").setHeader("Max. depth");
        logdataGrid.getColumnByKey("edudata").setHeader("Edu");
        logdataGrid.getColumnByKey("locationdata").setHeader("Location");
        logdataGrid.getColumnByKey("divesitedata").setHeader("Dive site");




    }

   /* public void Header() {
        HorizontalLayout header = new HorizontalLayout();
        header.add(new H1("Diving logbook"));



        add(header,new Paragraph(ReadWriteUtilityForFile.logdata.getLocationdata() +
                ReadWriteUtilityForFile.logdata.getDivesitedata()));



    }*/
}

