package com.orbis.holdwip.domain.hold.entity;

import javax.persistence.*;

@Entity
public class HoldQiDetail {

    @ManyToOne
    @JoinColumn(name="holdTicketId")
    private HoldTicket holdTicket;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qiDetailId;

    private String location;
    private int quantity;
    private int qiHold;

    public HoldTicket getHoldTicket() {
        return holdTicket;
    }

    public void setHoldTicket(HoldTicket holdTicket) {
        this.holdTicket = holdTicket;
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
