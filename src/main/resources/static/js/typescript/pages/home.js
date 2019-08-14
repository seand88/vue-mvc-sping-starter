System.register(["vue", "../components/ticket", "../services/ticketservice", "vue-class-component"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
    var __moduleName = context_1 && context_1.id;
    var vue_1, ticket_1, ticketservice_1, vue_class_component_1, HomePage;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (ticket_1_1) {
                ticket_1 = ticket_1_1;
            },
            function (ticketservice_1_1) {
                ticketservice_1 = ticketservice_1_1;
            },
            function (vue_class_component_1_1) {
                vue_class_component_1 = vue_class_component_1_1;
            }
        ],
        execute: function () {
            HomePage = /** @class */ (function (_super) {
                __extends(HomePage, _super);
                function HomePage() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    // Initial data can be declared as instance properties
                    _this.holdTickets = null;
                    _this.wipTickets = null;
                    return _this;
                }
                HomePage.prototype.mounted = function () {
                    var _this = this;
                    //get all hold tickets
                    ticketservice_1.default.getHoldTickets().then(function (data) {
                        _this.holdTickets = data;
                        //debug only
                        _this.holdTickets.forEach(function (value) {
                            console.log(value);
                        });
                    });
                    //get all wip tickets
                    ticketservice_1.default.getWipTickets().then(function (data) {
                        _this.wipTickets = data;
                        //debug only
                        _this.wipTickets.forEach(function (value) {
                            console.log(value);
                        });
                    });
                };
                HomePage = __decorate([
                    vue_class_component_1.default({
                        components: { Ticket: ticket_1.default },
                        template: "\n   <div class=\"homePage\">\n        <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class =\"container\" style=\"text-align: center\">\n            <h2>Hold Ticket Overview</h2>\n                <h3>testing stuff</h3>\n            </div>\n        </div>\n        <div class = \"container\">\n        <!-- table for all hold tickets -->\n            <table class=\"table table-bordered table-hover\">\n                <thead>\n                      <th>Hold Ticket ID</th> \n                      <th>Sales Order Number</th>\n                      <th>Material Description</th>\n                      <th>Material Number</th>\n                      <th>On Hold By</th>\n                      <th>Options</th>                     \n                </thead>\n                <tbody>\n                     <tr v-for=\"holdTicket in holdTickets\">\n                            <td>{{holdTicket.holdTicketId}}</td> \n                            <td>{{holdTicket.salesOrderNum}}</td> \n                            <td>{{holdTicket.materialDesc}}</td> \n                            <td>{{holdTicket.materialNumber}}</td> \n                            <td>{{holdTicket.onHoldBy}}</td> \n                            <td><Ticket></Ticket></td> \n                    </tr>\n              </tbody>\n             </table>   \n             <!--end hold ticket table -->\n             \n             <!--begin wip ticket table -->\n             <div class=\"row\">\n                <div class =\"container\" style=\"text-align: center\">\n                    <h2>WIP Ticket Overview</h2>\n                </div>\n             </div>\n             <table class=\"table table-bordered table-hover\">\n                <thead>\n                      <th>Wip Ticket ID</th> \n                      <th>Sales Order Number</th>\n                      <th>Material Description</th>\n                      <th>Material Number</th>\n                      <th>On Hold By</th>\n                      <th>Options</th>                     \n                </thead>\n                <tbody>\n                     <tr v-for=\"wipTicket in wipTickets\">\n                            <td>{{wipTicket.wipTicketId}}</td> \n                            <td>{{wipTicket.salesOrderNum}}</td> \n                            <td>{{wipTicket.materialDesc}}</td> \n                            <td>{{wipTicket.materialNum}}</td> \n                            <td>{{wipTicket.onHoldBy}}</td> \n                            <td><Ticket></Ticket></td> \n                    </tr>\n              </tbody>\n             </table>   \n             \n           </div>                 \n        </div>\n    </div>\n   ",
                    })
                ], HomePage);
                return HomePage;
            }(vue_1.default));
            vue_1.default.component("homepage", HomePage);
            new vue_1.default({
                el: '#app'
            });
        }
    };
});
//# sourceMappingURL=home.js.map