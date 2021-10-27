import {getRequst} from "../api/util"


class DataService {

    getDeviceData(){

        return getRequst("http://localhost:8000/devicedata");

    }

    getDeciceValue(data){
        return getRequst("http://localhost:8000/selectdevicedata/" + data);
        
    }

}

export default  DataService;