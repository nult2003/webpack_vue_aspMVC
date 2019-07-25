import { Component, Vue } from "vue-property-decorator";
import { Link } from "./link";
//import { Logger } from "../../util/log";
//import { LoginsDropdown } from "../_shared/logins-dropdown";

@Component({
    template: require("./navbar.html"),
    components: {
        //"logins-dropdown": LoginsDropdown
    }
})
export class NavbarComponent extends Vue {
    object: { default: string } = { default: "Default object property!" };
    links: Link[] = [
        new Link("Home", "/"),
        new Link("Triggered", "/create-triggered-alert"),
        new Link("Mail Template", "/mail-tempalte-alert")
    ];

    //protected logger: Logger;

    //@Watch("$route.path")
    //pathChanged() {
    //    //this.logger.info("Changed current path to: " + this.$route.path);
    //}

    mounted() {
        //if (!this.logger) this.logger = new Logger();
        //this.$nextTick(() => this.logger.info(this.object.default));
    }
}
