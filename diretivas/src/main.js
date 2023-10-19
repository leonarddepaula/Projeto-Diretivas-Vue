import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('texto',{
    created(el) {
        console.log(el.style);
        el.style.color = 'red'
        el.style.fontSize = '150%'

        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length
        let textoAjustado = ''

        if(tamanhoTextoOriginal > 25){
            //vamos truncar o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0, 22) + '...'
        }else{
            //vamos manter o texto original
            textoAjustado = textoOriginal
        }
        
        el.innerText = textoAjustado

        console.log('A diretiva foi aplicada com SUCESSO!');
        console.log(textoOriginal);

        console.log(tamanhoTextoOriginal);
    },

})

Vue.mount('#app')
