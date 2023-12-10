<template>
  <div>
    <img :src="oneroom.image" class="room-img" />
    <h4>
      {{ oneroom.title }}
    </h4>
    <p>{{ oneroom.price }}원</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    oneroom: Object,
  },
};
</script>

<style></style>
