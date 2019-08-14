System.register(["vue", "vue-class-component", "./holdTicketDetail", "../../services/holdTicketService", "bootstrap-vue", "/vue-templates/hold/holdtickettable.html", "../../domainObjects/hold/HoldTicket"], function (exports_1, context_1) {
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
    var vue_1, vue_class_component_1, holdTicketDetail_1, holdTicketService_1, bootstrap_vue_1, bootstrap_vue_2, holdtickettable_html_1, HoldTicket_1, HoldTicketTable;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (vue_class_component_1_1) {
                vue_class_component_1 = vue_class_component_1_1;
            },
            function (holdTicketDetail_1_1) {
                holdTicketDetail_1 = holdTicketDetail_1_1;
            },
            function (holdTicketService_1_1) {
                holdTicketService_1 = holdTicketService_1_1;
            },
            function (bootstrap_vue_1_1) {
                bootstrap_vue_1 = bootstrap_vue_1_1;
                bootstrap_vue_2 = bootstrap_vue_1_1;
            },
            function (holdtickettable_html_1_1) {
                holdtickettable_html_1 = holdtickettable_html_1_1;
            },
            function (HoldTicket_1_1) {
                HoldTicket_1 = HoldTicket_1_1;
            }
        ],
        execute: function () {
            vue_1.default.use(bootstrap_vue_1.default, bootstrap_vue_2.default);
            HoldTicketTable = /** @class */ (function (_super) {
                __extends(HoldTicketTable, _super);
                function HoldTicketTable() {
                    // Initial data can be declared as instance properties
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.hover = true;
                    _this.fields = [];
                    _this.holdTickets = [];
                    _this.currentPage = null;
                    _this.perPage = null;
                    _this.totalRows = null;
                    _this.sortBy = null;
                    _this.sortDesc = null;
                    _this.sortDirection = null;
                    _this.filter = "";
                    return _this;
                }
                /*working on server side pagination
                pagesize: number = 0;
                pagenum: number = 10;*/
                HoldTicketTable.prototype.mounted = function () {
                    var _this = this;
                    holdTicketService_1.default.getHoldTickets().then(function (data) {
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var ticket = data_1[_i];
                            var tempHoldTicket = new HoldTicket_1.default(ticket);
                            _this.holdTickets.push(tempHoldTicket);
                        }
                    });
                    this.fields = [
                        { key: 'holdTicketId', label: 'Ticket #', sortable: true, sortDirection: 'desc' },
                        { key: 'statusId', label: 'Status' },
                        { key: 'salesOrderNum', label: 'Order Number', sortable: true, 'class': 'text-center' },
                        { key: 'qtyOnHold', sortable: true, label: 'QTY' },
                        { key: 'materialDesc', label: 'Material Description', sortable: true, sortDirection: 'desc' },
                        { key: 'dispositionId', label: 'Disposition', sortable: true, sortDirection: 'desc' },
                        { key: 'plantCode', label: 'Plant', sortable: true, sortDirection: 'desc' },
                        { key: 'actions', label: 'Edit/Action Tracking', 'class': 'text-center' }
                    ];
                    this.currentPage = 1;
                    this.perPage = 15;
                    this.totalRows = this.holdTickets.length;
                    this.sortBy = null;
                    this.sortDesc = null;
                    this.sortDirection = 'asc';
                    this.filter = '';
                    this.hover = true;
                };
                HoldTicketTable.prototype.onFiltered = function (filteredItems) {
                    // Trigger pagination to update the number of buttons/pages due to filtering
                    this.totalRows = filteredItems.length;
                    this.currentPage = 1;
                };
                HoldTicketTable = __decorate([
                    vue_class_component_1.default({
                        components: { HoldTicketDetail: holdTicketDetail_1.default },
                        template: holdtickettable_html_1.default
                    })
                ], HoldTicketTable);
                return HoldTicketTable;
            }(vue_1.default));
            exports_1("default", HoldTicketTable);
        }
    };
});
//# sourceMappingURL=holdtickettable.js.map