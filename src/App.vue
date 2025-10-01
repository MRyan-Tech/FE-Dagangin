<template>
  <v-app>
    <!-- Navbar -->
    <!-- <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>My E-Commerce</v-app-bar-title>
    </v-app-bar> -->

    <!-- Drawer -->
    <!-- <v-navigation-drawer app>
      <v-list>
        <v-list-item to="/" title="Home"></v-list-item>
        <v-list-item to="/about" title="About"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <!-- Halaman Router -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
</script>
