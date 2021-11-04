package com.example.application.views.addanewlog;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
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
     */

    public void DiveSite() {
        HorizontalLayout uroven1 = new HorizontalLayout();
        HorizontalLayout uroven11 = new HorizontalLayout();
        TextField policko1 = new TextField("e. g. Miami diving centre");
        Button nextButton = new Button("Next");
        uroven1.add(new Paragraph(new H2("Dive site:")), policko1);
        uroven11.add(nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = policko.getValue();
            remove(uroven1,uroven11);
            Location();
        });
        add(uroven1,uroven11);
    }

    public void Location() {
        HorizontalLayout uroven2 = new HorizontalLayout();
        TextField policko2 = new TextField("e. g. Liberec/Czechia");
        HorizontalLayout uroven21 = new HorizontalLayout();
        Button previousButton = new Button("Previous");
        Button nextButton = new Button("Next");
        uroven2.add(new Paragraph(new H2("Location:")), policko2);
        uroven21.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
          // ReadWriteUtilityForFile.setdivesitedata = policko2.getValue();
            remove(uroven2,uroven21);
            DateOfDive();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven2,uroven21);
            DiveSite();
        });
        add(uroven2,uroven21);
    }

    public void DateOfDive(){
        HorizontalLayout uroven3 = new HorizontalLayout();
        HorizontalLayout uroven31 = new HorizontalLayout();
        DatePicker date = new DatePicker("Select date");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven3.add(new Paragraph(new H2("Date of dive:")), date);
        uroven31.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = date.getValue();
            remove(uroven3,uroven31);
            StartTime();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven3,uroven31);
            Location();
        });
        add(uroven3,uroven31);

    }

    public void StartTime(){
        HorizontalLayout uroven4 = new HorizontalLayout();
        HorizontalLayout uroven41 = new HorizontalLayout();
        TimePicker startTime = new TimePicker("Select start time");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven4.add(new Paragraph(new H2("Start time:")), startTime);
        uroven41.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven4,uroven41);
            BottomTime();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven4,uroven41);
            DateOfDive();
        });
        add(uroven4,uroven41);
    }

    public void BottomTime(){
        HorizontalLayout uroven5 = new HorizontalLayout();
        HorizontalLayout uroven51 = new HorizontalLayout();
        TimePicker bottomTime = new TimePicker("Select bottom time");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven5.add(new Paragraph(new H2("Bottom time:")), bottomTime);
        uroven51.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven5,uroven51);
            EndTime();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven5,uroven51);
            StartTime();
        });
        add(uroven5,uroven51);
    }

    public void EndTime(){
        HorizontalLayout uroven6 = new HorizontalLayout();
        HorizontalLayout uroven61 = new HorizontalLayout();
        TimePicker endTime = new TimePicker("Select end time");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven6.add(new Paragraph(new H2("End time:")), endTime);
        uroven61.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven6,uroven61);
            MaximumDepth();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven6,uroven61);
            BottomTime();
        });
        add(uroven6,uroven61);
    }

    public void MaximumDepth(){
        HorizontalLayout uroven7 = new HorizontalLayout();
        HorizontalLayout uroven71 = new HorizontalLayout();
        TextField policko7 = new TextField("Depth in meters");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven7.add(new Paragraph(new H2("Maximum depth:")), policko7);
        uroven71.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven7,uroven71);
            AverageDepth();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven7,uroven71);
            EndTime();
        });
        add(uroven7,uroven71);
    }

    public void AverageDepth(){
        HorizontalLayout uroven8 = new HorizontalLayout();
        HorizontalLayout uroven81 = new HorizontalLayout();
        TextField policko8 = new TextField("Depth in meters");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven8.add(new Paragraph(new H2("Average depth:")), policko8);
        uroven81.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven8,uroven81);
            TankIn();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven8,uroven81);
            MaximumDepth();
        });
        add(uroven8,uroven81);
    }

    public void TankIn(){
        HorizontalLayout uroven9 = new HorizontalLayout();
        HorizontalLayout uroven91 = new HorizontalLayout();
        TextField policko9 = new TextField("Pressure in BAR");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven9.add(new Paragraph(new H2("Tank pressure start:")), policko9);
        uroven91.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven9,uroven91);
            TankOut();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven9,uroven91);
            AverageDepth();
        });
        add(uroven9,uroven91);
    }

    private void TankOut() {
        HorizontalLayout uroven10 = new HorizontalLayout();
        HorizontalLayout uroven101 = new HorizontalLayout();
        TextField policko10 = new TextField("Pressure in BAR");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven10.add(new Paragraph(new H2("Tank pressure end:")), policko10);
        uroven101.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven10,uroven101);
            WaterConditions();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven10,uroven101);
            TankIn();
        });
        add(uroven10,uroven101);
    }

     private void WaterConditions() {
        HorizontalLayout uroven11 = new HorizontalLayout();
        HorizontalLayout uroven111 = new HorizontalLayout();
        ComboBox<String> waterConditions = new ComboBox<>();
        waterConditions.setItems("Waves", "Current","None");
        waterConditions.setLabel("Select one option");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven11.add(new Paragraph(new H2("Water conditions:")), waterConditions);
        uroven111.add(previousButton,nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven11,uroven111);
            TypeOfDive();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven11,uroven111);
            TankOut();
        });
        add(uroven11,uroven111);
    }

    private void TypeOfDive() {
        HorizontalLayout uroven12 = new HorizontalLayout();
        HorizontalLayout uroven121 = new HorizontalLayout();
        ComboBox<String> typeOfDive = new ComboBox<>("Select one option");
        typeOfDive.setItems("Lake", "Sea", "River");
        Button nextButton = new Button("Next");
        Button previousButton = new Button("Previous");
        uroven12.add(new Paragraph(new H2("Type of dive:")), typeOfDive);
        uroven121.add(previousButton, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven12,uroven121);
            AirTemperature();
        });
        previousButton.addClickListener(buttonClickEvent -> {
            remove(uroven12,uroven121);
            WaterConditions();
        });
        add(uroven12,uroven121);
    }

    private void AirTemperature() {
        HorizontalLayout uroven13 = new HorizontalLayout();
        HorizontalLayout uroven131 = new HorizontalLayout();
        TextField policko13 = new TextField("Enter temperature in °C");
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
        TextField policko14 = new TextField("Enter temperature in °C");
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
        TextField policko14 = new TextField();
        policko14.setLabel("Amount of weights in kg");
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
