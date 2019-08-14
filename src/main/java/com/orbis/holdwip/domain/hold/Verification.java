package com.orbis.holdwip.domain.hold;

import java.util.ArrayList;
import java.util.List;

public class Verification {

    public static Verification GOOD = new Verification(1, "Good");
    public static Verification SCRAP = new Verification(2, "Scrap");
    public static Verification AWAIT_DISP = new Verification(3, "Further Action Required (New Ticket)");
    public static Verification RETURNED = new Verification(4, "Returned");

    private int id;
    private String desc;

    private Verification(int id, String desc) {
        this.id = id;
        this.desc = desc;
    }

    public int getId() {
        return id;
    }

    public String getDesc() {
        return desc;
    }

    public static Verification getVerificationById(int id) {
        if (id == 1)
            return GOOD;
        else if (id == 2)
            return SCRAP;
        else if (id == 3)
            return AWAIT_DISP;
        else
            return RETURNED;
    }

    public static List getVerifications() {
        ArrayList list = new ArrayList();
        list.add(GOOD);
        list.add(SCRAP);
        list.add(AWAIT_DISP);
        list.add(RETURNED);
        return list;
    }

    public boolean equals(Object obj) {
        if (obj instanceof Verification) {
            if (this.getId() == ((Verification)obj).getId())
                return true;
            else
                return false;
        } else {
            return false;
        }
    }
}
