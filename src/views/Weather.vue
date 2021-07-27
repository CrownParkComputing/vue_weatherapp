<template>
  <div class="home">

    <this-weather/>


  </div>
</template>



<script>
  import Weather from '@/components/Weather.vue';
 
  export default {
    name: 'Home',
    components: {
      'this-weather': Weather,
    },

  }  

</script>