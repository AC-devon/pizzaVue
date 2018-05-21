<template>
  <header class="row">
      <nav class="navbar navbar-toggleable-md navbar-light">
          <a class="navbar-brand" href="/">PIZZA PLANET</a>
           <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" :to="homeLink" >home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="homeMenu">menu</router-link>
                </li>
                 <li class="nav-item">
                  <router-link class="nav-link" :to="About">About</router-link>
                </li>
          </ul>
      </nav>

  </header>
</template>
<script>
  export default{
    data(){
      return {
        homeLink:'/',
        homeMenu:'/Menu',
        About:'/About'
      }
    }
  }  
</script>
<style>
header {
  margin-bottom: 20px;
}
.navbar-brand{
    font-size: 1.5em;
}
</style>

