<template>
  <div>
    <div :class="alertClass">
      <h2 class="h1">{{ title }}</h2>
      <p class="lead">
        Le mot était
        <strong class="fw-bold text-uppercase">{{ word.word }}</strong>
      </p>
    </div>
    <button class="btn btn-lg btn-primary" @click="handleClick">
      {{ btnText }}
    </button>
    <p class="mt-2 text-gray text-sm d-none d-lg-block">⌨ Tapez sur Entrée</p>
  </div>
</template>

<script>
export default {
  name: "RoundResult",
  props: {
    word: {
      type: Object,
      required: true,
    },
    maxRounds: {
      type: Number,
      required: true,
    },
    currentRound: {
      type: Number,
      required: true,
    },
  },
  computed: {
    alertClass() {
      let css = "alert mb-3 mb-lg-5 ";
      css += this.word.isFound ? "alert-success" : "alert-danger";
      return css;
    },
    title() {
      return this.word.isFound ? `Bravo 🥳` : `Raté 🤒`;
    },
    btnText() {
      return this.maxRounds === this.currentRound
        ? `Voir le résultat`
        : `Mot suivant`;
    },
  },
  methods: {
    handleClick() {
      if (this.maxRounds === this.currentRound) {
        this.$emit("end-game-event");
      } else {
        this.$emit("next-round-event");
      }
    },
    handleKeypressed(e) {
      if (e.key === "Enter") {
        this.handleClick();
      }
    },
  },
  beforeMount() {
    document.addEventListener("keydown", this.handleKeypressed);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeypressed);
  },
};
</script>
