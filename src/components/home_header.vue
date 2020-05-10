<template>
    <div class="header">
        <div class="header_left"><div class="iconfont myfont">&#xe6d2;</div></div>
        <div class="header_input"><span class="iconfont sousuo">&#xe619;</span><span class="myfont">输入城市/景点/游玩主题</span></div>
        <div class="header_right"><span class="iconfont myfont"><span class="city">城市</span>&#xf36c;</span></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/common.less';
.header{
    position: fixed;
    z-index: 10;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-weight: 600;
    color: #fff;
    background-color:@bgcolor;
    height: 88rem / @cop;
    width: 10rem;
    display: flex;
    align-items: center;
    .myfont{
        font-size: 24rem / @cop;
        .city{
            padding-right: 5rem / @cop;
        }
    }
    .header_left,.header_right{
        width: 70rem / @cop;
        text-align: center;
        line-height: 88rem / @cop;
    }
    .header_right{
        width: 110rem / @cop;
    }
    .header_input{
        .sousuo{
            font-size: 35rem / @cop;
            padding-right: 10rem / @cop;
        }
        flex: 1;
        background-color: white;
        border: 1rem / @cop solid white;
        border-radius: 8rem / @cop;
        color: #ccc;
        height: 65rem / @cop;
        line-height: 65rem / @cop;
        padding-left: 20rem / @cop;
    }
}
</style>