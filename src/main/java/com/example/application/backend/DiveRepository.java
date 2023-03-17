package com.example.application.backend;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface DiveRepository extends MongoRepository<Dive,String> {
    Dive findFirstByOrderByMaxdepthdataDesc();
}


