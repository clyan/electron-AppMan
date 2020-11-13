<template>
  <div>
    <a-table
            rowKey="pid"
            :columns="columns"
            :pagination="false"
            :data-source="dataList"
            :scroll="{ x: 0, y: 720 }"
    >
    <span slot="status" slot-scope="status,record">
        <span v-if="status == progressStatus.ACTIVITY_BLOCK">
          活动阻塞
        </span>
    </span>
  <span slot="action" slot-scope="text, record">
    <a-button type="danger"   @click="pending(record)">
      挂起
    </a-button>
    <a-button type="primary" @click="ready(record)">
      释放
    </a-button>
    </span>
    </a-table>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from "vuex";
  import progressStatus from "@/mixin/progressStatus"
  import columns from "@/model/Column"

  export default {
    name: "BlockList",
    mixins:[progressStatus],
    data() {
      return {
        columns
      };
    },
    computed:{
      ...mapGetters({
        dataList: 'activityBlockQueue'
      })
    },
    methods:{
      pending(PCB) {
        this.setPcbToPending(PCB)
      },
      ready(PCB){
        this.setPcbToReady(PCB)
      },
      ...mapActions(["setPcbToPending","setPcbToReady"])
    },
    mounted() {

    }
  };
</script>
