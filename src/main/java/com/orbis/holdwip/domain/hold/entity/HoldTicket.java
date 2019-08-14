package com.orbis.holdwip.domain.hold.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.orbis.holdwip.domain.hold.Defect;

@Entity
public class HoldTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long holdTicketId;
    private Long parentId;
    private int dispositionId;
    private int defectId;
    private String plantCode;
    private int statusId;
    private String prodOrderNum;
    private String prodOrderQty;
    private String salesOrderNum;
    private String returnAuthNum;
    private String purchaseOrderNum;
    private String materialDesc;
    private String materialNumber;
    private String lineItem;
    private String optionNumber;
    private String color;
    private String workCenter;
    private String producedByShift;
    private String qtyOnHold;
    private String totalSkids;
    private String skidNumbersOnHold;
    private String onHoldBy;
    private String closedBy;
    private String comments;
    private String dispositionComments;
    private String reverificationRequired;
    private String responsibleForAction;
    private String dispositionBy;
    private String cparNum;
    private Date productionDate;
    private Date holdDate;
    private Date dispositionDate;
    private Date closedDate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="holdTicket")
    @JsonManagedReference
    private Set<HoldTicketAttachment> attachments;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="holdTicket")
    private Set<HoldActionItem> actionItems;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="holdTicket")
    private Set<HoldQiDetail> qiDetails;

    @Transient
    int labor;

    public Long getHoldTicketId() {
        return holdTicketId;
    }

    public void setHoldTicketId(Long holdTicketId) {
        this.holdTicketId = holdTicketId;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public int getDispositionId() {
        return dispositionId;
    }

    public void setDispositionId(int dispositionId) {
        this.dispositionId = dispositionId;
    }

    public int getDefectId() {
        return defectId;
    }

    public void setDefectId(int defectId) {
        this.defectId = defectId;
    }

    public String getPlantCode() {
        return plantCode;
    }

    public void setPlantCode(String plantCode) {
        this.plantCode = plantCode;
    }

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
    }

    public String getProdOrderNum() {
        return prodOrderNum;
    }

    public void setProdOrderNum(String prodOrderNum) {
        this.prodOrderNum = prodOrderNum;
    }

    public String getProdOrderQty() {
        return prodOrderQty;
    }

    public void setProdOrderQty(String prodOrderQty) {
        this.prodOrderQty = prodOrderQty;
    }

    public String getSalesOrderNum() {
        return salesOrderNum;
    }

    public void setSalesOrderNum(String salesOrderNum) {
        this.salesOrderNum = salesOrderNum;
    }

    public String getReturnAuthNum() {
        return returnAuthNum;
    }

    public void setReturnAuthNum(String returnAuthNum) {
        this.returnAuthNum = returnAuthNum;
    }

    public String getPurchaseOrderNum() {
        return purchaseOrderNum;
    }

    public void setPurchaseOrderNum(String purchaseOrderNum) {
        this.purchaseOrderNum = purchaseOrderNum;
    }

    public String getMaterialDesc() {
        return materialDesc;
    }

    public void setMaterialDesc(String materialDesc) {
        this.materialDesc = materialDesc;
    }

    public String getMaterialNumber() {
        return materialNumber;
    }

    public void setMaterialNumber(String materialNumber) {
        this.materialNumber = materialNumber;
    }

    public String getLineItem() {
        return lineItem;
    }

    public void setLineItem(String lineItem) {
        this.lineItem = lineItem;
    }

    public String getOptionNumber() {
        return optionNumber;
    }

    public void setOptionNumber(String optionNumber) {
        this.optionNumber = optionNumber;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getWorkCenter() {
        return workCenter;
    }

    public void setWorkCenter(String workCenter) {
        this.workCenter = workCenter;
    }

    public String getProducedByShift() {
        return producedByShift;
    }

    public void setProducedByShift(String producedByShift) {
        this.producedByShift = producedByShift;
    }

    public String getQtyOnHold() {
        return qtyOnHold;
    }

    public void setQtyOnHold(String qtyOnHold) {
        this.qtyOnHold = qtyOnHold;
    }

    public String getTotalSkids() {
        return totalSkids;
    }

    public void setTotalSkids(String totalSkids) {
        this.totalSkids = totalSkids;
    }

    public String getSkidNumbersOnHold() {
        return skidNumbersOnHold;
    }

    public void setSkidNumbersOnHold(String skidNumbersOnHold) {
        this.skidNumbersOnHold = skidNumbersOnHold;
    }

    public String getOnHoldBy() {
        return onHoldBy;
    }

    public void setOnHoldBy(String onHoldBy) {
        this.onHoldBy = onHoldBy;
    }

    public String getClosedBy() {
        return closedBy;
    }

    public void setClosedBy(String closedBy) {
        this.closedBy = closedBy;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getDispositionComments() {
        return dispositionComments;
    }

    public void setDispositionComments(String dispositionComments) {
        this.dispositionComments = dispositionComments;
    }

    public String getReverificationRequired() {
        return reverificationRequired;
    }

    public void setReverificationRequired(String reverificationRequired) {
        this.reverificationRequired = reverificationRequired;
    }

    public String getResponsibleForAction() {
        return responsibleForAction;
    }

    public void setResponsibleForAction(String responsibleForAction) {
        this.responsibleForAction = responsibleForAction;
    }

    public String getDispositionBy() {
        return dispositionBy;
    }

    public void setDispositionBy(String dispositionBy) {
        this.dispositionBy = dispositionBy;
    }

    public String getCparNum() {
        return cparNum;
    }

    public void setCparNum(String cparNum) {
        this.cparNum = cparNum;
    }

    public Date getProductionDate() {
        return productionDate;
    }

    public void setProductionDate(Date productionDate) {
        this.productionDate = productionDate;
    }

    public Date getHoldDate() {
        return holdDate;
    }

    public void setHoldDate(Date holdDate) {
        this.holdDate = holdDate;
    }

    public Date getDispositionDate() {
        return dispositionDate;
    }

    public void setDispositionDate(Date dispositionDate) {
        this.dispositionDate = dispositionDate;
    }

    public Date getClosedDate() {
        return closedDate;
    }

    public void setClosedDate(Date closedDate) {
        this.closedDate = closedDate;
    }

    //@JsonIgnore
    public Set<HoldTicketAttachment> getAttachments() {
        return attachments;
    }

    public void setAttachments(Set<HoldTicketAttachment> attachments) {
        this.attachments = attachments;
    }

    public Set<HoldActionItem> getActionItems() {
        return actionItems;
    }

    public void setActionItems(Set<HoldActionItem> actionItems) {
        this.actionItems = actionItems;
    }

    public Set<HoldQiDetail> getQiDetails() {
        return qiDetails;
    }

    public void setQiDetails(Set<HoldQiDetail> qiDetails) {
        this.qiDetails = qiDetails;
    }

    public int getLabor() {
        return labor;
    }

    public void setLabor(int labor) {
        this.labor = labor;
    }

    //get defect description
    public String getDefectDesc (int defectId){
        defectId = this.defectId;
        //get the defect description based on the ID
        return Defect.getDefectFromId(defectId).getDesc();
    }
}
