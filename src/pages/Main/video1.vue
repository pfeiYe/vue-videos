<template>
<div>
    <p id="demo"></p>
     <video id="myVideo" class="video" controls = "true"
       poster="@/assets/video/sea.jpg" preload="auto" webkit-playsinline="true" playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" 
       x5-video-player-fullscreen="true" x5-video-orientation="portraint" style="object-fit:fill">
      <source id="source" :src="videoUrl" type="video/mp4">
     </video>
<p>点击按钮播放或暂停视频。</p>
<button @click="playVid()" type="button">播放视频</button>
<button @click="pauseVid()" type="button">暂停视频</button> 

<button @click="myFunction()">尝试一下</button>
</div>
</template>

<script>
export default {
  props: [ ],
  data () {
    return {
      video: null,
      videoUrl: '../../assets/video/yz.mp4'
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
