package com.orbis.holdwip.domain.hold;

import java.util.ArrayList;
import java.util.List;

public class Disposition {

    public static final Disposition REWORK = new Disposition(1, "Re-work");
    public static final Disposition AS_IS = new Disposition(2, "Accept As Is");
    public static final Disposition SCRAP = new Disposition(3, "Scrap");
    public static final Disposition RETURN = new Disposition(4, "Return");
    public static final Disposition REGRADE = new Disposition(5, "Re-grade");
    public static final Disposition AWAIT_DISP = new Disposition(6, "Awaiting Disposition");
    public static final Disposition SORT = new Disposition(7, "Sort");
    public static final Disposition MEETS_SPEC = new Disposition(8, "Meets Spec");

    private int id;
    private String desc;

    private Disposition(int id, String desc) {
        this.id = id;
        this.desc = desc;
    }

    public int getId() {
        return id;
    }
    public String getDesc() {
        return desc;
    }

    public static List getDispositions() {
        ArrayList list = new ArrayList();
        list.add(AWAIT_DISP);
        list.add(AS_IS);
        list.add(MEETS_SPEC);
        list.add(REGRADE);
        list.add(RETURN);
        list.add(REWORK);
        list.add(SCRAP);
        list.add(SORT);
        return list;
    }

    public static Disposition getDispositionFromId(int id) {
        if (id == 1)
            return REWORK;
        else if (id == 2)
            return AS_IS;
        else if (id == 3)
            return SCRAP;
        else if (id == 4)
            return RETURN;
        else if (id == 5)
            return REGRADE;
        else if (id == 6)
            return AWAIT_DISP;
        else if (id == 7)
            return SORT;
        else
            return MEETS_SPEC;
    }
}

