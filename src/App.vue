<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
       <div class="container">
      <router-view></router-view>
    </div>
     <div class="container">
       <div class="row">
         <div class="col-md-6">
            <router-view name="inAbout1"></router-view>
         </div>
          <div class="col-md-6">
            <router-view name="inAbout2"></router-view>
         </div>
      </div>
    </div>
       <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components:{
    ppHeader: Header,
    ppFooter: Footer
  }
}
</script>

<style>

</style>
