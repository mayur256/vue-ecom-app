import { createApp } from 'vue';
import App from '@/App.vue';
import appRouter from '@/router';

// MDB Kit
import 'mdb-vue-ui-kit/css/mdb.min.css';

const app = createApp(App);
app.use(appRouter);

app.mount('#app');
