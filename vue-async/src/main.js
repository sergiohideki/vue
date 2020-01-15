import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component("Servicos", () => // transformando em async global
    import ("./components/Servicos.vue"))

new Vue({
    render: h => h(App),
}).$mount('#app')