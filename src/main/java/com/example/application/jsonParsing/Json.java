package com.example.application.jsonParsing;

import com.example.application.backend.ReadWriteUtilityForFile;
import org.json.simple.JSONObject;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class Json {
    ReadWriteUtilityForFile.logdata id = new ReadWriteUtilityForFile.logdata();
    File file = new File("data.txt");
    FileWriter fileWriter = new FileWriter(file, StandardCharsets.UTF_8);

    public Json() throws IOException {
    }

    public void setData(){
        JSONObject dive = new JSONObject();
        dive.put("divesite",id.getDivesitedata());
        dive.put("location",id.getLocationdata());
        
    }
}
