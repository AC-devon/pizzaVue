<template>
  <div class="row">
      <div class="col-sm-12 col-md-6">
          <table class="table table-hover">
              <thead class="thead-default">
                  <tr>
                      <th>Size</th>
                      <th>Price</th>
                      <th>Add to basket</th>
                  </tr>
              </thead>
              <tbody v-for="item in getMenuItems">
                    <tr>
                      <td class="font-weight-bold">{{item.name}}</td>
                    </tr>
                    <tr v-for="option in item.options">
                      <td>{{option.size}}</td>
                      <td>{{option.price}}</td>
                      <td><button @click="addToBasket(item, option)" class="btn btn-sm btn-outline-success" type="button">+</button></td>
                    </tr>
              </tbody>
          </table>
      </div>

      <!--- shopping basket -->
       <div class="col-sm-12 col-md-6">
           <div v-if="basket.length > 0">
            <table class="table">
              <thead class="thead-default">
                  <tr>
                      <th>qunatity</th>
                      <th>item</th>
                      <th>total price</th>
                  </tr>
              </thead>
              <tbody v-for="item in basket">
                  <tr>
                      <td>
                              <button type="button"
                                @click="decreaseQuantity(item)"
                                class="btn btn-sm">-</button>
                                <span>{{ item.qunatity }}</span>
                                <button type="button" 
                                @click="increaseQuantity(item)"
                                class="btn btn-sm">+</button>
                      </td>
                      <td>{{ item.name }} {{item.price}}</td>
                      <td>{{ item.price *  item.qunatity}}</td>
                  </tr>
              </tbody>
          </table>
          <p>order total:</p>
          <button type="button" @click="addNewOrder" class="btn btn-block btn-success">place order</button>
       </div>
       <div v-else>
           <p>{{ basketText }}</p>
       </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basket: [],
      basketText: "your basket is empty",

    };
  },
  computed:{
    getMenuItems(){
     // return this.$store.state.menuItems
     return this.$store.getters.getMenuItems
    }
  },
  methods: {
    addToBasket: function(item, option) {
      this.basket.push({
        name: item.name,
        price: option.price,
        size: option.size,
        qunatity: 1
      });
    },
    removeFromBasket(item){
        this.basket.splice(item,1)
    },
    increaseQuantity(item) {
        item.qunatity++;
    },
    decreaseQuantity(item) {
        item.qunatity--;
        if(item.qunatity === 0){
            this.removeFromBasket(item)
        }
    },
    addNewOrder(){
        this.$store.commit('addOrder', this.basket)
        this.basket = [];
        this.basketText = "your order has been submited. tnx :)"
        console.log(this.$store.state)
    }
  }
};
</script>

<style>

</style>

