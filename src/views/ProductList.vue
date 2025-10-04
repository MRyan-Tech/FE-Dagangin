<template>
  <v-app style="background-color: #fff;">
    <!-- 🔶 Navbar -->
    <Navbar />

    <v-main>
      <!-- 🧭 Carousel Banner -->
      <v-container fluid class="pa-0">
    <v-carousel
      cycle
      height="320"
      hide-delimiter-background
      show-arrows="hover"
      interval="4000"
    >
      <v-carousel-item
        v-for="(banner, i) in banners"
        :key="i"
        :src="banner"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-container>

      <!-- 🏷️ Kategori -->
      <v-container class="mt-8">
        <h3 class="text-h5 font-weight-bold mb-6 text-center">
          Kategori Populer
        </h3>
        <v-row justify="center">
          <v-col
            v-for="(cat, i) in categories"
            :key="i"
            cols="4"
            sm="2"
            md="1"
            class="text-center"
          >
            <v-avatar size="72" class="mb-2 elevation-2">
              <v-img :src="cat.icon" alt="Kategori" />
            </v-avatar>
            <p class="text-caption font-weight-medium mt-1">
              {{ cat.name }}
            </p>
          </v-col>
        </v-row>
      </v-container>

      <v-divider class="my-8"></v-divider>

      <!-- 🛍️ Produk -->
      <v-container>
        <h3 class="text-h5 font-weight-bold mb-6 text-center">
          Produk Terbaru
        </h3>

        <v-row>
          <v-col
            v-for="product in products"
            :key="product.pd_id"
            cols="6"
            sm="4"
            md="2"
          >
            <v-card
              elevation="2"
              class="rounded-lg hover:shadow-lg transition-all"
            >
              <v-img
                :src="product.image || 'https://via.placeholder.com/300'"
                height="160"
                cover
              ></v-img>

              <v-card-text class="pa-3">
                <div
                  class="text-subtitle-2 font-weight-medium text-truncate"
                  :title="product.pd_name"
                >
                  {{ product.pd_name }}
                </div>
                <div class="text-orange-darken-3 font-weight-bold mt-1">
                  Rp {{ product.pd_price.toLocaleString() }}
                </div>
              </v-card-text>

              <v-card-actions class="justify-center pb-3">
                <v-btn
                  color="primary"
                  size="small"
                  rounded
                  @click="orderProduct(product)"
                >
                  Beli Sekarang
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "@/plugins/axios";
import Navbar from "@/components/Navbar.vue";
import banner1 from "/id-11134258-7ra0j-mbes592yn87z81@resize_w1594_nl.jpg";
// import banner2 from "@/assets/banner2.jpg";
// import banner3 from "@/assets/banner3.jpg";

const products = ref([]);

// 🧩 Banner Carousel
const banners =ref([banner1]);
// 🏷️ Kategori
const categories = ref([
  { name: "Pakaian", icon: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
  { name: "Elektronik", icon: "https://cdn-icons-png.flaticon.com/512/1041/1041373.png" },
  { name: "Aksesoris", icon: "https://cdn-icons-png.flaticon.com/512/1642/1642394.png" },
  { name: "Kecantikan", icon: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png" },
  { name: "Hobi", icon: "https://cdn-icons-png.flaticon.com/512/1611/1611179.png" },
  { name: "Rumah Tangga", icon: "https://cdn-icons-png.flaticon.com/512/1514/1514935.png" },
]);

// 📦 Ambil data produk dari API
const fetchProducts = async () => {
  try {
    const res = await api.get("/products");
    products.value = res.data;
  } catch (err) {
    console.error("Error fetch products:", err);
  }
};
onMounted(fetchProducts);

// 🛒 Fungsi order
const orderProduct = (product) => {
  console.log("Order product:", product);
};
</script>

<style scoped>
.transition-all {
  transition: all 0.2s ease-in-out;
}
.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.v-card:hover {
  transform: scale(1.03);
}
</style>
