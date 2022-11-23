package com.example.application;

import com.example.application.Repository.DiveRepository;
import com.example.application.backend.Dive;
import org.springframework.stereotype.Service;
import org.vaadin.crudui.crud.CrudListener;

import java.util.List;
@Service
public class DiveService implements CrudListener<Dive> {
    private final DiveRepository repository;

    public DiveService(DiveRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Dive> findAll(){
        return repository.findAll();
    }
    @Override
    public Dive add (Dive dive){
        return repository.save(dive);
    }
    @Override
    public Dive update (Dive dive){
        return repository.save(dive);
    }
    @Override
    public void  delete (Dive dive){
        repository.delete(dive);
    }
}
