package com.example.application.jsonParsing;

import com.example.application.backend.Dive;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.FileReader;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

public class Json {
    public static List<ArrayList<String>> outerList = new ArrayList<>();
    Dive id = new Dive();
    public static JSONArray seznam = new JSONArray();


    public JSONObject setData(){
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
        dive.put("diveclub",id.getDiveclubdata());
        dive.put("instructor",id.getInstructordata());
        dive.put("feeling",id.getFeelingdata());

       return dive;

        /*JSONObject diveObject = new JSONObject();
        diveObject.put("dive",dive);*/
       /* seznam.add(dive); //(diveObject)
        try (FileWriter file = new FileWriter("/Users/krystofjelinek/IdeaProjects/divers-logbook/divedata.json")) {
            file.write(seznam.toJSONString());
            file.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }*/
    }

    public List<ArrayList<String>> getData() throws IOException, ParseException, org.json.simple.parser.ParseException {
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

            //new ReadwriteUitiltiyForFile.logdata(---)

            ArrayList<String> list = new ArrayList<String>();
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

            outerList.add(list);

        }
        return outerList;
    }

   /* private static void parseDiveObject(JSONObject dive){
        ArrayList<String> list = new ArrayList<String>();
        JSONObject diveObject = (JSONObject) dive.get("dive");

        String divesite = (String) diveObject.get("divesite");
        String location = (String) diveObject.get("location");
        String dateofdive = (String) diveObject.get("dateofdive");
        String starttime = (String) diveObject.get("starttime");
        String bottomtime = (String) diveObject.get("bottomtime");
        String endtime = (String) diveObject.get("endtime");
        String maxdepth = (String) diveObject.get("maxdepth");
        String avgdepth = (String) diveObject.get("avgdepth");
        String tankin = (String) diveObject.get("tankin");
        String tankout = (String) diveObject.get("tankout");
        String watercond = (String) diveObject.get("watercond");
        String typeofdive = (String) diveObject.get("typeofdive");
        String airtemp = (String) diveObject.get("airtemp");
        String watertemp = (String) diveObject.get("watertemp");
        String weights = (String) diveObject.get("weights");
        String weightscomf = (String) diveObject.get("weightscomf");
        String heat = (String) diveObject.get("heat");
        String heatcomf = (String) diveObject.get("heatcomf");
        String notes = (String) diveObject.get("notes");
        String buddy = (String) diveObject.get("buddy");
        String edu = (String) diveObject.get("edu");
        String diveclub = (String) diveObject.get("diveclub");
        String instructor = (String) diveObject.get("instructor");
        String feeling = (String) diveObject.get("feeling");

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

        outerList.add(list);
    }*/
}
