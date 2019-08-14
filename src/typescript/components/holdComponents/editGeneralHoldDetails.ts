import Vue from 'vue'
import Component from 'vue-class-component'
import BootstrapVue from "bootstrap-vue"
import template from '/vue-templates/hold/holdDetailsGeneral.html'
import HoldTicket from '../../domainObjects/hold/HoldTicket'
import PlantStatusPicker from "../plantStatusPicker";

Vue.use(BootstrapVue);

@Component({
    components:{PlantStatusPicker:PlantStatusPicker},
    props: {
        holdTicket: {
            type: HoldTicket,
            required: true
        }
    },
    template:template
})

export default class EditGeneralHoldDetails extends Vue{

    mounted(){

    }



}