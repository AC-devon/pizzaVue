<template>
<form>
  <h3> add new pizza </h3>
  <div class="form-group row">
    <label class="col-sm-3">Name</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" v-model="newPizza.name">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-3">description</label>
    <div class="col-sm-9">
      <textarea type="text" class="form-control" v-model="newPizza.description" rows="5"></textarea>
    </div>
  </div>
  <p class="">option 1:</p>
  <div class="form-group row">
    <label class="col-sm-3">Size</label>
    <div class="col-sm-9">
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-3">price</label>
    <div class="col-sm-9">
      <input type="text" class="form-control">
    </div>
  </div>
  <p class="">option 2:</p>
  <div class="form-group row">
    <label class="col-sm-3">Size</label>
    <div class="col-sm-9">
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-3">price</label>
    <div class="col-sm-9">
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="form-group row">
    <button type="button" class="btn btn-success btn-block" @click="addMenuItem()">add</button>
  </div>
</form>
</template>

<script>
  import { dbMenuRef } from '../firebaseConfig';
export default {
  data() {
    return {
      newPizza: {
        name: "Eg. Margherita",
        description: "Eg. A delicious tomato based pizza topped with mozzarella",
        options: [
          {
            size: 9,
            price: 6.95
          },
          {
            size: 12,
            price: 10.95
          }
        ]
      }
    };
  },
  methods:{
      addMenuItem(){
          dbMenuRef.push(this.newPizza);
      }
  }
};
</script>

<style>

</style>
