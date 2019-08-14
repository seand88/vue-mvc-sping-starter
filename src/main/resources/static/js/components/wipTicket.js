System.register(["vue", "vue-class-component", "bootstrap-vue"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        }
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var vue_1, vue_class_component_1, bootstrap_vue_1, Wipticket;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (vue_class_component_1_1) {
                vue_class_component_1 = vue_class_component_1_1;
            },
            function (bootstrap_vue_1_1) {
                bootstrap_vue_1 = bootstrap_vue_1_1;
            }
        ],
        execute: function () {
            vue_1.default.use(bootstrap_vue_1.default);
            Wipticket = /** @class */ (function (_super) {
                __extends(Wipticket, _super);
                function Wipticket() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                // Initial data can be declared as instance properties
                Wipticket.prototype.mounted = function () {
                };
                Wipticket = __decorate([
                    vue_class_component_1.default({
                        props: {
                            wipTicket: {
                                type: Object,
                                required: true
                            }
                        },
                        template: "  \n    \n<b-container fluid>\n<!-- main card -->\n    <b-card header = \"WIP Ticket Details\" \n            header-bg-variant = \"primary\"\n            header-text-variant = \"white\"\n            border-variant = \"primary\">\n        <b-card-group deck >\n        <!-- SAP info card -->\n            <b-card title = \"SAP Information\" \n                    border-variant = \"secondary\">\n                <b-card-body>\n                    <b-row >\n                        <b-col><strong>Ticket #: </strong> {{wipTicket.wipTicketId}}</b-col>\n                    </b-row>\n                    <b-row >\n                        <b-col><strong>Production Order #: </strong> {{wipTicket.productionOrderNum}}</b-col>\n                         <b-col><strong>Production Order QTY: </strong>  <b-badge pill variant=\"primary\">{{wipTicket.productionOrderQty}}</b-badge></b-col>\n                    </b-row>\n                    <b-row >\n                        <b-col><strong>Plant: </strong> {{wipTicket.plantCode}}</b-col>\n                         <b-col><strong>Status: </strong> {{wipTicket.statusId}}</b-col>\n                    </b-row>\n                    <b-row >\n                        <b-col><strong>Material #: </strong> {{wipTicket.materialNum}}</b-col>\n                         <b-col><strong>Material Description: </strong> {{wipTicket.materialDesc}}</b-col>\n                    </b-row>\n                    <b-row >\n                        <b-col><strong>Sales Order #: </strong> {{wipTicket.salesOrderNum}}</b-col>\n                         <b-col><strong>Work Center: </strong> {{wipTicket.workCenter}}</b-col>\n                    </b-row>\n                    <b-row >\n                        <b-col><strong>Date on WIP: </strong> {{wipTicket.onHoldDate}}</b-col>\n                         <b-col><strong>On WIP By: </strong> {{wipTicket.onHoldBy}}</b-col>\n                    </b-row>\n                </b-card-body>\n            </b-card>\n    <!--Product info card -->\n            <b-card title = \"Product Information\"\n                    border-variant = \"secondary\">\n               <b-card-body>\n                    <b-list-group>\n                 \n                         <b-row >\n                                <b-col><strong>Reason Code: </strong> ?? </b-col>\n                            </b-row>\n                             <b-row >\n                                <b-col><strong>Color: </strong> {{wipTicket.color}} </b-col>\n                                <b-col><strong>Option #: </strong> {{wipTicket.optionNumber}} </b-col>\n                            </b-row>\n                 \n                            <b-row >\n                                <b-col><strong>Pieces in WIP: </strong>  <b-badge pill variant=\"primary\">{{wipTicket.qtyOnHold}}</b-badge> </b-col>\n                                <b-col><strong>Skids in WIP: </strong> <b-badge pill variant=\"primary\">{{wipTicket.stacksOnHold}}</b-badge>  </b-col>\n                               \n                            </b-row>\n                            \n                            <b-row >\n                                <b-col><strong>Production Date: </strong> {{wipTicket.prodDate}} </b-col>\n                                <b-col><strong>Shift Produced: </strong> {{wipTicket.shiftProduced}} </b-col>\n                            </b-row>\n                              <b-row >\n                                <b-col><strong>Line Number: </strong> {{wipTicket.lineItem}} </b-col>\n                                <b-col><strong>Comments: </strong> {{wipTicket.comments}} </b-col>\n                            </b-row>\n                       \n                    </b-list-group>\n               </b-card-body>\n            </b-card>\n        </b-card-group>\n        <b-card-footer> \n            <b-button v-b-tooltip.hover title=\"Edit\" variant = \"outline-primary\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></b-button> \n            <b-button v-b-tooltip.hover title = \"Print\" variant = \"outline-primary\"> <i class=\"fa fa-print\" aria-hidden=\"true\"></i></b-button>\n        </b-card-footer>\n    </b-card>\n\n</b-container>\n                       \n     \n",
                    })
                ], Wipticket);
                return Wipticket;
            }(vue_1.default));
            exports_1("default", Wipticket);
        }
    };
});
//# sourceMappingURL=wipticket.js.map