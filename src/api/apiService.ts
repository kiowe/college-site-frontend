import { Group, GroupResponse } from '@/models/model'
import axios from 'axios'

export class GroupC implements Group {
    id!: number;
    groupName!: string;

    constructor() {
        this.id = 0;
        this.groupName = "";
    }
}

export class GroupService {
    private group!: GroupResponse;

    constructor() {
        // this.group.groupName = "";
        // this.group.id = 0;
    }

    public getGroup(): GroupResponse {
        axios.get<GroupResponse>("https://college-site-backend.herokuapp.com/api/v1/group/1")
            .then(resp => {
                this.group.response.groupName = resp.data.response.groupName
            });

        console.log(this.group.response.groupName)

        return this.group
    }
}

export default class ApiService {
    public goups!: GroupService

    constructor() {
        this.goups = new GroupService();
    }
}
