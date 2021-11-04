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
* Log input starts here
 */

    public void DiveSite() {
        HorizontalLayout uroven1 = new HorizontalLayout();
        TextField policko = new TextField("e. g. Miami diving centre");
        Button nextButton = new Button("Next");
        uroven1.add(new Paragraph(new H2("Dive site:")), policko, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = policko.getValue();
            remove(uroven1);
            Location();
        });
        add(uroven1);
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
        DatePicker date = new DatePicker("Select date");
        Button nextButton = new Button("Next");
        uroven3.add(new Paragraph(new H2("Date of dive:")), date, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = date.getValue();
            remove(uroven3);
            StartTime();
        });
        add(uroven3);

    }

    public void StartTime(){
        HorizontalLayout uroven4 = new HorizontalLayout();
        TimePicker startTime = new TimePicker("Select start time");
        Button nextButton = new Button("Next");
        uroven4.add(new Paragraph(new H2("Start time:")), startTime, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven4);
            BottomTime();
        });
        add(uroven4);
    }

    public void BottomTime(){
        HorizontalLayout uroven5 = new HorizontalLayout();
        TimePicker bottomTime = new TimePicker("Select bottom time");
        Button nextButton = new Button("Next");
        uroven5.add(new Paragraph(new H2("Bottom time:")), bottomTime, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven5);
            EndTime();
        });
        add(uroven5);
    }

    public void EndTime(){
        HorizontalLayout uroven6 = new HorizontalLayout();
        TimePicker endTime = new TimePicker("Select end time");
        Button nextButton = new Button("Next");
        uroven6.add(new Paragraph(new H2("End time:")), endTime, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven6);
            MaximumDepth();
        });
        add(uroven6);
    }

    public void MaximumDepth(){
        HorizontalLayout uroven7 = new HorizontalLayout();
        TextField policko7 = new TextField("Depth in meters");
        Button nextButton = new Button("Next");
        uroven7.add(new Paragraph(new H2("Max depth:")), policko7, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven7);
            AverageDepth();
        });
        add(uroven7);
    }

    public void AverageDepth(){
        HorizontalLayout uroven8 = new HorizontalLayout();
        TextField policko8 = new TextField("Depth in meters");
        Button nextButton = new Button("Next");
        uroven8.add(new Paragraph(new H2("Avg depth:")), policko8, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven8);
            TankIn();
        });
        add(uroven8);
    }
    /**
     * Po tuto část není dodělaný previous button
     */
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
        TextField policko13 = new TextField();
        policko13.setLabel("Enter temperature in °C");
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
        TextField policko14 = new TextField();
        policko14.setLabel("Enter temperature in °C");
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
        ComboBox<String> comfort = new ComboBox<>();
        comfort.setItems("Too heavy", "Good", "Too light");
        comfort.setLabel("Select comfort level");
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
