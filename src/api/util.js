//import axios from "./axios";
import axios from 'axios';


export const getRequst = async (url) =>{
    //console.log("start get   : " + url);

    try {
        let response = await axios.get(url);
        return genarateSuccsesOutput(response);



    }catch(e){

        return genarateErrorOutput(e);

    }

};

export const postRequst = async (url,data) =>{

    try {
        let response = await axios.post(url,data);
        return genarateSuccsesOutput(response);



    }catch(e){

        return genarateErrorOutput(e);

    }

};


export const putRequst = async (url,data) =>{

    try {
        let response = await axios.put(url,data);
        return genarateSuccsesOutput(response);



    }catch(e){

        return genarateErrorOutput(e);

    }

};


export const deleteRequst = async (url) =>{

    try {
        let response = await axios.delete(url);
        return genarateSuccsesOutput(response);



    }catch(e){

        return genarateErrorOutput(e);

    }

};


const genarateSuccsesOutput = (response) => {
    console.log("oke" + response);
    return{
        data:response.data,
        //message:response.data.message,
        code:response.status
    }


}

const genarateErrorOutput = (error) =>{
    console.log("error" + error);
    if(error.response){

        return{
            error: error,
            title: error.response.statusText,
            code: error.response.status,
            message: error.response.data.message
        }


    }else{

        return{
            error: error,
            title: error.message,
            code: 1,
            message: "Cannot Connect to the Server"
        }



    }


}

