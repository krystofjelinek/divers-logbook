package com.example.application.Repository;

import com.example.application.backend.Dive;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiveRepository extends MongoRepository<Dive, String>{
}
