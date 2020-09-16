<template>
<div class="wrapper" :data-open="value">
  <div ref="background" class="bg" @click="() => setState(false)"></div>
  <div
    ref="card"
    class="card"
    :data-state="isMove ? 'move' : getStateName"
    :style="{ top: getTopOffset }"
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
      topOffset: document.documentElement.clientHeight,
    }
  },
  computed: {
    getStateName() {
      return this.value ? 'open' : 'close'
    },
    getTopOffset() {
      return `${this.isMove ? this.y : this.topOffset}px`
    }
  },
  mounted () {
    this.calcY()
    window.addEventListener('resize', this.resizeHandler)
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
    window.removeEventListener('resize', this.resizeHandler)
  },
  updated() {
    this.resizeHandler()
  },
  methods: {
    resizeHandler() {
      this.rect = this.$refs.card.getBoundingClientRect()
      setTimeout(() => {
        this.calcY()
      }, 50)
    },
    getResultHeight() {
      const basedHeight = this.$refs.content.scrollHeight > this.$refs.card.clientHeight ? this.$refs.content.scrollHeight : this.$refs.card.clientHeight
      const offset = window.innerHeight - basedHeight
      const half = window.innerHeight * 0.6
      this.topOffset = basedHeight > half ? window.innerHeight - half : offset
    },
    calcY () {
      const $body =  document.querySelector('body')
      let scrollPosition = 0;
      if(this.value) {
        this.getResultHeight()
        scrollPosition = window.pageYOffset;
        $body.style.overflow = 'hidden';
        $body.style.position = 'fixed';
        $body.style.top = `-${scrollPosition}px`;
        $body.style.width = '100%';
        this.$refs.content.style.maxHeight = `${window.innerHeight - this.topOffset - 44}px`
      } else {
        $body.style.removeProperty('overflow');
        $body.style.removeProperty('position');
        $body.style.removeProperty('top');
        $body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
        this.topOffset = window.innerHeight
      }
    },
    setState (state) {
      this.$emit('input', state)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper[data-open="true"] {
  position: fixed;
  top: 0;
  left: 0;
}

.wrapper[data-open="true"] {
  & > .bg {
    display: block;
    transition: all .3s;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
    touch-action: none;
  }
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
  padding-bottom: 44px;
  &::-webkit-scrollbar {
    width: 3px;
    border-radius: 100%;
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d0d0d0;
  }
}
</style>
