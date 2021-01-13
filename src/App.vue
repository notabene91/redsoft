<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  },
  mounted() {
    if (localStorage.getItem("pictures")) {
      this.$store.commit(
        "getItemsFromLocalStorage",
        JSON.parse(localStorage.getItem("pictures"))
      );
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Merriweather";
  src: url("./fonts/merriweatherlight.woff2") format("woff2"),
    url("./fonts/merriweatherlight.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Merriweather";
  src: url("./fonts/merriweatherregular.woff2") format("woff2"),
    url("./fonts/merriweatherregular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Merriweather";
  src: url("./fonts/merriweatherbold.woff2") format("woff2"),
    url("./fonts/merriweatherbold.woff") format("woff");
  font-weight: 700;
  font-style: bold;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button {
  width: 120px;
  height: 48px;
  color: #f4f6f9;
  border: none;
  font-size: 14px;
  line-height: 150%;
  padding: 0;
  cursor: pointer;
}

.link {
  text-decoration: none;
  color: inherit;
}

.input {
  border: none;
}

#app,
.button,
.input {
  font-family: "Merriweather", Helvetica, Arial;
}

#app {
  height: 100vh;
}

.logo {
  width: 48px;
  height: 48px;
  margin-right: 48px;
}
</style>
