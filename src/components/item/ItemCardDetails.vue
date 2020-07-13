<template>
  <div class="item card" style="width: 18rem;">
    <div class="card-body">
      <div class="price">{{item.price}}</div>
      <div class="dropdown-divider"></div>
      <div class="details">
        <span class="details__label">DYDIS</span>
        <span class="details__value">{{item.size}} / {{item.width}} / {{item.height}}</span>
        <span class="details__label">BŪKLĖ</span>
        <span class="details__value">{{item.condition}}</span>
        <span class="details__label">SPALVA</span>
        <span class="details__value">{{item.color}}</span>
        <span class="details__label">PERŽIŪRĖTA</span>
        <span class="details__value">5</span>
      </div>
      <div class="dropdown-divider"></div>
      <div class="description">
        <h5>Lorem ipsum dolor sit amet</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div>
        <button type="button" class="btn btn-primary">Teirautis</button>
        <button type="button" class="btn btn-light">🤍 Pažymėti</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="scss" scoped>
.item {
  .price {
    font-size: 24px;
    line-height: 32px;
    color: #111;
    font-weight: 500;
    &:after {
      content: " €";
    }
  }

  .details {
    display: grid;
    column-gap: 10px;
    grid-template-columns: repeat(2, 1fr);

    &__label {
      color: #999;
      text-transform: uppercase;
    }

    &__value {
      color: #666;
      text-transform: uppercase;
    }
  }
  .btn {
    width: 100%;
    margin: 5px;
  }
}
</style>