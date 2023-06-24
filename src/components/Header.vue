<template>
  <div>
    <nav
      class="navbar pt-3 is-transparent container is-family-sans-serif"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://v2.vuejs.org/">
          <img src="../assets/logoApp.png" />
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a @click="logout" class="button is-primary">
              Log out
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div class="tabs is-centered">
      <ul>
        <li>
          <router-link
            to="/todo"
            exact
            :class="{ 'is-active': activeLink === '/todo' }"
            >Todo List</router-link
          >
        </li>
        <li>
          <router-link
            to="/timer"
            exact
            :class="{ 'is-active': activeLink === '/timer' }"
            >Timer</router-link
          >
        </li>
        <li>
          <router-link
            to="/github-search"
            exact
            :class="{ 'is-active': activeLink === '/github-search' }"
            >Github Search</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data() {
    return {
      activeLink: this.$route.path
    };
  },
  watch: {
    // Observar cambios en la ruta actual y actualizar el enlace activo
    $route(to) {
      this.activeLink = to.path;
    }
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
    logout() {
      Cookies.remove("session"); // Elimina la cookie 'session'
      this.$router.push("/login"); // Redirige a la ruta '/login'
    }
  }
};
</script>

<style scoped>
/* Estilos específicos del componente */

.is-active {
  border-width: 0.2rem;
  border-bottom-color: #485fc7;
  color: #485fc7;
  font-weight: bold;
}
</style>
