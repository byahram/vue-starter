<template>
  <div class="black-bg" v-if="popup == true">
    <div class="white-bg">
      <img :src="onerooms[clickedIndex].image" alt="" style="width: 100%" />
      <h4>{{ onerooms[clickedIndex].title }}</h4>
      <p>{{ onerooms[clickedIndex].content }}</p>
      <p>{{ onerooms[clickedIndex].price }}원</p>
      <!-- <button @click="popup = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  props: {
    // 자식은 props로 받은 것 등록
    // props: {데이터이름: 자료형이름}
    onerooms: Array,
    clickedIndex: Number,
    popup: Boolean,
  },
  components: {},
};
</script>

<style></style>
