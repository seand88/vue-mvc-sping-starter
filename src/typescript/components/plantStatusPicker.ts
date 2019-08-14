import Vue from 'vue'
import Component from 'vue-class-component'
import BootstrapVue from "bootstrap-vue"
import template from '/vue-templates/hold/holdPlantStatusInfo.html'
import HoldTicket from '../domainObjects/hold/HoldTicket'
import Plant from "../domainObjects/plant";
import Status from "../domainObjects/status";
import sharedService from "../services/sharedservice";

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

export default class PlantStatusPicker extends Vue{

    plants: Plant[] = [];
    statuses: Status[] =[];

    mounted(){

        sharedService.getAllPlants().then((data) => {

            for ( let plant of data ) {

                let mappedPlant:Plant = { value: plant.code, text: plant.desc };
                this.plants.push(mappedPlant);

            }

        });

        sharedService.getAllStatuses().then((data) =>{

            for ( let status of data ) {

                let mappedStatus:Status = { value: status.id, text: status.desc };
                this.statuses.push(mappedStatus);
            }
        });
    }
}