<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Deposit</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  </head>
  <body data-new-gr-c-s-check-loaded="14.984.0" data-gr-ext-installed="">

  <main role="main">

    <section class="jumbotron text-center">
      <div align="center">
        <img width="100" src="https://png2.cleanpng.com/sh/347e69b6d4d7110f44f51091c3ca7df7/L0KzQYm3U8I5N5VriZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfJidpwygdV4bj3ndcTwhB4ue5R3fdd3c3jyhH7pgf5sNWZmetQ8NHPpc7O7WcgzNmk5SqY7MEKzQYa5UsIyQGIASao8MkexgLBu/kisspng-computer-icons-bank-icon-design-screenshot-bank-5abb34cfcb4982.8424202015222181918327.png"/>
        <h1>Clients</h1>
        <div class="col-md-6 text-center">
            <button v-on:click="getCients()" id="btn" class="btn btn-primary btn-lg btn-block" type="submit">Get All Clients</button>
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Accounts</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in result">
              <td>{{row.id}}</td>
              <td>{{row.firstName}}</td>
              <td>{{row.lastName}}</td>
              <td>{{row.clientAccounts}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


  </main>

  <footer class="text-muted">
    <div class="container">
      <p>Created within Vali IT programing courses.</p>
      <p>Makar Sokarev <a href="https://www.linkedin.com/in/makarshokarev/">Visit my LinkedIn</a></p>
    </div>
  </footer>
  </body>
  </html>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

let showResponse = function (response){
  this.result = response.data;
}


let getClientsFunction = function() {
  let url = "http://localhost:8080/bank/client";
  this.$http.get(url, this.user)
      .then(this.showResponse)
}

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    getCients: getClientsFunction,
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