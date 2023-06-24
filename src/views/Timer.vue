<template>
  <div>
    <Header />
    <section class="section timer is-family-code">
      <div>
        <h1 class=" is-size-2 has-text-weight-bold mb-6 is-family-sans-serif">
          Set Timer
        </h1>
      </div>
      <b-field
        label="Time in seconds"
        type="is-family-code"
        class="mb-5 is-flex is-flex-direction-column is-align-items-center"
      >
        <b-input
          v-model="duration"
          type="number"
          placeholder="Duración en segundos"
        ></b-input>
      </b-field>
      <div>
        <b-button
          @click="startTimer"
          v-show="!isRunning"
          type="is-success is-family-code"
          >Start</b-button
        >
        <b-button
          @click="pauseTimer"
          v-show="isRunning"
          type="is-warning is-family-code"
          >Pause</b-button
        >
        <b-button @click="resetTimer" type="is-danger is-family-code"
          >Clean</b-button
        >
      </div>

      <div class="timer-display" :style="circleStyle">
        <div
          class="timer-format is-size-1 has-text-weight-bold is-family-code"
          :style="timerStyle"
        >
          {{ formattedTime }}
        </div>
        <div
          class="is-size-6 is-family-code has-text-weight-bold"
          :style="timerStyle"
        >
          <span class="mr-3">Hours</span>
          <span>Minutes</span>
          <span class="ml-3">Seconds</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import Header from "../components/Header.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      duration: 0,
      intervalId: null,
      isRunning: false,
      currentTime: 0
    };
  },
  computed: {
    formattedTime() {
      const remainingTime = this.duration - this.currentTime;
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;

      return `${this.formatNumber(hours)}:${this.formatNumber(
        minutes
      )}:${this.formatNumber(seconds)}`;
    },
    timerStyle() {
      const remainingTime = this.duration - this.currentTime;

      if (remainingTime === 0) {
        return {
          color: "hsl(0, 0%, 4%)"
        }; // Normal style
      } else if (this.isRunning && remainingTime <= 5) {
        return {
          // Red color when raimainging < 5
          color: "hsl(348, 86%, 40%)"
        };
      } else if (this.isRunning && remainingTime > 5) {
        return { color: "hsl(141, 71%, 45%)" }; // Green color when starts
      }
    },
    circleStyle() {
      const remainingTime = this.duration - this.currentTime;

      if (remainingTime === 0) {
        return {
          boxShadow:
            "0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 20px rgba(10, 10, 10, 0.7)"
        }; // Normal style
      } else if (this.isRunning && remainingTime <= 5) {
        return {
          // Red color when raimainging < 5
          boxShadow:
            "0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 20px rgba(190, 14, 49, 0.7)"
        };
      } else if (this.isRunning && remainingTime > 5) {
        return {
          boxShadow:
            "0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 20px rgba(33, 196, 90, 0.7)"
        }; // Green color when starts
      }
    }
  },
  methods: {
    startTimer() {
      if (this.isRunning) {
        this.resetTimer();
      }
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.currentTime++;

        if (this.currentTime >= this.duration) {
          this.pauseTimer();
          this.currentTime = this.duration;
          this.showNotification("Time is up!", "is-success");
          this.resetTimer();
        }
      }, 1000);
    },
    pauseTimer() {
      if (!this.isRunning) return;

      this.isRunning = false;
      clearInterval(this.intervalId);
    },
    resetTimer() {
      this.isRunning = false;
      clearInterval(this.intervalId);
      this.currentTime = 0;
      this.duration = 0;
    },
    formatNumber(value) {
      return value.toString().padStart(2, "0");
    },
    showNotification(message, type) {
      this.$buefy.toast.open({
        message: message,
        position: "is-bottom",
        type: type,
        duration: 5000,
        queue: false,
        pauseOnHover: true,
        closeOnClick: true
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  beforeRouteEnter(to, from, next) {
    const sessionCookie = Cookies.get("session");
    if (sessionCookie) {
      next();
    } else {
      next("/login");
    }
  }
};
</script>

<style scoped>
/* Estilos específicos del componente */
.timer-display {
  padding: 3rem;
  margin: 6rem;
  border-radius: 10rem;
  border-width: 5px;
  border-color: black;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 20px rgba(10, 10, 10, 0.7);
  color: #4a4a4a;
  position: relative;
  background-color: white;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.timer-format {
  margin-top: -1rem;
}

.section {
  padding: 3rem 1.5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
