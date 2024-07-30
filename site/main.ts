import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'element-plus/theme-chalk/display.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as elIcons from '@element-plus/icons-vue'

// createApp(App).mount('#app')


const app = createApp(App);

app.use(ElementPlus);

//统一注册el-icon图标
for (let icon in elIcons) {
    app.component(`ElIcon${icon}`, elIcons[icon])
}

//挂载app
app.mount('#app');
