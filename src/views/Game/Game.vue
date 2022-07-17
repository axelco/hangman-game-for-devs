<template src="./Game.html"></template>

<script>
// import Words from "@/data/words.js";
import { mapState, mapGetters } from 'vuex';
import CardItem from "@/components/CardItem.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import KeyboardItem from "@/components/KeyboardItem.vue";
import RoundResult from "@/components/RoundResult.vue";
import GameResult from "@/components/GameResult.vue";

export default {
  name: "Game",
  components: {
    CardItem,
    KeyboardItem,
    RoundResult,
    GameResult,
    ProgressBar,
  },
  data() {
    return {
      gameType : '',
      words: [],
      wordsToFind: [],
      currentRound: 0,
      maxRounds: 0,
      keyBoardLetters: [
        {
          letter: "a",
          disabled: false,
        },
        {
          letter: "z",
          disabled: false,
        },
        {
          letter: "e",
          disabled: false,
        },
        {
          letter: "r",
          disabled: false,
        },
        {
          letter: "t",
          disabled: false,
        },
        {
          letter: "y",
          disabled: false,
        },
        {
          letter: "u",
          disabled: false,
        },
        {
          letter: "i",
          disabled: false,
        },
        {
          letter: "o",
          disabled: false,
        },
        {
          letter: "p",
          disabled: false,
        },
        {
          letter: "q",
          disabled: false,
        },
        {
          letter: "s",
          disabled: false,
        },
        {
          letter: "d",
          disabled: false,
        },
        {
          letter: "f",
          disabled: false,
        },
        {
          letter: "g",
          disabled: false,
        },
        {
          letter: "h",
          disabled: false,
        },
        {
          letter: "j",
          disabled: false,
        },
        {
          letter: "k",
          disabled: false,
        },
        {
          letter: "l",
          disabled: false,
        },
        {
          letter: "m",
          disabled: false,
        },
        {
          letter: "w",
          disabled: false,
        },
        {
          letter: "x",
          disabled: false,
        },
        {
          letter: "c",
          disabled: false,
        },
        {
          letter: "v",
          disabled: false,
        },
        {
          letter: "b",
          disabled: false,
        },
        {
          letter: "n",
          disabled: false,
        },
      ],
      roundFinished: false,
      nbErrors: 0,
      maxErrors: 8,
      gameOver: false,
    };
  },
  computed: {
    ...mapState({
        frontEndWords: "frontEndWords",
        backEndWords: "backEndWords"
    }),
    ...mapGetters({
        nbWordsFront: "getNbWordsFront",
        nbWordsBack : "getNbWordsBack"
    }),     

    setCurrentRoundForFront() {
      return this.currentRound + 1;
    },
    setMaxRoundsForFront() {
      return this.maxRounds + 1;
    },
    setMaxErrorsForFront() {
      return this.maxErrors + 1;
    },

    remainingAttempts() {
      return this.maxErrors - this.nbErrors;
    },

    remainingAttempsClass() {
      let css = "fw-bold badge ms-2 ";
      const remaining = this.maxErrors - this.nbErrors;
      if (remaining < this.maxErrors / 2) {
        css += "text-white bg-danger";
      } else if (remaining < this.maxErrors) {
        css += "text-dark bg-warning";
      } else {
        css += "text-dark bg-light";
      }

      return css;
    },

    gameSentence(){
        let sentence = `Les mots à rechercher sont des frameworks et librairies pour le développement `
        sentence += `${this.gameType}-end`
        return '💡 '+sentence;
    }
  },
  methods: {

    getWordsList() {
      let newWordsToFind = [];
      const wordsRandomized = this.shuffle(this.words);
      wordsRandomized.forEach((item) => {
        let wordObj = {};
        let wordArray = [];
        wordObj.word = item.toLowerCase();
        for (let letter of item) {
          wordArray.push({
            letter: letter.toLowerCase(),
            isFound: false,
          });
        }
        wordObj.wordIntoArray = wordArray;
        wordObj.isFound = false;
        wordObj.isPlayed = false;
        newWordsToFind.push(wordObj);
      });
      this.wordsToFind = newWordsToFind;
      this.maxRounds = newWordsToFind.length - 1;
    },

    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },

    handleLetterClicked(letter) {
      // First we disable the letter inside the keyboard
      const letterIndex = this.keyBoardLetters
        .map((e) => {
          return e.letter;
        })
        .indexOf(letter);

      this.keyBoardLetters[letterIndex].disabled = true;

      // Then we check for the letter in word
      const currentWord = this.wordsToFind[this.currentRound];
      const currentWordArray = currentWord.wordIntoArray;
      const letterExistsInWord = currentWordArray.filter(
        (el) => el.letter === letter
      );

      // If letter clicked does not exist in wurrent word
      if (letterExistsInWord.length === 0) {
        // we'll increment nbErrors state
        this.nbErrors += 1;

        // If we reach max errors authorized, we set roundFinished on true to show alert on front
        if (this.nbErrors === this.maxErrors) {
          this.roundFinished = true;
        }
      } else {
        // We have to set true on matching letters inside the array of current word
        currentWordArray.forEach((item) => {
          if (item.letter === letter) {
            item.isFound = true;
          }
        });

        // Then we need to check if all letters are found
        const checkIfAllLettersFound = [];
        currentWordArray.forEach((item) => {
          checkIfAllLettersFound.push(item.isFound);
        });

        // When all letters found
        if (!checkIfAllLettersFound.includes(false)) {
          // We have to set current word as found
          currentWord.isFound = true;
          // We have to set round finished
          this.roundFinished = true;
        }
      }
    },

    resetKeyboard() {
      this.keyBoardLetters = [
        {
          letter: "a",
          disabled: false,
        },
        {
          letter: "z",
          disabled: false,
        },
        {
          letter: "e",
          disabled: false,
        },
        {
          letter: "r",
          disabled: false,
        },
        {
          letter: "t",
          disabled: false,
        },
        {
          letter: "y",
          disabled: false,
        },
        {
          letter: "u",
          disabled: false,
        },
        {
          letter: "i",
          disabled: false,
        },
        {
          letter: "o",
          disabled: false,
        },
        {
          letter: "p",
          disabled: false,
        },
        {
          letter: "q",
          disabled: false,
        },
        {
          letter: "s",
          disabled: false,
        },
        {
          letter: "d",
          disabled: false,
        },
        {
          letter: "f",
          disabled: false,
        },
        {
          letter: "g",
          disabled: false,
        },
        {
          letter: "h",
          disabled: false,
        },
        {
          letter: "j",
          disabled: false,
        },
        {
          letter: "k",
          disabled: false,
        },
        {
          letter: "l",
          disabled: false,
        },
        {
          letter: "m",
          disabled: false,
        },
        {
          letter: "w",
          disabled: false,
        },
        {
          letter: "x",
          disabled: false,
        },
        {
          letter: "c",
          disabled: false,
        },
        {
          letter: "v",
          disabled: false,
        },
        {
          letter: "b",
          disabled: false,
        },
        {
          letter: "n",
          disabled: false,
        },
      ];
    },

    nextRound() {
      this.resetKeyboard();
      this.nbErrors = 0;
      this.currentRound += 1;
      this.roundFinished = false;
    },

    getResults() {
      this.gameOver = true;
    },

    startGame() {
      this.currentRound = 0;
      this.gameOver = false;
      this.roundFinished = false;
      this.resetKeyboard();
      this.nbErrors = 0;
      this.setGameType();
      this.getWordsList();
      this.maxRounds = this.wordsToFind.length - 1;
    },

    setGameType() {

        const routeGameType = this.$route.params.type;

        const authSubRoutes = ["front", "back"];
        //  If no subroutes matches the one above, redirect to home
        if (!authSubRoutes.includes(routeGameType)) {
        this.$router.push("/home");
        }

        this.gameType = routeGameType;    
        this.words = this.gameType === "front" ? this.frontEndWords : this.backEndWords
        this.maxRounds = this.gameType === "front" ? this.nbWordsFront : this.nbWordsBack;

   },
  },
  watch: {
    $route(to, from) {
      if (to.name === "Game" && to.params.type !== from.params.type) {
        this.startGame();
      }
    },
  },
  beforeMount() {
    this.startGame();

    // We set a control when window is refreshing to prevent it, only when currentRound is not 0 and game is not over
    
    // if (this.currentRound > 0 || !this.gameOver) {
    //   window.onbeforeunload = () => {
    //     return "Attention, les données saisies ne seront pas sauvegardées";
    //   };
    // } else {
    //   window.onbeforeunload = () => {
    //     return null;
    //   };
    // }

  },

};
</script>
