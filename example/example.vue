<template>
  <div>
    <h1>Vue Swipeable Bottom Sheet</h1>
    <button @click="open">Open</button>
    <button @click="close">Close</button>
    <swipeable-bottom-sheet v-model="swipeState" ref="swipeableBottomSheet">
      <h1>Lorem Ipsum</h1>
      <h2>What is Lorem Ipsum?</h2>
      <button @click="list.push(text)">add text</button>
      <button @click="list.pop()">remove text</button>
      <template v-if="list.length">
        <div v-for="(text, index) in list" :key="index">
          {{text}}
        </div>
      </template>
      <button @click="openInnerSwipe">Open next swiper</button>
      <swipeable-bottom-sheet v-model="innerSwipeState">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur eum impedit in maiores minima minus molestiae omnis quia reiciendis.</p>
      </swipeable-bottom-sheet>
    </swipeable-bottom-sheet>
  </div>
</template>

<script>
import { SwipeableBottomSheet } from '../src';

export default {
  components: {
    SwipeableBottomSheet
  },
  data() {
    return {
      swipeState: false,
      innerSwipeState: false,
      list: [],
      text: `
      <p>
        <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      `
    }
  },
  methods: {
    open () {
      this.swipeState = true
    },
    close () {
      this.swipeState = false
    },
    openInnerSwipe() {
      this.innerSwipeState = true
    },
    closeInnerSwipe() {
      this.innerSwipeState = false
    }
  }
}
</script>
