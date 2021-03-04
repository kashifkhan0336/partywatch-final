<template>
  <div class="center">
    <vs-dialog blur width="550px" not-center v-model="active">
      <template #header>
        <h4 class="not-margin"><b>PartyWatch</b> say's</h4>
      </template>

      <div class="con-content">
        <p>
          {{ alertMessage }}
        </p>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
import { EventBus } from "../utils/event-bus";
export default {
  name: "Alert",
  props: {
    message: String,
  },
  mounted() {
    EventBus.$on("open_alert_dialog", (data) => {
      this.active = true;
      this.alertMessage = data;
    });
  },
  data() {
    return {
      active: false,
      alertMessage: "",
    };
  },
};
</script>

<style>
display flex {
  align-items: center;
  justify-content: flex-end;
}
display flex .vs-button {
  margin: 0px;
}
display flex .vs-button .vs-button__content {
  padding: 10px 30px;
}
display flex .vs-button ~ .vs-button {
  margin-left: 10px;
}
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
  padding-bottom: 0px;
}
.con-content {
  width: 100%;
}
.con-content p {
  font-size: 0.8rem;
  padding: 0px 10px;
}
.con-content .vs-checkbox-label {
  font-size: 0.8rem;
}
.con-content .vs-input-parent {
  width: 100%;
}
.con-content .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}
.con-content .vs-input-content .vs-input {
  width: 100%;
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
}
.footer-dialog .new {
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  font-size: 0.7rem;
}
.footer-dialog .new a {
  color: getColor('primary') !important;
  margin-left: 6px;
}
.footer-dialog .new a:hover {
  text-decoration: underline;
}
.footer-dialog .vs-button {
  margin: 0px;
}

</style>