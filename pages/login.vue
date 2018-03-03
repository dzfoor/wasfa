<template>
  <v-container>
    <h1 class="text-xs-center">تسجيل الدخول</h1>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 mt-5>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onLogin" class="mb-2">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    type="email"
                    name="user[email]"
                    label="البريد الإلكتروني"
                    id="email"                    
                    required
                    clearable
                    v-model="email"
                    append-icon="email"
                    ></v-text-field>
                      <v-text-field
                        type="password"   
                        name="user[password]"
                        label="كلمة المرور"
                        id="password"
                        validate-on-blur
                        required
                        clearable
                        v-model="password"
                        append-icon="lock"
                      ></v-text-field>
                      <v-btn type="submit" class="success">تسجيل الدخول</v-btn>
                      <v-btn dark class="blue">حساب جديد</v-btn>
                    </v-flex>
                </v-layout>
              </form>
              <div>
                <nuxt-link to="/password_reset" class="pr-2 ps-reset-link">نسيت كلمة المرور ؟</nuxt-link>
              </div>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data(){
      return {
        email: '',
        password: ''
      }
    },
    computed:{

    },
    methods:{
      onLogin(){
        this.$store.dispatch('userLogin', {auth:{ email: this.email, password: this.password}})
        console.log({email: this.email, password: this.password});
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
