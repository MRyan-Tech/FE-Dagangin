<template>
    <v-container fluid class="pa-0 ma-0" style="height: 100vh;">
      <v-row o-gutters class="h-100">
        <v-col
        cols="12"
        md="6"
        class="d-flex flex-column align-center justify-center"
        style="background: linear-gradient(135deg, #1976d2, #2196f3); color: white;"
      >
        <div class="text-center px-8">
          <h1 class="text-h3 font-weight-bold mb-4">Selamat datang di </h1>
          <p class="text-subtitle-1">
            Silahkan Registrasi akun untuk melanjutkan.
          </p>
          <v-img
            src="/logo.png"
            max-width="400"
            class="mt-6 center"
            
          />
          <h4>Copyright &copy; 2025</h4>
        </div>
      </v-col>

      <v-col
        cols="12"
        md="6"
        class="d-flex align-center justify-center"
      >
      <v-card width="400vh" height="100vh" class="pa-8" elevation="8" rounded="md">
        <v-card-title class="text-h3 text-center" style="margin-top: 5vh; font-weight: bold;" >Register</v-card-title>
        <v-form @submit.prevent="handleRegister" style="margin-top: 5vh;">
          <v-text-field
            v-model="form.us_name"
            label="Name"
            prepend-inner-icon="mdi-account"
            outlined
            required
          />
          <v-text-field
            v-model="form.us_email"
            label="Email"
            type="email"
            prepend-inner-icon="mdi-email"
            outlined
            required
          />
          <v-text-field
            v-model="form.us_password"
            label="Password"
            type="password"
            prepend-inner-icon="mdi-lock"
            outlined
            required
          />
          <v-text-field
            v-model="form.us_phone_number"
            label="Phone Number"
            prepend-inner-icon="mdi-phone"
            outlined
          />
          <v-text-field
            v-model="form.us_address"
            label="Address"
            prepend-inner-icon="mdi-map-marker"
            outlined
          />
  
          <v-btn               
              style="border-radius: 15px; height: 6vh;"
              type="submit"
              color="primary"
              block
              class="mt-10"
              :loading="loading">
            Register
          </v-btn>
        </v-form>
  
        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
  
        <div class="text-center mt-4">
          Already have an account?
          <RouterLink to="/login">Login</RouterLink>
        </div>
      </v-card>
    </v-col>
    </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import api from "@/plugins/axios";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const form = ref({
    us_name: "",
    us_email: "",
    us_password: "",
    us_phone_number: "",
    us_address: "",
  });
  const loading = ref(false);
  const error = ref("");
  
  const handleRegister = async () => {
    loading.value = true;
    error.value = "";
  
    try {
      const res = await api.post("/register", form.value);
  
      // simpan token & user langsung login setelah register
      localStorage.setItem("token", res.data.access_token || "");
      localStorage.setItem("user", JSON.stringify(res.data));
  
      router.push("/");
    } catch (err) {
      if (err.response) {
        error.value = err.response.data.message || "Register gagal";
      } else {
        error.value = "Server tidak merespons";
      }
    } finally {
      loading.value = false;
    }
  };
  </script>
  