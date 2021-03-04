<template>
  <div id="app">
    <div>
      <h1></h1>
    </div>
    <Navbar></Navbar>
    <Alert></Alert>
    <JoinRoom></JoinRoom>
    <CreateRoom></CreateRoom>
    <SideBar></SideBar>
    <PlyrVideo></PlyrVideo>
    
    <button v-on:click="changeTheme">Change Color</button>
  </div>
</template>

<script>
import { EventBus } from './utils/event-bus'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar';
import PlyrVideo from './components/PlyrVideo'
import JoinRoom from './components/JoinRoom'
import CreateRoom from './components/CreateRoom'
import Alert from './components/Alert'
export default {
  components:{
    SideBar,
    PlyrVideo,
    Navbar,
    JoinRoom,
    Alert,
    CreateRoom
  },
  data(){
    return{
      isHost: false
    }
  },
  methods:{
    changeTheme(){
      this.$vs.setColor('primary','#000')
    }
  },
  sockets: {
    connect(){
      EventBus.$emit("open_alert_dialog","Connection established to realtime socket server!")
    },
    room_created_event(data){
      console.log(data)
      this.isHost = true
      EventBus.$emit("open_alert_dialog","Room created!")
      this.$socket.client.emit("join_room_event",{
        room_name: data.room_name,
        socket_id: this.$socket.client.id,
        display_name: data.room_owner_name
      }) 
    },
    room_joined_event(data){
      EventBus.$emit("open_alert_dialog",data)
    },
    room_not_exist_event(data){
      EventBus.$emit("open_alert_dialog",data)
    },
    room_joined_success(data){
      console.log(this.isHost)
      console.log(data)
      if(this.isHost === false){
        EventBus.$emit("is_room_joined",true)
        console.log("not host")
        EventBus.$emit("open_alert_dialog","Room joined successfully!")
      }else{
        EventBus.$emit("is_room_joined",true)
        console.log("is host")
      }
    },
    user_disconnected_event(data){
      EventBus.$emit("open_alert_dialog",data)
    },
    room_owner_disconnected_event(data){
      if(this.isHost == false){
        EventBus.$emit("open_alert_dialog",data)
        EventBus.$emit("is_room_joined",false)
      }
    }
  }

}
</script>

<style>

</style>
