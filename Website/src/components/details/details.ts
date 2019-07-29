import { Component, Vue } from "vue-property-decorator";
import { LayoutComponent } from "../layout";
import "./details.scss";

@Component({
    template: require("./details.html"),
    components: {
        "wa-layout": LayoutComponent
    }
})

export class DetailsComponent extends Vue {
    imgRedPath: string = "";
    mounted() {
        this.imgRedPath = this.getImgUrl("red.png");
    }

    getImgUrl(imgName: string) {
        return require('./img/' + imgName);
    }
}