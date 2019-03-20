<template>
  <div class="login">
    <form @submit="login()">
      <div class="dataLabel"> <label >First Name:</label><input type="text" class="dataInput"></div>
      <div class="dataLabel"> <label >Last Name:</label><input type="text" class="dataInput"></div>
      <div class="dataLabel"><label >Mail:</label><input type="text" class="dataInput"></div> 
      <button class="button" type="submit">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    login: function () {
      // eslint-disable-next-line
      console.log('IN')
      //go to myPage
      // router.push('./MyPage.vue')
    }
  }
}
</script>

<style>
body{
  font-family: 'Maven Pro', sans-serif;
}
.dataLabel {
  margin: 20px;
}
.dataInput{
  font-family: 'Maven Pro', sans-serif;
  position: absolute;
  left: 120px;
  padding: 2px;
  width: 300px;
  border-radius: 5px;
  border-width: 1px;
  border: 1px solid #c5c5c5;
  cursor: pointer;
}
.button {
  font-family: 'Maven Pro', sans-serif;
  background-color: white;
  color: grey;
  border: 1px solid rgb(206, 178, 206);
  border-radius: 30px;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
  font-size: 16px;
  transition-duration: 0.6s;
  cursor: pointer;
}
.button:hover {
  background-color: rgb(206, 178, 206);
  color: white;
  }

</style>
