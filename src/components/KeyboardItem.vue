<template>
  <div>
    <div id="keyboard">
      <div v-for="item in letters" :key="item.letter">
        <button
          @click="handleClick"
          :value="item.letter"
          class="btn btn-dark"
          :disabled="item.disabled"
        >
          {{ item.letter }}
        </button>
      </div>
    </div>
    <p class="mt-3 text-gray d-none d-lg-block">
      ⌨ vous pouvez utiliser votre clavier
    </p>
  </div>
</template>

<script>
export default {
  name: "KeyboardItem",
  props: {
    letters: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // handle a click on a button or a key pressed
    handleClick(e) {
      let value = e.type === "keydown" ? e.key.toLowerCase() : e.target.value;
      const possibleLetters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];

      // We make sure that letter pressed or clicked is in alphabet
      if (possibleLetters.indexOf(value) !== -1) {
        const letterIndex = this.letters
          .map((e) => {
            return e.letter;
          })
          .indexOf(value);

        // And we make sure that this letter is not already disabled before sending event to parent
        if (!this.letters[letterIndex].disabled) {
          this.$emit("letter-clicked-event", value);
        }
      }
    },
  },
  beforeMount() {
    document.addEventListener("keydown", this.handleClick);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleClick);
  },
};
</script>
