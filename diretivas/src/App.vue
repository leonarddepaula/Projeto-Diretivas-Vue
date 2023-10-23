<template>
  <p>Sem A Diretiva</p>
  <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">Minha Primeira Diretiva Customizada</p>
  <p v-texto="configuracaoTexto">teste</p>
  <div v-posicao:absolute="75" v-texto="{cor:'green'}">Olá eu sou um binding de argumento e valor</div>
  <span>Código A:</span><input type="text"><span v-informacao:simples.umClickMouse="'Você encontrata o Código A na Parte frontal do equipamento'">i</span>
  <br>
  <span>Código B:</span><input type="text"><span v-informacao:simples.doisClickMouse="'Você encontrata o Código B na Parte traseira do equipamento'">i</span>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    configuracaoTexto:{ cor: 'blue', tamanhoFonte: '300%' }
  })
  
}
</script>


