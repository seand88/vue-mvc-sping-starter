package com.orbis.holdwip.controller;

import com.orbis.holdwip.domain.Plant;
import com.orbis.holdwip.service.SharedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlantController {

    @Autowired
    private SharedService sharedService;

    @RequestMapping("/getAllPlants")
    List<Plant> getAllPlants(){
        return sharedService.getAllPlants();
    }

    @RequestMapping("/getPlantByCode")
    Plant getPlantByCode(@RequestParam(value = "plantCode") String plantCode){ return sharedService.getPlantByCode(plantCode); }

}
