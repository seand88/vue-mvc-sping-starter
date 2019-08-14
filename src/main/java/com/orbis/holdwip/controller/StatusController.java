package com.orbis.holdwip.controller;

import java.util.List;

import com.orbis.holdwip.domain.Status;
import com.orbis.holdwip.service.SharedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class StatusController {

    @Autowired
    private SharedService sharedService;

    @RequestMapping("/getStatusByCode")
    Status getStatusByCode(@RequestParam(value = "statusCode") int statusCode){ return sharedService.getSatusByCode(statusCode); }

    @RequestMapping("/getAllStatuses")
    List<Status> getAllStatuses(){return sharedService.getAllStatuses();}

}
