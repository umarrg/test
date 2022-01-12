import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        themes: {
            light: {
                primary: '#547DA9',
                secondary: '#436D9B',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});
