require("./bootstrap");

import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";

import AppLayout from "./Layouts/App.vue";

// common
import CustomButton from "./Commons/CustomButton";

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Link', Link)
            .component('AppLayout', AppLayout)
            .component('CustomButton', CustomButton)
            .mixin({ methods: { route } })
            .mount(el);
    },
});
