
package com.example.application.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Dive implements Serializable {


        @Id
        @EqualsAndHashCode.Include
        private String username;
        private String divesitedata;
        private String locationdata;
        private LocalDate dateofdivedata;
        private LocalTime starttimedata;
        private LocalTime bottomtimedata;
        private LocalTime endtimedata;
        private String maxdepthdata;
        private String avgdepthdata;
        private String tankindata;
        private String tankoutdata;
        private String waterconditionsdata;
        private String typeofdivedata;
        private String airtempdata;
        private String watertempdata;
        private String weightsdata;
        private String weightcomfortdata;
        private String heatdata;
        private String heatcomfortdata;
        private String notesdata;
        private String buddydata;
        private String Edudata;
        private String diveclubdata;
        private String instructordata;
        private String feelingdata;


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
            return Edudata;
        }

        public void setEdudata(String edudata) {
            Edudata = edudata;
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
        /*public String getDivesitedata(logdata logdata) {
            return logdata.toString();
        }

        public String setDivesitedata(logdata logdata, String s) {
            return logdata.toString();
        }*/
    }

