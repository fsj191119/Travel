<template>
<div class="home_swiper">
    <div class="block">
      <el-carousel trigger="hover" height='160px' arrow='always'>
        <el-carousel-item>
            <img class="img_swiper" src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4018557288,1217151095&fm=26&gp=0.jpg" alt=""/>
        </el-carousel-item>
             <el-carousel-item>
            <img class="img_swiper" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589123454989&di=d6503e81b61e72eb91fc5fd29cd1906b&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg" alt=""/>
        </el-carousel-item>
             <el-carousel-item>
            <img class="img_swiper" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1589113369&di=2d00fcdf0550e8782b236fc906af62cf&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg" alt=""/>
        </el-carousel-item>
      </el-carousel>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
};
</script>

<style lang="less" scoped>
@import '~@/assets/style/common.less';
.home_swiper{
    margin-top: 88rem / @cop;
    .img_swiper{
        width: 100%;
        height: 100%;
    }
}

//element-ui样式
.el-carousel__item h3 {
  color: #475669;
  font-size: 14rem / @cop;
//   opacity: 0.75;
  line-height: 150rem / @cop;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}    

</style>