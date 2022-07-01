<template>
  <div>
    <header-component />
    <b-row>
    <b-col mb="3">
      <sidebar-component />
    </b-col>
    <b-col md="9"></b-col>
  </b-row>
  </div>
</template>

<script>
import Header from '../../shared/header/Header.vue';
import Sidebar from '../../shared/sidebar/Sidebar.vue';

export default {
    name: 'page-home',

    components: { 'header-component': Header, 'sidebar-component': Sidebar }
}
</script>

<style scoped>

</style>