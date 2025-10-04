<template>
  <div class="mt-10" fixed>
<v-sheet
  color="primary"
  class="py-1 px-6 text-white text-caption"
  style="position: fixed; top: 0; left: 0; width: 100%; z-index: 2000;"
>
  <v-row justify="space-between" align="center" no-gutters>

    <v-col cols="auto" class="d-flex gap-4">
      <span>Download App |</span>
      <span>Bantuan |</span>
      <span>Tentang Kami |</span>
      <span>Bahasa Indonesia |</span>
      <span>ikuti kami di
        <v-icon class="ml-1">mdi-linkedin</v-icon>
        <v-icon class="ml-1">mdi-facebook</v-icon>
        <v-icon class="ml-1">mdi-instagram</v-icon>
        <v-icon class="ml-1">mdi-twitter</v-icon>

      </span>
    </v-col>
  </v-row>
</v-sheet>

<v-app-bar
  color="primary"
  flat
  height="70"
  class="px-6 d-flex align-center shadow-sm" 
  style="margin-top: 28px; z-index: 1000;"
>

      <!-- 🛍️ Logo -->
      <v-btn to="/" variant="text" class="pa-0">
        <v-img src="/logo.png" contain height="40" />
      </v-btn>

      <!-- 🔍 Search Bar -->
      <v-text-field
        v-model="search"
        placeholder="Cari produk, merek, dan toko"
        density="compact"
        class="mx-6 flex-grow-1 search-box"
        hide-details
        rounded
        prepend-inner-icon="mdi-magnify"
        @keyup.enter="handleSearch"
        style="background-color: white;  
        color: #757575 !important;
        border-radius: 20px;"
      ></v-text-field>

      <!-- ❤️ Wishlist -->
      <v-btn icon>
        <v-icon color="white-darken-1">mdi-heart-outline</v-icon>
      </v-btn>

      <!-- 🛒 Cart -->
      <v-btn icon>
        <v-icon color="white-darken-1">mdi-cart-outline</v-icon>
      </v-btn>

      <!-- 🔐 Auth -->
      <div class="d-flex align-center ml-4">
        <v-btn
          to="/login"
          color="white"
          variant="flat"
          class="text-capitalize mr-2"
        >
          Login
        </v-btn>
        <v-btn
          to="/register"
          color="white"
          variant="flat"
          class="text-capitalize"
        >
          Daftar
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const search = ref("");

const handleSearch = () => {
  if (search.value.trim() !== "") {
    router.push({ path: "/search", query: { q: search.value } });
  }
};
</script>

<style scoped>
.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.gap-4 > * + * {
  margin-left: 1rem;
}
</style>
