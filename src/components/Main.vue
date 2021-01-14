<template>
  <div class="main">
    <h1 class="main__title">Картины эпохи Возрождения</h1>
    <section class="main__section">
      <card v-for="picture in pictures" :key="picture.id" :picture="picture" />
    </section>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  components: {
    card: Card
  },
  computed: {
    pictures() {
      return this.$store.state.pictures;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 44px 18.3% 96px;

  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    color: $textBrown;
    margin-bottom: 40px;
  }

  &__section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 32px;
  }
}
@media screen and (max-width: 1800px) {
  .main {
    padding: 44px 9% 96px;
  }
}
@media screen and (max-width: 1440px) {
  .main {
    padding: 44px 6% 96px;
  }
}
</style>
