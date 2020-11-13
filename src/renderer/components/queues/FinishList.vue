<template>
  <div>
    <a-table rowKey="pid"
      :columns="columns"
      :pagination="false"
      :data-source="dataList"
      :scroll="{ x: 0, y: 720 }"
    >
    <span slot="status" slot-scope="status,record">
    <span style="color:green" v-if="status == progressStatus.FINISH">
      已完成
    </span>
    </span>
    </a-table>
  </div>
</template>
<script>
import ioModalMixin from "../../mixin/ioModal";
import progressStatus from "@/mixin/progressStatus";
import columns from "../../model/Column";
import { mapGetters } from "vuex";

export default {
  name: "FinishList",
  mixins: [ioModalMixin, progressStatus],
  data() {
    return {
      columns
    };
  },
  computed: {
    ...mapGetters({
      dataList: "finishQueue"
    })
  },
  mounted() {
    console.log(this.dataList);
  }
};
</script>
