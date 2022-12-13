package com.example.application.Controller;

import com.example.application.Exception.DiveNotFoundException;
import com.example.application.Repository.DiveRepository;
import com.example.application.backend.Dive;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DiveController {
    private final DiveRepository diveRepository;

    public DiveController(DiveRepository diveRepository) {
        this.diveRepository = diveRepository;
    }

    @GetMapping("/dives")
    public List<Dive> getRestaurants() {
        return diveRepository.findAll();
    }

    @GetMapping("/dives/{username}")
    public Dive dive(@PathVariable String username) {
        return diveRepository.findById(username).orElseThrow(() -> new DiveNotFoundException(username));
    }

    @DeleteMapping("/dives/{id}")
    public void deleteDive(@PathVariable String id) {
        if (!diveExists(id)) {
            throw new DiveNotFoundException(id);
        }

        diveRepository.deleteById(id);
    }

    @PostMapping("/dives")
    public void saveDive(@RequestBody Dive dive) {
        diveRepository.save(dive);
    }

    /*
     * This method will completely replace the existing restaurant with <code>id</code> with <code>updatedRestaurant</code>.
     * @param updatedRestaurant this needs to have the full details for the restaurant you're updating
     * @param id the ID of the restaurant you are updating. This will be used to locate and update the restaurant to be
     *           changed, NOT the ID in the updatedRestaurant object
     */
   /* @PutMapping("/restaurants/{id}")
    Restaurant replaceRestaurant(@RequestBody Restaurant updatedRestaurant, @PathVariable String id) {
        if (!restaurantExists(id)) {
            throw new RestaurantNotFoundException(id);
        }

        return restaurantRepository.save(updatedRestaurant);
    }
*/
    private boolean diveExists(final String id) {
        return diveRepository.existsById(id);
    }
}
