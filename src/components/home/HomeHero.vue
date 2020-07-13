<template>
  <div class="hero">
    <div class="hero__content">
      <div class="hero__content__header">Atėjo metas atlaisvinti vietos spintoje?</div>
      <router-link class="btn btn-primary" to="/about">About</router-link>
    </div>
    <div class="hero__bg">
      <img
        src="@/assets/images/home/woman-wearing-white-long-sleeved-shirt-with-scarf-standing-374679.jpg"
        alt
      />
      <div class="hero__bg__overlay"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: space-between;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .btn {
      align-self: flex-start;
      margin-top: 2rem;
    }

    &__header {
      font-size: 3rem;
    }
  }

  &__bg {
    height: 600px;
    width: 70%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -1px;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(
        93deg,
        #fff 11%,
        rgba(255, 255, 255, 0.7) 25%,
        rgba(255, 255, 255, 0) 30%
      );
      clip-path: polygon(
        25% 17%,
        20% 28%,
        24% 41%,
        20% 59%,
        23% 73%,
        21% 86%,
        22% 100%,
        0 100%,
        0 0,
        22% 0
      );
    }
  }
}
</style>