<template>
  <div class="mybox">
      <!-- {{$store.state.counter}} -->
      {{count}}
  </div>
</template>
<script>
export default {
    data(){
        return{
            count:''
        }
        
    },
    mounted(){
        
    },
    methods:{
        showc(e){
            // this.$nextTick(()=>{
            console.log(this.$store)
            this.count = e
        // })
        }
    }
};
</script>
<style>
.mybox{
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>