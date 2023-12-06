<template>
  <div>
    <div class="black-bg" v-if="popup == true">
      <div class="white-bg">
        <h4>{{ onerooms[clickedIndex].title }}</h4>
        <p>상세페이지내용임</p>
        <button @click="popup = false">닫기</button>
      </div>
    </div>

    <!-- if/else -->
    <!-- <div v-if="1 == 2">안녕하세요</div>
    <div v-else>안녕하세요2</div>

    <div v-if="1 == 2">안녕하세요</div>
    <div v-else-if="1 == 3">안녕하세요2</div> -->

    <div class="menu">
      <!-- 
        <태그 v-for="작명 in 몇회" :key="작명"> 
        <태그 v-for="(작명, index) in 몇회" :key="index"> 
        :key="" 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀
        -->
      <a v-for="menu in menus" :key="menu">{{ menu }}</a>
    </div>

    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

    <!-- 
      * 데이터 바인딩 : JS 데이터를 HTML에 꽂아넣는 문법

      * 데이터 바인딩 하는 이유
        1. HTML에 하드코딩 해놓으면 나중에 변경 어려움 
        2. Vue의 실시간 자동 렌더링 쓰기 위해

      * HTML 속성도 데이터 바인딩 가능   ->   :속성='데이터이름'
    -->

    <!-- <div v-for="(product, i) in products" :key="i">
      <img :src="images[i]" alt="" class="room-img" />
      <h4 @click="popup = true">{{ product }}</h4>
      <p>50만원</p>
      <button v-on:click="report[i]++">허위매물신고</button>
      <span> 신고수 : {{ report[i] }}</span>
    </div> -->

    <div v-for="(oneroom, i) in onerooms" :key="i">
      <img :src="oneroom.image" class="room-img" />
      <h4
        @click="
          popup = true;
          clickedIndex = i;
        "
      >
        {{ oneroom.title }}
      </h4>
      <p>{{ oneroom.price }}원</p>
    </div>
  </div>
</template>

<script>
import lists from "./data/oneroom.js";
export default {
  name: "App",
  // 데이터 보관함
  data() {
    // 데이터는 objecct 자료로 저장
    return {
      clickedIndex: 0,
      onerooms: lists,
      popup: false,
      menus: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      report: [0, 0, 0],
      images: [
        "./assets/room0.jpg",
        "./assets/room1.jpg",
        "./assets/room2.jpg",
      ],
    };
  },
  // 함수 만드는 공간
  methods: {
    // 함수안에서 데이터 쓸 땐 this.데이터명
    increase() {
      this.report += 1;
    },
  },
  components: {},
};
</script>

<style>
body {
  margin: 10px;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
