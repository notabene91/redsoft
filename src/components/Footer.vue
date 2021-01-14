<template>
  <footer class="footer">
    <div class="footer__left-section">
      <img
        src="../assets/img/logo.png"
        alt="Логотип."
        class="logo footer__logo"
      />
      <Navigation class="footer__navigation" />
    </div>
    <span class="footer__phone">+7 (495) 555-55-55</span>
    <span class="footer__adress">г. Москва, ул. Расплетина, 24</span>
  </footer>
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
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 96px;
  background: $backGrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18.3%;
  color: $textGrey;

  &__left-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__phone,
  &__adress {
    position: relative;
    font-size: 14px;
    line-height: 150%;
  }
  &__phone::before {
    content: url("../assets/svg/phone.svg");
    position: absolute;
    width: 14px;
    height: 14px;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__adress::before {
    content: url("../assets/svg/mark.svg");
    position: absolute;
    width: 14px;
    height: 14px;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
@media screen and (max-width: 1800px) {
  .footer {
    padding: 0 9%;
  }
}
@media screen and (max-width: 1440px) {
  .footer {
    padding: 0 6%;
  }
}
</style>
