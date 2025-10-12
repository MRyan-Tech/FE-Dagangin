<template>
  <div class="mt-10" fixed>
    <!-- 🔹 Top Bar -->
    <v-sheet
      color="primary"
      class="py-1 px-6 text-white text-caption"
      style="position: fixed; top: 0; left: 0; width: 100%; z-index: 2000;"
    >
      <v-row justify="space-between" align="center" no-gutters>
        <!-- 🔸 Kiri -->
        <v-col cols="auto" class="d-flex gap-4">
          <span>Download App |</span>
          <span>Tentang Kami |</span>
          <span>
            ikuti kami di
            <v-icon class="ml-1">mdi-linkedin</v-icon>
            <v-icon class="ml-1">mdi-facebook</v-icon>
            <v-icon class="ml-1">mdi-instagram</v-icon>
            <v-icon class="ml-1">mdi-twitter</v-icon>
          </span>
        </v-col>

        <!-- 🔸 Kanan (Bahasa + Akun/Login) -->
        <v-col cols="auto" class="d-flex align-center gap-4">
          <!-- Bahasa -->
          <span><v-icon size="16" class="mr-1">mdi-translate</v-icon>
            Bahasa Indonesia |</span>
          <span class="d-flex align-center"><v-icon size="16" class="mr-1">mdi-phone</v-icon>
            Bantuan |</span>
          <span class="d-flex align-center">
            <v-icon size="16" class="mr-1">mdi-bell</v-icon>
            Notifikasi |
          </span>


          <!-- Jika belum login -->
          <template v-if="!isLoggedIn">
            <v-btn to="/login" color="white" variant="text" class="text-capitalize mr-2" style="background-color: cornflowerblue;">
              Login
            </v-btn>
            <v-btn to="/register" color="white" variant="text" class="text-capitalize" style="background-color: cornflowerblue;">
              Daftar
            </v-btn>
          </template>

          <!-- Jika sudah login -->
          <template v-else>
            <v-menu offset-y>
              <template #activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-avatar size="24" color="white">
                    <v-icon color="primary">mdi-account-circle</v-icon>
                  </v-avatar>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Hallo, {{ user.us_name }}</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item @click="goToProfile">
                  <v-list-item-title>My Profile</v-list-item-title>
                </v-list-item>
                <v-list-item @click="logout">
                  <v-list-item-title>Sign out</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- 🔹 Main Navbar -->
    <v-app-bar
      color="primary"
      flat
      height="70"
      class="px-6 d-flex align-center shadow-sm"
      style="margin-top: 40px; z-index: 1000;"
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
        class="mx-6 flex-grow-2 search-box"
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
    </v-app-bar>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const search = ref("");

// 🔹 State login
const isLoggedIn = ref(false);
const user = ref({ us_name: "User" });

// 🔍 Pencarian produk
const handleSearch = () => {
  if (search.value.trim() !== "") {
    router.push({ path: "/search", query: { q: search.value } });
  }
};

// 🔹 Cek login dari localStorage
onMounted(() => {
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");

  if (token && userData) {
    isLoggedIn.value = true;
    user.value = JSON.parse(userData);
  }
});

// 🔹 Logout
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  isLoggedIn.value = false;
  router.push("/login");
};

// 🔹 Pergi ke profil
const goToProfile = () => {
  router.push("/profile");
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
