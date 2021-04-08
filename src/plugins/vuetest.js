import testvuex from '@/components/vuextest.vue'
const myvuex = {}
myvuex.install = function (Vue) {
    //创建组件构造器
    const mytestExtend = Vue.extend(testvuex)
    //根据组件构造器，创建新的组件对象
    const mytest = new mytestExtend()
    //将组件挂载到元素上
    mytest.$mount(document.createElement('div'))
    //$el对应div
    document.body.appendChild(mytest.$el)
    Vue.prototype.$mytest = mytest
}
export default myvuex