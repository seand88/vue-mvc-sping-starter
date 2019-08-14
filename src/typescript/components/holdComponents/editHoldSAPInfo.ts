import Vue from 'vue'
import Component from 'vue-class-component'
import BootstrapVue from "bootstrap-vue"
import template from '/vue-templates/hold/holdSAPInfo.html'
import HoldTicket from '../../domainObjects/hold/HoldTicket'


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

export default class EditHoldSAPInfo extends Vue{


    mounted(){

    }
}