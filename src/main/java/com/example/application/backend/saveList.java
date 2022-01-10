package com.example.application.backend;

import com.example.application.jsonParsing.Json;
import org.json.simple.parser.ParseException;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class saveList {
    //ReadWriteUtilityForFile.logdata id = new ReadWriteUtilityForFile.logdata();
    public static List list = new ArrayList<>();

    Json js = new Json();

    public saveList() throws IOException {
    }


   /* public void setList(){
        list.add(list.size(), new ReadWriteUtilityForFile.logdata(id.getDivesitedata(), id.getLocationdata(), id.getDateofdivedata(), id.getStarttimedata(),
                        id.getBottomtimedata(), id.getEndtimedata(), id.getMaxdepthdata(), id.getAvgdepthdata(), id.getTankindata(), id.getTankoutdata(), id.getWaterconditionsdata(),
                        id.getTypeofdivedata(), id.getAirtempdata(), id.getWatertempdata(), id.getWeightsdata(), id.getWeightcomfortdata(),
                        id.getHeatdata(), id.getHeatcomfortdata(), id.getNotesdata(), id.getBuddydata(), id.getEdudata(), id.getDiveclubdata(),
                        id.getInstructordata(), id.getFeelingdata()));
    }
*/
    public void setList() throws IOException, ParseException {
        list = js.getData();
    }


    public List getList(){
        return list;
    }

}


