// Vue4 세팅
// 1. 모든 컴포넌트가 쓸 수 있는 데이터 저장용 js파일 만들기
//
// state를 수정하고 싶으면
// 1. 미리 store.js에 수정방법을 정의해두고
// 2. 그 방법을 컴포넌트에서 소환해서 수정해야함

import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // 데이터 보관 여기에
      name: "kimmm",
    };
  },
});

export default store;
