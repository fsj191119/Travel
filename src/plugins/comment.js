import total from '../components/total.vue'

const obj={}
obj.install = function(Vue){ 
    console.log(Vue)
    console.log('我调用了obj的install函数')
    // Vue.extend(total)
    //1。创建组件构造器
    const totalExtend = Vue.extend(total)
    //2.根据组件构造器，创建新的组件对象
    const myTotal = new totalExtend()
    //3将组件对象挂载到某一元素上
    myTotal.$mount(document.createElement('div'))
    //4.myTotal.$el对应的就是div
    document.body.appendChild(myTotal.$el)
    Vue.prototype.$total = myTotal
};
export default obj

