import axios from 'axios';

export class Sharedservice {

    getAllPlants() {
        return axios({
            method: 'get',
            url: "/getAllPlants",
        })
            .then((response) => {
                return response.data;
            })
            .catch( (error) => {
                return error;
            });
    }

    getAllStatuses(){
        return axios({
            method: 'get',
            url: '/getAllStatuses'
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            return error;
        })
    }

    getPlantFromCode(plantCode:string){
        return axios({
            method: 'get',
            url: "/getPlantByCode",
            params:{'plantCode': plantCode}
        })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
    getStatusByCode(statusCode:number){
        return axios({
            method: 'get',
            url: "/getStatusByCode",
            params:{'statusCode': statusCode}
        })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

}

const plantservice = new Sharedservice();
export default plantservice;

