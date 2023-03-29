import "./bootstrap";
import "~@coreui/coreui/dist/js/coreui.bundle.min.js";

import { createApp, h } from "vue";
import { createInertiaApp, Link,Head } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import AppLayout from "./Layouts/App.vue";

// commons
import CustomButton from "./Commons/CustomButton.vue";
import CustomInput from "./Commons/CustomInput.vue";
import CustomTextarea from "./Commons/CustomTextarea.vue";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return (
            createApp({ render: () => h(App, props) })
                .use(plugin)
                .mixin({ methods: { route } })
                .component("Link", Link)
                .component("Head", Head)
                .component("AppLayout", AppLayout)
                .component("CustomButton", CustomButton)
                .component("CustomInput", CustomInput)
                .component("CustomTextarea", CustomTextarea)
                .mount(el)
        );
    },
});
