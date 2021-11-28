package com.example.application.views.logbook;

import com.example.application.views.MainLayout;
import com.example.application.views.addanewlog.ReadWriteUtilityForFile;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("logbook")
@Route(value = "", layout = MainLayout.class)
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
        //logdataGrid.removeColumnByKey("dateofdivedata");
        logdataGrid.removeColumnByKey("buddydata");
        logdataGrid.removeColumnByKey("avgdepthdata");
        logdataGrid.removeColumnByKey("maxdepthdata");
        logdataGrid.removeColumnByKey("bottomtimedata");
        logdataGrid.removeColumnByKey("edudata");

        Grid.Column<ReadWriteUtilityForFile.logdata> dateColumn = logdataGrid.addColumn(ReadWriteUtilityForFile.logdata::getDateofdivedata)
                .setHeader("Date").setWidth("70px");
        

       /* Grid.Column<ReadWriteUtilityForFile.logdata> locationColumn = logdataGrid.addColumn(ReadWriteUtilityForFile.logdata::getLocationdata)
                .setHeader("Location").setWidth("100px");

        Grid.Column<ReadWriteUtilityForFile.logdata> divesiteColumn = logdataGrid.addColumn(ReadWriteUtilityForFile.logdata::getDivesitedata)
                .setHeader("Dive site").setWidth("100px");*/
    }

   /* public void Header() {
        HorizontalLayout header = new HorizontalLayout();
        header.add(new H1("Diving logbook"));



        add(header,new Paragraph(ReadWriteUtilityForFile.logdata.getLocationdata() +
                ReadWriteUtilityForFile.logdata.getDivesitedata()));



    }*/
}

