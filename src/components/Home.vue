<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center" >
            <div class="background">
                <h1>welcome to pizza plannet</h1>
                <h2>Feeling hungry</h2> 
                <button class="button btn-success btn" @click="goToMenu()">order a pizza</button> 
            </div>

        </div>

    </div>
</template>
<script>
export default {
  methods:{
      goToMenu(){
        //go the last page user were on
        // this.$router.go(-1)

        // if click on 'back' button on the browser client - it will come back the last stored page
       // this.$router.replace('/menu')
        
        //
        this.$router.push('/menu')
      }
  }
}
</script>

<style scope>
    #home{
        background: url('../assets/pizza.jpg');
        height: 800px;
        padding: 10%;
    }
    h1,h2{
        margin: 6%;
    }
    .background{
        background: #eee;
        opacity: 0.8;
        max-width: 60%;  
        margin: 0 auto;
        padding: 20px 0px;
    }
</style>
