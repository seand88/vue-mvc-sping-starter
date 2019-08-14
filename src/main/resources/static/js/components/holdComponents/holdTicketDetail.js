System.register(["vue", "vue-class-component", "bootstrap-vue", "/vue-templates/hold/holdticketdetail.html", "../../domainObjects/hold/HoldTicket"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
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
    var vue_1, vue_class_component_1, bootstrap_vue_1, holdticketdetail_html_1, HoldTicket_1, HoldTicketDetail;
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
            },
            function (holdticketdetail_html_1_1) {
                holdticketdetail_html_1 = holdticketdetail_html_1_1;
            },
            function (HoldTicket_1_1) {
                HoldTicket_1 = HoldTicket_1_1;
            }
        ],
        execute: function () {
            vue_1.default.use(bootstrap_vue_1.default);
            HoldTicketDetail = /** @class */ (function (_super) {
                __extends(HoldTicketDetail, _super);
                function HoldTicketDetail() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                // Initial data can be declared as instance properties
                HoldTicketDetail.prototype.mounted = function () {
                };
                HoldTicketDetail.prototype.editTicketURL = function (ticketid) {
                    return '/edit-hold-ticket/' + ticketid;
                };
                HoldTicketDetail.prototype.actionTrackingURL = function (ticketId) {
                    //return '/hold-action-tracking/' + ticketId;
                };
                HoldTicketDetail = __decorate([
                    vue_class_component_1.default({
                        props: {
                            holdTicket: {
                                type: HoldTicket_1.default,
                                required: true
                            }
                        },
                        template: holdticketdetail_html_1.default
                    })
                ], HoldTicketDetail);
                return HoldTicketDetail;
            }(vue_1.default));
            exports_1("default", HoldTicketDetail);
        }
    };
});
//# sourceMappingURL=holdTicketDetail.js.map