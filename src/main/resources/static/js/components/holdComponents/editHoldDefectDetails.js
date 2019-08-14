System.register(["vue", "vue-class-component", "bootstrap-vue", "/vue-templates/hold/holdDefectDetails.html", "../../domainObjects/hold/HoldTicket", "../../services/holdTicketService"], function (exports_1, context_1) {
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
    var vue_1, vue_class_component_1, bootstrap_vue_1, holdDefectDetails_html_1, HoldTicket_1, holdTicketService_1, EditHoldDefectDetails;
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
            function (holdDefectDetails_html_1_1) {
                holdDefectDetails_html_1 = holdDefectDetails_html_1_1;
            },
            function (HoldTicket_1_1) {
                HoldTicket_1 = HoldTicket_1_1;
            },
            function (holdTicketService_1_1) {
                holdTicketService_1 = holdTicketService_1_1;
            }
        ],
        execute: function () {
            vue_1.default.use(bootstrap_vue_1.default);
            EditHoldDefectDetails = /** @class */ (function (_super) {
                __extends(EditHoldDefectDetails, _super);
                function EditHoldDefectDetails() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.defects = [];
                    return _this;
                }
                EditHoldDefectDetails.prototype.mounted = function () {
                    var _this = this;
                    holdTicketService_1.default.getDefects().then(function (data) {
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var defect = data_1[_i];
                            var mappedDefect = { value: defect.id, text: defect.desc };
                            _this.defects.push(mappedDefect);
                        }
                    });
                };
                EditHoldDefectDetails = __decorate([
                    vue_class_component_1.default({
                        props: {
                            holdTicket: {
                                type: HoldTicket_1.default,
                                required: true
                            }
                        },
                        template: holdDefectDetails_html_1.default
                    })
                ], EditHoldDefectDetails);
                return EditHoldDefectDetails;
            }(vue_1.default));
            exports_1("default", EditHoldDefectDetails);
        }
    };
});
//# sourceMappingURL=editHoldDefectDetails.js.map