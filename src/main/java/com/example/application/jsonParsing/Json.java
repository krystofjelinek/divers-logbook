package com.example.application.jsonParsing;

import com.example.application.backend.ReadWriteUtilityForFile;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class Json {
    ReadWriteUtilityForFile.logdata id = new ReadWriteUtilityForFile.logdata();
    File file = new File("divedata.json");
    FileWriter fileWriter = new FileWriter(file, StandardCharsets.UTF_8);

    public Json() throws IOException {
    }

    public void setData(){
        JSONObject dive = new JSONObject();
        dive.put("divesite",id.getDivesitedata());
        dive.put("location",id.getLocationdata());
        dive.put("dateofdive",id.getDateofdivedata());
        dive.put("starttime",id.getStarttimedata());
        dive.put("bottomtime",id.getBottomtimedata());
        dive.put("endtime",id.getEndtimedata());
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

        try (FileWriter file = new FileWriter("divedata.json")) {
            file.write(diveObject.toJSONString());
            file.flush();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void getData() throws IOException, ParseException {
        JSONParser jsonParser = new JSONParser();
        FileReader fileReader = new FileReader("divedata.json");

        Object obj = jsonParser.parse(fileReader);
        JSONObject jsonObject = (JSONObject) obj;

        String divesite = (String) jsonObject.get("divesite");
    }
}
