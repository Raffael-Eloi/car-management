<template>
  <div class="p-2 bg-dark bg-gradient">
    <b-row>
      <b-col md="4" class="d-flex align-items-center">
        <b-nav>
          <h5 class="text-light ms-5 me-2">Gerenciamento de veículos</h5> 
        </b-nav>
      </b-col >

      <b-col md="8">
        <b-nav class="justify-content-end me-2">
            <b-button variant="outline-dark">
              <b-avatar src="https://saxuming.net/wp-content/uploads/2020/11/sin-foto-mujer-hombre-300x300.jpg" badge badge-variant="success" class="me-3"></b-avatar>
              <span class="fs-6 text-light">{{user}}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
            </b-button>
        </b-nav>

      </b-col>
    </b-row>
</div>
</template>

<script>

export default {
  name: 'header-component',

  components: {  },
  
  data() {
    return {
      user: "Raffael Eloi"
    }
  }
}
</script>

<style scoped>
</style>