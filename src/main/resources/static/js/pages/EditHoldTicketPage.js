System.register(["vue", "/vue-templates/hold/editholdticket.html", "vue-class-component", "bootstrap-vue", "../domainObjects/hold/HoldTicket", "../components/holdComponents/editHoldSAPInfo", "../components/holdComponents/editGeneralHoldDetails", "../components/holdComponents/editHoldDefectDetails", "../components/holdComponents/holdFileAttachmentHandler", "../components/holdComponents/editHoldDisposition", "../services/holdTicketService"], function (exports_1, context_1) {
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
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var vue_1, editholdticket_html_1, vue_class_component_1, bootstrap_vue_1, HoldTicket_1, editHoldSAPInfo_1, editGeneralHoldDetails_1, editHoldDefectDetails_1, holdFileAttachmentHandler_1, editHoldDisposition_1, holdTicketService_1, EditHoldTicketPage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (editholdticket_html_1_1) {
                editholdticket_html_1 = editholdticket_html_1_1;
            },
            function (vue_class_component_1_1) {
                vue_class_component_1 = vue_class_component_1_1;
            },
            function (bootstrap_vue_1_1) {
                bootstrap_vue_1 = bootstrap_vue_1_1;
            },
            function (HoldTicket_1_1) {
                HoldTicket_1 = HoldTicket_1_1;
            },
            function (editHoldSAPInfo_1_1) {
                editHoldSAPInfo_1 = editHoldSAPInfo_1_1;
            },
            function (editGeneralHoldDetails_1_1) {
                editGeneralHoldDetails_1 = editGeneralHoldDetails_1_1;
            },
            function (editHoldDefectDetails_1_1) {
                editHoldDefectDetails_1 = editHoldDefectDetails_1_1;
            },
            function (holdFileAttachmentHandler_1_1) {
                holdFileAttachmentHandler_1 = holdFileAttachmentHandler_1_1;
            },
            function (editHoldDisposition_1_1) {
                editHoldDisposition_1 = editHoldDisposition_1_1;
            },
            function (holdTicketService_1_1) {
                holdTicketService_1 = holdTicketService_1_1;
            }
        ],
        execute: function () {
            vue_1.default.use(bootstrap_vue_1.default);
            EditHoldTicketPage = /** @class */ (function (_super) {
                __extends(EditHoldTicketPage, _super);
                function EditHoldTicketPage() {
                    var _this = _super.call(this) || this;
                    // Initial data can be declared as instance properties
                    _this.readonly = true;
                    _this.holdTicket = null;
                    _this.holdTicket = new HoldTicket_1.default(vueData['holdTicket']);
                    return _this;
                }
                EditHoldTicketPage.prototype.mounted = function () {
                };
                EditHoldTicketPage.prototype.onSubmit = function (evt) {
                    var _this = this;
                    var success = false;
                    evt.preventDefault();
                    var holdTicketJson = JSON.stringify(this.holdTicket.toJSON());
                    console.log(holdTicketJson);
                    holdTicketService_1.default.saveHoldTicket(holdTicketJson).then(function (data) {
                        success = data;
                        if (success === true) {
                            alert("Ticket Info Saved!");
                            window.location.href = "/edit-hold-ticket/" + _this.holdTicket.holdTicketId;
                            ;
                        }
                        else
                            alert("Error!");
                    }).catch(function (error) {
                        alert("error!");
                        console.log(error);
                    });
                };
                EditHoldTicketPage.prototype.onReset = function (evt) {
                    evt.preventDefault();
                    console.log("form reset!");
                };
                EditHoldTicketPage.prototype.editAll = function () {
                    this.holdTicket.readonly = !this.holdTicket.readonly;
                };
                EditHoldTicketPage = __decorate([
                    vue_class_component_1.default({
                        components: {
                            EditHoldSAPInfo: editHoldSAPInfo_1.default,
                            EditHoldDetails: editGeneralHoldDetails_1.default,
                            EditHoldDefect: editHoldDefectDetails_1.default,
                            HoldFileAttachmentHandler: holdFileAttachmentHandler_1.default,
                            EditHoldDisposition: editHoldDisposition_1.default
                        },
                        template: editholdticket_html_1.default
                    }),
                    __metadata("design:paramtypes", [])
                ], EditHoldTicketPage);
                return EditHoldTicketPage;
            }(vue_1.default));
            vue_1.default.component("editholdticketpage", EditHoldTicketPage);
            new vue_1.default({
                el: '#app',
            });
        }
    };
});
//# sourceMappingURL=EditHoldTicketPage.js.map