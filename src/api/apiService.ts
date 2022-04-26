import { Group, GroupResponse } from '@/models/model'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class GroupC implements Group {
    id: number = 0;
    groupName: string = "";

    // constructor() {
    //     this.id = 0;
    //     this.groupName = "";
    // }
}

type GroupT = {
    id: number,
    groupName: string
}

type GroupResponseT = {
    status: number,
    request: string,
    response: GroupT
}

enum StatusCode {
    Unauthorized = 401,
    Forbidden = 403,
    TooManyRequests = 429,
    InternalServerError = 500,
}


export class GroupService {
    public group: GroupC = new GroupC();

    private instance: AxiosInstance | null = null;

    private get http(): AxiosInstance {
        return this.instance != null ? this.instance : this.initApi();
    }

    initApi() {
        const http = axios.create({
            url: "https://college-site-backend.herokuapp.com/api/v1",
            withCredentials: true
        })

        //http.interceptors.request.use(injectToken, (error) => Promise.reject(error));

        http.interceptors.response.use(
            (response) => response,
            (error) => {
                const { response } = error;
                //return this.handleError(response);
            }
        );


        this.instance = http;

        return http;
    }

    request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
        return this.http.request(config);
    }

    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.get<T, R>(url, config);
    }

    async getGroup(): Promise<GroupResponseT> {
        return await this.http.get<GroupResponseT>("/")
    }

    // public getGroup(): Promise<GroupResponse> {

    //     // .then(resp => {
    //     // 	this.group = resp.data.response;
    //     //    	//console.log(resp.data.response);
    //     // });
    // }

    // private handleError(error) {
    //     const { status } = error;

    //     switch (status) {
    //         case StatusCode.InternalServerError: {
    //             // Handle InternalServerError
    //             break;
    //         }
    //         case StatusCode.Forbidden: {
    //             // Handle Forbidden
    //             break;
    //         }
    //         case StatusCode.Unauthorized: {
    //             // Handle Unauthorized
    //             break;
    //         }
    //         case StatusCode.TooManyRequests: {
    //             // Handle TooManyRequests
    //             break;
    //         }
    //     }

    //     return Promise.reject(error);
    // }
}

export default class ApiService {
    public goups!: GroupService

    constructor() {
        this.goups = new GroupService();
    }
}
