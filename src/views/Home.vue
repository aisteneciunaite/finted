<template>
  <div class="container-lg">
    <home-hero />
    <home-items :items="items" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HomeHero from "@/components/home/HomeHero.vue";
import HomeItems from "@/components/home/HomeItems.vue";
export default {
  name: "Home",
  components: {
    HomeHero,
    HomeItems
  },
  computed: {
    ...mapGetters({ items: "homeItems" })
  }
};
</script>

<style lang="scss">
</style>
