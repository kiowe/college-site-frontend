import { GroupResponse } from "@/models/model";
import axios, { AxiosResponse } from "axios";
import ApiSetup from "./apiSetup";

// type group = {
//     status: number;
//     request: string;
//     data: {
//         id: number;
//         groupName: string;
//     }
// }

export default class GroupService {
    private api!: ApiSetup

    constructor(api: ApiSetup) {
        this.api = api;
    }

    getAll(): Promise<AxiosResponse<GroupResponse>> {
        return this.api.instance.get<GroupResponse>("/groups")
    }
}