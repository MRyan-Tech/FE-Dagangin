<template>
  <v-container fluid class="pa-0 ma-0" style="height: 100vh;">
    <v-row no-gutters class="h-100">
      <!-- Kolom Kiri -->
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column align-center justify-center"
        style="background: linear-gradient(135deg, #1976d2, #2196f3); color: white;"
      >
        <div class="text-center px-8">
          <h1 class="text-h3 font-weight-bold mb-4">Selamat Datang Di </h1>
          <p class="text-subtitle-1">
            Flatform E-commerce – Silahkan login untuk melanjutkan.
          </p>
          <v-img
            src="/logo.png"
            max-width="400"
            class="mt-6 center"
            
          />
          <h4>Copyright &copy; 2025</h4>
        </div>
      </v-col>

      <!-- Kolom Kanan -->

      <v-col
        cols="12"
        md="6"
        class="d-flex align-center justify-center"
      >
        <v-card width="400vh" height="100vh" class="pa-8" elevation="8" rounded="md">
          <v-card-title class="text-h3 text-center" style="margin-top: 6vh; font-weight: bold;" >Sign in</v-card-title>
          <v-alert v-if="error" 
          type="error" 
          style="width: 98%; border-radius: 20px;"
          class="mt-4 text-center">
            {{ error }}
          </v-alert>

          <v-alert v-if="successMessage" 
          type="success" 
          style="width: 98%; border-radius: 20px;"
          class="mt-4 text-center">
            {{ successMessage }}
          </v-alert>
          <v-form @submit.prevent="handleLogin" class="pa-5 mt-5">
            <div>
            <h3 class="pa-1 mt-3">Email</h3>
            <v-text-field
              v-model="form.us_email"
              placeholder="Masukan email"
              type="email"
              variant="text"
              hide-details
              required
              prepend-inner-icon="mdi-account"
              density="comfortable"
              style="border: 1px solid #ccc;  border-radius: 20px; padding: 5px 15px;"
            />
          </div>
          <div>
            <h3 class="pa-1 mt-7">Password</h3>
            <v-text-field
              variant="text"
              density="comfortable"
              style="border: 1px solid #ccc; height: 6vh; border-radius: 20px; padding: 5px 15px;"
              v-model="form.us_password"
              placeholder="Masukan password"
              type="password"
              prepend-inner-icon="mdi-lock"
              required
            />
          </div>
          <v-switch label="Ingatkan saya" inset color="green" class="mt-3 pa-1 ml-1"></v-switch>
            <v-btn
              style="border-radius: 15px; height: 6vh;"
              type="submit"
              color="primary"
              block
              class="mt-3"
              :loading="loading">
              Login
            </v-btn>
          </v-form>
          <div class="text-center mt-4">
            Belum punya account?
            <RouterLink to="/register">Registrasi disini</RouterLink>
          </div>
          <v-row class="align-center my-4">
            <v-col><v-divider></v-divider></v-col>
            <v-col class="shrink text-center">Or continue with</v-col>
            <v-col><v-divider></v-divider></v-col>
          </v-row>
          <div class="d-flex justify-center mt-10">
            <v-icon size="36" class="mx-3" style="cursor: pointer;">mdi-gmail</v-icon>
            <v-icon size="36" class="mx-3" style="cursor: pointer;">mdi-facebook</v-icon>
            <v-icon size="36" class="mx-3" style="cursor: pointer;">mdi-linkedin</v-icon>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import api from "../plugins/axios";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  us_email: "",
  us_password: "",
});

const loading = ref(false);
const error = ref("");
const successMessage = ref(""); // untuk pesan sukses

const handleLogin = async () => {
  loading.value = true;
  error.value = "";
  successMessage.value = "";

  try {
    const res = await api.post("/login", form.value);

    // simpan token & user
    localStorage.setItem("token", res.data.access_token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // tampilkan pesan sukses dari backend
    successMessage.value = res.data.message || "Login berhasil";

    // redirect setelah sedikit delay biar user sempat lihat pesannya
    setTimeout(() => {
      router.push("/");
    }, 1500);

  } catch (err) {
    if (err.response) {
      error.value = err.response.data.message || "Login gagal";
    } else {
      error.value = "Server tidak merespons";
    }
  } finally {
    loading.value = false;
  }
};

</script>
