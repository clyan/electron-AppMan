<template>
  <div id="views">
    <a-row class="view-panel_title">
      <a-col :span="24">
        <a-tag
          v-for="(item, index) in getViews"
          :key="item"
          closable
          @close="closeView(index)"
        >
          {{ item }}
        </a-tag>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24" class="view-panel_Content">
        <info-view v-if=""></info-view>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import InfoView from "./InfoView";
import { mapGetters } from "vuex";
export default {
  name: "Views",
  components: {
    InfoView
  },
  computed: {
    ...mapGetters({
      getViews: "getViews"
    })
  },
  methods: {
    closeView(index) {
      console.log(index);
    }
  }
};
</script>

<style>
#views {
  border-top: 1px solid #e8e8e8;
  min-height: 300px;
  background: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  user-select: none;
}
#views .view-panel_title {
  height: 40px;
  background: #f5f5f5;
  cursor: n-resize;
}
#views .ant-tag {
  display: inline-block;
  height: 35px;
  margin-top: 2px;
  line-height: 35px;
}
</style>
