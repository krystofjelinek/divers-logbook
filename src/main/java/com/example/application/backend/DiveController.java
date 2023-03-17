package com.example.application.backend;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DiveController {
    private final DiveRepository diveRepository;//Inicializuje interface DiveRepository(MongoRepository)

    public DiveController(DiveRepository diveRepository) {
        this.diveRepository = diveRepository;
    }

    @GetMapping("/dives")
    public List<Dive> getDives() {
        return diveRepository.findAll();
    }//Tato metoda vrací list všech záznamů v databázi

    @GetMapping("/dives/{id}")
    public Dive dive(@PathVariable String id) {
        return diveRepository.findById(id).orElseThrow(()->new DiveNotFoundException(id));
    }//Tato metoda vrací záznam na základě jeho identifikátoru, popřípadě vrátí chybu

    @PostMapping("/dives")
    public Dive saveDive(@RequestBody Dive dive) {
        return diveRepository.save(dive);
    }//Tato metoda ukládá příslušný záznam do databáze

    @DeleteMapping("/dives/{id}")
    public void deleteDive(Dive dive) {
        diveRepository.delete(dive);
    }//Tato metoda odstrňuje příslušný záznam z databáze
}
