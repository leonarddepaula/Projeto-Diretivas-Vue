<template>
  <p>Sem A Diretiva</p>
  <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">Minha Primeira Diretiva Customizada</p>
  <p v-texto="configuracaoTexto">teste</p>
  <div v-posicao:absolute="75" v-texto="{cor:'green'}">Olá eu sou um binding de argumento e valor</div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    configuracaoTexto:{ cor: 'blue', tamanhoFonte: '300%' }
  })
  
}
</script>


