<template>
  <div class="home">
<!--    <input v-model.number="a" type="number">-->
<!--    <input v-model.number="a" type="number">-->
<!--    <input v-model.number="b" type="number">-->
<!--    {{a + b}}-->
    <p>
      <input v-model="user.email" placeholder="enter email">
    </p>
    <p>
      <input v-model="user.name"  placeholder="enter name">
    </p>
    <p>
      <input v-model="user.age" type="number" placeholder="enter age">
    </p>
    <p>
      <button v-on:click="register()">Register</button>
    </p>
    <table style="margin-left: auto;margin-right: auto">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
      </tr>
      <tr v-for="row in result">
        <td>{{row.name}}</td>
        <td>{{row.email}}</td>
        <td>{{row.age}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

let showResponse = function (response){
  this.result = response.data;
}


let registerFunction = function() {
  let url = "http://localhost:8080/bank/register";
  let requestBody = {}
  this.$http.post(url, this.user)
  .then(this.showResponse)
}

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    register: registerFunction,
    showResponse: showResponse
  },
  data: function(){
    return{
      user: {},
      result: []
    }
  }
}
</script>