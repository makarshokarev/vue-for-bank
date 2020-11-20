<template>

  <div id="app">
    <div id="nav">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/create_client">Create Client</router-link> |
      <router-link to="/create_acc">Create Account</router-link> |
      <router-link to="/deposit">Deposit</router-link> |
      <router-link to="/withdraw">Withdraw</router-link> |
      <router-link to="/transfer">Transfer</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b0bec5;
  background-color: #263238;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #b0bec5;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
