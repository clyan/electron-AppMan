import IoModal from "../components/ioModal";

export default {
  components: {
    IoModal
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    cancelModal() {
      this.visible = false;
    },
    execIo(da) {
      this.cancelModal();
    }
  }
};
