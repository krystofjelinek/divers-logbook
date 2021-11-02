package com.example.application.views.addanewlog;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.timepicker.TimePicker;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;


 /*Binder<String> binder = new Binder<String>(AddanewlogView.class);
        binder.forField(policko)
        .withValidator(min -> min.length() > 1, "Invalid value");
*/
@PageTitle("Add a new dive")
@Route(value = "add", layout = MainLayout.class)
public class AddanewlogView extends VerticalLayout {


    public AddanewlogView() {
        setSpacing(false);
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");
        DiveSite();
    }
/**
* Entry point of DiveSite
 */

    public void DiveSite() {
        HorizontalLayout uroven1 = new HorizontalLayout();
        TextField policko = new TextField();
        Button nextButton = new Button("Next");
        uroven1.add(new H3("Dive site:"), policko, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = policko.getValue();
            remove(uroven1);
            Location();
        });
        add(uroven1);
    }

    public void Location() {
        HorizontalLayout uroven2 = new HorizontalLayout();
        TextField policko2 = new TextField();
        HorizontalLayout uroven21 = new HorizontalLayout();
        Button previousButton = new Button("Previous");
        Button nextButton = new Button("Next");
        uroven2.add(new H2("Location:"), policko2);
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
        DatePicker date = new DatePicker();
        Button nextButton = new Button("Next");
        uroven3.add(new H3("Date of dive:"), date, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = date.getValue();
            remove(uroven3);
            StartTime();
        });
        add(uroven3);

    }

    public void StartTime(){
        HorizontalLayout uroven4 = new HorizontalLayout();
        TimePicker startTime = new TimePicker();
        Button nextButton = new Button("Next");
        uroven4.add(new H3("Start time:"), startTime, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven4);
            BottomTime();
        });
        add(uroven4);
    }

    public void BottomTime(){
        HorizontalLayout uroven5 = new HorizontalLayout();
        TimePicker bottomTime = new TimePicker();
        Button nextButton = new Button("Next");
        uroven5.add(new H3("Bottom time:"), bottomTime, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven5);
            EndTime();
        });
        add(uroven5);
    }

    public void EndTime(){
        HorizontalLayout uroven6 = new HorizontalLayout();
        TimePicker endTime = new TimePicker();
        Button nextButton = new Button("Next");
        uroven6.add(new H3("End time:"), endTime, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven6);
            MaximumDepth();
        });
        add(uroven6);
    }

    public void MaximumDepth(){
        HorizontalLayout uroven7 = new HorizontalLayout();
        TextField policko7 = new TextField();
        Button nextButton = new Button("Next");
        uroven7.add(new H3("Max depth:"), policko7, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven7);
            AverageDepth();
        });
        add(uroven7);
    }

    public void AverageDepth(){
        HorizontalLayout uroven8 = new HorizontalLayout();
        TextField policko8 = new TextField();
        Button nextButton = new Button("Next");
        uroven8.add(new H3("Avg depth:"), policko8, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven8);
            TankIn();
        });
        add(uroven8);
    }

    public void TankIn(){
        HorizontalLayout uroven9 = new HorizontalLayout();
        TextField policko9 = new TextField();
        Button nextButton = new Button("Next");
        uroven9.add(new H3("Tank pressure IN:"), policko9, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven9);
            TankOut();
        });
        add(uroven9);
    }

    private void TankOut() {
        HorizontalLayout uroven10 = new HorizontalLayout();
        TextField policko10 = new TextField();
        Button nextButton = new Button("Next");
        uroven10.add(new H3("Tank pressure OUT:"), policko10, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven10);
            WaterConditions();
        });
        add(uroven10);
    }

    private void WaterConditions() {
        HorizontalLayout uroven11 = new HorizontalLayout();
        ComboBox<String> waterConditions = new ComboBox<>();
        waterConditions.setItems("Waves", "Current");
        waterConditions.setLabel("Pick one option");
        Button nextButton = new Button("Next");
        uroven11.add(new H3("Water conditions:"), waterConditions, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven11);
            TypeOfDive();
        });
        add(uroven11);
    }

    private void TypeOfDive() {
        HorizontalLayout uroven12 = new HorizontalLayout();
        ComboBox<String> typeOfDive = new ComboBox<>();
        typeOfDive.setItems("Lake", "Sea", "River");
        typeOfDive.setLabel("Pick one option");
        Button nextButton = new Button("Next");
        uroven12.add(new H3("Type of dive:"), typeOfDive, nextButton);
        nextButton.addClickListener(buttonClickEvent -> {
            //class.setDivesite = startTime.getValue();
            remove(uroven12);
            AirTemperature();
        });
        add(uroven12);
    }

    private void AirTemperature() {

    }

}
