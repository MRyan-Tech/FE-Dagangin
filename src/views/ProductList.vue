<template>
    <v-container class="py-10">
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>My E-Commerce</v-app-bar-title>
      <v-avatar color="surface-variant"></v-avatar>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer app>
      <v-list>
        <v-list-item to="/" title="Home"></v-list-item>
        <v-list-item to="/about" title="About"></v-list-item>
        <v-list-item to="/orders" title="Order"></v-list-item>
      </v-list>
    </v-navigation-drawer>
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
          border="2px solid #ccc"
        >
          <v-card class="pa-4">
            <v-card-title class="text-h6">
              {{ product.pd_name }}
            </v-card-title>
            <v-card-subtitle>
              Code: {{ product.pd_code }}
            </v-card-subtitle>
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
  
      <!-- error -->
      <v-alert v-if="error" type="error" class="mt-4">
        {{ error }}
      </v-alert>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import api from "@/plugins/axios";
  
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
  </script>
  
  