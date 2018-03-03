<template>
  <div>
      <nuxt-link to="/">Back To Home</nuxt-link>
      <form method="post">
        <input type="text" name="user[username]" placeholder="username" v-model="username" autocomplete="false">
        <input type="email" name="user[email]" placeholder="email" v-model="email" autocomplete="false">
        <input type="password" name="user[password]" placeholder="password" v-model="password" autocomplete="false">
        <button @click.prevent="register">Register</button>
      </form>
  </div>
</template>

<script>
import AuthenticationService from '@/plugins/AuthenticationService';
  export default {
    data(){
      return{
        username: '',
        email: '',
        password: ''
      }
    },
    methods:{
     async register (){
      const response = await AuthenticationService.register({
          user:{
            username: this.username,
            email: this.email,
            password: this.password
          }
        })
        console.log(response);
        this.username ="",
        this.email ="",
        this.password = ""
      }
    }
  }
</script>