<template>
  <div id="main" class="card-container">
    <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="运行队列">
        <run-list></run-list>
      </a-tab-pane>
      <a-tab-pane key="2" tab="就绪队列">
        <ready-list></ready-list>
      </a-tab-pane>
      <a-tab-pane key="3" tab="阻塞队列">
        <block-list></block-list>
      </a-tab-pane>
      <a-tab-pane key="4" tab="挂起队列">
        <pending-list></pending-list>
      </a-tab-pane>
      <a-tab-pane key="5" tab="完成队列">
        <finish-list></finish-list>
      </a-tab-pane>
    </a-tabs>
    <views v-if="getViews.length > 0"></views>
  </div>
</template>

<script>
import RunList from "./queues/RunList";
import BlockList from "./queues/BlockList";
import ReadyList from "./queues/ReadyList";
import PendingList from "./queues/PendingList";
import FinishList from "./queues/FinishList";
import Views from "./view/Views";
import { mapGetters } from "vuex";
export default {
  name: "home-main",
  components: { RunList, PendingList, BlockList, ReadyList, FinishList, Views },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      // console.log(key);
    }
  },
  computed: {
    ...mapGetters({
      getViews: "getViews"
    })
  }
};
</script>

<style lang="scss">
.card-container {
  background: #f5f5f5;
  overflow: hidden;
}
.card-container > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}
.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
.card-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
  margin: 0;
}
</style>
