import Vue from "vue";
Vue.directive("drag", {
  bind(el, bindling) {
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
});
