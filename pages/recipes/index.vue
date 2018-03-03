<template>
  <v-container grid-list-md fluid class="grey lighten-4">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 xl2 v-for="recipe in recipes" :key="recipe.recipe_id">
        <v-card raised hover>
          <v-card-media contain :src="recipe.recipe_image" height="200px" >
          </v-card-media>
            <v-card-title primary-title>
              <div class="headline">
                {{ recipe.recipe_title }}
              </div>
            </v-card-title>
           <v-card-actions class="white">
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
            <h1>user</h1>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default{
    computed:{
      recipes (){
        return this.$store.getters.lodaedRecipes
      }
    }
  }
</script>
<style scoped>
.card__actions{
  direction: ltr;
}
</style>
