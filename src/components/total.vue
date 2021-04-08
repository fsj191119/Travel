<template>
    <div ref='totalmsg' v-show='isshow' class='totalsy'>
        {{message}}
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: '',
                isshow: false,
                mytime:''
            }
        },
        mounted(){
            this.$nextTick(()=>{
                console.log(document.querySelector('.totalsy').style.animationDuration)
                console.log(this.mytime)
            })
            
        },
        methods: {
            totalShow(msg, time) {
                this.mytime = time
                let lock = false
                if (lock) {
                    return
                }
                this.message = msg
                this.isshow = true
                setTimeout(() => {
                    lock = true
                    this.isshow = false
                }, time)
            }
        }
    }
</script>
<style scoped>
    .totalsy {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: cadetblue;
        animation: move 4s;
    }
    @keyframes move{
        /* 0%{
            opacity: .9;
        } */
        50%{
            opacity: .9;
        }
        /* 75%{
            opacity: .1;
        } */
        100%{
            opacity: 0;
            display: none;
        }
    }
</style>