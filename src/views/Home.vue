<template>
  <v-container>
    <h2>Daftar Produk</h2>
    <v-list>
      <v-list-item
        v-for="product in products"
        :key="product.id"
      >
        <v-list-item-title>
          {{ product.name }} - Rp {{ product.price.toLocaleString() }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])

onMounted(async () => {
  let res = await axios.get('http://127.0.0.1:8000/api/products')
  products.value = res.data
})
</script>
