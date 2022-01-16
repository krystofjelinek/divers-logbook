package com.example.application.views.addanewlog;

import com.example.application.backend.ReadWriteUtilityForFile;
import com.example.application.backend.saveList;
import com.example.application.jsonParsing.Json;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.progressbar.ProgressBar;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.timepicker.TimePicker;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.PreserveOnRefresh;
import com.vaadin.flow.router.Route;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalTime;

@PageTitle("Add a new dive")
@Route(value = "add", layout = MainLayout.class)
@StyleSheet("/themes/divers-logbook/styles.css")
@PreserveOnRefresh
public class AddanewlogView extends VerticalLayout {

    ReadWriteUtilityForFile.logdata id = new ReadWriteUtilityForFile.logdata();
    saveList sl = new saveList();
    Json js = new Json();

    /**
     * Ochránit vstupy (Binder)
     * stylizovat Feeling buttons
     * Xml reader suunto DM5
     * Stylizovat polícka aby měla stejnou velikost
     * save button -> přejít na LogbookView
     * Login pro více uživatelů(user, userpass)(dodělat přihlašovací databázi)
     * Forgotten password
     */

    public AddanewlogView() throws IOException {
        setSpacing(false);
        setMargin(false);
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");
        AddImport();
    }

    private void AddImport() {
        HorizontalLayout uroven0 = new HorizontalLayout();
        Button addButton = new Button("Add");
        addButton.addClickListener(buttonClickEvent -> {
            remove(uroven0);
            DiveSite();
        });
        addButton.addClassName("add-button");
        Button importDive = new Button("Import");
        importDive.addClickListener(buttonClickEvent -> {
            remove(uroven0);
            DiveSite();
            //nacteni dat z potapecskeho pocitace(xml file)
            //prejit na LogbookView
        });
        importDive.addClassName("import-button");
        uroven0.add(addButton,importDive);
        add(uroven0);

    }

    public void DiveSite() {
        HorizontalLayout uroven01 = new HorizontalLayout();
        HorizontalLayout uroven1 = new HorizontalLayout();
        HorizontalLayout uroven11 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.05);
        progressBar.setWidth("200px");
        Image img1 = new Image("images/DiveSite.jpg","Failed to load image");
        img1.setHeight("350px");
        TextField policko1 = new TextField("e. g. Miami diving centre");
        policko1.addKeyPressListener(Key.ENTER, e->{
            if (policko1.getValue().length() > 0){
            remove(uroven1,uroven11,uroven01,progressBar);
            id.setDivesitedata(policko1.getValue());
            Location();}
            else {
                id.setDivesitedata("-");
                remove(uroven01,uroven1,uroven11,progressBar);
                Location();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven01.add(img1);
        uroven1.add(new Paragraph(new H2("Dive site:")), policko1);
        uroven11.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if(policko1.getValue().length() > 0){
            id.setDivesitedata(policko1.getValue());
            remove(uroven01,uroven1,uroven11,progressBar);
            Location();}
            else {
                id.setDivesitedata("-");
                remove(uroven01,uroven1,uroven11,progressBar);
                Location();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven01,uroven1,uroven11,progressBar);
            AddImport();
        });
        add(progressBar,uroven01,uroven1,uroven11);
    }

