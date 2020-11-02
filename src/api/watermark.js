'use strict'

const watermark = {}

const setWatermark = (str, str2) => {
  const id = '1.23452384164.123412415'

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }

  const can = document.createElement('canvas')
  can.width = 380
  can.height = 150 // 水印密度

  const cans = can.getContext('2d')
  cans.rotate((-20 * Math.PI) / 180)
  cans.font = '20px Vedana'
  // cans.fillStyle = 'rgba(200, 200, 200, 0.20)'
  cans.fillStyle = 'black' // 字体颜色
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  // cans.fillText(str, can.width / 3, can.height / 2)
  cans.fillText(str, 0, 150) // 第一行字体
  cans.fillText(str2, 200, 150) // 第二行字体
  // cans.fillText(str, 150, 135) // 第一行字体
  // cans.fillText(str2, 150, 160) // 第二行字体
  const div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '250px'
  // div.style.left = '220px'
  div.style.left = '0px'
  div.style.right = '80px'
  div.style.opacity = 0.15 // 调节字体颜色的深浅
  div.style.position = 'fixed'
  div.style.zIndex = '0'
  // div.style.width = document.documentElement.clientWidth - 260 + 'px'
  div.style.height = document.documentElement.clientHeight - 0 + 'px'
  div.style.width = document.documentElement.clientWidth + 'px'
  // div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background =
    'url(' + can.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
  return id
}

watermark.set = (str, str2) => {
  let id = setWatermark(str, str2)
  setInterval(() => {
    if (document.getElementById(id) === null) {
      id = setWatermark(str, str2)
    }
  }, 500)
  //   window.onresize = () => {
  //     setWatermark(str)
  //   }
  window.onresize = () => {
    setWatermark(str, str2)
  }
}

export default watermark
