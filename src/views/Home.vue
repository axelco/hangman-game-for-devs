<template>
  <div class="">
    <div class="text-center">
      <p class="h1 mb-3">🎲</p>
      <h2 class="mb-5 h1">Bienvenue sur le jeu du pendu pour développeurs</h2>
      <p class="lead">
        Le principe est simple : choisissez le mode de jeu ci-dessous. Vous
        aurez alors un ensemble de mots à découvrir, avec à la fin un score basé
        sur ce que vous avez réussi à trouver.
      </p>
    </div>
    <div class="row gx-5 mt-3 mt-lg-5">
      <div class="col-12 mb-3 col-lg-6 mb-0">
        <div class="h-100 bg-white rounded p-4 text-center shadow-lg">
          <h3 class="mb-4 mb-lg-5">Front-end</h3>
          <p>
            Essayez de trouver les <strong class="badge bg-dark mx-2">{{ nbWordsFront }}</strong> frameworks et librairies JS pour le front-end
          </p>
          <div class="d-grid">
              <router-link 
                to="/game/front" 
                class="btn btn-lg btn-primary mt-3 mt-lg-4"
                >C'est parti !</router-link>
          </div>          

        </div>
      </div>
      <div class="col-12 mb-3 col-lg-6 mb-0">
        <div class="h-100 bg-white rounded p-4 text-center shadow-lg">
          <h3 class="mb-4 mb-lg-5">Back-end</h3>
          <p>
            Essayez de trouver les <strong class="badge bg-dark mx-2">{{ nbWordsBack }}</strong> frameworks en back-end (php, js, python)
          </p>
          <div class="d-grid">
              <router-link 
                to="/game/back" 
                class="btn btn-lg btn-primary mt-3 mt-lg-4"
                >C'est parti !</router-link>
          </div>  
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
