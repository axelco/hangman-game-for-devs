import { createStore } from "vuex";

export default createStore({
  state: {
    frontEndWords : [
      "angular",
      "react",
      "svelte",
      "vue",
      "ember",
      "jquery",
      "backbone"
    ],
    backEndWords : [
      "Symfony", 
      "Laravel", 
      "Express",
      "Django",
      "Meteor",
      "Koa",
    ]
  },
  getters : {
    getNbWordsFront : state => {
      return state.frontEndWords.length;
    },
    getNbWordsBack : state => {
      return state.backEndWords.length;
    }    
  },
  mutations: {},
  actions: {},
  modules: {},
});
