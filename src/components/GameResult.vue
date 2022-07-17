<template>
  <div>
    <h2>Game over ⌛</h2>

    <div :class="alertClass">
      <p class="display-5 mb-0">
        Your score is <strong class="fw-bold">{{ score }}&nbsp;%</strong>
      </p>
    </div>

    <ul id="resultWordsList" className="list-no-style mb-3 mb-lg-5">
      <li v-for="item in words" :key="item.word">
        <span v-if="item.isFound">✅</span>
        <span v-else>❌</span>
        {{ item.word }}
      </li>
    </ul>
    <button @click="handleRetryClick" class="btn btn-lg btn-primary">
      Try again
    </button>
    <p class="mt-2 text-gray text-sm d-none d-lg-block">⌨ hint Enter to restart</p>
  </div>
</template>

<script>
export default {
  name: "GameResult",
  props: {
    words: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      score: 0,
    };
  },
  computed: {
    alertClass() {
      let css = "my-5 alert  alert-";
      if (this.score < 40) {
        css += "danger";
      } else if (this.score >= 40 && this.score < 70) {
        css += "warning";
      } else {
        css += "success";
      }

      return css;
    },
  },
  methods: {
    nbTotalWords() {
      return this.words.length;
    },

    nbWordsFound() {
      let nbWordsFound = 0;
      this.words.forEach((el) => {
        if (el.isFound) {
          nbWordsFound += 1;
        }
      });
      return nbWordsFound;
    },

    calculateScore() {
      let calculation = this.nbWordsFound() / this.nbTotalWords();
      if (!isNaN(calculation)) {
        this.score = Math.ceil(calculation * 100);
      }
    },

    handleRetryClick() {
      this.$emit("retry-game-event");
    },

    handleKeypressed(e) {
      if (e.key === "Enter") {
        this.handleRetryClick();
      }
    },
  },

  beforeMount() {
    this.calculateScore();
    document.addEventListener("keydown", this.handleKeypressed);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeypressed);
  },
};
</script>
