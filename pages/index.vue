<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 xl2>
        <v-btn route to="/recipes" large class="primary">الوصفات</v-btn>
      </v-flex>
      <v-flex xs12 sm6 md4 lg3 xl2>
        <v-btn nuxt to="/signup" large class="success">التسجيل</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
