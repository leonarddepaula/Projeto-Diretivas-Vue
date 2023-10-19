<template>
  <p>Sem A Diretiva</p>
  <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">Minha Primeira Diretiva Customizada</p>
  <p v-texto="{ cor: 'blue', tamanhoFonte: '300%' }">teste</p>
</template>

<script>
export default {
  name: 'App',
  
}
</script>


