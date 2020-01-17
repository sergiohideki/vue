<template>
  <div>
    <button @click="ativo = !ativo">Ativar</button>
    <!-- <transition name="fade" enter-active-class="animar">
      <h1 v-if="ativo">Serviços</h1>
    </transition>-->
    <transition appear name="fade" @enter="enter" @leave="leave">
      <h1>Serviços</h1>
    </transition>
    <!-- appear serve para disparar a animação quando o usuário enxergar a página no momento -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: false
    };
  },
  methods: {
    enter(elemento) {
      console.log(elemento.classList.add("teste"));
    },
    leave() {
      console.log("elemento sumiu");
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.animar {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  /* quando o elemento surgiu no DOM*/
  opacity: 0;
}
</style>