import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);
library.add(fad);
library.add(fal);
library.add(far);
library.add(fas);

import App from '@/App.vue';
import '@/index.css';

const app = createApp(App);
app.use(router);
app.use(store);

app.component('fa-icon', FontAwesomeIcon);
app.component('fa-layers', FontAwesomeLayers);
app.component('fa-layers-text', FontAwesomeLayersText);

app.mount('#app');
