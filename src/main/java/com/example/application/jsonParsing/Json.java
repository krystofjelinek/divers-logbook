package com.example.application.jsonParsing;

import com.example.application.backend.ReadWriteUtilityForFile;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class Json {
    ReadWriteUtilityForFile.logdata id = new ReadWriteUtilityForFile.logdata();
    FileReader fileReader = new FileReader("/Users/krystofjelinek/IdeaProjects/divers-logbook/divedata.json");
    JSONArray seznam = new JSONArray();

    public Json() throws FileNotFoundException {
    }

    public void setData(){

        JSONObject dive = new JSONObject();
        dive.put("divesite",id.getDivesitedata());
        dive.put("location",id.getLocationdata());
        dive.put("dateofdive",id.getDateofdivedata().toString());
        dive.put("starttime",id.getStarttimedata().toString());
        dive.put("bottomtime",id.getBottomtimedata().toString());
        dive.put("endtime",id.getEndtimedata().toString());
        dive.put("maxdepth",id.getMaxdepthdata());
        dive.put("avgdepth",id.getAvgdepthdata());
        dive.put("tankin",id.getTankindata());
        dive.put("tankout",id.getTankoutdata());
        dive.put("watercond",id.getWaterconditionsdata());
        dive.put("typeofdive",id.getTypeofdivedata());
        dive.put("airtemp",id.getAirtempdata());
        dive.put("watertemp",id.getWatertempdata());
        dive.put("weights",id.getWeightsdata());
        dive.put("weightscomf",id.getWeightcomfortdata());
        dive.put("heat",id.getHeatdata());
        dive.put("heatcomf",id.getHeatcomfortdata());
        dive.put("notes",id.getNotesdata());
        dive.put("buddy",id.getBuddydata());
        dive.put("edu",id.getEdudata());
        dive.put("diveclub",id.getBuddydata());
        dive.put("instructor",id.getInstructordata());
        dive.put("feeling",id.getFeelingdata());

        JSONObject diveObject = new JSONObject();
        diveObject.put("dive",dive);

        seznam.add(diveObject);

        try (FileWriter file = new FileWriter("/Users/krystofjelinek/IdeaProjects/divers-logbook/divedata.json")) {
            file.write(seznam.toJSONString());
            file.flush();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public ArrayList getData() throws IOException, ParseException {
        ArrayList<String> list = new ArrayList<String>();

        JSONParser jsonParser = new JSONParser();


        Object obj = jsonParser.parse(fileReader);
        JSONObject jsonObject = (JSONObject) obj;

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

        list.add(divesite);
        list.add(location);
        list.add(dateofdive);
        list.add(starttime);
        list.add(bottomtime);
        list.add(endtime);
        list.add(maxdepth);
        list.add(avgdepth);
        list.add(tankin);
        list.add(tankout);
        list.add(watercond);
        list.add(typeofdive);
        list.add(airtemp);
        list.add(watertemp);
        list.add(weights);
        list.add(weightscomf);
        list.add(heat);
        list.add(heatcomf);
        list.add(notes);
        list.add(buddy);
        list.add(edu);
        list.add(diveclub);
        list.add(instructor);
        list.add(feeling);

        return list;
    }
}
