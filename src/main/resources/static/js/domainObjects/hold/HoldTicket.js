System.register(["moment"], function (exports_1, context_1) {
    "use strict";
    var moment_1, HoldTicket;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (moment_1_1) {
                moment_1 = moment_1_1;
            }
        ],
        execute: function () {
            HoldTicket = /** @class */ (function () {
                function HoldTicket(holdTicket) {
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
                HoldTicket.prototype.calculateDaysOpen = function () {
                    if (this.holdDate) {
                        var today = new Date().toISOString().split('T');
                        var end = new Date(this.holdDate).toISOString().split('T');
                        var momentToday = moment_1.default(today[0], 'YYYY-MM-DD');
                        var momentEnd = moment_1.default(end[0], 'YYYY-MM-DD');
                        return Math.abs(momentEnd.diff(momentToday, "days"));
                    }
                    else {
                        return 0;
                    }
                };
                HoldTicket.prototype.dateToString = function (dateString) {
                    if (dateString) {
                        var date = new Date(dateString).toISOString().split('T');
                        return date[0];
                    }
                    else {
                        return "Date Not Set";
                    }
                };
                HoldTicket.prototype.stringToDate = function (dateString) {
                    return new Date(dateString);
                };
                HoldTicket.prototype.toJSON = function () {
                    return {
                        holdTicketId: this.holdTicketId,
                        parentId: this.parentId,
                        dispositionId: this.dispositionId,
                        defectId: this.defectId,
                        plantCode: this.plantCode,
                        statusId: this.statusId,
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
                    };
                };
                return HoldTicket;
            }());
            exports_1("default", HoldTicket);
        }
    };
});
//# sourceMappingURL=HoldTicket.js.map