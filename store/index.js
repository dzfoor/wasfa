import Vuex from 'vuex'
import Api from '../plugins/Api'

const store = () => {
  return new Vuex.Store({
    state: {
        lodaedRecipes: [
            {
                recipe_id: '1',
                recipe_title: 'Pizza Hot',
                recipe_image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg',
                recipe_serving: '2 persons',
                recipe_story: 'it\'s along story to tell',
                cooking_time: '30min',
                recipe_ingredients: [
                    "some farine only"
                ],
                recipe_steps: [
                    "put the farine and your done"
                ]
            }
        ],
        user: {
            user_id: '1',
            likedRecipes: '1'
        }
    },
    mutations: {
        createRecipe(state, payload){
            state.lodaedRecipes.push(payload)
        }
    },
    actions:{
        userLogin({commit}, payload){
            return  Api().post('user_token', payload).then(res =>{
                console.log(res)
            })
            console.log(this.payload)
        },
        createRecipe({ commit }, payload){
            const recipe = {
                recipe_title: payload.recipe_title,
                recipe_serving: payload.recipe_serving,
                recipe_story: payload.recipe_story,
                cooking_time: payload.cooking_time,
                recipe_ingredients: payload.recipe_ingredients,
                recipe_steps: payload.recipe_steps
            }
            commit('createRecipe', recipe)
        }
    },
    getters:{
        lodaedRecipes(state){
            return state.lodaedRecipes
        },
        lodaedRecipe(state){
            return (recipe_id) => {
                return lodaedRecipes.find((recipe) => {
                    return recipe.id === recipe_id
                })
            }
        }
    }
  })
}

export default store