import IoModal from "../components/ioModal";

export default {
  components: {
    IoModal
  },
  data() {
    return {
      visible: false,
      PCB: {}
    };
  },
  methods: {
    showModal(record) {
      this.PCB = record;
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
