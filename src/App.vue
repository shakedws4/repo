<template>
  <div class="app">
    <div id="navBar">
      <nav>
      <router-link class="navItem" id="login" to="/login">Login</router-link>
      <router-link class="navItem" id="main" to="/main">Main</router-link>
      <router-link class="navItem" id="logout" to="/">Logout</router-link>

      </nav>
      
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Maven+Pro');
body {
  font-family: 'Maven Pro', sans-serif;
}
#navBar{
  text-align: center;
}
.navItem{
  margin-right: 30px;
  text-decoration: none;
  color: black;
}
#logout{
  float:right;
}
</style>
