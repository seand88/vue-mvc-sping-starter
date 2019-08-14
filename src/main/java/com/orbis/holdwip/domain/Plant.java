package com.orbis.holdwip.domain;

import java.util.ArrayList;

public class Plant {

    public static final Plant ALL = new Plant("0", "All");
    public static final Plant MONTICELLO = new Plant("4001", "Monticello");
    public static final Plant MANCHESTER = new Plant("4002", "Manchester");
    public static final Plant URBANA = new Plant("4003", "Urbana");
    public static final Plant MENASHA = new Plant("4004", "Menasha");
    public static final Plant MENTOR = new Plant("4005", "Mentor");
    public static final Plant GEORGETOWN = new Plant("4045", "Georgetown");
    public static final Plant BARDSTOWN = new Plant("4046", "Bardstown");
    public static final Plant OSAGE_CITY = new Plant("4066", "Osage City");
    public static final Plant REXDALE = new Plant("4976", "Rexdale");
    public static final Plant KISSIMMEE = new Plant("4067", "Kissimmee");
    public static final Plant DEFOREST = new Plant("4800", "DeForest");
    public static final Plant SILAO = new Plant("4502", "Silao");
    public static final Plant ORBIS_NV = new Plant("9999", "ORBIS NV");

    private String code;
    private String desc;

    private Plant(String code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public static Plant getPlantFromCode(String code) {
        if (code.equals("4001"))
            return MONTICELLO;
        else if (code.equals("4002"))
            return MANCHESTER;
        else if (code.equals("4003"))
            return URBANA;
        else if (code.equals("4004"))
            return MENASHA;
        else if (code.equals("4005"))
            return MENTOR;
        else if (code.equals("4045"))
            return GEORGETOWN;
        else if (code.equals("4066"))
            return OSAGE_CITY;
        else if (code.equals("4067"))
            return KISSIMMEE;
        else if (code.equals("4976"))
            return REXDALE;
        else if(code.equals("4800"))
            return DEFOREST;
        else if(code.equals("4502"))
            return SILAO;
        else if (code.equals("9999"))
            return ORBIS_NV;
        else
            return BARDSTOWN;
    }

    public static ArrayList getPlants() {
        ArrayList plants = new ArrayList();
        plants.add(ALL);
        plants.add(BARDSTOWN);
        plants.add(GEORGETOWN);
        plants.add(KISSIMMEE);
        plants.add(MANCHESTER);
        plants.add(MENASHA);
        plants.add(MENTOR);
        plants.add(MONTICELLO);
        plants.add(OSAGE_CITY);
        plants.add(REXDALE);
        plants.add(URBANA);
        plants.add(DEFOREST);
        plants.add(SILAO);
        plants.add(ORBIS_NV);
        return plants;
    }
}

