<template>
  <div class="row">
      <p>
          login as :
          {{ currentUser }}
          </p> 
      <form>
            <div class="form-group ">
    <label>Email login</label>
      <input type="Email" id="email" plachoder="enter email" class="form-control">
  </div>
              <div class="form-group ">
    <label>password</label>
      <input type="password" id="password" plachoder="enter password" class="form-control">
  </div>
  <button type="button" class="btn btn-primary" @click.prevent="signIn()">sign in </button>
  <button type="button" class="btn btn-success" @click.prevent="signOut()">sign out</button>
      </form>
  </div>
</template>

<script>
import Firebase from "firebase";
import { store } from '../store/store.js'

Firebase.auth().onAuthStateChanged(function(user){
    if(user){
        store.dispatch('setUser', user)
    } else{
        store.dispatch('setUser', null)
    }
})

export default {
  methods: {
    signIn() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        Firebase.auth().signInWithEmailAndPassword(email,password).catch(function(err){
            var errCode = err.code;
            var errMessage = err.message
            if(errCode == 'auth/wrong-password'){
                alert('worng pw')
            }else{
                alert(errMessage)
            }
        })
    },
    signOut() {
        Firebase.auth().signOut().then(function(){
            alert('log out')
        }).catch(function(err){
            var errCode = err.code;
            var errMessage = err.Message
        })
    }
  },
  computed:{
      currentUser(){
          return this.$store.getters.currentUser
      }
  }
};
</script>

<style>

</style>
