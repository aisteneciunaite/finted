<template>
  <div class="container-lg item">
    <img :src="item.img" />
    <item-details :item="item" />
  </div>
</template>



<script>
import ItemDetails from "@/components/item/ItemCardDetails.vue";
// {
//   id: "asg",
//   img: "https://dummyimage.com/300x400/FFBA49/fff",
//   price: 22.0,
//   size: "xl",
//   height: 22,
//   width: 40,
//   brand: "Zara"
// },
export default {
  props: ["id"],
  components: { ItemDetails },
  computed: {
    item() {
      return this.$store.getters.getItemById(this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;

  img {
    height: 500px;
    width: 400px;
    object-fit: cover;
  }
}
</style>