package com.example.application.backend;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class DiveNotFoundException extends RuntimeException{
    public DiveNotFoundException(String id){
        super("Dive not found: " + id);
    }
}
