<template>
  <v-app>
    <!-- <Navbar /> ✅ Navbar di luar router-view -->

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
