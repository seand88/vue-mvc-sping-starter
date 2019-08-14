System.register(["axios"], function (exports_1, context_1) {
    "use strict";
    var axios_1, Sharedservice, plantservice;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (axios_1_1) {
                axios_1 = axios_1_1;
            }
        ],
        execute: function () {
            Sharedservice = /** @class */ (function () {
                function Sharedservice() {
                }
                Sharedservice.prototype.getAllPlants = function () {
                    return axios_1.default({
                        method: 'get',
                        url: "/getAllPlants",
                    })
                        .then(function (response) {
                        return response.data;
                    })
                        .catch(function (error) {
                        return error;
                    });
                };
                Sharedservice.prototype.getAllStatuses = function () {
                    return axios_1.default({
                        method: 'get',
                        url: '/getAllStatuses'
                    }).then(function (response) {
                        return response.data;
                    }).catch(function (error) {
                        return error;
                    });
                };
                Sharedservice.prototype.getPlantFromCode = function (plantCode) {
                    return axios_1.default({
                        method: 'get',
                        url: "/getPlantByCode",
                        params: { 'plantCode': plantCode }
                    })
                        .then(function (response) {
                        return response.data;
                    })
                        .catch(function (error) {
                        return error;
                    });
                };
                Sharedservice.prototype.getStatusByCode = function (statusCode) {
                    return axios_1.default({
                        method: 'get',
                        url: "/getStatusByCode",
                        params: { 'statusCode': statusCode }
                    })
                        .then(function (response) {
                        return response.data;
                    })
                        .catch(function (error) {
                        return error;
                    });
                };
                return Sharedservice;
            }());
            exports_1("Sharedservice", Sharedservice);
            plantservice = new Sharedservice();
            exports_1("default", plantservice);
        }
    };
});
//# sourceMappingURL=sharedservice.js.map