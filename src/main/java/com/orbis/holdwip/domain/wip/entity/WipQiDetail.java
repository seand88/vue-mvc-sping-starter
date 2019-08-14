package com.orbis.holdwip.domain.wip.entity;

import javax.persistence.*;

@Entity
public class WipQiDetail {

    @ManyToOne
    @JoinColumn(name="wipTicketId")
    private WipTicket wipTicket;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qiDetailId;

    private String location;
    private int quantity;
    private int qiHold;

    public WipTicket getWipTicket() {
        return wipTicket;
    }

    public void setWipTicket(WipTicket wipTicket) {
        this.wipTicket = wipTicket;
    }

    public Long getQiDetailId() {
        return qiDetailId;
    }

    public void setQiDetailId(Long qiDetailId) {
        this.qiDetailId = qiDetailId;
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
