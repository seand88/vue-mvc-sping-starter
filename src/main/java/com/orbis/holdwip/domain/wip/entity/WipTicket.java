package com.orbis.holdwip.domain.wip.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
public class WipTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wipTicketId;

    private int statusId;
    private int discrepancyId;
    private String plantCode;
    private String productionOrderNum;
    private String productionOrderQty;
    private String materialDesc;
    private String materialNum;
    private Date onHoldDate;
    private Date prodDate;
    private String shiftProduced;
    private String onHoldBy;
    private String salesOrderNum;
    private String color;
    private String optionNumber;
    private String lineItem;
    private String comments;
    private int qtyOnHold;
    private int stacksOnHold;
    private String stackNumOnHold;
    private String workCenter;

    private String closedBy;
    private Date closedDate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="wipTicket")
    private Set<WipTicketAttachment> attachments;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="wipTicket")
    private Set<WipActionItem> actionItems;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="wipTicket")
    private Set<WipQiDetail> qiDetails;

    @Transient
    int labor;

    public Long getWipTicketId() {
        return wipTicketId;
    }

    public void setWipTicketId(Long wipTicketId) {
        this.wipTicketId = wipTicketId;
    }

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
    }

    public int getDiscrepancyId() {
        return discrepancyId;
    }

    public void setDiscrepancyId(int discrepancyId) {
        this.discrepancyId = discrepancyId;
    }

    public String getPlantCode() {
        return plantCode;
    }

    public void setPlantCode(String plantCode) {
        this.plantCode = plantCode;
    }

    public String getProductionOrderNum() {
        return productionOrderNum;
    }

    public void setProductionOrderNum(String productionOrderNum) {
        this.productionOrderNum = productionOrderNum;
    }

    public String getProductionOrderQty() {
        return productionOrderQty;
    }

    public void setProductionOrderQty(String productionOrderQty) {
        this.productionOrderQty = productionOrderQty;
    }

    public String getMaterialDesc() {
        return materialDesc;
    }

    public void setMaterialDesc(String materialDesc) {
        this.materialDesc = materialDesc;
    }

    public String getMaterialNum() {
        return materialNum;
    }

    public void setMaterialNum(String materialNum) {
        this.materialNum = materialNum;
    }

    public Date getOnHoldDate() {
        return onHoldDate;
    }

    public void setOnHoldDate(Date onHoldDate) {
        this.onHoldDate = onHoldDate;
    }

    public Date getProdDate() {
        return prodDate;
    }

    public void setProdDate(Date prodDate) {
        this.prodDate = prodDate;
    }

    public String getShiftProduced() {
        return shiftProduced;
    }

    public void setShiftProduced(String shiftProduced) {
        this.shiftProduced = shiftProduced;
    }

    public String getOnHoldBy() {
        return onHoldBy;
    }

    public void setOnHoldBy(String onHoldBy) {
        this.onHoldBy = onHoldBy;
    }

    public String getSalesOrderNum() {
        return salesOrderNum;
    }

    public void setSalesOrderNum(String salesOrderNum) {
        this.salesOrderNum = salesOrderNum;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getOptionNumber() {
        return optionNumber;
    }

    public void setOptionNumber(String optionNumber) {
        this.optionNumber = optionNumber;
    }

    public String getLineItem() {
        return lineItem;
    }

    public void setLineItem(String lineItem) {
        this.lineItem = lineItem;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public int getQtyOnHold() {
        return qtyOnHold;
    }

    public void setQtyOnHold(int qtyOnHold) {
        this.qtyOnHold = qtyOnHold;
    }

    public int getStacksOnHold() {
        return stacksOnHold;
    }

    public void setStacksOnHold(int stacksOnHold) {
        this.stacksOnHold = stacksOnHold;
    }

    public String getStackNumOnHold() {
        return stackNumOnHold;
    }

    public void setStackNumOnHold(String stackNumOnHold) {
        this.stackNumOnHold = stackNumOnHold;
    }

    public String getWorkCenter() {
        return workCenter;
    }

    public void setWorkCenter(String workCenter) {
        this.workCenter = workCenter;
    }

    public String getClosedBy() {
        return closedBy;
    }

    public void setClosedBy(String closedBy) {
        this.closedBy = closedBy;
    }

    public Date getClosedDate() {
        return closedDate;
    }

    public void setClosedDate(Date closedDate) {
        this.closedDate = closedDate;
    }

    public Set<WipTicketAttachment> getAttachments() {
        return attachments;
    }

    public void setAttachments(Set<WipTicketAttachment> attachments) {
        this.attachments = attachments;
    }

    public Set<WipActionItem> getActionItems() {
        return actionItems;
    }

    public void setActionItems(Set<WipActionItem> actionItems) {
        this.actionItems = actionItems;
    }

    public Set<WipQiDetail> getQiDetails() {
        return qiDetails;
    }

    public void setQiDetails(Set<WipQiDetail> qiDetails) {
        this.qiDetails = qiDetails;
    }

    public int getLabor() {
        return labor;
    }

    public void setLabor(int labor) {
        this.labor = labor;
    }



}
