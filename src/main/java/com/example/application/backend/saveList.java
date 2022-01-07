package com.example.application.backend;

import java.util.ArrayList;
import java.util.List;

public class saveList {
        ReadWriteUtilityForFile.logdata id = new ReadWriteUtilityForFile.logdata();
    public static List<ReadWriteUtilityForFile.logdata> list = new ArrayList<>();
public void saveList(){
  this.list = new ArrayList<>();
}

    public void setList(){
        list.add(list.size(), new ReadWriteUtilityForFile.logdata(id.getDivesitedata(), id.getLocationdata(), id.getDateofdivedata(), id.getStarttimedata(),
                        id.getBottomtimedata(), id.getEndtimedata(), id.getMaxdepthdata(), id.getAvgdepthdata(), id.getTankindata(), id.getTankoutdata(), id.getWaterconditionsdata(),
                        id.getTypeofdivedata(), id.getAirtempdata(), id.getWatertempdata(), id.getWeightsdata(), id.getWeightcomfortdata(),
                        id.getHeatdata(), id.getHeatcomfortdata(), id.getNotesdata(), id.getBuddydata(), id.getEdudata(), id.getDiveclubdata(),
                        id.getInstructordata(), id.getFeelingdata()));
    }

    public List getList(){
        return list;
    }

}


