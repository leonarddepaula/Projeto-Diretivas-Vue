import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('texto',{
    created(el, binding) {
        console.log(binding);
        console.log(el.style);
        if(binding.value?.cor) el.style.color = binding.value.cor
        if(binding.value?.tamanhoFonte) el.style.fontSize = binding.value.tamanhoFonte

        let totalCaracteres = 25
        if(binding.value?.totalCaracteres) el.style.fontSize = binding.value.tamanhoFonte

        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length
        let textoAjustado = ''

        if(tamanhoTextoOriginal > totalCaracteres){
            //vamos truncar o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0, (totalCaracteres - 3)) + '...'
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

Vue.directive('posicao', {
    created(el, binding){
        console.log(el, binding.arg, binding.value);

        const posicaoPossiveis = ['relative', 'fixed', 'absolute']

        if(posicaoPossiveis.includes(binding.arg)){
            el.style.position = binding.arg
            el.style.top = `${binding.value}px`
        }
    }
})

Vue.mount('#app')
