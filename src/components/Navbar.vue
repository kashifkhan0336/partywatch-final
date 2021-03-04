<template>
  <div id="navbar">
    <vs-navbar
      class="nav"
      shadow
      square
      color
      center-collapsed
      v-model="active"
    >
      <template #left>
        <vs-button @click="OpenSideBar" flat icon>
          <i class="bx bx-menu"></i>
        </vs-button>
      </template>
      <template #right>
        <vs-button v-if="isRoomJoined == false" flat @click="openJoinRoomDialog"
          >Join Room</vs-button
        >
        <vs-button v-if="isRoomJoined == false" @click="openCreateRoomDialog"
          >Create Room</vs-button
        >
      </template>
    </vs-navbar>
  </div>
</template>

<script>
import { EventBus } from "../utils/event-bus";
export default {
  name: "Navbar",
  data() {
    return {
      active: "",
      showNav: false,
      isRoomJoined: false,
    };
  },
  mounted() {
    EventBus.$on("is_room_joined", (data) => {
      console.log("is_room_joined Called!");
      console.log("data from event -> ", data);
      console.log(this.isRoomJoined);
      if (data === true) {
        this.isRoomJoined = true;
      } else {
        this.isRoomJoined = false;
      }
    });
  },
  methods: {
    OpenSideBar() {
      //alert("OpenSideBar executed")
      EventBus.$emit("open_sidebar_event", "");
    },
    openJoinRoomDialog() {
      console.log("openJoinRoomDialog executed!");
      EventBus.$emit("open_joinroom_event", "");
    },
    openCreateRoomDialog() {
      console.log("openCreateRoomDialog executed!");
      EventBus.$emit("open_createroom_event", "");
    },
    loadVideo() {},
  },
};
</script>

<style scoped>
.nav {
  padding-bottom: 5px;
}
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 2rem 1.5rem;
  font: 0.6666666667rem "PT Sans", Arial, sans-serif;
  color: #5a5a5a;
}
</style>
    