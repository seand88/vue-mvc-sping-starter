package com.orbis.holdwip.domain.wip.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class WipActionItem {

    @ManyToOne
    @JoinColumn(name="wipTicketId")
    private WipTicket wipTicket;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wipActionItemId;

    private Date wipActionItemDate;
    private String wipActionItemShift;
    private String wipActionCompletedBy;
    private String skidNo;
    private String location;
    private int quantity;
    private int qiHold;

    public WipTicket getWipTicket() {
        return wipTicket;
    }

    public void setWipTicket(WipTicket wipTicket) {
        this.wipTicket = wipTicket;
    }

    public Long getWipActionItemId() {
        return wipActionItemId;
    }

    public void setWipActionItemId(Long wipActionItemId) {
        this.wipActionItemId = wipActionItemId;
    }

    public Date getWipActionItemDate() {
        return wipActionItemDate;
    }

    public void setWipActionItemDate(Date wipActionItemDate) {
        this.wipActionItemDate = wipActionItemDate;
    }

    public String getWipActionItemShift() {
        return wipActionItemShift;
    }

    public void setWipActionItemShift(String wipActionItemShift) {
        this.wipActionItemShift = wipActionItemShift;
    }

    public String getWipActionCompletedBy() {
        return wipActionCompletedBy;
    }

    public void setWipActionCompletedBy(String wipActionCompletedBy) {
        this.wipActionCompletedBy = wipActionCompletedBy;
    }

    public String getSkidNo() {
        return skidNo;
    }

    public void setSkidNo(String skidNo) {
        this.skidNo = skidNo;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getQiHold() {
        return qiHold;
    }

    public void setQiHold(int qiHold) {
        this.qiHold = qiHold;
    }
}
