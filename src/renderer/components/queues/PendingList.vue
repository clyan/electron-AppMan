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
        <span style="color: green;" v-if="status === progressStatus.STATIC_READY">
           <span > 静止就绪</span>
        </span>
          <span style="color: red;" v-else-if="status === progressStatus.STATIC_BLOCK">
            <span >静止阻塞</span>
          </span>
    </span>
    <span slot="action" slot-scope="text,record">
      <a-button type="primary" @click="ready(record)">
        激活
      </a-button>
      </span>
        </a-table>
    </div>
</template>
<script>
  import progressStatus from "@/mixin/progressStatus";
  import columns from "@/model/Column"
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: "PendingList",
    mixins:[progressStatus],
    data() {
      return {
        columns
      };
    },
    computed:{
      ...mapGetters({
        dataList: 'pendingQueue'
      })
    },
    methods:{
      ready(item) {
        this.setPcbToReady(item)
      },
      ...mapActions(["setPcbToReady"])
    },
    mounted() {
    }
  };
</script>
