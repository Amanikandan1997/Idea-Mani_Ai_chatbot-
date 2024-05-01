import axios from "axios";

const BASE_URL='https://chatgpt-api3.onrender.com' //Replace with System PC IP address

const getBardApi=(userMsg)=>axios.get(BASE_URL+"?ques="+userMsg);

export default{
    getBardApi
}