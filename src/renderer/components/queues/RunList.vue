<template>
  <div>
    <a-table
            rowKey="pid"
            :columns="columns"
            :pagination="false"
            :data-source="dataList"
            :scroll="{ x: 0, y: 390  }"
    >
    <span slot="status" slot-scope="elapsedCpuTime, record">
      <span style="padding: 4px;background: gold;color: #fff;">{{ elapsedCpuTime }} </span>
    </span>
    <span slot="status" slot-scope="status,record">
        <span v-if="status == progressStatus.RUN">
          运行中
        </span>
    </span>
  <span slot="action" slot-scope="text, record">
    <a-button type="primary" @click="showModal(record)">
      I/O
    </a-button>
    <a-button type="danger" @click="pending(record)">
      挂起
    </a-button>
    </span>
    </a-table>
  <io-modal :visible="visible" :PCB="PCB" @execIo="execIo" @cancelModal="cancelModal"></io-modal>
  </div>
</template>
<script>
  let  currStatus = '';
import columns from "@/model/Column"
import { mapGetters, mapActions,mapMutations } from 'vuex';
// import dataList from "../model/initData";
import progressStatus from "@/mixin/progressStatus"
import ioModalMixin from "@/mixin/ioModal"
export default {
  name: "ProgressList",
  mixins:[ioModalMixin,progressStatus],
  data() {
    return {
      columns
    };
  },
  methods:{
    pending(PCB) {
      this.setPcbToPending(PCB)
    },
    execIo(time,pcb) {
      this.SET_PCB_TOACTIVEBLOCK(pcb, time)
      this.cancelModal()
    },
    ...mapMutations(["SET_PCB_TOACTIVEBLOCK"]),
    ...mapActions(["setPcbToPending"])
  },
  computed:{
    ...mapGetters({
        dataList: 'runQueue'
    })
  }
};
</script>
