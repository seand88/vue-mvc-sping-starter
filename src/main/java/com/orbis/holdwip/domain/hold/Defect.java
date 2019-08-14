package com.orbis.holdwip.domain.hold;

import java.util.ArrayList;
import java.util.List;

public class Defect {

    public static Defect MOLDING = new Defect(1, "Molding");
    public static Defect ASSEMBLY = new Defect(2, "Assembly / Secondary");
    public static Defect PUR_COMP = new Defect(3, "Purchased Component");
    public static Defect INFO = new Defect(4, "Information Issue");
    public static Defect HAND_STOR = new Defect(5, "Handling / Storage - DO NOT USE");
    public static Defect UNAPP_PROD = new Defect(6, "Unapproved Product");
    public static Defect WELD = new Defect(7, "Welding");
    public static Defect LABOR_NA = new Defect(8, "Labor Unavailable - DO NOT USE");
    public static Defect EQUIP_NA = new Defect(9, "Equipment Not Available - DO NOT USE");
    public static Defect CORRELATION = new Defect(10, "Correlation Study");
    public static Defect WRONG_CONTAINER = new Defect(11, "Wrong Container");
    public static Defect DAMAGED = new Defect(12, "Damaged Product");
    public static Defect COMPL_RETURN = new Defect(13, "Complaint or Return");
    public static Defect DESIGN_ISSUE = new Defect(14, "Design/Work Order Issue");
    public static Defect HS_ISSUE = new Defect(15, "Hot Stamp Issue");
    public static Defect ID_LABEL_ISSUE = new Defect(16, "ID Plate/Label Issue");
    public static Defect WARP = new Defect(17, "Warp");
    public static Defect MISSING_MATL = new Defect(18, "Missing Material");
    public static Defect CUST_ISSUE = new Defect(19, "Customer Issue");
    public static Defect VENDOR_REL = new Defect(20, "Vendor Related");
    public static Defect OTHER = new Defect(21, "Other");

    private int id;
    private String desc;

    private Defect(int id, String desc) {
        this.id = id;
        this.desc = desc;
    }

    public int getId() {
        return id;
    }
    public String getDesc() {
        return desc;
    }

    public static List getDefects() {
        ArrayList list = new ArrayList();
        list.add(MOLDING);
        list.add(ASSEMBLY);
        list.add(PUR_COMP);
        list.add(INFO);
        list.add(UNAPP_PROD);
        list.add(WELD);
        list.add(CORRELATION);
        list.add(WRONG_CONTAINER);
        list.add(DAMAGED);
        list.add(COMPL_RETURN);
        list.add(DESIGN_ISSUE);
        list.add(HS_ISSUE);
        list.add(ID_LABEL_ISSUE);
        list.add(WARP);
        list.add(MISSING_MATL);
        list.add(CUST_ISSUE);
        list.add(VENDOR_REL);
        list.add(OTHER);
        list.add(LABOR_NA);
        list.add(EQUIP_NA);
        list.add(HAND_STOR);
        return list;
    }

    public static Defect getDefectFromId(int id) {
        if (id == 1)
            return MOLDING;
        else if (id == 2)
            return ASSEMBLY;
        else if (id == 3)
            return PUR_COMP;
        else if (id == 4)
            return INFO;
        else if (id == 5)
            return HAND_STOR;
        else if (id == 6)
            return UNAPP_PROD;
        else if (id == 7)
            return WELD;
        else if (id == 8)
            return LABOR_NA;
        else if (id == 9)
            return EQUIP_NA;
        else if (id == 10)
            return CORRELATION;
        else if (id == 11)
            return WRONG_CONTAINER;
        else if (id == 12)
            return DAMAGED;
        else if (id == 13)
            return COMPL_RETURN;
        else if (id == 14)
            return DESIGN_ISSUE;
        else if (id == 15)
            return HS_ISSUE;
        else if (id == 16)
            return ID_LABEL_ISSUE;
        else if (id == 17)
            return WARP;
        else if (id == 18)
            return MISSING_MATL;
        else if (id == 19)
            return CUST_ISSUE;
        else if (id == 20)
            return VENDOR_REL;
        else
            return OTHER;
    }
}
