<template>
  <div class="MainHeader">
    <a-menu class="noDrag" v-model="current" mode="horizontal">
      <a-menu-item key="create" @click="createNewProgress()">
        <a-icon type="plus" />创建新进程
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />调度方式</span
        >
        <a-menu-item :key="Policy.FCFS" @click="itemHandler">
          先来先服务(FCFS)
        </a-menu-item>
        <a-menu-item :key="Policy.RR" @click="itemHandler">
          时间片轮转(RR)
        </a-menu-item>
        <a-menu-item :key="Policy.HPF" @click="itemHandler">
          优先级(HPF)
        </a-menu-item>
        <a-menu-item :key="Policy.HRRF" @click="itemHandler">
          高响应比优先(HRRF)
        </a-menu-item>
        <a-menu-item :key="Policy.MFQS" @click="itemHandler">
          多级反馈队列调度算法(MFQS)
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item class="noDrag" @click="startRun">
        <a-icon :type="isStart ? 'pause-circle' : 'play-circle'" />
        <span> {{ isStart ? "停止调度" : "开始调度" }} </span>
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <a-icon type="setting" />视图
        </span>
        <a-menu-item
          class="noDrag"
          type="windows"
          @click="toggleInfoView('信息')"
        >
          <a-icon type="windows" /> 信息视图
        </a-menu-item>
        <a-menu-item class="noDrag" type="reload" @click="setWin('reload')">
          <a-icon type="reload" /> 重启
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
    <div class="systemBtn">
      <a-icon class="noDrag" type="minus" @click="setWin('min')" />
      <a-icon class="noDrag" type="fullscreen" @click="setWin('max')" />
      <a-icon class="noDrag" type="close" @click="setWin('close')" />
    </div>
  </div>
</template>
<script>
import { ipcRenderer } from "electron";
import Policy from "../model/Policy";
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
export default {
  name: "MainHeader",
  data() {
    return {
      current: [Policy.FCFS],
      Policy: Policy
    };
  },
  methods: {
    setWin(type) {
      ipcRenderer.send(type);
    },
    createNewProgress() {
      if (this.$route.name == "Main") {
        this.$router.replace("/AddProgress");
      } else {
        this.$router.replace("/");
      }
    },
    handleClick(e) {},
    itemHandler(e) {
      this.$store.dispatch("set" + e.key);
    },
    toggleInfoView(info) {
      this.SET_INFOVIEW(info);
    },
    startRun() {
      if (!this.isStart) {
        this.setTrueIsStart();
        this.systemer.StartScheduling(this);
      } else {
        this.setFalseIsStart();
      }
    },
    ...mapMutations(["SET_INFOVIEW"]),
    ...mapActions([
      "setFCFS",
      "setHPF",
      "setHRRF",
      "setRR",
      "setSJF",
      "setMFQS",
      "setHRRN",
      "setTrueIsStart",
      "setFalseIsStart"
    ])
  },
  computed: {
    ...mapState({
      systemer: state => state.System.systemer
    }),
    ...mapGetters(["getSchedulingPolicy", "isStart"])
  },
  mounted() {
    this.toggleInfoView("信息");
  },
  watch: {
    "$store.state.PolicyControl.SchedulingPolicy"(val) {
      console.log(val);
      this.$store.dispatch("setSystemer", this);
    }
  }
};
</script>
