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

Vue.directive('informacao', {
    created(el, binding){
        console.log(el, binding, binding.modifiers, binding.value);

        let funcao = function(){
            let informacaoSpan = document.createElement('span')
            informacaoSpan.style.position = 'absolute'
            informacaoSpan.style.background = '#ddd'
            informacaoSpan.style.padding = '2px'
            informacaoSpan.innerText = binding.value

            el.appendChild(informacaoSpan)

            informacaoSpan.addEventListener('click', (event) => {
                event.stopPropagation()
                informacaoSpan.remove()
            })
        }
        if(binding.modifiers['umClickMouse']){
            el.addEventListener('click', funcao)
        }

        if(binding.modifiers['doisClickMouse']){
            el.addEventListener('dblclick', funcao)
        }
    }
})

Vue.mount('#app')
