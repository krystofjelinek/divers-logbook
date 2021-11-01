
/*package com.example.application.views.addanewlog;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;

import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;


public class ReadWriteUtilityForFile {

    private static final String FileLocation = "/Users/appshah/Documents/data.txt";
    private static final Gson gson = new Gson();

    // CrunchifyComapny Class with two fields
    // - Employees
    // - CompanyName
    private static class logdata {
        private String divesitedata;
        private String locationdata;
        private String

    }

    // Main Method
    public static void main(String[] args) {
        logdata data = new logdata();
        logdata.("Crunchify.com");
        logdata.setEmployees(4);

        // Save data to file
        crunchifyWriteToFile(gson.toJson(crunchify));

        // Retrieve data from file
        crunchifyReadFromFile();
    }

    // Save to file Utility
    private static void crunchifyWriteToFile(String myData) {

        File crunchifyFile = new File(crunchifyFileLocation);


        // exists(): Tests whether the file or directory denoted by this abstract pathname exists.
        if (!crunchifyFile.exists()) {

            try {
                File directory = new File(crunchifyFile.getParent());
                if (!directory.exists()) {

                    // mkdirs(): Creates the directory named by this abstract pathname, including any necessary but nonexistent parent directories.
                    // Note that if this operation fails it may have succeeded in creating some of the necessary parent directories.
                    directory.mkdirs();
                }

                // createNewFile(): Atomically creates a new, empty file named by this abstract pathname if and only if a file with this name does not yet exist.
                // The check for the existence of the file and the creation of the file if it does not exist are a single operation
                // that is atomic with respect to all other filesystem activities that might affect the file.
                crunchifyFile.createNewFile();
            } catch (IOException e) {
                crunchifyLog("Exception Occurred: " + e.toString());
            }
        }

        try {

            // Convenience class for writing character files
            FileWriter crunchifyWriter;
            crunchifyWriter = new FileWriter(crunchifyFile.getAbsoluteFile(), true);

            // Writes text to a character-output stream
            BufferedWriter bufferWriter = new BufferedWriter(crunchifyWriter);
            bufferWriter.write(myData.toString());
            bufferWriter.close();

            crunchifyLog("Company data saved at file location: " + crunchifyFileLocation + " Data: " + myData + "\n");
        } catch (IOException e) {

            crunchifyLog("Hmm.. Got an error while saving Company data to file " + e.toString());
        }
    }

    // Read From File Utility
    public static void crunchifyReadFromFile() {

        // File: An abstract representation of file and directory pathnames.
        // User interfaces and operating systems use system-dependent pathname strings to name files and directories.
        File crunchifyFile = new File(crunchifyFileLocation);

        if (!crunchifyFile.exists())
            crunchifyLog("File doesn't exist");

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

    private static void crunchifyLog(String string) {
        System.out.println(string);
    }

}*/
