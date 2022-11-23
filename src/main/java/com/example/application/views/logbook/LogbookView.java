package com.example.application.views.logbook;

import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.io.IOException;
import java.text.ParseException;

@StyleSheet("/themes/divers-logbook/styles.css")
@PageTitle("Logbook")
@Route(value = "" /*,layout = MainLayout.class*/)
public class LogbookView extends VerticalLayout {

    public LogbookView() throws IOException, ParseException, java.text.ParseException {
        addClassName("list-view");
        setSizeFull();
        setJustifyContentMode(JustifyContentMode.CENTER);
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("text-align", "center");

        /*FileReader fileReader = new FileReader("/Users/krystofjelinek/IdeaProjects/divers-logbook/divedata.json");

        JSONParser jsonParser = new JSONParser();

        Object obj = jsonParser.parse(fileReader);
        JSONArray diveList = (JSONArray) obj;

        for ( int i = 0; i < diveList.size(); i++){
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
            Span hloubka = new Span("Depth: " + maxdepth + " m");
            hloubka.addClassName("text");
            Span cas = new Span("Dive time: " + bottomtime);
            cas.addClassName("text");
            nizsiUroven1.add(hloubka,cas);

            HorizontalLayout nizsiUroven2 = new HorizontalLayout();
            Span vzd = new Span("Edu: " + edu);
            vzd.addClassName("text");
            Span lokace = new Span("Location: " + location);
            lokace.addClassName("text");
            nizsiUroven2.add(vzd, lokace);

            HorizontalLayout nizsiUroven3 = new HorizontalLayout();
            Button otevrit = new Button("Open",new Icon(VaadinIcon.EXPAND_SQUARE));
            //stylizovat hover u buttonu
            otevrit.addClickListener(buttonClickEvent -> {
                //vyskoci pop-up se vsemi informacemi
            });
            Button smazat = new Button("Delete", new Icon(VaadinIcon.TRASH));
            smazat.addClassName("delete-button");
            //stylizovat hover
            smazat.addClickListener(buttonClickEvent -> {
                //vyskoci pop-up jestli chceme opravdu smazat
            });
            nizsiUroven3.add(otevrit,smazat);
                */


}

}
