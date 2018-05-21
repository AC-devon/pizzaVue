<template>
  <footer class="row">
      <nav class="navbar navbar-toggleable-md navbar-light">
           <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" :to="homeLink" >home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="homeMenu">menu</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="Admin">Admin</router-link>
                </li>
          </ul>
      </nav>


  </footer>
</template>
<script>
  export default{
    data(){
      return {
        homeLink:'/',
        homeMenu:'/Menu',
        Admin:'/Admin',
      }
    }
  }  
</script>