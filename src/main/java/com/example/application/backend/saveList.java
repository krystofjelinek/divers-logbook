package com.example.application.backend;

import java.util.ArrayList;
import java.util.List;

public class saveList {
        ReadWriteUtilityForFile.logdata id = new ReadWriteUtilityForFile.logdata();
        private static ArrayList<List<ReadWriteUtilityForFile.logdata>> list = new ArrayList<>();




    public void setList(){
        List<ReadWriteUtilityForFile.logdata> logdataList = new ArrayList<>();

        logdataList.add(new ReadWriteUtilityForFile.logdata(id.getDivesitedata(), id.getLocationdata(), id.getDateofdivedata(), id.getStarttimedata(),
                id.getBottomtimedata(), id.getEndtimedata(), id.getMaxdepthdata(), id.getAvgdepthdata(), id.getTankindata(), id.getTankoutdata(), id.getWaterconditionsdata(),
                id.getTypeofdivedata(), id.getAirtempdata(), id.getWatertempdata(), id.getWeightsdata(), id.getWeightcomfortdata(),
                id.getHeatdata(), id.getHeatcomfortdata(), id.getNotesdata(), id.getBuddydata(), id.getEdudata(), id.getDiveclubdata(),
                id.getInstructordata(), id.getFeelingdata()));
        list.add(logdataList);

       /* List<ReadWriteUtilityForFile.logdata> logdataList = Arrays.asList
                (new ReadWriteUtilityForFile.logdata(id.getDivesitedata(), id.getLocationdata(), id.getDateofdivedata(), id.getStarttimedata(),
                        id.getBottomtimedata(), id.getEndtimedata(), id.getMaxdepthdata(), id.getAvgdepthdata(), id.getTankindata(), id.getTankoutdata(), id.getWaterconditionsdata(),
                        id.getTypeofdivedata(), id.getAirtempdata(), id.getWatertempdata(), id.getWeightsdata(), id.getWeightcomfortdata(),
                        id.getHeatdata(), id.getHeatcomfortdata(), id.getNotesdata(), id.getBuddydata(), id.getEdudata(), id.getDiveclubdata(),
                        id.getInstructordata(), id.getFeelingdata()));

        list.add(logdataList);*/
    }

    public List getList(){
        return list;
    }

}


