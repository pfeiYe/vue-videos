import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Main from '@/pages/Main/Main'
import Detail from '@/pages/Detail/Detail'
import video from '@/pages/home/video'
import myPlayer from '@/pages/home/myPlayer'
import video1 from '@/pages/Main/video1'
import video2 from '@/pages/Main/video2'
import video3 from '@/pages/Main/video3'
import demo from '@/pages/Main/demo'








Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/video1',
      name: 'video1',
      component: video1
    },
    {
      path: '/video2',
      name: 'video2',
      component: video2
    },
    {
      path: '/video3',
      name: 'video3',
      component: video3
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/myPlayer',
      name: 'myPlayer',
      component: myPlayer
    },
    

    

    
  ],
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
