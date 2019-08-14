package com.orbis.holdwip.domain.hold.entity;

import javax.persistence.*;

@Entity
public class HoldActionItem {

    @ManyToOne
    @JoinColumn(name="holdTicketId")
    private HoldTicket holdTicket;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long holdActionItemId;

    private String actionItemDate;
    private String actionItemShift;
    private String personComplRework;
    private String locations;
    private String location;
    private String quantity;
    private String verifiedBy;
    private String verificationId;
    private String qiHold;
    private String reworkHours;
    private String newHoldTicketId;


    public Long getHoldActionItemId() {
        return holdActionItemId;
    }

    public void setHoldActionItemId(Long holdActionItemId) {
        this.holdActionItemId = holdActionItemId;
    }

    public String getActionItemDate() {
        return actionItemDate;
    }

    public void setActionItemDate(String actionItemDate) {
        this.actionItemDate = actionItemDate;
    }

    public String getActionItemShift() {
        return actionItemShift;
    }

    public void setActionItemShift(String actionItemShift) {
        this.actionItemShift = actionItemShift;
    }

    public String getPersonComplRework() {
        return personComplRework;
    }

    public void setPersonComplRework(String personComplRework) {
        this.personComplRework = personComplRework;
    }

    public String getLocations() {
        return locations;
    }

    public void setLocations(String locations) {
        this.locations = locations;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getVerifiedBy() {
        return verifiedBy;
    }

    public void setVerifiedBy(String verifiedBy) {
        this.verifiedBy = verifiedBy;
    }

    public String getVerificationId() {
        return verificationId;
    }

    public void setVerificationId(String verificationId) {
        this.verificationId = verificationId;
    }

    public String getQiHold() {
        return qiHold;
    }

    public void setQiHold(String qiHold) {
        this.qiHold = qiHold;
    }

    public String getReworkHours() {
        return reworkHours;
    }

    public void setReworkHours(String reworkHours) {
        this.reworkHours = reworkHours;
    }

    public String getNewHoldTicketId() {
        return newHoldTicketId;
    }

    public void setNewHoldTicketId(String newHoldTicketId) {
        this.newHoldTicketId = newHoldTicketId;
    }
}
