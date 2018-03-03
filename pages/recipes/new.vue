<template>
  <v-app>
    <v-container>
      <h1 class="text-xs-center">إضافة وصفة</h1>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 mt-5>
          <v-card>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onCreateRecipe">
                  <v-layout row>
                    <v-flex xs12>
                      <v-layout row wrap>
                      <v-flex xs12 md6>
                      <v-text-field
                      type="text"
                      name="recipe[recipe_title]"
                      label="اسم الوصفة"
                      required
                      clearable
                      autofocus
                      v-model="recipe_title"
                      ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md3>
                        <v-text-field
                        type="text"
                        name="recipe[serving]"
                        label="لكم شخص ؟"
                        clearable
                        v-model="recipe_serving"
                        ></v-text-field>
                      </v-flex>
                        <v-flex xs12 md3>
                        <v-text-field
                        type="text"
                        name="recipe[cooking_time]"
                        label="مدة التحضير ؟"
                        clearable
                        v-model="cooking_time"
                        ></v-text-field>
                      </v-flex>
                      </v-layout>
                      <v-text-field
                      type="text"
                      multi-line
                      name="recipe[recipe_story]"
                      label="ما قصة هذه الوصفة ؟"
                      v-model="recipe_story"
                      ></v-text-field>
                      <v-text-field
                      type="text"
                      name="recipe[recipe_ingredients][]"
                      label="المكوّنات"
                      required
                      multi-line
                      v-model="recipe_ingredients"
                      ></v-text-field>
                      <v-text-field
                      type="text"
                      name="recipe[recipe_steps][]"
                      label="طريقة التحضير"
                      required
                      multi-line
                      v-model="recipe_steps"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-btn large type="submit" class="white--text blue" :disabled="!formIsValid">نشر الوصفة</v-btn>
                </form>
                
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default{
    data(){
      return{
          recipe_title: '',
          recipe_serving: '',
          recipe_story: '',
          cooking_time: '',
          recipe_ingredients: [],
          recipe_steps: []
      }
    },
    computed:{
      formIsValid(){
        return this.recipe_title !== '' && this.recipe_ingredients !== '' && this.recipe_steps !== ''
      }
    },
    methods:{
      onCreateRecipe(){
        if(!this.formIsValid){
          return;
        }
        const recipeData = {
          recipe_title: this.recipe_title,
          recipe_serving: this.recipe_serving,
          recipe_story: this.recipe_story,
          cooking_time: this.cooking_time,
          recipe_ingredients: this.recipe_ingredients,
          recipe_steps: this.recipe_steps
        }
        this.$store.dispatch('createRecipe', recipeData)
        this.$router.push('/recipes')
      }
    }
  }
</script>

<style>
textarea:focus, input:focus, button:focus { outline: none !important; }

.list__tile__title {
    text-align: right;
}

.toolbar__title {
    margin-right: 16px;
}

.input-group--text-field label {
    position: absolute;
    top: 18px;
    right: 0;
}

.input-group label {
    text-align: right;
    -webkit-transform-origin: top right;
    transform-origin: top right;
}
.input-group.input-group--selection-controls label{
    right: 32px;
    left: auto;
}
.input-group.input-group--selection-controls .icon--selection-control {
    left: auto;
    right: 0;
}
.input-group--selection-controls__ripple {
    -webkit-transform: translate3d(12px,-52%,0);
    transform: translate3d(12px,-52%,0);
    left: auto;
    right: 0;
}
</style>