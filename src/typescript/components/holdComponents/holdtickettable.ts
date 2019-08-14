import Vue from 'vue'
import Component from 'vue-class-component';
import HoldTicketDetail from './holdTicketDetail'
import TicketService from '../../services/holdTicketService';
import BootstrapVue from "bootstrap-vue";
import Table from "bootstrap-vue";
import template from '/vue-templates/hold/holdtickettable.html'
import HoldTicket from "../../domainObjects/hold/HoldTicket";

Vue.use(BootstrapVue, Table);

@Component({
    components:{HoldTicketDetail:HoldTicketDetail},
    template:template
})
export default class HoldTicketTable extends Vue {
    // Initial data can be declared as instance properties

    hover: boolean = true;
    fields: object[] = [];
    holdTickets: HoldTicket[] = [];
    currentPage: number = null;
    perPage: number = null;
    totalRows: number = null;
    sortBy: any = null;
    sortDesc: any = null;
    sortDirection: string= null;
    filter: any ="";


    /*working on server side pagination
    pagesize: number = 0;
    pagenum: number = 10;*/


    mounted () {

        TicketService.getHoldTickets().then((data) => {

            for (let ticket of data) {

                let tempHoldTicket = new HoldTicket(ticket);
                this.holdTickets.push(tempHoldTicket);

            }
        });

        this.fields = [
            { key: 'holdTicketId', label: 'Ticket #', sortable: true, sortDirection: 'desc' },
            { key: 'statusId', label: 'Status'},
            { key: 'salesOrderNum', label: 'Order Number', sortable: true, 'class': 'text-center' },
            { key: 'qtyOnHold', sortable: true, label: 'QTY'},
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
    }


    onFiltered (filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length;
        this.currentPage = 1;
    }
}