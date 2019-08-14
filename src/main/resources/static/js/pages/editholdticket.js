System.register(["vue", "/vue-templates/editholdticket.html", "vue-class-component", "bootstrap-vue", "../services/sharedservice", "../services/holdTicketService", "moment"], function (exports_1, context_1) {
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
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var vue_1, editholdticket_html_1, vue_class_component_1, bootstrap_vue_1, sharedservice_1, holdTicketService_1, moment_1, EditHoldTicket;
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
            function (sharedservice_1_1) {
                sharedservice_1 = sharedservice_1_1;
            },
            function (holdTicketService_1_1) {
                holdTicketService_1 = holdTicketService_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            }
        ],
        execute: function () {
            vue_1.default.use(bootstrap_vue_1.default, moment_1.default);
            EditHoldTicket = /** @class */ (function (_super) {
                __extends(EditHoldTicket, _super);
                function EditHoldTicket() {
                    var _this = _super.call(this) || this;
                    // Initial data can be declared as instance properties
                    _this.verifications = [];
                    _this.formattedVerifications = [];
                    _this.defects = [];
                    _this.formattedDefects = [];
                    _this.dispositions = [];
                    _this.formattedDispositions = [];
                    _this.statuses = [];
                    _this.plants = [];
                    _this.formattedPlants = [];
                    _this.readonly = true;
                    _this.formData = new FormData();
                    _this.attachments = [];
                    _this.filesToUpload = [];
                    return _this;
                }
                EditHoldTicket.prototype.mounted = function () {
                    var _this = this;
                    // @ts-ignore
                    this.statuses = [
                        { value: 1, text: "Open" },
                        { value: 2, text: "Closed" }
                    ];
                    sharedservice_1.default.getAllPlants().then(function (data) {
                        _this.plants = data;
                        console.log(typeof (data));
                        for (var _i = 0, _a = _this.plants; _i < _a.length; _i++) {
                            var plant = _a[_i];
                            _this.formattedPlants.push({ value: plant['code'], text: plant['desc'] });
                        }
                    });
                    holdTicketService_1.default.getDefects().then(function (data) {
                        _this.defects = data;
                        for (var _i = 0, _a = _this.defects; _i < _a.length; _i++) {
                            var defect = _a[_i];
                            _this.formattedDefects.push({ value: defect['id'], text: defect['desc'] });
                        }
                    });
                    holdTicketService_1.default.getDispositions().then(function (data) {
                        _this.dispositions = data;
                        for (var _i = 0, _a = _this.dispositions; _i < _a.length; _i++) {
                            var disposition = _a[_i];
                            _this.formattedDispositions.push({ value: disposition['id'], text: disposition['desc'] });
                        }
                    });
                    holdTicketService_1.default.getVerifications().then(function (data) {
                        _this.verifications = data;
                        for (var _i = 0, _a = _this.verifications; _i < _a.length; _i++) {
                            var verification = _a[_i];
                            _this.formattedVerifications.push({ value: verification['id'], text: verification['desc'] });
                        }
                    });
                };
                EditHoldTicket.prototype.fileChange = function (fileList) {
                    this.formData.append("file", fileList[0], fileList[0].name);
                    for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
                        var file = fileList_1[_i];
                        this.filesToUpload.push(file);
                    }
                };
                /*uploadFiles() {
            
                    //Can only send MultipartFile and String objects when consuming multipart/form-data -> parse id String to int on backend
                    this.formData.append("id",id+"");
            
                    axios.post( "/saveHoldAttachments",this.formData,
                        {
                            headers: {
                                'Content-Type': undefined
                            }
                        }).then(result => {
                            alert("File Uploaded Successfully!");
            
                        }).catch(function(){
                             alert("Error Uploading File!")
                    })
                }*/
                EditHoldTicket.prototype.onSubmit = function (evt) {
                    evt.preventDefault();
                    /*let successfulSubmit = false;
                    let jsonString = JSON.stringify(this.holdTicket);
                    console.log(jsonString);
                    holdTicketService.saveHoldTicket(jsonString).then((data) => {
                        successfulSubmit = data;
                        if (successfulSubmit === true) {
                           alert("Saved successfully!");
                           window.location.href = "/edit-hold-ticket/" + this.holdTicket.holdTicketId;
                        }
                        else {
                            alert("error during saving process!")
                        }
                    });*/
                };
                EditHoldTicket.prototype.onReset = function (evt) {
                    evt.preventDefault();
                    console.log("form reset!");
                };
                EditHoldTicket.prototype.editAll = function () {
                    this.readonly = !this.readonly;
                };
                EditHoldTicket.prototype.removeUpload = function (index) {
                    this.filesToUpload.splice(index, 1);
                };
                EditHoldTicket.prototype.deleteFile = function (index) {
                    var _this = this;
                    var fileToDelete = this.attachments[index];
                    var attachmentId = fileToDelete['attachmentId'];
                    var successfulDelete = false;
                    holdTicketService_1.default.deleteAttachment(attachmentId).then(function (data) {
                        successfulDelete = data;
                        _this.attachments.splice(index, 1);
                    }).catch(function (error) {
                        alert(error);
                    });
                };
                EditHoldTicket = __decorate([
                    vue_class_component_1.default({
                        template: editholdticket_html_1.default
                    }),
                    __metadata("design:paramtypes", [])
                ], EditHoldTicket);
                return EditHoldTicket;
            }(vue_1.default));
            vue_1.default.component("editholdticket", EditHoldTicket);
            new vue_1.default({
                el: '#app',
            });
        }
    };
});
//# sourceMappingURL=editholdticket.js.map