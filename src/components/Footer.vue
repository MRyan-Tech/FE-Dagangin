<template>
  <v-footer class="bg-grey-lighten-4 pa-0" height="auto">
    <v-container class="py-8">
      <v-row>
        <!-- Kolom 1: Layanan Pelanggan -->
        <v-col cols="12" sm="4">
          <h4 class="text-subtitle-1 font-weight-bold mb-3">
            Layanan Pelanggan
          </h4>
          <ul class="footer-list">
            <li>Pusat Bantuan</li>
            <li>Cara Pembelian</li>
            <li>Pengiriman</li>
            <li>Kebijakan Produk Internasional</li>
            <li>Cara Pengembalian</li>
            <li class="highlight">Ada pertanyaan? Hubungi kami di live chat (24 Jam)</li>
          </ul>
        </v-col>
<a href="http://" target="_blank" rel="noopener noreferrer"></a>
        <!-- Kolom 2: Jelajahi Lazada -->
        <v-col cols="12" sm="4">
          <h4 class="text-subtitle-1 font-weight-bold mb-3">
            Jelajahi Dagangin
          </h4>
          <ul class="footer-list">
            <li>Tentang Dagangin</li>
            <li>Affiliate Program</li>
            <li>Karir</li>
            <li>Syarat & Ketentuan</li>
            <li>Kebijakan Privasi</li>
            <li>Press & Media</li>
            <li>Jual di Dagangin</li>
            <li>Dagangin Security</li>
            <li>Intellectual Property Protection</li>
          </ul>
        </v-col>

        <!-- Kolom 3: Download Aplikasi -->
        <v-col cols="12" sm="4">
          <div class="d-flex flex-column align-end">
            <h4 class="text-subtitle-1 font-weight-bold mb-3">Always Better</h4>
            <p class="text-body-2 mb-2">Download the App</p>
            <div class="d-flex flex-wrap justify-end">
              <v-img
                src="/appstore.jpg"
                width="100"
                class="ma-1"
              ></v-img>
              <v-img
                src="/playstore.jpg"
                width="100"
                class="ma-1"
              ></v-img>
              <v-img
                src="appgalery.jpg"
                width="100"
                class="ma-1"
              ></v-img>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6"></v-divider>

      <v-row>
        <!-- Metode Pembayaran -->
  <v-col cols="12" sm="4">
  <h4 class="text-subtitle-1 font-weight-bold mb-2">Metode Pembayaran</h4>
  <div class="d-flex flex-wrap align-center" style="gap: 4px;">
    <v-img src="/visa.jpg" width="40" height="50" class="mx-1" />
    <v-img src="/mastercard.jpg" width="40" height="50" class="mx-1" />
    <v-img src="/cod.jpg" width="40" height="50" class="mx-1" />
  </div>
</v-col>


        <!-- Jasa Pengiriman -->
        <v-col cols="12" sm="4">
          <h4 class="text-subtitle-1 font-weight-bold mb-3">Jasa Pengiriman</h4>
          <div class="d-flex flex-wrap">
            <v-img src="/jne.png" width="70" class="ma-2" />
            <v-img src="/jnt.png" width="70" class="ma-2" />
            <v-img src="/ninja.png" width="70" class="ma-2" />
            <v-img src="/anteraja.png" width="70" class="ma-2" />
          </div>
        </v-col>

        <!-- Verified By -->
        <v-col cols="12" sm="4">
          <h4 class="text-subtitle-1 font-weight-bold mb-3">Verified By</h4>
          <div class="d-flex flex-wrap ">
            <v-img src="/bsi.png" width="70" class="ma-2" />
            <v-img src="/pcidss.png" width="90" class="ma-2" />
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6"></v-divider>

      <v-row align="center" justify="space-between">
        <!-- Negara -->
        <div class="d-flex flex-wrap align-center">
          <span class="mr-2 font-weight-medium">Dagangin Southeast Asia</span>
          <v-img
            v-for="(flag, i) in flags"
            :key="i"
            :src="flag"
            width="30"
            class="mr-2"
          />
        </div>

        <!-- Sosial Media -->
        <div class="d-flex align-center">
          <v-icon class="ma-2" size="24">mdi-facebook</v-icon>
          <v-icon class="ma-2" size="24">mdi-linkedin</v-icon>
          <v-icon class="ma-2" size="24">mdi-instagram</v-icon>
          <v-icon class="ma-2" size="24">mdi-twitter</v-icon>
          <v-icon class="ma-2" size="24">mdi-youtube</v-icon>
        </div>
      </v-row>

      <div class="text-center text-body-2 mt-6">
        © Dagangin 2025
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
const flags = [
  "https://flagcdn.com/w20/id.png",
  "https://flagcdn.com/w20/my.png",
  "https://flagcdn.com/w20/ph.png",
  "https://flagcdn.com/w20/sg.png",
  "https://flagcdn.com/w20/th.png",
  "https://flagcdn.com/w20/vn.png",
];
</script>

<style scoped>
.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-list li {
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}
.footer-list li:hover {
  text-decoration: underline;
}
.footer-list .highlight {
  background-color: #ff7f50;
  color: white;
  padding: 4px 6px;
  border-radius: 4px;
  width: fit-content;
}
</style>
