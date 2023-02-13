package com.example.application.backend;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DiveController {
    private final DiveRepository diveRepository;

    public DiveController(DiveRepository diveRepository) {
        this.diveRepository = diveRepository;
    }

    @GetMapping("/dives")
    public List<Dive> getDives() {
        return diveRepository.findAll();
    }

    @GetMapping("/dives/{id}")
    public Dive dive(@PathVariable String id) {
        return diveRepository.findById(id).orElseThrow(()->new DiveNotFoundException(id));
    }

    @PostMapping("/dives")
    public void saveDive(@RequestBody Dive dive) {
        diveRepository.save(dive);
    }

    @DeleteMapping("/dives/{id}")
    public void deleteDivingLog(@PathVariable String id) {
        if(!diveExists(id)){
            throw new DiveNotFoundException(id);
        }
        diveRepository.deleteById(id);
    }

    //???

    private boolean diveExists(final String id){
        return diveRepository.existsById(id);
    }
}
