<template>
  <a-layout>
    <a-layout-header>
      <main-header></main-header>
    </a-layout-header>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script>
import MainHeader from "../components/MainHeader";

export default {
  name: "home",
  components: { MainHeader },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}
#app .ant-layout-header {
  height: 47px;
  padding: 0;
  background: #fff;
}
</style>
