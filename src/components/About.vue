<template>
  <div>
  <h3>about us</h3>
        <nav class="navbar navbar-toggleable-md navbar-light">
           <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" to="/inabout1" >in about1</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/inabout2"> in about2</router-link>
                </li>
          </ul>
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
