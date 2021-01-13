<template>
  <div class="card" :class="{ card_selled: picture.selled }">
    <img class="card__image" :src="picture.image" :alt="picture.name" />
    <div class="card__info">
      <h2 class="card__title">{{ picture.name }}</h2>
      <div v-if="!picture.selled" class="card__buy-section">
        <div class="card__price-section">
          <span v-if="picture.price" class="card__price_origin">
            {{ picture.price }} &#36;</span
          >
          <span class="card__price"> {{ picture.finalPrice }} &#36;</span>
        </div>
        <button
          @click="addToCart(picture.id)"
          class="button card__button"
          :class="{ card__button_added: picture.inCart }"
        >
          {{ buttonText }}
        </button>
      </div>
      <span v-if="picture.selled" class="card__selled-message"
        >Продана на аукционе</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: Object
  },
  computed: {
    buttonText() {
      if (this.picture.inCart) return "В корзине";
      else if (this.picture.loading) {
        return "Добавляем...";
      } else return "Купить";
    }
  },
  methods: {
    addToCart(id) {
      if (!this.picture.inCart) {
        this.$store.dispatch("addToCart", id);
      } else {
        this.$store.commit("removeFromCart", id);
        localStorage.setItem(
          "pictures",
          JSON.stringify(this.$store.state.pictures)
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 280px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e1e1;
  &_selled {
    opacity: 0.5;
  }
  &__image {
    object-fit: cover;
  }
  &__info {
    padding: 20px 24px 24px;
    color: $textBrown;
  }
  &__title {
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 22px;
  }
  &__price {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    &_origin {
      text-decoration-line: line-through;
      color: #a0a0a0;
      font-size: 14px;
      font-weight: 300;
    }
  }
  &__button {
    background: $buttonCasual;
    &:hover {
      background: $buttonHover;
    }
    &_added {
      background-color: $buttonAdded;
      background-image: url("../assets/svg/check.svg");
      background-repeat: no-repeat;
      background-position: 10% center;
      padding-left: 10%;
      &:hover {
        background-color: $buttonAdded;
        background-image: url("../assets/svg/check.svg");
        background-repeat: no-repeat;
        background-position: 10% center;
        padding-left: 10%;
      }
    }
  }
  &__buy-section {
    display: flex;
    justify-content: space-between;
  }
  &__price-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__selled-message {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
  }
}
</style>
