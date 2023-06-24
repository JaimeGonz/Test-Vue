# Vue test

> A Vue.js project


## Login

An API call is made to https://mocki.io/v1/3e408794-39ed-4c75-bb6e-c49c578de293 using Axios.

- User: "HMHuser"
- Pass: "techTest"

The password is encoded in MD5 and is considered loginSuccess if the data entered matches the API response.
A cookie is stored to know if the user is logged in.
Only the Login page is public. All others require a successful login.

![image](https://github.com/JaimeGonz/Test-Vue/assets/48028936/606ebc80-d7de-4e6c-a560-7c2b2036950e)

## Todo list

- A list of tasks is displayed. 
- New tasks can be created.
- Each task can be deleted or modified.
- The tasks are displayed using computed variables, with those in pending status displayed first.
- Displays a graphic identifier indicating whether the task is completed.

![image](https://github.com/JaimeGonz/Test-Vue/assets/48028936/cddcbe4b-c446-46d2-b4e8-05c79ec73584)

## Timer


- It receives the duration in seconds and the counter is updated in real-time in "HH:MM:SS" format. 
- It can be started, paused, and cleared.
- Displays an alert when the timer ends.

![image](https://github.com/JaimeGonz/Test-Vue/assets/48028936/fbd20ae7-2902-4b24-b8d6-7ddd9f072c64)

## GitHub API Search 

- Displays the profile of a GitHub user via a search.
- There is a "Finder" to search the profiles
- Relevant profile information is displayed
- Has error handling (if the user does not exist)

![image](https://github.com/JaimeGonz/Test-Vue/assets/48028936/e4926269-3ce0-48e8-95bb-6e6d2884a1c9)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation of how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
