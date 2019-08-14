package com.orbis.holdwip.domain;

import java.util.ArrayList;

public class Status {
    public static final Status OPEN = new Status(1, "Open");
    public static final Status CLOSED = new Status(2, "Closed");

    private int id;
    private String desc;

    private Status(int id, String desc) {
        this.id = id;
        this.desc = desc;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public static Status getStatusFromCode(int code) {
        if (code == 1)
            return OPEN;
        else
            return CLOSED;
    }

    public static ArrayList getStatuses() {
        ArrayList status = new ArrayList();
        status.add(OPEN);
        status.add(CLOSED);
        return status;
    }
}


