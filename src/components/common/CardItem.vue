<template>
  <div class="card-item" @click="$router.push({path: 'item/'+ id})">
    <img :src="img" />
    <div>
      <div class="price">{{price}}</div>
      <div>{{size}} / {{width}} / {{height}}</div>
      <div class="brand">{{brand}}</div>
      <footer>
        <div>
          <div class="dropdown-divider"></div>
          <span>🤍 0</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "img", "price", "size", "height", "width", "brand"]
};
</script>

<style lang="scss" scoped>
.card-item {
  display: grid;
  width: 100%;
  grid-template-rows: 7fr 2fr;
  background-color: white;
  cursor: pointer;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .price {
    font-weight: bold;
    font-size: 1.17rem;
    &:after {
      content: " €";
    }
  }
  .brand {
    font-weight: bold;
  }
}
</style>