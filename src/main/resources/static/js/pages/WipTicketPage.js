System.register(["vue", "vue-class-component", "../components/wiptickettable"], function (exports_1, context_1) {
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
    var vue_1, vue_class_component_1, wiptickettable_1, WipTicketPage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (vue_class_component_1_1) {
                vue_class_component_1 = vue_class_component_1_1;
            },
            function (wiptickettable_1_1) {
                wiptickettable_1 = wiptickettable_1_1;
            }
        ],
        execute: function () {
            WipTicketPage = /** @class */ (function (_super) {
                __extends(WipTicketPage, _super);
                function WipTicketPage() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                // Initial data can be declared as instance properties
                WipTicketPage.prototype.mounted = function () {
                };
                WipTicketPage = __decorate([
                    vue_class_component_1.default({
                        components: { wiptickettable: wiptickettable_1.default },
                        template: "\n    \n        <div class = \"container-fluid\" id = \"bTableContainer\">\n            <wiptickettable></wiptickettable>\n        </div>\n \n",
                    })
                ], WipTicketPage);
                return WipTicketPage;
            }(vue_1.default));
            exports_1("default", WipTicketPage);
            vue_1.default.component("wipticketpage", WipTicketPage);
            new vue_1.default({
                el: '#app',
            });
        }
    };
});
//# sourceMappingURL=wipticketpage.js.map