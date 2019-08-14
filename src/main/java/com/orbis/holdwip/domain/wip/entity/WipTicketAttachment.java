package com.orbis.holdwip.domain.wip.entity;

import javassist.bytecode.ByteArray;
import javax.persistence.*;

@Entity
public class WipTicketAttachment {

    @ManyToOne
    @JoinColumn(name="wipTicketId")
    private WipTicket wipTicket;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int attachmentId;

    private String attachmentName;
    private byte[] attachment;

    public WipTicket getWipTicket() {
        return wipTicket;
    }

    public void setWipTicket(WipTicket wipTicket) {
        this.wipTicket = wipTicket;
    }

    public int getAttachmentId() {
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
