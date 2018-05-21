
<template>
<div>
  <div class="row">
      <div class="col-sm-12 col-md-6">
          <ppNewPizza></ppNewPizza>
      </div>
      
      <div class="col-sm-12 col-md-6">
          <h3>menu</h3>
          <table class="table">
              <thead class="thead-default">
                  <tr>
                      <th>item</th>
                      <th>remove from menu</th>
                  </tr>
              </thead>
              <tbody v-for="item in getMenuItems">
                  <tr>
                      <td>
                          {{ item.name }}
                      </td>
                      <td>
                            <button type="button" class="btn btn-sm btn-outline-danger">X</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
  <div class="row">
      <div class="col-sm-12">
           <h3>menu</h3>
            <table class="table">
              <thead class="thead-default">
                  <tr>
                      <th>item</th>
                      <th>Size</th>
                      <th>quantity</th>
                      <th>Price </th>
                  </tr>
              </thead>
              <tbody>
                  <div id="" class="order-number">
                      <strong><em>order number: {{ numberOfOrders }}</em></strong>
                    <button type="button" class="btn btn-sm btn-outline-danger">X</button>
                  </div>
                  <tr>
                      <td>Cheese</td>
                      <td>9"</td>
                      <td>1</td>
                      <td>6.21"</td>
                  </tr>
              </tbody>
          </table>
      </div>

  </div>
  <hr>
  <div class="row">
      <div class="col-sm-12 col-sm-6">
          <ppLogin></ppLogin>
      </div>
  </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza.vue'
import Login from './Login.vue'
import { mapGetters } from 'vuex'
export default {
 components:{
        ppNewPizza:NewPizza,
        ppLogin:Login
    },
    data(){
        return{
            name:'chris'
        }
    },  
    computed:{
        ...mapGetters([
            'getMenuItems',
            'numberOfOrders'
        ])
  },
    beforeRouteLeave: (to, from, next) => {
        if(confirm('have you log out?') === true){
            next()
        }else{
            next(false)
        }
    }
}
</script>

<style>

</style>
