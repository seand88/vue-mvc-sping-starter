System.register(["axios"], function (exports_1, context_1) {
    "use strict";
    var axios_1, HoldTicketService, holdTicketService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (axios_1_1) {
                axios_1 = axios_1_1;
            }
        ],
        execute: function () {
            HoldTicketService = /** @class */ (function () {
                function HoldTicketService() {
                }
                HoldTicketService.prototype.getHoldTickets = function () {
                    return axios_1.default({
                        method: 'get',
                        url: "/holdTickets",
                    })
                        .then(function (response) {
                        return response.data;
                    })
                        .catch(function (error) {
                        return error;
                    });
                };
                HoldTicketService.prototype.getPagedHoldTickets = function () {
                    return axios_1.default({
                        method: 'get',
                        url: "/pagedHoldTickets",
                    })
                        .then(function (response) {
                        return response.data;
                    })
                        .catch(function (error) {
                        return error;
                    });
                };
                HoldTicketService.prototype.getDefects = function () {
                    return axios_1.default({
                        method: 'get',
                        url: "/getAllDefects"
                    })
                        .then(function (response) {
                        return response.data;
                    })
                        .catch(function (error) {
                        return error;
                    });
                };
                HoldTicketService.prototype.getVerifications = function () {
                    return axios_1.default({
                        method: 'get',
                        url: "/getAllVerifications"
                    })
                        .then(function (response) {
                        return response.data;
                    })
                        .catch(function (error) {
                        return error;
                    });
                };
                HoldTicketService.prototype.getDispositions = function () {
                    return axios_1.default({
                        method: 'get',
                        url: "/getAllDispositions"
                    })
                        .then(function (response) {
                        return response.data;
                    })
                        .catch(function (error) {
                        return error;
                    });
                };
                HoldTicketService.prototype.getAttachments = function (holdTicketId) {
                    return axios_1.default({
                        method: 'get',
                        url: "/getHoldTicketAttachments",
                        params: { ticketId: holdTicketId }
                    }).then(function (response) {
                        return response.data;
                    }).catch(function (error) {
                        return error;
                    });
                };
                HoldTicketService.prototype.deleteAttachment = function (attachmentId) {
                    return axios_1.default({
                        method: 'get',
                        url: '/deleteHoldTicketAttachment',
                        params: { attachmentId: attachmentId }
                    }).then(function (response) {
                        return response.data;
                    }).catch(function (error) {
                        return error;
                    });
                };
                HoldTicketService.prototype.saveHoldTicket = function (holdTicketjson) {
                    return axios_1.default({
                        method: 'post',
                        url: "/saveHoldTicket",
                        params: { holdTicket: holdTicketjson }
                    })
                        .then(function (response) {
                        return response.data;
                    })
                        .catch(function (error) {
                        return error;
                    });
                };
                return HoldTicketService;
            }());
            exports_1("HoldTicketService", HoldTicketService);
            holdTicketService = new HoldTicketService();
            exports_1("default", holdTicketService);
        }
    };
});
//# sourceMappingURL=holdTicketService.js.map