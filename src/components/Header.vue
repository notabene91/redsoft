<template>
  <header class="header">
    <div class="header__left-section">
      <img
        src="../assets/img/logo.png"
        alt="Логотип."
        class="logo header__logo"
      />
      <Navigation class="header__navigation" />
    </div>
    <div class="header__find-section">
      <input
        type="text"
        class="input header__input"
        placeholder="Поиск по названию картины"
      />
      <button class="button header__button">Найти</button>
    </div>
  </header>
</template>

<script>
import Navigation from "./Navigation";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $backWhite;
  min-height: 96px;
  padding: 0 18.3%;
  border-bottom: 1px solid #e1e1e1;
  &__left-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__navigation {
    color: $textBrown;
  }
  &__input {
    width: 296px;
    border: 1px solid #e1e1e1;
    height: 48px;
    font-size: 14px;
    line-height: 150%;
    padding-left: 16px;
    background: $backWhite;
    outline: none;

    &::placeholder {
      color: $placeholder;
    }
  }
  &__button {
    background: $buttonCasual;
    &:hover {
      background: $buttonHover;
    }
  }
}
@media screen and (max-width: 1800px) {
  .header {
    padding: 0 12%;
  }
}
@media screen and (max-width: 1440px) {
  .header {
    padding: 0 6%;
  }
}
</style>
