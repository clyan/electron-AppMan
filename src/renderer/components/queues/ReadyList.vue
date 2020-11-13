<template>
  <div>
    <a-table
            rowKey="pid"
            :columns="columns"
            :pagination="false"
            :data-source="dataList"
            :scroll="{ x: 0, y: 720 }"
    >

    <span slot="status" slot-scope="status, record">
      <span v-if="status == progressStatus.ACTIVITY_READY">
        活动就绪
      </span>
    </span>
    <span slot="action" slot-scope="text, record">
      <a-button type="danger"  @click="pending(record)">
        挂起
      </a-button>
      </span>
    </a-table>
  </div>
</template>
<script>
  import progressStatus from "@/mixin/progressStatus"
  import columns from "@/model/Column"
  import {mapActions, mapGetters} from 'vuex';
  export default {
    name: "ReadyList",
    mixins:[progressStatus],
    data() {
      return {
        columns
      };
    },
    methods:{
      pending(PCB) {
        this.setPcbToPending(PCB)
      },
      ...mapActions(["setPcbToPending"])
    },
    computed:{
      ...mapGetters({
        dataList: 'activityReadyQueue'
      })
    },
    mounted() {
    }
  };
</script>
