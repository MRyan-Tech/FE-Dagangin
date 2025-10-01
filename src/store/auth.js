import { defineStore } from "pinia";
import { login, logout, getUser } from "@/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null,
  }),
  actions: {
    async login(payload) {
      const res = await login(payload);
      this.token = res.data.token;
      this.user = res.data.user;
      localStorage.setItem("token", this.token);
    },
    async fetchUser() {
      if (!this.token) return;
      const res = await getUser();
      this.user = res.data;
    },
    async logout() {
      await logout();
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});
