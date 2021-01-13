<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="/" class="link navigation__link">Каталог</a>
      </li>
      <li class="navigation__item">
        <a href="/" class="link navigation__link">Доставка</a>
      </li>
      <li class="navigation__item">
        <a href="/" class="link navigation__link">Оплата</a>
      </li>
      <li class="navigation__item">
        <a href="/" class="link navigation__link">Контакты</a>
      </li>
      <li class="navigation__item">
        <a href="/" class="link navigation__link">О галерее</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-size: 14px;
    line-height: 150%;
  }
  &__item {
    margin-right: 48px;
    &:hover {
      text-decoration: underline;
    }
  }
  &__item:last-of-type {
    margin-right: 0;
  }
}
</style>
