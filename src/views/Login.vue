<template>
  <div class="app__container">
    <div class="styled__img">
      <img src="../assets/waveDecoration-primary.png" alt="Wave decoration" />
    </div>
    <div class="backgroundImg__container">
      <img src="../assets/backgroundImage.svg" />
    </div>
    <div class="login-container">
      <form class="login">
        <b-field
          class="mt-5 mb-6 is-flex is-justify-content-space-evenly is-align-items-center is-size-5"
          >Log in to <img src="../assets/logoApp.png"
        /></b-field>
        <b-field label="Username" class="has-text-left my-5">
          <b-input
            v-model="username"
            placeholder="Username"
            type="user"
            class="is-rounded"
            required
          />
        </b-field>
        <b-field label="Password" class="has-text-left">
          <b-input
            v-model="password"
            type="password"
            class="is-family-code eye"
            value="iwantmytreasure"
            password-reveal
          >
          </b-input>
        </b-field>
        <br />
        <b-button @click="login" type="is-black is-fullwidth is-medium" rounded
          >Login</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import md5 from "md5";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      const encodedPassword = md5(this.password);
      const credentials = {
        user: this.username,
        pass: encodedPassword
      };
      axios
        .get(
          "https://mocki.io/v1/3e408794-39ed-4c75-bb6e-c49c578de293",
          credentials
        )
        .then(response => {
          if (
            response.data.userName === credentials.user &&
            response.data.password === credentials.pass
          ) {
            // Create and storage the cookie
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + 5 * 60 * 1000); // 5 min expiration
            // Store a session cookie or token here
            Cookies.set("session", "true", { expires: expirationDate });
            this.$router.push("/todo");
          } else {
            console.log("Invalid username or password");
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style>
.hero {
  background: "#48C78E";
}
.hero-body {
  justify-content: center;
}

.login {
  width: 100%;
  max-width: 25rem;
  min-height: 32rem;
  padding: 3.2rem 4rem;
  border-radius: 3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  background: white;
}

.login-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 2rem;
  z-index: 10;
}

input {
  background: "#D9DDE6";
}

a {
  font-weight: 600;
}

.img-container {
  width: 15rem;
  height: auto;
  margin: 0 auto;
}

.app__container {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-gap: 7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2 rem;
}

.styled__img {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: -10;
}

.backgroundImg__container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.icon {
  color: black !important;
}

.icon svg {
  height: 1em !important;
  width: 1em !important;
}

.fa-eye {
  width: 10px;
  height: 10px;
}

@media (min-width: 767px) {
  .app__container {
    display: grid;
    grid-gap: 7rem;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2rem;
  }
}

@media (max-width: 767px) {
  .backgroundImg__container {
    display: none;
  }

  .styled__img {
    height: 60%;
  }
}
</style>
