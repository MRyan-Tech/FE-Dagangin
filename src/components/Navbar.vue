<template>
  <div>
    <!-- 🔹 Bar Atas -->
    <v-sheet
      color="primary"
      class="py-1 px-6 text-white text-caption"
      style="position: relative; z-index: 2;"
    >
      <v-row justify="space-between" align="center" no-gutters>
        <v-col cols="auto">Download Aplikasi</v-col>
        <v-col cols="auto" class="d-flex gap-4">
          <span>Bantuan</span>
          <span>Tentang Kami</span>
          <span>Bahasa Indonesia</span>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- 🔶 Navbar Utama -->
    <v-app-bar
      color="white"
      flat
      height="70"
      class="px-6 d-flex align-center shadow-sm"
      style="margin-top: 0;"
    >
      <!-- 🛍️ Logo -->
      <v-btn to="/" variant="text" class="pa-0">
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg"
          alt="Shopee"
          contain
          height="40"
        />
      </v-btn>

      <!-- 🔍 Search Bar -->
      <v-text-field
        v-model="search"
        placeholder="Cari produk, merek, dan toko"
        variant="outlined"
        density="compact"
        class="mx-6 flex-grow-1"
        hide-details
        rounded
        prepend-inner-icon="mdi-magnify"
        @keyup.enter="handleSearch"
      ></v-text-field>

      <!-- ❤️ Wishlist -->
      <v-btn icon>
        <v-icon color="grey-darken-1">mdi-heart-outline</v-icon>
      </v-btn>

      <!-- 🛒 Cart -->
      <v-btn icon>
        <v-icon color="grey-darken-1">mdi-cart-outline</v-icon>
      </v-btn>

      <!-- 🔐 Auth -->
      <div class="d-flex align-center ml-4">
        <v-btn
          to="/login"
          color="primary"
          variant="outlined"
          class="text-capitalize mr-2"
        >
          Login
        </v-btn>
        <v-btn
          to="/register"
          color="primary"
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
