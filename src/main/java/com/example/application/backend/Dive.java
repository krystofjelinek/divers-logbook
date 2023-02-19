
package com.example.application.backend;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;


@Document(collection = "diving_logs")
public class Dive {


    @Id
        public String id;
        public String username;
        public String divesitedata;
        public String locationdata;
        public LocalDate dateofdivedata;
        public LocalTime starttimedata;
        public LocalTime bottomtimedata;
        public LocalTime endtimedata;
        public String maxdepthdata;
        public String avgdepthdata;
        public String tankindata;
        public String tankoutdata;
        public String waterconditionsdata;
        public String typeofdivedata;
        public String airtempdata;
        public String watertempdata;
        public String weightsdata;
        public String weightcomfortdata;
        public String heatdata;
        public String heatcomfortdata;
        public String notesdata;
        public String buddydata;
        public String edudata;
        public String diveclubdata;
        public String instructordata;
        public String feelingdata;

        /*public Dive(){
        }*/

        //???


   public Dive(String username,String divesitedata, String locationdata, LocalDate dateofdivedata, LocalTime starttimedata,
                LocalTime bottomtimedata, LocalTime endtimedata, String maxdepthdata, String avgdepthdata,
                String tankindata, String tankoutdata, String waterconditionsdata, String typeofdivedata,
                String airtempdata, String watertempdata, String weightsdata, String weightcomfortdata,
                String heatdata, String heatcomfortdata, String notesdata, String buddydata, String edudata,
                String diveclubdata, String instructordata, String feelingdata) {
        this.divesitedata = divesitedata;
        this.locationdata = locationdata;
        this.dateofdivedata = dateofdivedata;
        this.starttimedata = starttimedata;
        this.bottomtimedata = bottomtimedata;
        this.endtimedata = endtimedata;
        this.maxdepthdata = maxdepthdata;
        this.avgdepthdata = avgdepthdata;
        this.tankindata = tankindata;
        this.tankoutdata = tankoutdata;
        this.waterconditionsdata = waterconditionsdata;
        this.typeofdivedata = typeofdivedata;
        this.airtempdata = airtempdata;
        this.watertempdata = watertempdata;
        this.weightsdata = weightsdata;
        this.weightcomfortdata = weightcomfortdata;
        this.heatdata = heatdata;
        this.heatcomfortdata = heatcomfortdata;
        this.notesdata = notesdata;
        this.buddydata = buddydata;
        this.edudata = edudata;
        this.diveclubdata = diveclubdata;
        this.instructordata = instructordata;
        this.feelingdata = feelingdata;
        this.username = username;
    }

    public String getDivesitedata() {
            return divesitedata;
        }

        public void setDivesitedata(String divesitedata) {
            this.divesitedata = divesitedata;
        }

        public String getLocationdata() {
            return locationdata;
        }

        public void setLocationdata(String locationdata) {
            this.locationdata = locationdata;
        }

        public LocalDate getDateofdivedata() {
            return dateofdivedata;
        }

        public void setDateofdivedata(LocalDate dateofdivedata) {
            this.dateofdivedata = dateofdivedata;
        }

        public LocalTime getStarttimedata() {
            return starttimedata;
        }

        public void setStarttimedata(LocalTime starttimedata) {
            this.starttimedata = starttimedata;
        }

        public LocalTime getBottomtimedata() {
            return bottomtimedata;
        }

        public void setBottomtimedata(LocalTime bottomtimedata) {
            this.bottomtimedata = bottomtimedata;
        }

        public LocalTime getEndtimedata() {
            return endtimedata;
        }

        public void setEndtimedata(LocalTime endtimedata) {
            this.endtimedata = endtimedata;
        }

        public String getMaxdepthdata() {
            return maxdepthdata;
        }

        public void setMaxdepthdata(String maxdepthdata) {
            this.maxdepthdata = maxdepthdata;
        }

        public String getAvgdepthdata() {
            return avgdepthdata;
        }

        public void setAvgdepthdata(String avgdepthdata) {
            this.avgdepthdata = avgdepthdata;
        }

        public String getTankindata() {
            return tankindata;
        }

        public void setTankindata(String tankindata) {
            this.tankindata = tankindata;
        }

        public String getTankoutdata() {
            return tankoutdata;
        }

        public void setTankoutdata(String tankoutdata) {
            this.tankoutdata = tankoutdata;
        }

        public String getWaterconditionsdata() {
            return waterconditionsdata;
        }

        public void setWaterconditionsdata(String waterconditionsdata) {
            this.waterconditionsdata = waterconditionsdata;
        }

        public String getTypeofdivedata() {
            return typeofdivedata;
        }

        public void setTypeofdivedata(String typeofdivedata) {
            this.typeofdivedata = typeofdivedata;
        }

        public String getAirtempdata() {
            return airtempdata;
        }

        public void setAirtempdata(String airtempdata) {
            this.airtempdata = airtempdata;
        }

        public String getWatertempdata() {
            return watertempdata;
        }

        public void setWatertempdata(String watertempdata) {
            this.watertempdata = watertempdata;
        }

        public String getWeightsdata() {
            return weightsdata;
        }

        public void setWeightsdata(String weightsdata) {
            this.weightsdata = weightsdata;
        }

        public String getWeightcomfortdata() {
            return weightcomfortdata;
        }

        public void setWeightcomfortdata(String weightcomfortdata) {
            this.weightcomfortdata = weightcomfortdata;
        }

        public String getHeatdata() {
            return heatdata;
        }

        public void setHeatdata(String heatdata) {
            this.heatdata = heatdata;
        }

        public String getHeatcomfortdata() {
            return heatcomfortdata;
        }

        public void setHeatcomfortdata(String heatcomfortdata) {
            this.heatcomfortdata = heatcomfortdata;
        }

        public String getNotesdata() {
            return notesdata;
        }

        public void setNotesdata(String notesdata) {
            this.notesdata = notesdata;
        }

        public String getBuddydata() {
            return buddydata;
        }

        public void setBuddydata(String buddydata) {
            this.buddydata = buddydata;
        }

        public String getEdudata() {
            return edudata;
        }

        public void setEdudata(String edudata) {
            edudata = edudata;
        }

        public String getDiveclubdata() {
            return diveclubdata;
        }

        public void setDiveclubdata(String diveclubdata) {
            this.diveclubdata = diveclubdata;
        }

        public String getInstructordata() {
            return instructordata;
        }

        public void setInstructordata(String instructordata) {
            this.instructordata = instructordata;
        }

        public String getFeelingdata() {
            return feelingdata;
        }

        public void setFeelingdata(String feelingdata) {
            this.feelingdata = feelingdata;
        }

        public String getUsername() {
            return username;
        }
        
        public void setUsername(String username) {
        this.username = username;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dive dive = (Dive) o;
        return id.equals(dive.id) && username.equals(dive.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username);
    }
    //???
}

