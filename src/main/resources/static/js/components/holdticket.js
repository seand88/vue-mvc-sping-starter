System.register(["vue", "vue-class-component", "bootstrap-vue", "/vue-templates/holdticketdetail.html"], function (exports_1, context_1) {
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
    var vue_1, vue_class_component_1, bootstrap_vue_1, holdticket_html_1, HoldTicket;
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
            function (holdticket_html_1_1) {
                holdticket_html_1 = holdticket_html_1_1;
            }
        ],
        execute: function () {
            vue_1.default.use(bootstrap_vue_1.default);
            HoldTicket = /** @class */ (function (_super) {
                __extends(HoldTicket, _super);
                function HoldTicket() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                // Initial data can be declared as instance properties
                HoldTicket.prototype.mounted = function () {
                };
                HoldTicket.prototype.editTicketURL = function (ticketid) {
                    return '/edit-hold-ticket/' + ticketid;
                };
                HoldTicket = __decorate([
                    vue_class_component_1.default({
                        props: {
                            holdTicket: {
                                type: Object,
                                required: true
                            }
                        },
                        template: holdticket_html_1.default
                    })
                ], HoldTicket);
                return HoldTicket;
            }(vue_1.default));
            exports_1("default", HoldTicket);
        }
    };
});
//# sourceMappingURL=holdticket.js.map