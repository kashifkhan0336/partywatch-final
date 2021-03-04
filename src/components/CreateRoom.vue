<template>
  <div class="center">
    <vs-dialog prevent-close v-model="active">
      <template #header>
        <h4 class="not-margin">Welcome to <b>PartyWatch</b></h4>
      </template>

      <div class="con-form">
        <vs-input v-model="YourName" placeholder="Your Name">
          <template #icon> @ </template>
        </vs-input>
        <vs-input
          v-model="RoomName"
          onfocus="this.placeholder = ''"
          placeholder="Room Name"
        >
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="createRoom"> Create Room </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
  <script>
import { EventBus } from "../utils/event-bus";
export default {
  name: "CreateRoom",
  data() {
    return {
      active: false,
      YourName: "",
      RoomName: "",
      checkbox1: false,
    };
  },
  mounted() {
    EventBus.$on("open_createroom_event", () => {
      console.log("open_createroom_event recieved");
      this.active = !this.active;
    });
  },
  methods: {
    randomRoomId() {
      let t = [];
      let chars = "abcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 6; i++) {
        t.push(chars[Math.floor(Math.random() * 25)]);
      }
      return "_"+t.join("")
    },
    createRoom() {
      let room_object = {
        room_name: this.RoomName+this.randomRoomId(),
        room_owner_name: this.YourName,
        socket_id: this.$socket.client.id,
      };
      console.log(room_object);
      this.$socket.client.emit("create_room_event", room_object);
    },
  },
};
</script>
  <style>
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
}
.con-form .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.con-form .flex a {
  font-size: 0.8rem;
  opacity: 0.7;
}
.con-form .flex a:hover {
  opacity: 1;
}
.con-form .vs-checkbox-label {
  font-size: 0.8rem;
}
.con-form .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}
.con-form .vs-input-content .vs-input {
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
  color: rgba(var(--vs-primary), 1) !important;
  margin-left: 6px;
}
.footer-dialog .new a:hover {
  text-decoration: underline;
}
.footer-dialog .vs-button {
  margin: 0px;
}
</style>
