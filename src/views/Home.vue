<template>
  <div>
    <div style="font-size: 20px;width: 500px;justify-content: center;display: flex;">
     <!-- <total/> -->
     <button @click='showmytotal'>按钮</button>
     <span>{{$store.getters.prow(20)}}</span>
    </div>
    <div style="color: brown;width: 80%;display: flex;justify-content: center;">{{$store.state.counter}}</div>
    <div style="width: 100%;display: flex;justify-content: center;">
      <input style="margin-right: 30px;" @click='a' type="button" value="+">
      <input @click='an' type="button" value="-">
    </div>
    <div class="sjx">

    </div>
  </div>
</template>
<script>
  // import total from '../components/total.vue'
  export default {
    // components:{total},
    data() {
      return {
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub1'],
      };
    },
    mounted(){
      console.log(this.$mytest)
      // this.$nextTick(()=>{
        this.$mytest.showc(this.$store.state.counter)
      // })
      
      
    },
    methods: {
      a(){
        this.$store.commit('jia')
        this.$mytest.showc(this.$store.state.counter)
      },
      an(){
        this.$store.commit('jian')
        this.$mytest.showc(this.$store.state.counter)
      },
      showmytotal(){
        this.$total.totalShow('插件创建成功',4000)
      },
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
    },
  };
</script>
<style>
  ul{
    display: flex;
  }
  .ant-menu-inline .ant-menu-item::after{
    border-right: none !important;
    border-bottom: 3px solid #1890ff !important;
  }
  li{
    border-bottom: 3px solid #1890ff !important;
    width: 100px !important;
    margin: 0 20px !important;
  }
  .sjx{
    width: 200px;
    height: 300px;background-color: pink;
    margin: 0 auto;
  }
  .sjx::before{
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: yellow;
    /* clip-path: polygon(0 100%, 50% 0, -50% 0); */
    clip-path: polygon(0 100%,50% 0,100% 100%);
    /* top: -10px; */
  }
</style>