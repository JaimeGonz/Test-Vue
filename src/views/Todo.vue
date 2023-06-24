<template>
  <div>
    <Header />
    <section class="section is-family-sans-serif">
      <h1 class="is-size-2 has-text-weight-bold">Todo List</h1>
      <div class="my-5">
        <div
          class="container has-text-left my-5 is-flex is-justify-content-center is-align-content-center"
        >
          <b-input
            v-model="enteredTitle"
            placeholder="Add new task"
            type="user"
            class="is-rounded is-flex is-align-items-center mr-5"
            required
          />
          <b-button @click="addTask" type="is-black is-rounded btn_text">
            <span>Add</span>
            <svg
              enable-background="new 0 0 50 50"
              height="15px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="25px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect fill="none" height="50" width="50" />
              <line
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="4"
                x1="9"
                x2="41"
                y1="25"
                y2="25"
              />
              <line
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="4"
                x1="25"
                x2="25"
                y1="9"
                y2="41"
              />
            </svg>
          </b-button>
        </div>
        <div class="container">
          <ul class="todo__container">
            <li v-for="task in sortedTasks" :key="task.id">
              <div class="card m-6 is-one-third">
                <div class="card-content">
                  <template v-if="editingId === task.id">
                    <b-input
                      v-model="task.title"
                      placeholder="New task"
                      type="user"
                      class="is-rounded"
                      required
                    />
                  </template>
                  <template v-else>
                    <div :class="{ 'todo-done': task.status }">
                      {{ task.title }}
                    </div>
                  </template>
                </div>
                <footer class="card-footer">
                  <a
                    @click="removeTask(task.id)"
                    class="card-footer-item has-text-dark  has-text-weight-medium is-align-items-center"
                  >
                    <svg
                      width="15px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 108.29 122.88"
                      style="enable-background:new 0 0 108.29 122.88"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M77.4,49.1h-5.94v56.09h5.94V49.1L77.4,49.1L77.4,49.1z M6.06,9.06h32.16V6.2c0-0.1,0-0.19,0.01-0.29 c0.13-2.85,2.22-5.25,5.01-5.79C43.97-0.02,44.64,0,45.38,0H63.9c0.25,0,0.49-0.01,0.73,0.02c1.58,0.08,3.02,0.76,4.06,1.81 c1.03,1.03,1.69,2.43,1.79,3.98c0.01,0.18,0.02,0.37,0.02,0.55v2.7H103c0.44,0,0.75,0.01,1.19,0.08c2.21,0.36,3.88,2.13,4.07,4.37 c0.02,0.24,0.03,0.47,0.03,0.71v10.54c0,1.47-1.19,2.66-2.67,2.66H2.67C1.19,27.43,0,26.23,0,24.76V24.7v-9.91 C0,10.64,2.04,9.06,6.06,9.06L6.06,9.06z M58.07,49.1h-5.95v56.09h5.95V49.1L58.07,49.1L58.07,49.1z M38.74,49.1H32.8v56.09h5.95 V49.1L38.74,49.1L38.74,49.1z M10.74,31.57h87.09c0.36,0.02,0.66,0.04,1.03,0.1c1.25,0.21,2.4,0.81,3.27,1.66 c1.01,1,1.67,2.34,1.7,3.83c0,0.31-0.03,0.63-0.06,0.95l-7.33,78.66c-0.1,1.03-0.27,1.95-0.79,2.92c-1.01,1.88-2.88,3.19-5.2,3.19 H18.4c-0.55,0-1.05,0-1.59-0.08c-0.22-0.03-0.43-0.08-0.64-0.14c-0.31-0.09-0.62-0.21-0.91-0.35c-0.27-0.13-0.52-0.27-0.78-0.45 c-1.51-1.04-2.51-2.78-2.69-4.72L4.5,37.88c-0.02-0.25-0.04-0.52-0.04-0.77c0.05-1.48,0.7-2.8,1.7-3.79 c0.88-0.86,2.06-1.47,3.33-1.67C9.9,31.59,10.34,31.57,10.74,31.57L10.74,31.57z M97.75,36.9H10.6c-0.57,0-0.84,0.1-0.79,0.7 l7.27,79.05h0l0,0.01c0.03,0.38,0.2,0.69,0.45,0.83l0,0l0.08,0.03l0.06,0.01l0.08,0h72.69c0.6,0,0.67-0.84,0.71-1.28l7.34-78.71 C98.53,37.04,98.23,36.9,97.75,36.9L97.75,36.9z"
                        />
                      </g>
                    </svg>
                    <span class="ml-2">Delete</span></a
                  >

                  <a
                    @click="editTask(task.id, task)"
                    class="card-footer-item has-text-dark has-text-weight-medium"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-pencil mr-1"
                    >
                      <path
                        d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"
                      ></path>
                    </svg>
                    <span>{{ !edition ? "Edit" : "Save" }}</span>
                  </a>

                  <div class="mx-4 is-flex is-align-items-center">
                    <label
                      :class="{
                        'has-text-success has-text-weight-bold ': task.status
                      }"
                      for=""
                      >Done</label
                    >
                    <input
                      @click="completed(task)"
                      type="checkbox"
                      class=" ml-2 pointer"
                    />
                  </div>
                </footer>
              </div>
            </li>
          </ul>
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
      tasks: [
        {
          id: 0,
          title: "Create Login screen",
          status: false
        },
        {
          id: 1,
          title: "Create todo component",
          status: false
        }
      ],
      enteredTitle: "",
      edition: false,
      editingId: null,
      pending: true
    };
  },
  computed: {
    sortedTasks() {
      return this.tasks.slice().sort((a, b) => {
        if (a.status && !b.status) {
          return 1; // tareas completadas después de las tareas pendientes
        } else if (!a.status && b.status) {
          return -1; // tareas pendientes antes de las tareas completadas
        } else {
          return 0; // misma prioridad
        }
      });
    }
  },
  methods: {
    addTask() {
      if (this.enteredTitle.length > 0) {
        const newTask = {
          id: Math.random()
            .toString(36)
            .substr(2, 9),
          title: this.enteredTitle,
          status: false
        };
        this.tasks.unshift(newTask);
        this.enteredTitle = "";
      }
    },
    editTask(taskId, task) {
      this.edition = !this.edition;
      if (this.editingId !== null) {
        task.title = task.title.trim();
        this.editingId = null;
        return;
      }
      this.editingId = taskId;
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    completed(task) {
      task.status = !task.status;
      console.log(task.status);
    }
  }
};
</script>

<style scoped>
.todo__container {
  display: flex;
  flex-flow: column;
}

.todo-done {
  text-decoration: line-through;
}

.btn_text {
  font-size: 16px;
}

.pointer {
  appearance: none;
  cursor: pointer;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  width: 25px;
  height: 25px;
  border: 1px solid #888;
  border-radius: 5px;
}

.pointer:checked {
  background-color: hsl(141, 71%, 48%);
}

/* Tablet */
@media screen and (min-width: 640px) {
  .todo__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
  }
}

/* Desktop view */
@media screen and (min-width: 1024px) {
  .todo__container {
    max-width: 20rem;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1400px) {
  .todo__container {
    max-width: 20rem;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
