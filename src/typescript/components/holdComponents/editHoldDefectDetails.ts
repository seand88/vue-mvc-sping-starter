import Vue from 'vue'
import Component from 'vue-class-component'
import BootstrapVue from "bootstrap-vue"
import template from '/vue-templates/hold/holdDefectDetails.html'
import HoldTicket  from '../../domainObjects/hold/HoldTicket'
import Defect from "../../domainObjects/hold/Defect";
import holdTicketService from "../../services/holdTicketService";

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

export default class EditHoldDefectDetails extends Vue{

    defects: Defect[] = [];

    mounted(){

        holdTicketService.getDefects().then((data) => {

            for (let defect of data) {

              let mappedDefect:Defect = { value: defect.id, text: defect.desc };
              this.defects.push(mappedDefect);

            }
        });
    }
}