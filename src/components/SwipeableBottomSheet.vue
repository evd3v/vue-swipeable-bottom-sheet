<template>
<div class="wrapper" :data-open="value">
  <div ref="background" class="bg" @click="() => setState(false)"></div>
  <div
    ref="card"
    class="card"
    :data-state="isMove ? 'move' : getStateName"
    :style="{ top: `${isMove ? y : calcY()}px` }"
  >
    <div class="pan-area" ref="pan"><div class="bar" ref="bar"></div></div>
    <div class="contents" ref="content">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
import Hammer from "hammerjs"

export default {
  props: {
    openY: {
      type: Number,
      default: 0.5
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mc: null,
      y: 0,
      startY: 0,
      isMove: false,
      rect: {},
      height: 0,
    }
  },
  computed: {
    getStateName() {
      return this.value ? 'open' : 'close'
    }
  },
  mounted () {
    window.onresize = () => {
      this.rect = this.$refs.card.getBoundingClientRect()
    }
    this.rect = this.$refs.card.getBoundingClientRect()

    this.mc = new Hammer(this.$refs.pan)
    this.mc.get('pan').set({ direction: Hammer.DIRECTION_ALL })

    this.mc.on("panup pandown", (evt) => {
      if(this.value && evt.deltaY < 0) {
        return
      }
      this.y = evt.center.y - 16
    })

    this.mc.on("panstart", (evt) => {
      if(this.value && evt.deltaY < 0) {
        return
      }
      this.startY = evt.center.y
      this.isMove = true
    })

    this.mc.on("panend", (evt) => {
      this.isMove = false

      if (this.startY - evt.center.y > 120) {
        this.setState(true)
      }

      if (this.startY - evt.center.y < -50) {
        this.setState(false)
      }
    })
  },
  beforeDestroy () {
    this.mc.destroy()
    window.onresize = null
  },
  methods: {
    calcY () {
      if(this.value) {
        const offset = document.documentElement.clientHeight - this.$refs.card.clientHeight
        const half = document.documentElement.clientHeight * 0.6
        const result = this.$refs.card.clientHeight > half ? document.documentElement.clientHeight - half : offset
        document.body.style.overflow = 'hidden'
        this.$refs.content.style.maxHeight = `${document.documentElement.clientHeight - result - 44}px`
        return result
      }
      document.body.style.overflow = 'initial'
      return document.documentElement.clientHeight
    },
    setState (state) {
      this.$emit('input', state)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper[data-open="1"] {
  position: fixed;
  top: 0;
  left: 0;
}

.wrapper[data-open="1"] .bg {
  display: block;
  transition: all .3s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
}

.card {
  width: 100%;
  //max-height: 100vh;
  position: fixed;
  background: white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 -3px 4px rgba(0, 0, 0, .1);
  left: 0;
}

.card[data-state="open"], .card[data-state="close"] {
  transition: top .3s ease-out;
}

.card[data-state="close"] {
  box-shadow: none;
}

.bar {
  background: rgba(0, 0, 0, .3);
  margin: 0 auto;
  cursor: pointer;
  display: block;
  width: 50px;
  height: 4px;
  background: #F2F2F2;
  border-radius: 50px;
}

.pan-area {
  padding: 20px 0;
}

.contents {
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>
