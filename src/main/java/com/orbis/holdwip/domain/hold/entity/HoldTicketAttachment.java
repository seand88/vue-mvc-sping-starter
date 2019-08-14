package com.orbis.holdwip.domain.hold.entity;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class HoldTicketAttachment {

    @ManyToOne
    @JoinColumn(name="holdTicketId")
    @JsonBackReference
    HoldTicket holdTicket;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long attachmentId;

    String attachmentName;
    byte[] attachment;

    public HoldTicket getHoldTicket() {
        return holdTicket;
    }

    public void setHoldTicket(HoldTicket holdTicket) {
        this.holdTicket = holdTicket;
    }

    public long getAttachmentId() {
        return attachmentId;
    }

    public void setAttachmentId(int attachmentId) {
        this.attachmentId = attachmentId;
    }

    public String getAttachmentName() {
        return attachmentName;
    }

    public void setAttachmentName(String attachmentName) {
        this.attachmentName = attachmentName;
    }

    public byte[] getAttachment() {
        return attachment;
    }

    public void setAttachment(byte[] attachment) {
        this.attachment = attachment;
    }

}
