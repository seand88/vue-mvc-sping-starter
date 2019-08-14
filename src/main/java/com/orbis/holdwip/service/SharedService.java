package com.orbis.holdwip.service;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.orbis.holdwip.domain.Plant;
import com.orbis.holdwip.domain.Status;
import org.springframework.stereotype.Service;

@Service("sharedService")
public class SharedService {

        public List<Plant> getAllPlants(){
            Plant plant = Plant.ALL;
            return plant.getPlants();
        }
        public Plant getPlantByCode(String code){
            Plant plant = Plant.ALL;
            return plant.getPlantFromCode(code);
        }
        public Status getSatusByCode(int code){
            return Status.getStatusFromCode(code);
        }

        public List<Status> getAllStatuses(){ return Status.getStatuses();}


    public String getJsonForObject(Object object) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);

        String json = "";
        try {
            json = mapper.writeValueAsString(object);
        }catch(Exception ex){
            ex.printStackTrace();
            return null;
        }

        return json;
    }
}



