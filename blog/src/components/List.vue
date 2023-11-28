<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <h5>{{ BlogCont[0].title }}</h5>
      <p>{{ BlogCont[0].date }}</p>
    </div>
    <div>
      <h5>{{ BlogCont[1].title }}</h5>
      <p>{{ BlogCont[1].date }}</p>
    </div>
    <div>
      <h5>{{ BlogCont[2].title }}</h5>
      <p>{{ BlogCont[2].date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "list",
  props: {
    BlogCont: Array,
  },
};
</script>

<style></style>
