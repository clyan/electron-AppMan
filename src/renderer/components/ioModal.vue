<template>
  <a-modal
    title="设置IO时间"
    :visible="visible"
    :confirm-loading="confirmLoading"
    :centered="true"
    okText="确定"
    cancelText="取消"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form
      class="ant-advanced-search-form"
      :labelCol="{ span: 6, offset: 0 }"
      :wrapperCol="{ span: 18, offset: 0 }"
    >
      <a-row>
        <a-col :span="24">
          <a-form-item label="io时间">
            <a-input-number
              v-model="ioTime"
              :min="0"
              v-decorator="[
                'name',
                {
                  rules: [
                    {
                      required: true,
                      message: 'io时间不能为空'
                    }
                  ]
                }
              ]"
              placeholder="例2"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  name: "ioModal",
  props: ["visible"],
  data() {
    return {
      confirmLoading: false,
      ioTime: 0
    };
  },
  methods: {
    handleOk(e) {
      this.confirmLoading = true;
      window.setTimeout(() => {
        this.$emit("execIo", this.ioTime);
        this.confirmLoading = false;
        this.ioTime = 0;
      }, 100);
    },
    handleCancel(e) {
      this.ioTime = 0;
      this.$emit("cancelModal");
    }
  }
};
</script>

<style scoped></style>
