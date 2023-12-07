<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ BlogConts[$route.params.id].title }}</h5>
    <p>{{ BlogConts[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    BlogConts: Array,
  },
};
</script>

<style></style>
