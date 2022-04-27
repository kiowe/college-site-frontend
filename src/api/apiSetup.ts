import axios, { AxiosInstance } from "axios";

export default class ApiSetup {
    public instance!: AxiosInstance;

    // private get http(): AxiosInstance {
    //     return this.instance != null ? this.instance : this.initApiSetup();
    // }

    // initApiSetup() {
    //     this.instance = axios.create({
    //         baseURL: "https://college-site-backend.herokuapp.com/api/v1"
    //     })

    //     return this.http;
    // }

    constructor() {
        this.instance = axios.create({
            baseURL: "https://college-site-backend.herokuapp.com/api/v1"
        })
    }
}

//export const apiSetup = new ApiSetup();