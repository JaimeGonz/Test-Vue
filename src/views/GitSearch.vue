<template>
  <div>
    <Header />
    <div class="container is-family-sans-serif">
      <div class="title">
        <h1 class="is-size-2 has-text-weight-bold">
          Git Profile
        </h1>
      </div>
      <div class="search__container">
        <b-input
          class="search__container-input"
          v-model="username"
          type="user"
          placeholder="Search GitHub profile..."
        />
        <b-button
          class="search__container-btn"
          @click="searchProfile"
          type="is-black is-small is-rounded"
          >Search</b-button
        >
      </div>

      <div class="profile">
        <div v-if="profile">
          <div class="is-family-sans-serif mb-2">
            <img
              class="profile__img has-text-weight-bold"
              :src="profile.avatar_url"
              alt=""
            />
            <h2 class="profile__name">{{ profile.name }}</h2>
            <p class="is-italic has-text-weight-light">{{ profile.login }}</p>
            <p v-show="profile.bio" class="profile__bio mb-2">
              {{ profile.bio }}.
            </p>
            <div>
              <span>
                <svg
                  text="muted"
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-people"
                >
                  <path
                    d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"
                  ></path>
                </svg>
                <strong>{{ profile.followers }}</strong> followers ·
              </span>
              <span>
                <strong>{{ profile.following }}</strong> following
              </span>
            </div>
            <p v-show="profile.company" class="my-2 has-text-weight-light">
              <svg
                class="octicon octicon-organization"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"
                ></path>
              </svg>
              {{ profile.company }}
            </p>
            <p v-show="profile.blog">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-link"
              >
                <path
                  d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"
                ></path>
              </svg>
              <a
                class="my-3 has-text-black"
                :href="profile.blog"
                target="_blank"
                >{{ profile.blog }}</a
              >
            </p>
          </div>
          <a class="mt-6" :href="profile.html_url" target="_blank"
            >Go to user GitHub</a
          >
        </div>
      </div>
      <!-- Repos-->
      <div>
        <ul v-if="repos.length > 0" class="repos">
          <div
            class="repo-card"
            v-for="repo in reposWithLanguages"
            :key="repo.name"
          >
            <div class="pinned-item">
              <div class="">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-repo mr-1 color-fg-muted"
                >
                  <path
                    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                  ></path>
                </svg>
                <span class="is-size-6 has-text-weight-bold">{{
                  repo.name
                }}</span>
              </div>
              <p></p>
              <p>
                <span
                  class="is-size-7 mr-1"
                  v-for="language in repo.languages"
                  :key="language"
                >
                  <span class="repo-language-color"></span> {{ language }}
                </span>
              </p>
            </div>
          </div>
        </ul>
      </div>
      <div class="loading is-size-4 has-text-weight-bold" v-if="loading">
        Cargando...
      </div>
      <div
        class="error has-text-danger is-size-4 has-text-weight-bold"
        v-if="error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
import Header from "../components/Header.vue";

export default {
  components: {
    Header
  },
  beforeRouteEnter(to, from, next) {
    const sessionCookie = Cookies.get("session");
    if (sessionCookie) {
      next();
    } else {
      next("/login");
    }
  },
  data() {
    return {
      username: "",
      profile: null,
      loading: false,
      error: null,
      repos: [],
      reposWithLanguages: []
    };
  },
  methods: {
    searchProfile() {
      this.loading = true;
      this.profile = null;
      this.error = null;
      this.repos = [];
      this.reposWithLanguages = [];

      //Profile
      axios
        .get(`https://api.github.com/users/${this.username}`)
        .then(response => {
          this.profile = response.data;
          console.log("Profile" + this.profile);
          this.loading = false;

          // Repos
          axios
            .get(`https://api.github.com/users/${this.username}/repos`)
            .then(response => {
              this.repos = response.data;
              const repos_names = this.repos.map(repo => repo.name);
              const requests = repos_names.map(repoName =>
                axios.get(
                  `https://api.github.com/repos/${this.username}/${repoName}/languages`
                )
              );

              Promise.all(requests)
                .then(responses => {
                  this.reposWithLanguages = responses.map((response, index) => {
                    const repoName = repos_names[index];
                    const languages = Object.keys(response.data);

                    return {
                      name: repoName,
                      languages: languages
                    };
                  });
                })
                .catch(error => {
                  console.log("Error al obtener los lenguajes:", error);
                });
            })
            .catch(error => {
              this.error = "No se encontraron repositorios.";
            });
        })
        .catch(error => {
          this.error = "No se encontró el perfil del usuario.";
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  grid-template-areas:
    "title title title"
    "search search search"
    "profile repos repos"
    "loading loading loading"
    "error error error";
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 1rem;
}

.title {
  grid-area: title;
  margin: 2rem 0 0;
}
.search__container {
  grid-area: search;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.search__container-input {
  margin: 1rem;
}

.search__container-btn {
  font-size: 16px;
}

.profile {
  grid-area: profile;
  border-radius: 2rem;
  max-height: 60rem;
}

.repos {
  grid-area: repos;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 2rem;
  padding: 0.5rem;
}

.loading {
  grid-area: loading;
}

.error {
  grid-area: error;
}

.profile__img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.profile__name {
  font-size: 20px;
  font-weight: 900;
}

.profile__bio {
  margin: 0 3rem;
  font-weight: 600;
}

.repo-card {
  background-color: hsl(0, 0%, 96%);
  border-radius: 0.25rem;
  padding: 1rem;
  max-width: 100%;
  position: relative;
  display: flex;
  border: 0.5px solid hsl(0, 0%, 86%);
}

.pinned-item {
  text-align: left;
}
.repo-language-color {
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid hsl(0, 0%, 86%);
  border-radius: 50%;
}

/* Tablet */
@media screen and (min-width: 640px) {
  .repos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .profile__bio {
    margin: 0 7rem;
    text-align: center;
  }
}

/* Desktop view */
@media screen and (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-areas:
      "title title title"
      "search search search"
      "profile repos repos"
      "loading loading loading"
      "error error error";
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
  }

  .profile__bio {
    margin: 0;
  }
}

@media screen and (min-width: 1400px) {
  .container {
    display: grid;
    grid-template-areas:
      "title title title"
      "search search search"
      "profile repos repos"
      "loading loading loading"
      "error error error";
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
  }

  .profile__img {
    width: 300px;
    height: 300px;
    border-radius: 13rem;
    margin-bottom: 10px;
  }
  .repos {
    grid-area: repos;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    border-radius: 2rem;
    padding: 0.5rem;
  }

  .profile__bio {
    margin: 0 2rem;
  }
}
</style>
