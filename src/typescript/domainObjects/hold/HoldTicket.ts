import moment from "moment";

export default class HoldTicket {

    closedBy: string;
    closedDate: any;
    color: string;
    comments: string;
    cparNum: string;
    defectId: number;
    dispositionBy: string;
    dispositionComments: string;
    dispositionDate: any;
    dispositionId: number;
    holdDate: any;
    holdTicketId: number;
    lineItem: string;
    materialDesc: string;
    materialNumber: string;
    onHoldBy: string;
    optionNumber: string;
    parentId: number;
    plantCode: string;
    prodOrderNum: string;
    prodOrderQty: string;
    producedByShift: string;
    productionDate: any;
    purchaseOrderNum: string;
    qtyOnHold: string;
    readonly: boolean;
    responsibleForAction: string;
    returnAuthNum: string;
    reverificationRequired: string;
    salesOrderNum: string;
    skidNumbersOnHold: string;
    statusId: number;
    totalSkids: string;
    workCenter: string;


    constructor(holdTicket) {

        this.holdTicketId = holdTicket.holdTicketId;
        this.parentId = holdTicket.parentId;
        this.dispositionId = holdTicket.dispositionId;
        this.defectId = holdTicket.defectId;
        this.plantCode = holdTicket.plantCode;
        this.statusId = holdTicket.statusId;
        this.prodOrderNum = holdTicket.prodOrderNum;
        this.prodOrderQty = holdTicket.prodOrderQty;
        this.salesOrderNum = holdTicket.salesOrderNum;
        this.returnAuthNum = holdTicket.returnAuthNum;
        this.purchaseOrderNum = holdTicket.purchaseOrderNum;
        this.materialDesc = holdTicket.materialDesc;
        this.materialNumber = holdTicket.materialNumber;
        this.lineItem = holdTicket.lineItem;
        this.optionNumber = holdTicket.optionNumber;
        this.color = holdTicket.color;
        this.workCenter = holdTicket.workCenter;
        this.producedByShift = holdTicket.producedByShift;
        this.qtyOnHold = holdTicket.qtyOnHold;
        this.totalSkids = holdTicket.totalSkids;
        this.skidNumbersOnHold = holdTicket.skidNumbersOnHold;
        this.onHoldBy = holdTicket.onHoldBy;
        this.closedBy = holdTicket.closedBy;
        this.comments = holdTicket.comments;
        this.dispositionComments = holdTicket.dispositionComments;
        this.reverificationRequired = holdTicket.reverificationRequired;
        this.responsibleForAction = holdTicket.responsibleForAction;
        this.dispositionBy = holdTicket.dispositionBy;
        this.cparNum = holdTicket.cparNum;
        this.readonly = true;

        this.dispositionDate = this.dateToString(holdTicket.dispositionDate);
        this.closedDate = this.dateToString(holdTicket.closedDate);
        this.holdDate = this.dateToString(holdTicket.holdDate);
        this.productionDate = this.dateToString(holdTicket.productionDate);
    }

    calculateDaysOpen(): number {

        if (this.holdDate) {

            let today = new Date().toISOString().split('T');
            let end = new Date(this.holdDate).toISOString().split('T');
            let momentToday = moment(today[0], 'YYYY-MM-DD');
            let momentEnd = moment(end[0], 'YYYY-MM-DD');
            return Math.abs(momentEnd.diff(momentToday, "days"));

        } else {
            return 0;
        }
    }

    dateToString(dateString): string {

        if (dateString) {

            let date = new Date(dateString).toISOString().split('T');
            return date[0];

        } else {
            return "Date Not Set";
        }
    }

    stringToDate(dateString): Date {

        return new Date(dateString);

    }

    toJSON() {
        return {
            holdTicketId: this.holdTicketId,
            parentId: this.parentId,
            dispositionId: this.dispositionId,
            defectId: this.defectId,
            plantCode: this.plantCode,
            statusId: this. statusId,
            prodOrderNum: this.prodOrderNum,
            prodOrderQty: this.prodOrderQty,
            salesOrderNum: this.salesOrderNum,
            returnAuthNum: this.returnAuthNum,
            purchaseOrderNum: this.purchaseOrderNum,
            materialDesc: this.materialDesc,
            materialNumber: this.materialNumber,
            lineItem: this.lineItem,
            optionNumber: this.optionNumber,
            color: this.color,
            workCenter: this.workCenter,
            producedByShift: this.producedByShift,
            qtyOnHold: this.qtyOnHold,
            totalSkids: this.totalSkids,
            skidNumbersOnHold: this.skidNumbersOnHold,
            onHoldBy: this.onHoldBy,
            closedBy: this.closedBy,
            comments: this.comments,
            dispositionComments: this.dispositionComments,
            reverificationRequired: this.reverificationRequired,
            responsibleForAction: this.responsibleForAction,
            dispositionBy: this.dispositionBy,
            cparNum: this.cparNum,
            dispositionDate: this.stringToDate(this.dispositionDate),
            closedDate: this.stringToDate(this.closedDate),
            holdDate: this.stringToDate(this.holdDate),
            productionDate: this.stringToDate(this.productionDate)
        }
  }
}
