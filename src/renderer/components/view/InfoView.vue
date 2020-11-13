<template>
  <a-row>
    <a-col :span="24">
      <p><span>程序运行时间:</span>{{ globalTime }}</p>
    </a-col>
  </a-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "InfoView",
  computed: {
    ...mapGetters(["globalTime"])
  }
};
</script>

<style scoped></style>
