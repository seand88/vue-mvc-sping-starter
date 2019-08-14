import axios from 'axios';

export class HoldTicketService {

    getHoldTickets() {
        return axios({
            method: 'get',
            url: "/holdTickets",
        })
        .then((response) => {
            return response.data;
        })
        .catch( (error) => {
            return error;
        });
    }

    getPagedHoldTickets() {
        return axios({
            method: 'get',
            url: "/pagedHoldTickets",
        })
            .then((response) => {
                return response.data;
            })
            .catch( (error) => {
                return error;
            });
    }

    getDefects() {
        return axios({
            method: 'get',
            url: "/getAllDefects"
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return error
            });
    }
    getVerifications() {
        return axios({
            method: 'get',
            url: "/getAllVerifications"
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return error
            });
    }

    getDispositions() {
        return axios({
            method: 'get',
            url: "/getAllDispositions"
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return error
            });
    }

    getAttachments(holdTicketId){
        return axios( {
            method: 'get',
            url: "/getHoldTicketAttachments",
            params: {ticketId: holdTicketId}
        }).then((response) => {
            return response.data
        }).catch((error) => {
            return error
        });
    }

    deleteAttachment(attachmentId){
        return axios( {
            method: 'get',
            url: '/deleteHoldTicketAttachment',
            params: {attachmentId: attachmentId}
        }).then((response) => {
            return response.data
        }).catch((error) => {
            return error
        });
    }

    saveHoldTicket(holdTicketjson){
        return axios({
            method: 'post',
            url: "/saveHoldTicket",
            params: {holdTicket: holdTicketjson}
        })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            })
    }


}

const holdTicketService = new HoldTicketService();
export default holdTicketService;

