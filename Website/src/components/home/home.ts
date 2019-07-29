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

    expandSearch() {
        console.log('display search');
        let ads_box = $('.advanced_search');
        if (!ads_box.hasClass('advanced_displayed')) {
            $(this).addClass('active');
            ads_box.stop().fadeIn(200).addClass('advanced_displayed');
        }
        else {
            $(this).removeClass('active');
            ads_box.stop().fadeOut(200).removeClass('advanced_displayed');
        }
    }
    redirectToCategory() {
        console.log('call category');
        this.$router.push({ name: "Category" });
    }
}