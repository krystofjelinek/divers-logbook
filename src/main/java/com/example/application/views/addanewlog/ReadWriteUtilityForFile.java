
package com.example.application.views.addanewlog;

import com.google.gson.Gson;

import java.time.LocalDate;
import java.time.LocalTime;

public class ReadWriteUtilityForFile {

    private static final String FileLocation = "/Users/appshah/Documents/data.txt";
    private static final Gson gson = new Gson();

    public static class logdata {
        private static String divesitedata;
        private static String locationdata;
        private static LocalDate dateofdivedata;
        private static LocalTime starttimedata;
        private static LocalTime bottomtimedata;
        private static LocalTime endtimedata;
        private static double maxdepthdata;
        private static double avgdepthdata;
        private static Double tankindata;
        private static Double tankoutdata;
        private static String waterconditionsdata;
        private static String typeofdivedata;
        private static Double airtempdata;
        private static Double watertempdata;
        private static Double weightsdata;
        private static String weightcomfortdata;
        private static String heatdata;
        private static String heatcomfortdata;
        private static String notesdata;
        private static String buddydata;
        private static String Edudata;
        private static String diveclubdata;
        private static String instructordata;
        private static String feelingdata;

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

        public double getMaxdepthdata() {
            return maxdepthdata;
        }

        public void setMaxdepthdata(double maxdepthdata) {
            this.maxdepthdata = maxdepthdata;
        }

        public double getAvgdepthdata() {
            return avgdepthdata;
        }

        public void setAvgdepthdata(double avgdepthdata) {
            this.avgdepthdata = avgdepthdata;
        }

        public Double getTankindata() {
            return tankindata;
        }

        public void setTankindata(Double tankindata) {
            this.tankindata = tankindata;
        }

        public Double getTankoutdata() {
            return tankoutdata;
        }

        public void setTankoutdata(Double tankoutdata) {
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

        public Double getAirtempdata() {
            return airtempdata;
        }

        public void setAirtempdata(Double airtempdata) {
            this.airtempdata = airtempdata;
        }

        public Double getWatertempdata() {
            return watertempdata;
        }

        public void setWatertempdata(Double watertempdata) {
            this.watertempdata = watertempdata;
        }

        public Double getWeightsdata() {
            return weightsdata;
        }

        public void setWeightsdata(Double weightsdata) {
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
    }
}
/*
    // Main Method
    public static void main(String[] args) {
        // Save data to file
        WriteToFile(gson.toJson());

        // Retrieve data from file
        ReadFromFile();
    }

    // Save to file Utility
    private static void WriteToFile(String myData) {

        File dataFile = new File(FileLocation);


        // exists(): Tests whether the file or directory denoted by this abstract pathname exists.
        if (!dataFile.exists()) {

            try {
                File directory = new File(dataFile.getParent());
                if (!directory.exists()) {

                    // mkdirs(): Creates the directory named by this abstract pathname, including any necessary but nonexistent parent directories.
                    // Note that if this operation fails it may have succeeded in creating some of the necessary parent directories.
                    directory.mkdirs();
                }

                // createNewFile(): Atomically creates a new, empty file named by this abstract pathname if and only if a file with this name does not yet exist.
                // The check for the existence of the file and the creation of the file if it does not exist are a single operation
                // that is atomic with respect to all other filesystem activities that might affect the file.
                dataFile.createNewFile();
            } catch (IOException e) {
                dataLog("Exception Occurred: " + e.toString());
            }
        }

        try {

            // Convenience class for writing character files
            FileWriter logWriter;
            logWriter = new FileWriter(dataFile.getAbsoluteFile(), true);

            // Writes text to a character-output stream
            BufferedWriter bufferWriter = new BufferedWriter(logWriter);
            bufferWriter.write(myData.toString());
            bufferWriter.close();

            dataLog("Logbook data saved at file location: " + dataFile + " Data: " + myData + "\n");
        } catch (IOException e) {

            dataLog("Hmm.. Got an error while saving logbook data to file " + e.toString());
        }
    }

    // Read From File Utility
    public static void ReadFromFile() {

        // File: An abstract representation of file and directory pathnames.
        // User interfaces and operating systems use system-dependent pathname strings to name files and directories.
        File dataFile = new File(FileLocation);

        if (!dataFile.exists())
            dataLog("File doesn't exist");

        InputStreamReader isReader;
        try {
            isReader = new InputStreamReader(new FileInputStream(dataFile), StandardCharsets.UTF_8);

            JsonReader myReader = new JsonReader(isReader);
            ReadWriteUtilityForFile logdata  = gson.fromJson(myReader, ReadWriteUtilityForFile.class);

            dataLog("Company Name: " + company.getCompanyName());
            int employee = logdata.getEmployees();
            dataLog("# of Employees: " + Integer.toString(employee));

        } catch (Exception e) {
            crunchifyLog("error load cache from file " + e.toString());
        }

        crunchifyLog("\nCompany Data loaded successfully from file " + crunchifyFileLocation);

    }

    private static void dataLog(String string) {
        System.out.println(string);
    }

}
*/
