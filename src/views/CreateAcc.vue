<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Create Account</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  </head>
  <body data-new-gr-c-s-check-loaded="14.984.0" data-gr-ext-installed="">
  <main role="main">

    <section class="jumbotron text-center">
      <div align="center">
        <img width="100" src="https://png2.cleanpng.com/sh/347e69b6d4d7110f44f51091c3ca7df7/L0KzQYm3U8I5N5VriZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfJidpwygdV4bj3ndcTwhB4ue5R3fdd3c3jyhH7pgf5sNWZmetQ8NHPpc7O7WcgzNmk5SqY7MEKzQYa5UsIyQGIASao8MkexgLBu/kisspng-computer-icons-bank-icon-design-screenshot-bank-5abb34cfcb4982.8424202015222181918327.png"/>
        <h1>Create bank account</h1>
        <div class="row justify-content-center">
          <div class="col-md-3 mb-2">
            <label for="account">Account</label>
            <input v-model="account.accountNr" type="text" class="form-control" id="account" placeholder="Input new Account" value="" required="">
          </div>
          <div class="col-md-3 mb-2">
            <label for="clientId">Client Id</label>
            <input v-model="account.clientId" type="number" class="form-control" id="clientId" placeholder="Input your Client Id" value="" required="">
          </div>
        </div>
        <div class="col-md-6 text-center">
          <button v-on:click="createAcc()" id="btn" class="btn btn-primary btn-lg btn-block" type="submit">Create account</button>
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

let createAccFunc = function() {
  let url = "http://localhost:8080/bank/account/create";
  this.$http.post(url, this.account)
      .then(response => alert(response.data.message))
      .catch(result => alert(result.response.data.message));
}

export default {
  name: 'CreateAccount',
  components: {
    HelloWorld
  },
  methods: {
    createAcc: createAccFunc
  },
  data: function(){
    return{
      account: {}
    }
  }
}
</script>
