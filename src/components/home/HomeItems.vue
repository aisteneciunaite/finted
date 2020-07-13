<template>
  <div class="grid">
    <card-item
      v-for="{id, img, price, height, width, size, brand} in items"
      :key="id"
      :id="id"
      :img="img"
      :price="price"
      :size="size"
      :height="height"
      :width="width"
      :brand="brand"
    />
  </div>
</template>

<script>
import CardItem from "@/components/common/CardItem.vue";
export default {
  props: ["items"],
  components: {
    CardItem
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 360px;
  gap: 1rem;
}
</style>