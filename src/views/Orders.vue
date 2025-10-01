<template>
    <v-container class="py-10">
      <v-row>
        <v-col cols="12" class="text-center mb-6">
          <h2 class="text-h4 font-weight-bold">My Orders</h2>
        </v-col>
  
        <!-- Kalau belum ada order -->
        <v-col v-if="orders.length === 0" cols="12" class="text-center">
          <v-alert type="info">You don’t have any orders yet.</v-alert>
        </v-col>
  
        <!-- List orders -->
        <v-col v-for="order in orders" :key="order.od_id" cols="12" sm="6" md="4">
          <v-card class="pa-4">
            <v-card-title class="text-h6">
              Order #{{ order.od_id }}
            </v-card-title>
            <v-card-subtitle>
              {{ new Date(order.od_created_at).toLocaleDateString() }}
            </v-card-subtitle>
            <v-card-text>
              <p>Status: {{ order.od_status }}</p>
              <p>Total: Rp {{ order.od_total.toLocaleString() }}</p>
  
              <div v-if="order.items && order.items.length">
                <h4 class="text-subtitle-2">Items:</h4>
                <ul>
                  <li v-for="item in order.items" :key="item.id">
                    {{ item.product?.pd_name }} x {{ item.od_qty }}  
                    (Rp {{ item.od_price.toLocaleString() }})
                  </li>
                </ul>
              </div>
            </v-card-text>
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
  
  const orders = ref([]);
  const error = ref("");
  
  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders");
      orders.value = res.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to load orders";
    }
  };
  
  onMounted(fetchOrders);
  </script>
  