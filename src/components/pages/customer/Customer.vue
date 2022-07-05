<template>
  <main>
    <header-component />
    <b-row>
      <b-col mb="3">
        <sidebar-component />
      </b-col>

      <b-col md="6" class="mt-2" v-if="!isModalOpen()">
        <b-row>
          <b-col md="10">
            <b-form-input type="text" placeholder="Pesquisar cliente"></b-form-input>
          </b-col>
          <b-col md="2">
            <b-button variant="success"><i class="fa-solid fa-magnifying-glass"></i></b-button>
          </b-col>
        </b-row>
      </b-col>

      <b-col md="3" class="mt-2" v-if="!isModalOpen()">
        <b-button type="button" variant="success" @click.prevent="modal.openCreateUserModal = true">
          <i class="fa-solid fa-plus text-light"></i> Cadastrar cliente
        </b-button>
      </b-col>

      <b-col md="9" v-if="isModalOpen()">
        <create-user-component :active="modal.openCreateUserModal" :close="closeModalUserCreation"/>
      </b-col>
    </b-row>

  </main>
</template>

<script>
import Header from '../../shared/header/Header.vue';
import Sidebar from '../../shared/sidebar/Sidebar.vue';
import CreateUserComponent from './CreateUserComponent.vue'

export default {
  name: 'page-user',
  
  components: {
    'header-component': Header,
    'sidebar-component': Sidebar,
    'create-user-component': CreateUserComponent
  },

  data() {
    return {
      modal: {
        openCreateUserModal: false,
        openEditUserModal: false,
        openShowUserModal: false
      }
    }
  },

  methods: {
    isModalOpen() {
      if (this.modal.openCreateUserModal || this.modal.openEditUserModal || this.modal.openShowUserModal) return true;
      else return false;
    },

    closeModalUserCreation () {
      this.modal.openCreateUserModal = false;
    }
  }

}
</script>

<style scoped>
</style>