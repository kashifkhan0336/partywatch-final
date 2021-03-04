<template>
  <div id="player-wrapper">
    <video id="player" playinline controls />
  </div>
</template>

<script>
import Plyr from "plyr";
export default {
  name: "PlyrVideo",
  mounted() {
    const player = new Plyr("#player");
    console.log(player);
  },
};
</script>

<style>
    #player-wrapper{
        
    }
</style>