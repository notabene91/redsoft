import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictures: [
      {
        id: 1,
        image: require("@/assets/img/1.png"),
        name: "«Рождение Венеры» Сандро Боттичелли",
        price: 2000000,
        finalPrice: 1000000,
        selled: false,
        inCart: false,
        loading: false
      },
      {
        id: 2,
        image: require("@/assets/img/2.png"),
        name: "«Тайная вечеря»  Леонардо да Винчи",
        finalPrice: 3000000,
        selled: false,
        inCart: false,
        loading: false
      },
      {
        id: 3,
        image: require("@/assets/img/3.png"),
        name: "«Сотворение Адама» Микеланджело",
        price: 6000000,
        finalPrice: 5000000,
        selled: false,
        inCart: false,
        loading: false
      },
      {
        id: 4,
        image: require("@/assets/img/4.png"),
        name: "«Урок анатомии»  Рембрандт",
        price: 3000000,
        selled: true,
        inCart: false,
        loading: false
      }
    ]
  },
  mutations: {
    setToCart(state, id) {
      state.pictures.find(item => item.id === id).inCart = true;
    },
    removeFromCart(state, id) {
      state.pictures.find(item => item.id === id).inCart = false;
    },
    loading(state, id) {
      let pic = state.pictures.find(item => item.id === id);
      pic.loading = !pic.loading;
    },
    getItemsFromLocalStorage(state, data) {
      state.pictures = data;
    }
  },
  actions: {
    addToCart({ state, commit }, id) {
      return fetch("https://reqres.in/api/products/3")
        .then(setTimeout(() => commit("loading", id), 500))
        .catch(e => console.log(e))
        .finally(
          setTimeout(() => commit("setToCart", id), 500),
          commit("loading", id),
          setTimeout(
            () =>
              localStorage.setItem("pictures", JSON.stringify(state.pictures)),
            500
          )
        );
    }
    // Искусственно замедлил запрос, для того чтобы было видно промежуточное состояние
  },
  modules: {}
});
