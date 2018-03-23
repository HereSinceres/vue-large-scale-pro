<template> 
<div>
isAuthenticated:  {{isAuthenticated}}
<hr>
authStatus:{{authStatus}}
<hr>
  <button @click="login">登录</button>
  <button @click="logout">登出</button>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "./_store";
export default {
  components: {},
  computed: {
    ...mapGetters({
      isAuthenticated: "$_auth/isAuthenticated",
      authStatus: "$_auth/authStatus"
    })
  },
  created() {
    this.$store.registerModule("$_auth", store);
  },
  mounted() {},
  methods: {
    login() {
      this.$store
        .dispatch("$_auth/AUTH_REQUEST", { username: "uname", password: "pwd" })
        .then(() => {
          this.$router.push("/");
        });
    },
    logout() {
      this.$store.dispatch("$_auth/AUTH_LOGOUT").then(() => {
        debugger
        this.$router.push("/login");
      });
    }
  }
};
</script>