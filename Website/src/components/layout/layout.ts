import { Component, Vue } from "vue-property-decorator";
import "./layout.scss";

@Component({
    template: require("./layout.html"),
    components: {

    }
})
export class LayoutComponent extends Vue {
    mounted() {

    }

    getImgUrl(imgName: string) {
        return require('./img/' + imgName);
    }
}