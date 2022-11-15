<template>
  <div class="container mt-3">
    <div class="justify-content-center col-md-4 offset-md-4">
      <div class="card">
        <div class="card-body">
          <h3>Login</h3>
          <div class="alert alert-danger" v-if="message">{{ message }}</div>
          <form @submit.prevent="login">
            <div class="mt-3">
              <label>Email</label>
              <input type="email" v-model="email" class="form-control" placeholder="Email">
            </div>
            <div class="mt-3">
              <label>Password</label>
              <input type="password" v-model="password" class="form-control" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary d-block mt-3">Login</button>
          </form>
        </div>
        <div class="card-footer py-3">
          <p class="text-muted d-inline">Don't have an account?</p> <span class="text-primary"><a href="#">Register here</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    login() {
      if(this.email === 'admin@gmail.com' && this.password === 'password'){
        localStorage.setItem('auth', this.email)
        this.$router.push('/profile');
      } else {
        this.message = "Email or Password is incorrect!";
      }
    }
  }
}
</script>