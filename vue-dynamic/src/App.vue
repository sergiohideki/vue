<!--
  Crie 3 componentes:

  1: Componente falando sobre a empresa
  2: Componente com os serviços da empresa
  3: Componente com um formulário de contato

  Crie um menu, que ao clique ele mude os componentes
  acima de forma dinâmica. Não destrua o componente
-->
<template>
  <div id="app">
    <ul>
      <li @click="abaAtiva = 'Formulario'">Formulário</li>
      <li @click="abaAtiva = 'Servicos'">Serviço</li>
      <li @click="abaAtiva = 'Sobre'">Sobre</li>
    </ul>
    <keep-alive>
      <component :is="abaAtiva"></component>
      <component :is="abaAtiva"></component>
      <component :is="abaAtiva"></component>
    </keep-alive>
  </div>
</template>

<script>
import Formulario from "./components/Formulario";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";

export default {
  name: "app",
  components: {
    Formulario,
    Servicos,
    Sobre
  },
  data() {
    return {
      abaAtiva: "Formulario" // nome do componente que será trocado ao clicar no menu
    };
  }
};
</script>

<style>
</style>
