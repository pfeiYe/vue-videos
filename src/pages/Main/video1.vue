<template>
<div>
  <p class="title">点击按钮播放或暂停视频。</p>
  <video id="myVideo" class="video" controls = "true"
    poster="@/assets/video/sea.jpg" preload="auto" webkit-playsinline="true" playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" 
    x5-video-player-fullscreen="true" x5-video-orientation="portraint" style="object-fit:fill">
  <source id="source" :src="videoUrl" type="video/mp4">
  </video>

<button class="button" @click="playVid()" type="button">播放视频</button>
<button class="button" @click="pauseVid()" type="button">暂停视频</button> 
<button class="button" @click="myFunction()">尝试一下</button>
<p id="demo"></p>
</div>
</template>

<script>
export default {
  props: [ ],
  data () {
    return {
      video: null,
      videoUrl: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init(){
     this.video = document.getElementById("myVideo")   
     this.videoUrl = require('@/assets/video/yz.mp4')
    },
    playVid(){ 
	   this.video.play(); 
    } ,
    pauseVid(){ 
	   this.video.pause(); 
    },
    myFunction(){
	    var x = document.getElementById("source").src;
	    document.getElementById("demo").innerHTML = x;
    }
  }
}
</script>

<style scoped lang="stylus">
  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 9px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
.title {
  background-color: #e6a23c;
  line-height: 4;
  text-align: center;
  border-radius: 3%;
  font-size: 18px;
  font-style: normal;
}

   
</style>
