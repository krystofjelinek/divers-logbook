package com.example.application.views.addanewlog;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.timepicker.TimePicker;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;


/*Binder<String> binder = new Bbbinder<Sefetring>(AddanewlogView.class);
       binder.forField(policko)
       .withValidator(min -> min.length() > 1, "Invalid value");
*/
@PageTitle("Add a new dive")
@Route(value = "add", layout = MainLayout.class)
public class AddanewlogView extends VerticalLayout {


    public AddanewlogView() {
        setSpacing(false);
        setMargin(false);
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");
        DiveSite();

    }

    /**
     * Dodělat transparent button pro DiveSite
     * Stylizovat next button
     * Ochránit vstupy
     */

    public void DiveSite() {
        HorizontalLayout uroven01 = new HorizontalLayout();
        HorizontalLayout uroven1 = new HorizontalLayout();
        HorizontalLayout uroven11 = new HorizontalLayout();
        Image img1 = new Image("images/DiveSite.jpg","Failed to load image");
        img1.setHeight("350px");
        TextField policko1 = new TextField("e. g. Miami diving centre");
        Button nextButton = new Button("Next");
        uroven01.add(img1);
        uroven1.add(new Paragraph(new H2("Dive site:")), policko1);
        uroven11.add(nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = policko.getValue();
            remove(uroven01,uroven1,uroven11);
            Location();
        });
        add(uroven01,uroven1,uroven11);
    }

    public void Location() {
        HorizontalLayout uroven02 = new HorizontalLayout();
        HorizontalLayout uroven2 = new HorizontalLayout();
        HorizontalLayout uroven21 = new HorizontalLayout();
        Image img2 = new Image("images/Location.jpg","Failed to load image");
        img2.setHeight("350px");
        TextField policko2 = new TextField("e. g. Liberec/Czechia");
        Button previousButton = new Button("Previous");
        Button nextButton = new Button("Next");
        uroven2.add(new Paragraph(new H2("Location:")), policko2);
        uroven21.add(previousButton,nextButton);
        uroven02.add(img2);
        nextButton.addClickListener(buttonClickEvent -> {
          // ReadWriteUtilityForFile.setdivesitedata = policko2.getValue();
            remove(uroven2,uroven21,uroven02);
            DateOfDive();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven2,uroven21,uroven02);
            DiveSite();
        });
        add(uroven02,uroven2,uroven21);
    }

    public void DateOfDive(){
        HorizontalLayout uroven03 = new HorizontalLayout();
        HorizontalLayout uroven3 = new HorizontalLayout();
        HorizontalLayout uroven31 = new HorizontalLayout();
        Image img3 = new Image("images/DateOfDive.jpg", "Failed to load image");
        img3.setHeight("350px");
        DatePicker date = new DatePicker("Select date");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven03.add(img3);
        uroven3.add(new Paragraph(new H2("Date of dive:")), date);
        uroven31.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = date.getValue();
            remove(uroven03,uroven3,uroven31);
            StartTime();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven03,uroven3,uroven31);
            Location();
        });
        add(uroven03,uroven3,uroven31);

    }

    public void StartTime(){
        HorizontalLayout uroven04 = new HorizontalLayout();
        HorizontalLayout uroven4 = new HorizontalLayout();
        HorizontalLayout uroven41 = new HorizontalLayout();
        Image img4 = new Image("images/StartTime.jpg","Failed to load image");
        img4.setHeight("350px");
        TimePicker startTime = new TimePicker("Select start time");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven04.add(img4);
        uroven4.add(new Paragraph(new H2("Start time:")), startTime);
        uroven41.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven4,uroven41,uroven04);
            BottomTime();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven4,uroven41,uroven04);
            DateOfDive();
        });
        add(uroven04,uroven4,uroven41);
    }

    public void BottomTime(){
        HorizontalLayout uroven05 = new HorizontalLayout();
        HorizontalLayout uroven5 = new HorizontalLayout();
        HorizontalLayout uroven51 = new HorizontalLayout();
        Image img5 = new Image("images/BottomTime.jpg","Failed to load image");
        img5.setHeight("350px");
        TimePicker bottomTime = new TimePicker("Select bottom time");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven05.add(img5);
        uroven5.add(new Paragraph(new H2("Bottom time:")), bottomTime);
        uroven51.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven5,uroven51,uroven05);
            EndTime();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven5,uroven51,uroven05);
            StartTime();
        });
        add(uroven05,uroven5,uroven51);
    }

    public void EndTime(){
        HorizontalLayout uroven06 = new HorizontalLayout();
        HorizontalLayout uroven6 = new HorizontalLayout();
        HorizontalLayout uroven61 = new HorizontalLayout();
        Image img6 = new Image("images/EndTime.jpg","Failed to load image");
        img6.setHeight("350px");
        TimePicker endTime = new TimePicker("Select end time");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven06.add(img6);
        uroven6.add(new Paragraph(new H2("End time:")), endTime);
        uroven61.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven6,uroven61,uroven06);
            MaximumDepth();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven6,uroven61,uroven06);
            BottomTime();
        });
        add(uroven06,uroven6,uroven61);
    }

    public void MaximumDepth(){
        HorizontalLayout uroven07 = new HorizontalLayout();
        HorizontalLayout uroven7 = new HorizontalLayout();
        HorizontalLayout uroven71 = new HorizontalLayout();
        Image img7 = new Image("images/MaxDepth.jpg","Failed to load image");
        img7.setHeight("350px");
        NumberField policko7 = new NumberField("Depth in meters");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven07.add(img7);
        uroven7.add(new Paragraph(new H2("Maximum depth:")), policko7);
        uroven71.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven7,uroven71,uroven07);
            AverageDepth();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven7,uroven71,uroven07);
            EndTime();
        });
        add(uroven07,uroven7,uroven71);
    }

    public void AverageDepth(){
        HorizontalLayout uroven08 = new HorizontalLayout();
        HorizontalLayout uroven8 = new HorizontalLayout();
        HorizontalLayout uroven81 = new HorizontalLayout();
        Image img8 = new Image("images/AvgDepth.jpg","Failed to load image");
        img8.setHeight("350px");
        NumberField policko8 = new NumberField("Depth in meters");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven08.add(img8);
        uroven8.add(new Paragraph(new H2("Average depth:")), policko8);
        uroven81.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven8,uroven81,uroven08);
            TankIn();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven8,uroven81,uroven08);
            MaximumDepth();
        });
        add(uroven08,uroven8,uroven81);
    }

    public void TankIn(){
        HorizontalLayout uroven09 = new HorizontalLayout();
        HorizontalLayout uroven9 = new HorizontalLayout();
        HorizontalLayout uroven91 = new HorizontalLayout();
        Image img9 = new Image("images/TankIn.jpg","Failed to load image");
        img9.setHeight("350px");
        NumberField policko9 = new NumberField("Pressure in BAR");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven09.add(img9);
        uroven9.add(new Paragraph(new H2("Tank pressure start:")), policko9);
        uroven91.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven9,uroven91,uroven09);
            TankOut();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven9,uroven91,uroven09);
            AverageDepth();
        });
        add(uroven09,uroven9,uroven91);
    }

    private void TankOut() {
        HorizontalLayout uroven010 = new HorizontalLayout();
        HorizontalLayout uroven10 = new HorizontalLayout();
        HorizontalLayout uroven101 = new HorizontalLayout();
        Image img10 = new Image("images/TankOut.jpg","Failed to load image");
        img10.setHeight("350px");
        NumberField policko10 = new NumberField("Pressure in BAR");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven010.add(img10);
        uroven10.add(new Paragraph(new H2("Tank pressure end:")), policko10);
        uroven101.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven10,uroven101,uroven010);
            WaterConditions();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven10,uroven101,uroven010);
            TankIn();
        });
        add(uroven010,uroven10,uroven101);
    }

     private void WaterConditions() {
        HorizontalLayout uroven011 = new HorizontalLayout();
        HorizontalLayout uroven11 = new HorizontalLayout();
        HorizontalLayout uroven111 = new HorizontalLayout();
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
            //class.setDivesite = startTime.getValue();
            remove(uroven11,uroven111,uroven011);
            TypeOfDive();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven11,uroven111,uroven011);
            TankOut();
        });
        add(uroven011,uroven11,uroven111);
    }

    private void TypeOfDive() {
        HorizontalLayout uroven012 = new HorizontalLayout();
        HorizontalLayout uroven12 = new HorizontalLayout();
        HorizontalLayout uroven121 = new HorizontalLayout();
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
            //class.setDivesite = startTime.getValue();
            remove(uroven12,uroven121,uroven012);
            AirTemperature();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven12,uroven121,uroven012);
            WaterConditions();
        });
        add(uroven012,uroven12,uroven121);
    }

    private void AirTemperature() {
        HorizontalLayout uroven13 = new HorizontalLayout();
        HorizontalLayout uroven131 = new HorizontalLayout();
        NumberField policko13 = new NumberField("Enter temperature in °C");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven13.add(new Paragraph(new H2("Air temperature:")), policko13);
        uroven131.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven13,uroven131);
            WaterTemperature();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven13,uroven131);
            TypeOfDive();
        });
        add(uroven13,uroven131);

    }

    private void WaterTemperature() {
        HorizontalLayout uroven14 = new HorizontalLayout();
        HorizontalLayout uroven141 = new HorizontalLayout();
        NumberField policko14 = new NumberField("Enter temperature in °C");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven14.add(new Paragraph(new H2("Water temperature:")), policko14);
        uroven141.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven14,uroven141);
            WeightComfort();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven14,uroven141);
            AirTemperature();
        });
        add(uroven14,uroven141);
    }

    private void WeightComfort() {
        HorizontalLayout uroven15 = new HorizontalLayout();
        HorizontalLayout uroven151 = new HorizontalLayout();
        NumberField policko14 = new NumberField("Amount of weights in kg");
        ComboBox<String> comfort = new ComboBox<>("Select comfort level");
        comfort.setItems("Too heavy", "Good", "Too light");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven15.add(new Paragraph(new H2("Weight comfort:")), policko14, comfort);
        uroven151.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven15,uroven151);
            HeatComfort();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven15,uroven151);
            WaterTemperature();
        });
        add(uroven15,uroven151);

    }

    private void HeatComfort() {
        HorizontalLayout uroven16 = new HorizontalLayout();
        HorizontalLayout uroven161 = new HorizontalLayout();
        ComboBox<String> thickness = new ComboBox<>("Select suit thickness");
        thickness.setItems("3 mm", "5 mm", "7 mm", "Drysuit");
        ComboBox<String> comfort = new ComboBox<>("Select comfort level");
        comfort.setItems("Too hot", "Good", "Too cold");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven16.add(new Paragraph(new H2("Heat comfort:")), thickness, comfort);
        uroven161.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven16,uroven161);
            Notes();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven16,uroven161);
            WeightComfort();
        });
        add(uroven16,uroven161);
    }

    private void Notes() {
    }

}
