import { Component, Vue } from "vue-property-decorator";
import { LayoutComponent } from "../layout";
import "./category.scss";

@Component({
    template: require("./category.html"),
    components: {
        "wa-layout": LayoutComponent
    }
})

export class CategoryComponent extends Vue {
    mounted() {

    }

    //getImgUrl(imgName: string) {
    //    return require('./img/' + imgName);
    //}
}