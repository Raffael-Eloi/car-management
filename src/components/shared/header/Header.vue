<template>
  <div class="p-2 bg-secondary">
    <b-row>
      <b-col md="4" class="d-flex align-items-center">
        <b-nav>
          <h4 class="text-light ms-5">Gerenciamento de veículos</h4>
        </b-nav>
      </b-col >

      <b-col md="8">
        <b-nav class="justify-content-end me-4">
          <div class="header-profile-custom">
            <b-avatar src="https://saxuming.net/wp-content/uploads/2020/11/sin-foto-mujer-hombre-300x300.jpg" badge badge-variant="success" class="me-3"></b-avatar>
            <span class="fs-5 text-light mt-2">{{user}}</span>
          </div>
        </b-nav>

      </b-col>
    </b-row>
</div>
</template>

<script>
export default {
  name: 'header-component',
  
  data() {
    return {
      user: "Raffael Eloi"
    }
  }
}
</script>

<style scoped>
  .header-profile-custom:hover {
    cursor: pointer;
  }
</style>