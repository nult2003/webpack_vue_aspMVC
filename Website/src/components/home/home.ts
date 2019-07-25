import { Component, Vue } from "vue-property-decorator";
import { LayoutComponent } from "../layout";
import "./home.scss";

@Component({
    template: require("./home.html"),
    components: {
        "wa-layout": LayoutComponent
    }
})

export class HomeComponent extends Vue {
    mounted() {

    }

    getImgUrl(imgName: string) {
        return require('./img/' + imgName);
    }
}