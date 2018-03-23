<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ChatContainer />
    <ProductsContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ChatContainer from '@/modules/Chat';
import ProductsContainer from '@/modules/Products'; 

export default {
  name: 'home',
  components: {
    HelloWorld,
    ChatContainer,
    ProductsContainer,
  },
};
</script>
