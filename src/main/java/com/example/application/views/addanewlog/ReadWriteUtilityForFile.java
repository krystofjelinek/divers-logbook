/*

package com.example.application.views.addanewlog;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;

import java.io.*;
import java.nio.charset.StandardCharsets;

public class ReadWriteUtilityForFile {

    private static final String FileLocation = "/Users/appshah/Documents/data.txt";
    private static final Gson gson = new Gson();

    private static class logdata {
        private String divesitedata;
        private String locationdata;
        private int dateofdivedata;
        private int starttimedata;
        private int bottomtimedata;
        private int endtimedata;
        private double maxdepthdata;
        private double avgdepthdata;
        private int tankindata;
        private int tankoutdata;
        private String waterconditionsdata;
        private String typeofdivedata;
        private int airtempdata;
        private int watertempdata;

    }

    // Main Method
    public static void main(String[] args) {
        logdata data = new logdata();
       // logdata.("Crunchify.com");
       // logdata.setEmployees(4);

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
                crunchifyLog("Exception Occurred: " + e.toString());
            }
        }

        try {

            // Convenience class for writing character files
            FileWriter logWriter;
            logWriter = new FileWriter(dataFile.getAbsoluteFile(), true);

            // Writes text to a character-output stream
            BufferedWriter bufferWriter = new BufferedWriter(dataWriter);
            bufferWriter.write(myData.toString());
            bufferWriter.close();

            dataLog("Logbook data saved at file location: " + dataFile + " Data: " + myData + "\n");
        } catch (IOException e) {

            dataLog("Hmm.. Got an error while saving Company data to file " + e.toString());
        }
    }

    // Read From File Utility
    public static void crunchifyReadFromFile() {

        // File: An abstract representation of file and directory pathnames.
        // User interfaces and operating systems use system-dependent pathname strings to name files and directories.
        File crunchifyFile = new File(crunchifyFileLocation);

        if (!crunchifyFile.exists())
            dataLog("File doesn't exist");

        InputStreamReader isReader;
        try {
            isReader = new InputStreamReader(new FileInputStream(crunchifyFile), StandardCharsets.UTF_8);

            JsonReader myReader = new JsonReader(isReader);
            ReadWriteUtilityForFile  = gson.fromJson(myReader, CrunchifyCompany.class);

            crunchifyLog("Company Name: " + company.getCompanyName());
            int employee = company.getEmployees();
            crunchifyLog("# of Employees: " + Integer.toString(employee));

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
