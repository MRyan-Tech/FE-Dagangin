<template>
  <v-layout>
    <!-- Navbar -->
    <Navbar @toggle-drawer="drawer = !drawer" />

    <!-- Drawer -->
    <v-navigation-drawer
      v-if="$vuetify.display.smAndDown"
      v-model="drawer"
      location="top"
      temporary
      width="355"
    >
      <v-list>
        <v-list-item link prepend-icon="mdi-home-outline" title="Dashboard" />
        <v-list-item link prepend-icon="mdi-calendar" title="Calendar" />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-row>
        <v-col cols="12" class="text-center mb-6">
          <h2 class="text-h4 font-weight-bold">Product List</h2>
        </v-col>

        <v-col
          v-for="product in products"
          :key="product.pd_id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="pa-4">
            <v-card-title>{{ product.pd_name }}</v-card-title>
            <v-card-subtitle>Code: {{ product.pd_code }}</v-card-subtitle>
            <v-card-text>
              <p>Price: Rp {{ product.pd_price.toLocaleString() }}</p>
              <p v-if="product.category">Category: {{ product.category.ct_name }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="orderProduct(product)">Order</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, onMounted, shallowRef } from "vue";
import api from "@/plugins/axios";
import Navbar from "@/components/navbar.vue"; // << panggil komponen

const drawer = shallowRef(false);
const products = ref([]);

const fetchProducts = async () => {
  try {
    const res = await api.get("/products");
    products.value = res.data;
  } catch (err) {
    console.error("Error fetch products:", err);
  }
};
onMounted(fetchProducts);

const orderProduct = (product) => {
  console.log("Order product:", product);
};
</script>
