import Vue from "vue";
import axios from "axios";
import App from "./App";
import ant from "ant-design-vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import "./main.scss";
import "./util/dragSize";
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(ant);
/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  render: h => h(App),
  directives: {
    drag(el, bindling) {
      let oDiv = el; //当前元素
      oDiv.onmousedown = function(e) {
        e.preventDefault();
        let disX = e.clientX;
        document.onmousemove = function(e) {
          e.preventDefault();
          let l = e.clientX - disX;
          bindling.value.set(l); //将鼠标按下实时变动的值从自定义指令中传递出去
        };
        document.onmouseup = function(e) {
          e.preventDefault();
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    }
  },
  created() {
    //初始化设置进程管理者，并初始化初始进程
    this.$store.dispatch("setSystemer", this);
  }
}).$mount("#app");
