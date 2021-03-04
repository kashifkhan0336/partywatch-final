<template>
  <div id="sidebar">
    <vs-sidebar
      absolute
      textWhite
      background="primary"
      v-model="active"
      :open.sync="activeSidebar"
    >
      <template #logo>
        <h1>PartyWatch</h1>
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <template #icon>
          <i class="bx bxs-music"></i>
        </template>
        Music
      </vs-sidebar-item>
      <vs-sidebar-item id="Watch_history">
        <template #icon>
          <i class="bx bx-history"></i>
        </template>
        Watch History
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat"></i>
        </template>
        Chat
      </vs-sidebar-item>
      <vs-sidebar-item id="voice_call">
        <template #icon>
          <i class="bx bxs-phone-call"></i>
        </template>
        Voice Call
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>
<script>
import { EventBus } from "../utils/event-bus";

export default {
  name: "SideBar",
  data() {
    return {
      active: "home",
      activeSidebar: false,
    };
  },
  mounted() {
    EventBus.$on("open_sidebar_event", () => {
      this.changeSideBarStatus();
    });
  },
  methods: {
    check: function () {
      alert("Wokring LOl");
    },
    changeSideBarStatus: function () {
      console.log("changeSideBarStatus executed");
      //console.log(this.activeSiderbar)
      this.activeSidebar = !this.activeSidebar;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
h1 {
  font-family: "Great Vibes", cursive;
  font-size: 2.5rem;
}
</style>