    public void Location() {
        HorizontalLayout uroven02 = new HorizontalLayout();
        HorizontalLayout uroven2 = new HorizontalLayout();
        HorizontalLayout uroven21 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.10);
        progressBar.setWidth("200px");
        Image img2 = new Image("images/Location.jpg","Failed to load image");
        img2.setHeight("350px");
        TextField policko2 = new TextField("e. g. Liberec/Czechia");
        policko2.addKeyPressListener(Key.ENTER, e->{
            if (policko2.getValue().length()>0){
            remove(uroven2,uroven21,uroven02,progressBar);
            id.setLocationdata(policko2.getValue());
            DateOfDive();}
            else {
                remove(uroven2,uroven21,uroven02,progressBar);
                id.setLocationdata("-");
                DateOfDive();
            }
        });
        Button previousButton = new Button("Previous");
        Button nextButton = new Button("Next");
        uroven2.add(new Paragraph(new H2("Location:")), policko2);
        uroven21.add(previousButton,nextButton);
        uroven02.add(img2);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko2.getValue().length()>0){
                remove(uroven2,uroven21,uroven02,progressBar);
                id.setLocationdata(policko2.getValue());
                DateOfDive();}
            else {
                remove(uroven2,uroven21,uroven02,progressBar);
                id.setLocationdata("-");
                DateOfDive();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven2,uroven21,uroven02,progressBar);
            DiveSite();
        });
        add(progressBar,uroven02,uroven2,uroven21);
    }

    public void DateOfDive(){
        HorizontalLayout uroven03 = new HorizontalLayout();
        HorizontalLayout uroven3 = new HorizontalLayout();
        HorizontalLayout uroven31 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.15);
        progressBar.setWidth("200px");
        Image img3 = new Image("images/DateOfDive.jpg", "Failed to load image");
        img3.setHeight("350px");
        DatePicker date = new DatePicker("Select date");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven03.add(img3);
        uroven3.add(new Paragraph(new H2("Date of dive:")), date);
        uroven31.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if(date.getValue().lengthOfYear()==4){
            id.setDateofdivedata(date.getValue());
            remove(progressBar,uroven03,uroven3,uroven31);
            StartTime();}
            else {
                id.setDateofdivedata(LocalDate.now());
                remove(progressBar,uroven03,uroven3,uroven31);
                StartTime();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(progressBar,uroven03,uroven3,uroven31);
            Location();
        });
        add(progressBar,uroven03,uroven3,uroven31);
    }

    public void StartTime(){
        HorizontalLayout uroven04 = new HorizontalLayout();
        HorizontalLayout uroven4 = new HorizontalLayout();
        HorizontalLayout uroven41 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.20);
        progressBar.setWidth("200px");
        Image img4 = new Image("images/StartTime.jpg","Failed to load image");
        img4.setHeight("350px");
        TimePicker startTime = new TimePicker("Select start time");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven04.add(img4);
        uroven4.add(new Paragraph(new H2("Start time:")), startTime);
        uroven41.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (startTime.getValue().toString().length() == 0){
                id.setStarttimedata(LocalTime.now());
                remove(uroven4,uroven41,uroven04,progressBar);
                BottomTime();
            } else {
            id.setStarttimedata(startTime.getValue());
            remove(uroven4,uroven41,uroven04,progressBar);
            BottomTime();}
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven4,uroven41,uroven04,progressBar);
            DateOfDive();
        });
        add(progressBar,uroven04,uroven4,uroven41);
    }

    public void BottomTime(){
        HorizontalLayout uroven05 = new HorizontalLayout();
        HorizontalLayout uroven5 = new HorizontalLayout();
        HorizontalLayout uroven51 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.25);
        progressBar.setWidth("200px");
        Image img5 = new Image("images/BottomTime.jpg","Failed to load image");
        img5.setHeight("350px");
        TimePicker bottomTime = new TimePicker("Select bottom time");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven05.add(img5);
        uroven5.add(new Paragraph(new H2("Bottom time:")), bottomTime);
        uroven51.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (bottomTime.getValue().toString().length()==0){
                id.setBottomtimedata(LocalTime.now());
                remove(uroven5,uroven51,uroven05,progressBar);
                EndTime();
            } else {
            id.setBottomtimedata(bottomTime.getValue());
            remove(uroven5,uroven51,uroven05,progressBar);
            EndTime();}
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven5,uroven51,uroven05,progressBar);
            StartTime();
        });
        add(progressBar,uroven05,uroven5,uroven51);
    }

    public void EndTime(){
        HorizontalLayout uroven06 = new HorizontalLayout();
        HorizontalLayout uroven6 = new HorizontalLayout();
        HorizontalLayout uroven61 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.30);
        progressBar.setWidth("200px");
        Image img6 = new Image("images/EndTime.jpg","Failed to load image");
        img6.setHeight("350px");
        TimePicker endTime = new TimePicker("Select end time");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven06.add(img6);
        uroven6.add(new Paragraph(new H2("End time:")), endTime);
        uroven61.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (endTime.getValue().toString().length()==0){
                id.setEndtimedata(LocalTime.now());
                remove(uroven6,uroven61,uroven06,progressBar);
                MaximumDepth();
            } else {
            id.setEndtimedata(endTime.getValue());
            remove(uroven6,uroven61,uroven06,progressBar);
            MaximumDepth();}
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven6,uroven61,uroven06,progressBar);
            BottomTime();
        });
        add(progressBar,uroven06,uroven6,uroven61);
    }

    public void MaximumDepth(){
        HorizontalLayout uroven07 = new HorizontalLayout();
        HorizontalLayout uroven7 = new HorizontalLayout();
        HorizontalLayout uroven71 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.35);
        progressBar.setWidth("200px");
        Image img7 = new Image("images/MaxDepth.jpg","Failed to load image");
        img7.setHeight("350px");
        TextField policko7 = new TextField("Depth in meters");
        policko7.addKeyPressListener(Key.ENTER, e->{
            if (policko7.getValue().length()>0){
            remove(uroven7,uroven71,uroven07,progressBar);
            id.setMaxdepthdata(policko7.getValue());
            AverageDepth();}
            else {
                remove(uroven7,uroven71,uroven07,progressBar);
                id.setMaxdepthdata("-");
                AverageDepth();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven07.add(img7);
        uroven7.add(new Paragraph(new H2("Maximum depth:")), policko7);
        uroven71.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko7.getValue().length()>0){
                remove(uroven7,uroven71,uroven07,progressBar);
                id.setMaxdepthdata(policko7.getValue());
                AverageDepth();}
            else {
                remove(uroven7,uroven71,uroven07,progressBar);
                id.setMaxdepthdata("-");
                AverageDepth();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven7,uroven71,uroven07,progressBar);
            EndTime();
        });
        add(progressBar,uroven07,uroven7,uroven71);
    }

    public void AverageDepth(){
        HorizontalLayout uroven08 = new HorizontalLayout();
        HorizontalLayout uroven8 = new HorizontalLayout();
        HorizontalLayout uroven81 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.40);
        progressBar.setWidth("200px");
        Image img8 = new Image("images/AvgDepth.jpg","Failed to load image");
        img8.setHeight("350px");
        TextField policko8 = new TextField("Depth in meters");
        policko8.addKeyPressListener(Key.ENTER, e->{
            if (policko8.getValue().length()>0){
            remove(uroven8,uroven81,uroven08,progressBar);
            id.setAvgdepthdata(policko8.getValue());
            TankIn();}
            else {
                remove(uroven8,uroven81,uroven08,progressBar);
                id.setAvgdepthdata("-");
                TankIn();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven08.add(img8);
        uroven8.add(new Paragraph(new H2("Average depth:")), policko8);
        uroven81.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko8.getValue().length()>0){
                remove(uroven8,uroven81,uroven08,progressBar);
                id.setAvgdepthdata(policko8.getValue());
                TankIn();}
            else {
                remove(uroven8,uroven81,uroven08,progressBar);
                id.setAvgdepthdata("-");
                TankIn();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven8,uroven81,uroven08,progressBar);
            MaximumDepth();
        });
        add(progressBar,uroven08,uroven8,uroven81);
    }

    public void TankIn(){
        HorizontalLayout uroven09 = new HorizontalLayout();
        HorizontalLayout uroven9 = new HorizontalLayout();
        HorizontalLayout uroven91 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.45);
        progressBar.setWidth("200px");
        Image img9 = new Image("images/TankIn.jpg","Failed to load image");
        img9.setHeight("350px");
        TextField policko9 = new TextField("Pressure in BAR");
        policko9.addKeyPressListener(Key.ENTER, e->{
            if (policko9.getValue().length()>0){
            remove(uroven9,uroven91,uroven09,progressBar);
            id.setTankindata(policko9.getValue());
            TankOut();}
            else {
                remove(uroven9,uroven91,uroven09,progressBar);
                id.setTankindata("-");
                TankOut();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven09.add(img9);
        uroven9.add(new Paragraph(new H2("Tank pressure start:")), policko9);
        uroven91.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko9.getValue().length()>0){
                remove(uroven9,uroven91,uroven09,progressBar);
                id.setTankindata(policko9.getValue());
                TankOut();}
            else {
                remove(uroven9,uroven91,uroven09,progressBar);
                id.setTankindata("-");
                TankOut();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven9,uroven91,uroven09,progressBar);
            AverageDepth();
        });
        add(progressBar,uroven09,uroven9,uroven91);
    }

    private void TankOut() {
        HorizontalLayout uroven010 = new HorizontalLayout();
        HorizontalLayout uroven10 = new HorizontalLayout();
        HorizontalLayout uroven101 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.50);
        progressBar.setWidth("200px");
        Image img10 = new Image("images/TankOut.jpg","Failed to load image");
        img10.setHeight("350px");
        TextField policko10 = new TextField("Pressure in BAR");
        policko10.addKeyPressListener(Key.ENTER, e->{
            if (policko10.getValue().length()>0){
            remove(uroven10,uroven101,uroven010,progressBar);
            id.setTankoutdata(policko10.getValue());
            WaterConditions();}
            else {
                remove(uroven10,uroven101,uroven010,progressBar);
                id.setTankoutdata("-");
                WaterConditions();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven010.add(img10);
        uroven10.add(new Paragraph(new H2("Tank pressure end:")), policko10);
        uroven101.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko10.getValue().length()>0){
                remove(uroven10,uroven101,uroven010,progressBar);
                id.setTankoutdata(policko10.getValue());
                WaterConditions();}
            else {
                remove(uroven10,uroven101,uroven010,progressBar);
                id.setTankoutdata("-");
                WaterConditions();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven10,uroven101,uroven010,progressBar);
            TankIn();
        });
        add(progressBar,uroven010,uroven10,uroven101);
    }

     private void WaterConditions() {
        HorizontalLayout uroven011 = new HorizontalLayout();
        HorizontalLayout uroven11 = new HorizontalLayout();
        HorizontalLayout uroven111 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.55);
        progressBar.setWidth("200px");
        Image img11 = new Image("images/WaterConditions.jpg","Failed to load image");
        img11.setHeight("350px");
        ComboBox<String> waterConditions = new ComboBox<>();
        waterConditions.setItems("Waves", "Current","None");
        waterConditions.setLabel("Select one option");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven011.add(img11);
        uroven11.add(new Paragraph(new H2("Water conditions:")), waterConditions);
        uroven111.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (waterConditions.getValue().length()>0){
            id.setWaterconditionsdata(waterConditions.getValue());
            remove(uroven11,uroven111,uroven011,progressBar);
            TypeOfDive();}
            else {
                id.setWaterconditionsdata("-");
                remove(uroven11,uroven111,uroven011,progressBar);
                TypeOfDive();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven11,uroven111,uroven011,progressBar);
            TankOut();
        });
        add(progressBar,uroven011,uroven11,uroven111);
    }

    private void TypeOfDive() {
        HorizontalLayout uroven012 = new HorizontalLayout();
        HorizontalLayout uroven12 = new HorizontalLayout();
        HorizontalLayout uroven121 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.60);
        progressBar.setWidth("200px");
        Image img12 = new Image("images/TypeOfDive.jpg","Failed to load image");
        img12.setHeight("350px");
        ComboBox<String> typeOfDive = new ComboBox<>("Select one option");
        typeOfDive.setItems("Lake", "Sea", "River");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven012.add(img12);
        uroven12.add(new Paragraph(new H2("Type of dive:")), typeOfDive);
        uroven121.add(previousButton, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (typeOfDive.getValue().length()>0){
            id.setTypeofdivedata(typeOfDive.getValue());
            remove(uroven12,uroven121,uroven012,progressBar);
            AirTemperature();}
            else {
                id.setTypeofdivedata("-");
                remove(uroven12,uroven121,uroven012,progressBar);
                AirTemperature();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven12,uroven121,uroven012,progressBar);
            WaterConditions();
        });
        add(progressBar,uroven012,uroven12,uroven121);
    }

    private void AirTemperature() {
        HorizontalLayout uroven013 = new HorizontalLayout();
        HorizontalLayout uroven13 = new HorizontalLayout();
        HorizontalLayout uroven131 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.65);
        progressBar.setWidth("200px");
        Image img13 = new Image("images/AirTemperature.jpg","Failed to load image");
        img13.setHeight("350px");
        TextField policko13 = new TextField("Enter temperature in °C");
        policko13.addKeyPressListener(Key.ENTER, e->{
            if (policko13.getValue().length()>0){
            remove(uroven13,uroven131,uroven013,progressBar);
            id.setAirtempdata(policko13.getValue());
            WaterTemperature();}
            else {
                remove(uroven13,uroven131,uroven013,progressBar);
                id.setAirtempdata("-");
                WaterTemperature();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven013.add(img13);
        uroven13.add(new Paragraph(new H2("Air temperature:")), policko13);
        uroven131.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko13.getValue().length()>0){
                remove(uroven13,uroven131,uroven013,progressBar);
                id.setAirtempdata(policko13.getValue());
                WaterTemperature();}
            else {
                remove(uroven13,uroven131,uroven013,progressBar);
                id.setAirtempdata("-");
                WaterTemperature();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven13,uroven131,uroven013,progressBar);
            TypeOfDive();
        });
        add(progressBar,uroven013,uroven13,uroven131);
    }

    private void WaterTemperature() {
        HorizontalLayout uroven014 = new HorizontalLayout();
        HorizontalLayout uroven14 = new HorizontalLayout();
        HorizontalLayout uroven141 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.70);
        progressBar.setWidth("200px");
        Image img14 = new Image("images/WaterTemperature.jpg","Failed to load image");
        img14.setHeight("350px");
        TextField policko14 = new TextField("Enter temperature in °C");
        policko14.addKeyPressListener(Key.ENTER, e->{
            if (policko14.getValue().length()>0){
            remove(uroven14,uroven141,uroven014,progressBar);
            id.setWatertempdata(policko14.getValue());
            WeightComfort();}
            else {
                remove(uroven14,uroven141,uroven014,progressBar);
                id.setWatertempdata("-");
                WeightComfort();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven014.add(img14);
        uroven14.add(new Paragraph(new H2("Water temperature:")), policko14);
        uroven141.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko14.getValue().length()>0){
                remove(uroven14,uroven141,uroven014,progressBar);
                id.setWatertempdata(policko14.getValue());
                WeightComfort();}
            else {
                remove(uroven14,uroven141,uroven014,progressBar);
                id.setWatertempdata("-");
                WeightComfort();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven14,uroven141,uroven014,progressBar);
            AirTemperature();
        });
        add(progressBar,uroven014,uroven14,uroven141);
    }

    private void WeightComfort() {
        HorizontalLayout uroven015 = new HorizontalLayout();
        HorizontalLayout uroven15 = new HorizontalLayout();
        HorizontalLayout uroven151 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.75);
        progressBar.setWidth("200px");
        Image img15 = new Image("images/WeightComfort.jpg","Failed to load image");
        img15.setHeight("350px");
        TextField policko14 = new TextField("Amount of weights in kg");
        ComboBox<String> comfort = new ComboBox<>("Select comfort level");
        comfort.setItems("Too heavy", "Good", "Too light");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven015.add(img15);
        uroven15.add(new Paragraph(new H2("Weight comfort:")), policko14, comfort);
        uroven151.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko14.getValue().length()>0 || comfort.getValue().length()>0){
            id.setWeightsdata(policko14.getValue());
            id.setWeightcomfortdata(comfort.getValue());
            remove(uroven15,uroven151,uroven015,progressBar);
            HeatComfort();}
            else {
                id.setWeightsdata("-");
                id.setWeightcomfortdata("-");
                remove(uroven15,uroven151,uroven015,progressBar);
                HeatComfort();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven15,uroven151,uroven015,progressBar);
            WaterTemperature();
        });
        add(progressBar,uroven015,uroven15,uroven151);
    }

    private void HeatComfort() {
        HorizontalLayout uroven016 = new HorizontalLayout();
        HorizontalLayout uroven16 = new HorizontalLayout();
        HorizontalLayout uroven161 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.80);
        progressBar.setWidth("200px");
        Image img16 = new Image("images/HeatComfort.jpg","Failed to load image");
        img16.setHeight("350px");
        ComboBox<String> thickness = new ComboBox<>("Select suit thickness");
        thickness.setItems("3 mm", "5 mm", "7 mm", "Drysuit");
        ComboBox<String> comfort = new ComboBox<>("Select comfort level");
        comfort.setItems("Too hot", "Good", "Too cold");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven016.add(img16);
        uroven16.add(new Paragraph(new H2("Heat comfort:")), thickness, comfort);
        uroven161.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (thickness.getValue().length()>0 || comfort.getValue().length()>0){
            id.setHeatdata(thickness.getValue());
            id.setHeatcomfortdata(comfort.getValue());
            remove(uroven16,uroven161,uroven016,progressBar);
            Notes();}
            else {
                id.setHeatdata(thickness.getValue());
                id.setHeatcomfortdata(comfort.getValue());
                remove(uroven16,uroven161,uroven016,progressBar);
                Notes();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven16,uroven161,uroven016,progressBar);
            WeightComfort();
        });
        add(progressBar,uroven016,uroven16,uroven161);
    }

    private void Notes() {
        HorizontalLayout uroven017 = new HorizontalLayout();
        HorizontalLayout uroven17 = new HorizontalLayout();
        HorizontalLayout uroven171 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.85);
        progressBar.setWidth("200px");
        Image img17 = new Image("images/Notes.jpg","Failed to load image");
        img17.setHeight("350px");
        TextArea policko17 = new TextArea("Max. 400 characters");
        policko17.addKeyPressListener(Key.ENTER, e ->{
            if (policko17.getValue().length()>0){
            remove(uroven017,uroven171,uroven17,progressBar);
            id.setNotesdata(policko17.getValue());
            Buddy();}
            else {
                remove(uroven017,uroven171,uroven17,progressBar);
                id.setNotesdata("-");
                Buddy();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven017.add(img17);
        uroven17.add(new Paragraph(new H2("Notes:")),policko17);
        uroven171.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko17.getValue().length()>0){
                remove(uroven017,uroven171,uroven17,progressBar);
                id.setNotesdata(policko17.getValue());
                Buddy();}
            else {
                remove(uroven017,uroven171,uroven17,progressBar);
                id.setNotesdata("-");
                Buddy();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven17,uroven171,uroven017,progressBar);
            HeatComfort();
        });
        add(progressBar,uroven017,uroven17,uroven171);
    }

    private void Buddy() {
        HorizontalLayout uroven018 = new HorizontalLayout();
        HorizontalLayout uroven18 = new HorizontalLayout();
        HorizontalLayout uroven181 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.90);
        progressBar.setWidth("200px");
        Image img18 = new Image("images/Buddy.jpg","Failed to load image");
        img18.setHeight("350px");
        TextField policko18 = new TextField("Name");
        policko18.addKeyPressListener(Key.ENTER, e->{
            if (policko18.getValue().length()>0){
            remove(uroven18,uroven181,uroven018,progressBar);
            id.setBuddydata(policko18.getValue());
            Edu();}
            else {
                remove(uroven18,uroven181,uroven018,progressBar);
                id.setBuddydata("-");
                Edu();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven018.add(img18);
        uroven18.add(new Paragraph(new H2("Dive buddy:")),policko18);
        uroven181.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko18.getValue().length()>0){
                remove(uroven18,uroven181,uroven018,progressBar);
                id.setBuddydata(policko18.getValue());
                Edu();}
            else {
                remove(uroven18,uroven181,uroven018,progressBar);
                id.setBuddydata("-");
                Edu();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven18,uroven181,uroven018,progressBar);
            Notes();
        });
        add(progressBar,uroven018,uroven18,uroven181);
    }

    private void Edu() {
        HorizontalLayout uroven019 = new HorizontalLayout();
        HorizontalLayout uroven19 = new HorizontalLayout();
        HorizontalLayout uroven191 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.95);
        progressBar.setWidth("200px");
        Image img19 = new Image("images/Edu.jpg","Failed to load image");
        img19.setHeight("350px");
        Button previousButton = new Button("Previous");
        Button yesButton = new Button("Yes");
        Button noButton = new Button("No");
        uroven019.add(img19);
        uroven19.add(new Paragraph(new H2("Was this educational dive?")));
        uroven191.add(previousButton,yesButton,noButton);
        yesButton.addClickListener(buttonClickEvent -> {
            id.setEdudata("Yes");
            remove(uroven019,uroven191,uroven19,progressBar);
            Instructor();
        });
        noButton.addClickListener(buttonClickEvent -> {
            remove(uroven19,uroven191,uroven019,progressBar);
            id.setEdudata("No");
            Feeling();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven19,uroven191,uroven019,progressBar);
            Buddy();
        });
        add(progressBar,uroven019,uroven19,uroven191);
    }

    private void Feeling() {
        HorizontalLayout uroven0020 = new HorizontalLayout();
        HorizontalLayout uroven020 = new HorizontalLayout();
        HorizontalLayout uroven20 = new HorizontalLayout();
        HorizontalLayout uroven201 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(1.00);
        progressBar.setWidth("200px");
        Image img20 = new Image("images/Feeling.jpg","Failed to load image");
        img20.setHeight("350px");
        Button previousButton = new Button("Previous");
        Button saveButton = new Button("Save");
        Button goodButton = new Button("Good");
        Button okButton = new Button("Ok");
        Button badButton = new Button("Bad");
        uroven0020.add(img20);
        uroven020.add(new Paragraph(new H2("How did you feel during this dive?")));
        uroven20.add(goodButton,okButton,badButton);
        uroven201.add(previousButton,saveButton);
        goodButton.addClickListener(buttonClickEvent -> {
            id.setFeelingdata("Good");
        });
        okButton.addClickListener(buttonClickEvent -> {
            id.setFeelingdata("Ok");
        });
        badButton.addClickListener(buttonClickEvent -> {
            id.setFeelingdata("Bad");
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven0020,uroven20,uroven201,uroven020,progressBar);
            Edu();
        });
        saveButton.addClickListener(buttonClickEvent -> {
            if (id.getFeelingdata()==null) {
                id.setFeelingdata("-");
                // js.setData();
                // js.getData();
                //prejit na logbookView
            }
            else {
                id.setInstructordata("-");
                id.setDiveclubdata("-");
                js.setData();
                //  js.getData();
                //prejit na logbookView
            }
        });
        add(progressBar,uroven0020,uroven020,uroven20,uroven201);
    }

    private void Instructor() {
        HorizontalLayout uroven021 = new HorizontalLayout();
        HorizontalLayout uroven21s = new HorizontalLayout();
        HorizontalLayout uroven211 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.909);
        progressBar.setWidth("200px");
        Image img21 = new Image("images/Buddy.jpg","Failed to load image");
        img21.setHeight("350px");
        TextField policko21 = new TextField("Name");
        policko21.addKeyPressListener(Key.ENTER,e->{
            if (policko21.getValue().length()>0){
            remove(uroven21s,uroven021,uroven211,progressBar);
            id.setInstructordata(policko21.getValue());
            DiveClub();}
            else {
                remove(uroven21s,uroven021,uroven211,progressBar);
                id.setInstructordata("-");
                DiveClub();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven021.add(img21);
        uroven21s.add(new Paragraph(new H2("Dive instructor:")),policko21);
        uroven211.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko21.getValue().length()>0){
                remove(uroven21s,uroven021,uroven211,progressBar);
                id.setInstructordata(policko21.getValue());
                DiveClub();}
            else {
                remove(uroven21s,uroven021,uroven211,progressBar);
                id.setInstructordata("-");
                DiveClub();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven021,uroven21s,uroven211,progressBar);
            Edu();
        });
        add(progressBar,uroven021,uroven21s,uroven211);
    }

    private void DiveClub() {
        HorizontalLayout uroven022 = new HorizontalLayout();
        HorizontalLayout uroven22 = new HorizontalLayout();
        HorizontalLayout uroven221 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(0.9545);
        progressBar.setWidth("200px");
        Image img22 = new Image("images/DiveClub.jpg","Failed to load image");
        img22.setHeight("350px");
        TextField policko22 = new TextField("Name");
        policko22.addKeyPressListener(Key.ENTER,e->{
            if (policko22.getValue().length()>0){
            remove(uroven022,uroven22,uroven221,progressBar);
            id.setDiveclubdata(policko22.getValue());
            FeelingEnd();}
            else {
                remove(uroven022,uroven22,uroven221,progressBar);
                id.setDiveclubdata("-");
                FeelingEnd();
            }
        });
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven022.add(img22);
        uroven22.add(new Paragraph(new H2("Dive club:")),policko22);
        uroven221.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            if (policko22.getValue().length()>0){
                remove(uroven022,uroven22,uroven221,progressBar);
                id.setDiveclubdata(policko22.getValue());
                FeelingEnd();}
            else {
                remove(uroven022,uroven22,uroven221,progressBar);
                id.setDiveclubdata("-");
                FeelingEnd();
            }
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven022,uroven22,uroven221,progressBar);
            Instructor();
        });
        add(progressBar,uroven022,uroven22,uroven221);
    }

    private void FeelingEnd() {
        HorizontalLayout uroven0023 = new HorizontalLayout();
        HorizontalLayout uroven023 = new HorizontalLayout();
        HorizontalLayout uroven23 = new HorizontalLayout();
        HorizontalLayout uroven231 = new HorizontalLayout();
        ProgressBar progressBar = new ProgressBar();
        progressBar.setValue(1.00);
        progressBar.setWidth("200px");
        Image img23 = new Image("images/Feeling.jpg","Failed to load image");
        img23.setHeight("350px");
        Button previousButton = new Button("Previous");
        Button saveButton = new Button("Save");
        Button goodButton = new Button("Good");
        Button okButton = new Button("Ok");
        Button badButton = new Button("Bad");
        uroven0023.add(img23);
        uroven023.add(new Paragraph(new H2("How did you feel during this dive?")));
        uroven23.add(goodButton,okButton,badButton);
        uroven231.add(previousButton,saveButton);
        goodButton.addClickListener(buttonClickEvent -> {
            id.setFeelingdata("Good");
        });
        okButton.addClickListener(buttonClickEvent -> {
            id.setFeelingdata("Ok");
        });
        badButton.addClickListener(buttonClickEvent -> {
            id.setFeelingdata("Bad");
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven23,uroven231,uroven023,progressBar,uroven0023);
            DiveClub();
        });
        saveButton.addClickListener(buttonClickEvent -> {
            if (id.getFeelingdata()==null) {
                id.setFeelingdata("-");
                js.setData();
                //js.getData();
                //prejit na logbookView
            }
            else {
                js.setData();
                //js.getData();
            }


        });
        add(progressBar,uroven0023,uroven023,uroven23,uroven231);
    }
}
