<template>
  <div>
    <a-form
      id="addProgress"
      class="ant-advanced-search-form"
      :labelCol="{ span: 6, offset: 0 }"
      :wrapperCol="{ span: 18, offset: 0 }"
      :form="form"
      @submit="add"
    >
      <a-row>
        <a-col :span="12">
          <a-form-item label="进程名">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    {
                      required: true,
                      message: '进程名不能为空'
                    }
                  ]
                }
              ]"
              placeholder="例： 网易云服务"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="优先级">
            <a-input-number
              v-decorator="[
                'priority',
                {
                  rules: [
                    {
                      required: true,
                      message: '优先级不能为空'
                    }
                  ]
                }
              ]"
              placeholder="例：4"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="需运行时间">
            <a-input-number
              :min="1"
              v-decorator="[
                'needTime',
                {
                  rules: [
                    {
                      required: true,
                      message: '需运行时间不能为空'
                    }
                  ]
                }
              ]"
              placeholder="例：200"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="到达时间">
            <a-input-number
              v-decorator="[
                'arriveTime',
                {
                  rules: [
                    {
                      required: true,
                      message: '到达时间不能为空'
                    }
                  ]
                }
              ]"
              placeholder="例：2"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24" :style="{ textAlign: 'right' }">
          <a-button type="primary" html-type="submit">
            添加
          </a-button>
          <a-button
            type="danger"
            :style="{ marginLeft: '8px' }"
            @click="handleReset"
          >
            清空
          </a-button>
          <a-button :style="{ marginLeft: '8px' }" @click="handleBack">
            返回
          </a-button>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
import PCB from "../model/PCB";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "addProgress",
  data() {
    return {
      expand: false,
      form: this.$form.createForm(this, { name: "advanced_search" })
    };
  },
  computed: {
    count() {
      return this.expand ? 11 : 7;
    },
    ...mapGetters(["pid"])
  },
  updated() {},
  methods: {
    add(e) {
      e.preventDefault();
      this.form.validateFields((error, values) => {
        const obj = values;
        obj["pid"] = this.pid;
        this.addActivityReadyQueue(new PCB(obj));
        this.ADD_PID();
        this.handleBack();
      });
    },
    handleBack() {
      this.$router.replace("/");
    },
    handleReset() {
      this.form.resetFields();
    },
    toggle() {
      this.expand = !this.expand;
    },
    ...mapMutations(["ADD_PID"]),
    ...mapActions(["addActivityReadyQueue"])
  }
};
</script>

<style>
#app .ant-advanced-search-form {
  padding: 20px 0;
}
</style>
