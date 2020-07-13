import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //app data

    items: [
      {
        id: "aaa",
        img: require("@/assets/images/home/skirt1.jpg"),
        price: 12,
        size: "L",
        width: 15,
        brand: "Yara"
      },
      {
        id: "asg",
        img: "https://dummyimage.com/300x400/FFBA49/fff",
        price: 22.0,
        size: "xl",
        height: 22,
        width: 40,
        brand: "Zara"
      },
      {
        id: "ash",
        img: "https://dummyimage.com/200x700/20A39E/fff",
        price: 22.0,
        size: "xl",
        height: 22,
        width: 40
      },
      {
        id: "asj",
        img: "https://dummyimage.com/200x300/EF5B5B/fff",
        price: 22.0,
        size: "xl",
        height: 22,
        width: 40,
        brand: "Zara"
      },
      {
        id: "ask",
        img: "https://dummyimage.com/200x300/23001E/fff",
        price: 22.0,
        size: "xl",
        height: 22,
        width: 40,
        brand: "Zara"
      }
    ]
  },
  mutations: {
    // changing app data
  },
  actions: {
    // async functions
  },
  modules: {
    //combining several stores ??
  },
  getters: {
    // getting state data
    homeItems: ({ items }) => items,
    getItemById: ({ items }) => (id) => items.find(item => item.id === id)
  },
});
