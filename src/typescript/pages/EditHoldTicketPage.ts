import Vue from 'vue';
import template from '/vue-templates/hold/editholdticket.html';
import Component from 'vue-class-component';
import BootstrapVue from "bootstrap-vue";
import HoldTicket  from '../domainObjects/hold/HoldTicket';
import EditHoldSAPInfo from "../components/holdComponents/editHoldSAPInfo";
import EditGeneralHoldDetails from "../components/holdComponents/editGeneralHoldDetails";
import EditHoldDefectDetails from "../components/holdComponents/editHoldDefectDetails";
import HoldFileAttachmentHandler from "../components/holdComponents/holdFileAttachmentHandler";
import EditHoldDisposition from "../components/holdComponents/editHoldDisposition";
import holdTicketService from "../services/holdTicketService";

declare var vueData:any;

Vue.use(BootstrapVue);

@Component({

    components: {

        EditHoldSAPInfo:EditHoldSAPInfo,
        EditHoldDetails:EditGeneralHoldDetails,
        EditHoldDefect:EditHoldDefectDetails,
        HoldFileAttachmentHandler:HoldFileAttachmentHandler,
        EditHoldDisposition: EditHoldDisposition

    },

    template: template

})

class EditHoldTicketPage extends Vue {
    // Initial data can be declared as instance properties
    readonly: boolean = true;
    holdTicket: HoldTicket = null;

    constructor() {
        super();
        this.holdTicket = new HoldTicket(vueData['holdTicket']);
    }


    mounted() {

    }


    onSubmit(evt) {

        let success = false;
        evt.preventDefault();
        let holdTicketJson = JSON.stringify(this.holdTicket.toJSON());
        console.log(holdTicketJson);
        holdTicketService.saveHoldTicket(holdTicketJson).then((data) => {
            success = data;
            if (success === true) {
                alert("Ticket Info Saved!");
                window.location.href = "/edit-hold-ticket/" + this.holdTicket.holdTicketId;;
            }

            else
                alert("Error!")
        }).catch((error) => {
            alert("error!");
            console.log(error);
        });



    }

    onReset(evt) {

        evt.preventDefault();
        console.log("form reset!");
    }

    editAll() {
        this.holdTicket.readonly = !this.holdTicket.readonly;
    }


}

Vue.component("editholdticketpage", EditHoldTicketPage);
new Vue({
    el: '#app',
});