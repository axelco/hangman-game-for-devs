<template>
  <div class="">
    <div class="text-center">
      <p class="h1 mb-4">🎲</p>
      <h2 class="mb-5 h1">Welcome to the hangman Game for Developpers !</h2>
      <p class="lead">
        Try to discover front-end or back-end frameworks following the rules of hangman game. You'll have 8 attempts maximum per word.
      </p>
    </div>
    <div class="row gx-5 mt-3 mt-lg-5">
      <div class="col-12 mb-3 col-lg-6 mb-0">
        <div class="h-100 rounded p-4 text-center shadow-lg">
          <router-link to="/game/front" class="text-dark" style="text-decoration: none;" >

          
          <h3 class="mb-4 mb-lg-5">Front-end</h3>
          <p>
            Try to find out the <strong class="badge bg-primary mx-1">{{ nbWordsFront }}</strong> front-end frameworks and libraries 
          </p>
          <div class="d-grid">
              <router-link 
                to="/game/front" 
                class="btn btn-primary btn-lg  mt-3 mt-lg-4"
                >Let's play front-end</router-link>
          </div>          
          </router-link>
        </div>
      </div>
      <div class="col-12 mb-3 col-lg-6 mb-0">
        <div class="h-100 rounded p-4 text-center shadow-lg">
          <router-link 
            to="/game/back" class="text-dark" style="text-decoration: none;" >        
            <h3 class="mb-4 mb-lg-5">Back-end</h3>
            <p>
              Try to find out the <strong class="badge bg-primary mx-1">{{ nbWordsBack }}</strong> back-end frameworks (javascrpt, php, java...)
            </p>
            <div class="d-grid">
                <router-link 
                  to="/game/back" 
                  class="btn btn-lg btn-primary mt-3 mt-lg-4"
                  >Let's play back-end</router-link>
            </div>  
          </router-link> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CardItem from '@/components/CardItem.vue';
import { mapGetters } from 'vuex'
export default {
  name: "Home",
  computed : {
		...mapGetters({
			nbWordsFront: "getNbWordsFront",
      nbWordsBack : "getNbWordsBack"
		}),    
  }
};
</script>
