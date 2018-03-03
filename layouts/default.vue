<template>
  <v-app id="inspire">
      <v-navigation-drawer right fixed disable-route-watcher disable-resize-watcher clipped app persistent v-model="sideNav">
          <v-list>
              <v-list-tile ripple v-for="item in menuItems" :key="item.title" :to="item.link" exact>
                  <v-list-tile-action>
                      <v-icon>{{item.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content><span class="nav-btn">{{item.title}}</span></v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed clipped-right app dark class="red darken-2">
          <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class=""></v-toolbar-side-icon>
          <v-toolbar-title><nuxt-link to="/">وصفة</nuxt-link></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only">
            <v-btn flat left v-for="item in menuItems" :key="item.title" :to="item.link" exact>
            <v-icon right>{{item.icon}}</v-icon>
                  <span class="nav-btn">{{item.title}}</span>
            </v-btn>
          </v-toolbar-items>
      </v-toolbar>
      <v-content> 
        <main class="content">
          <nuxt/>
        </main> 
      </v-content>
    <v-footer color="red" class="pa-3 center-footer-text">
        <div class="white--text"><span class="footer-text">Wasfa © {{ new Date().getFullYear() }} - All Right Reserved</span></div>
    </v-footer> 
  </v-app>
 </template>
<script>
export default{
    data(){
        return{
            sideNav: false,
            menuItems:[
                { icon:'home', title: 'الرئيسية', link: '/' },
                { icon:'account_circle', title: 'حسابي', link: '/login' },
                { icon:'add_circle', title: 'إضافة وصفة', link: '/recipes/new' }
            ]
        }
    }
}
</script>
<style scoped>
*{
    direction: rtl;
}
.toolbar{
    font-family: 'Droid-Bold', Arial, Helvetica, sans-serif;
}
.toolbar__title{
    margin-right: 20px !important;
    font-family: 'Droid-Bold', Arial, Helvetica, sans-serif;
}
.toolbar__title a {
  text-decoration: none !important;
  color: #ffffff;
  font-size: 20px;
  font-family: 'Droid-Bold', Arial, Helvetica, sans-serif;
}
.nav-btn{
    font-family: 'Droid-Bold', Arial, Helvetica, sans-serif;
}
.footer-text{
    font-weight: bold;
}
.center-footer-text{
    align-items: center;
    justify-content: center;
}
</style>
