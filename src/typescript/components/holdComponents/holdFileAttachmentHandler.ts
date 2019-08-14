import Vue from 'vue'
import Component from 'vue-class-component'
import BootstrapVue from "bootstrap-vue"
import template from '/vue-templates/hold/holdFileAttachments.html'
import HoldTicket from '../../domainObjects/hold/HoldTicket'
import holdTicketService from "../../services/holdTicketService";
import axios from "axios";

Vue.use(BootstrapVue);

@Component({
    props: {
        holdTicket: {
            type: HoldTicket,
            required: true
        }
    },
    template:template
})

export default class HoldFileAttachmentHandler extends Vue{

    formData = new FormData();
    attachments:any[] = [];
    filesToUpload:any[] = [];

    mounted(){

    }

    uploadFiles(id) {

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
   }

    fileChange(fileList) {
        this.formData.append("file", fileList[0], fileList[0].name);

    }

    deleteFile(index){
        let fileToDelete = this.attachments[index];
        let attachmentId = fileToDelete.attachmentId;
        let successfulDelete = false;

        holdTicketService.deleteAttachment(attachmentId).then((data) => {
            successfulDelete = data;
            this.attachments.splice(index,1);
        }).catch((error) => {
            alert(error);
        })
    }
}