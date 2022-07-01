<template>
  <b-sidebar>
    <b-card>
      <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>
    </b-card>
    <b-list-group>
      <b-list-group-item>Usuários</b-list-group-item>
      <b-list-group-item>Veículos</b-list-group-item>
    </b-list-group>
  </b-sidebar>
</template>

<script>

export default {
  name: 'sidebar-component',

  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>

</style>