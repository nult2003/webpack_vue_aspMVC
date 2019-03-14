import { subsite } from "../../util/helpers";

export class Link {
    name: string;
    path: string;

    constructor(name: string, path: string) {
        this.name = name;
        this.path = subsite(path);
    }
}
