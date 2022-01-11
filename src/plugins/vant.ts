import { App } from 'vue';
import { ConfigProvider, Button } from 'vant';

export default {
  install(app: App): void {
    app.use(ConfigProvider);
    app.use(Button);
  },
};
