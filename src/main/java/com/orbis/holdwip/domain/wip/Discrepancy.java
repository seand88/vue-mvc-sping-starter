package com.orbis.holdwip.domain.wip;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class Discrepancy {
    public static final Discrepancy MISSING_INT
            = new Discrepancy(1, "Missing Components - Internal");
    public static final Discrepancy MISSING_OPT
            = new Discrepancy(2, "Missing Components - Purchased");
    public static final Discrepancy MISSING_COM
            = new Discrepancy(3, "Missing Components - Interplant");
    public static final Discrepancy AUX_EQUIP
            = new Discrepancy(4, "Auxiliary Equipment Not Available");
    public static final Discrepancy OPTION_INFO
            = new Discrepancy(5, "Option Information");
    public static final Discrepancy INFO_OTHER
            = new Discrepancy(6, "Information Other");
    public static final Discrepancy MISSING_PKG
            = new Discrepancy(7, "Missing Packaging");
    public static final Discrepancy MISSING_CUST
            = new Discrepancy(8, "Missing Customer Supplied");
    public static final Discrepancy LABOR_NA
            = new Discrepancy(9, "Labor Not Available");

    private int id;
    private String desc;

    private Discrepancy(int id, String desc) {
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

    public static Discrepancy getFromCode(String code) {
        if (code.equals("1"))
            return MISSING_INT;
        else if (code.equals("2"))
            return MISSING_OPT;
        else if (code.equals("3"))
            return MISSING_COM;
        else if (code.equals("4"))
            return AUX_EQUIP;
        else if (code.equals("5"))
            return OPTION_INFO;
        else if (code.equals("6"))
            return INFO_OTHER;
        else if (code.equals("7"))
            return MISSING_PKG;
        else if (code.equals("8"))
            return MISSING_CUST;
        else
            return LABOR_NA;
    }

    public static ArrayList getDiscrepancies() {
        ArrayList list = new ArrayList();
        list.add(MISSING_INT);
        list.add(MISSING_OPT);
        list.add(MISSING_COM);
        list.add(AUX_EQUIP);
        list.add(OPTION_INFO);
        list.add(INFO_OTHER);
        list.add(MISSING_PKG);
        list.add(MISSING_CUST);
        list.add(LABOR_NA);
        Collections.sort(list, new DiscrepancyComparator());
        return list;
    }

    static class DiscrepancyComparator implements Comparator {

        public int compare(Object o1, Object o2) {
            if (o1 instanceof Discrepancy && o2 instanceof Discrepancy) {
                Discrepancy disc1 = (Discrepancy)o1;
                Discrepancy disc2 = (Discrepancy)o2;

                String c1 = disc1.getDesc();
                String c2 = disc2.getDesc();

                if (c1 == null && c2 == null)
                    return 0;
                else if (c1 == null)
                    return 1;
                else if (c2 == null)
                    return -1;
                else
                    return c1.compareTo(c2);
            }
            else
                return 0;
        }

    }
}