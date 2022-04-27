import ApiSetup from "./apiSetup";
import GroupService from "./groupService";

export class Api {
    private apiSetup = new ApiSetup();

    public group!: GroupService

    constructor() {
        this.group = new GroupService(this.apiSetup);
    }
}

export const api = new Api();