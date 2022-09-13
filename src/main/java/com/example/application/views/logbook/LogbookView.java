package com.example.application.views.logbook;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileReader;
import java.io.IOException;

@StyleSheet("/themes/divers-logbook/styles.css")
@PageTitle("Logbook")
@Route(value = "", layout = MainLayout.class)
public class LogbookView extends VerticalLayout {

    public LogbookView() throws IOException, ParseException, java.text.ParseException {
        addClassName("list-view");
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");

        FileReader fileReader = new FileReader("/Users/krystofjelinek/IdeaProjects/divers-logbook/divedata.json");

        JSONParser jsonParser = new JSONParser();

        Object obj = jsonParser.parse(fileReader);
        JSONArray diveList = (JSONArray) obj;

        for (int i = 0; i < diveList.size(); i++) {
            JSONObject jsonObject = (JSONObject) diveList.get(i);

            String divesite = (String) jsonObject.get("divesite");
            String location = (String) jsonObject.get("location");
            String dateofdive = (String) jsonObject.get("dateofdive");
            String starttime = (String) jsonObject.get("starttime");
            String bottomtime = (String) jsonObject.get("bottomtime");
            String endtime = (String) jsonObject.get("endtime");
            String maxdepth = (String) jsonObject.get("maxdepth");
            String avgdepth = (String) jsonObject.get("avgdepth");
            String tankin = (String) jsonObject.get("tankin");
            String tankout = (String) jsonObject.get("tankout");
            String watercond = (String) jsonObject.get("watercond");
            String typeofdive = (String) jsonObject.get("typeofdive");
            String airtemp = (String) jsonObject.get("airtemp");
            String watertemp = (String) jsonObject.get("watertemp");
            String weights = (String) jsonObject.get("weights");
            String weightscomf = (String) jsonObject.get("weightscomf");
            String heat = (String) jsonObject.get("heat");
            String heatcomf = (String) jsonObject.get("heatcomf");
            String notes = (String) jsonObject.get("notes");
            String buddy = (String) jsonObject.get("buddy");
            String edu = (String) jsonObject.get("edu");
            String diveclub = (String) jsonObject.get("diveclub");
            String instructor = (String) jsonObject.get("instructor");
            String feeling = (String) jsonObject.get("feeling");

            HorizontalLayout uroven = new HorizontalLayout();
            uroven.add(new H2(dateofdive));
            HorizontalLayout nizsiUroven1 = new HorizontalLayout();
            nizsiUroven1.add(new Text("Depth: " + maxdepth + " m"));
            nizsiUroven1.add(new Text(" Dive time: " + bottomtime));
            HorizontalLayout nizsiUroven2 = new HorizontalLayout();
            nizsiUroven2.add(new Text("Edu: " + edu));
            nizsiUroven2.add(new Text(" Location: " + location));
            nizsiUroven2.addClassName("text");
            add(uroven,nizsiUroven1,nizsiUroven2);
        }
    }
}

