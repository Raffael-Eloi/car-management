<template>
  <main>
    <header-component />
    <b-row>
      <b-col mb="3">
        <sidebar-component />
      </b-col>

      <b-col md="9">
        <b-row class="mt-3" v-if="!isModalOpen()">
          <b-col md="9">
            <b-row>
              <b-col md="10">
                <b-form-input type="text" placeholder="Pesquisar usuário"></b-form-input>
              </b-col>
              <b-col md="2">
                <b-button variant="success" @click="getUsers()"><i class="fa-solid fa-magnifying-glass"></i></b-button>
              </b-col>
              <br />
            </b-row>
          </b-col>

          <b-col md="3" v-if="!isModalOpen()">
            <b-button type="button" variant="success" @click.prevent="modal.openCreateUserModal = true">
              <i class="fa-solid fa-plus text-light"></i> Cadastrar usuário
            </b-button>
          </b-col>
        </b-row>

        <h5 class="text-center mt-5" v-if="!isModalOpen()">Lista de usuários</h5> 

        <b-row class="px-5" v-if="!isModalOpen()">
          <!-- loading -->
          <div class="text-center" v-if="loading && !isModalOpen()">
            <b-spinner variant="secondary" class="m-5"></b-spinner>
          </div>

          <b-col v-else>
            <b-table-simple hover small caption-top responsive style="border-radius: 10px">
              <b-thead head-variant="success">
                <b-tr>
                  <b-th class="text-center">CPF/CPNJ</b-th>
                  <b-th class="text-center" colspan="2">Nome</b-th>
                  <b-th class="text-center">Telefone</b-th>
                  <b-th class="text-center">Ação</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(user, index) in table.data" :key="index">
                  <b-td class="text-center">{{user.document}}</b-td>
                  <b-td class="text-center" colspan="2">{{user.name}}</b-td>
                  <b-td class="text-center">{{user.document}}</b-td>
                  <b-td class="text-center">
                    <i class="fa-solid fa-eye me-3 text-primary"></i>
                    <i class="fa-solid fa-pencil me-3"></i>
                    <i class="fa-solid fa-trash me-3 text-danger"></i>
                  </b-td>
                </b-tr>
              </b-tbody>
              <b-tfoot>
                <b-tr>
                  <b-td colspan="5" variant="success" class="text-end"><span class="me-5">Total de usuários: <b>{{table.data.length}}</b></span></b-td>
                </b-tr>
              </b-tfoot>
            </b-table-simple>
          </b-col>
        </b-row>

        <b-row class="px-5">
          <b-col v-if="isModalOpen()">
            <create-user-component :active="modal.openCreateUserModal" :close="closeModalUserCreation"/>
          </b-col>
        </b-row>

      </b-col>
    </b-row>

  </main>
</template>

<script>
import Header from '../../shared/header/Header.vue';
import Sidebar from '../../shared/sidebar/Sidebar.vue';
import CreateUserComponent from './CreateUserComponent.vue'
import api from '../../../api';

export default {
  name: 'page-user',
  
  components: {
    'header-component': Header,
    'sidebar-component': Sidebar,
    'create-user-component': CreateUserComponent
  },

  mounted() {
    this.getUsers();
  },

  data() {
    return {
      table: {
        data: []
      },

      modal: {
        openCreateUserModal: false,
        openEditUserModal: false,
        openShowUserModal: false
      },

      loading: true
    }
  },

  methods: {
    isModalOpen() {
      if (this.modal.openCreateUserModal || this.modal.openEditUserModal || this.modal.openShowUserModal) return true;
      else return false;
    },

    closeModalUserCreation () {
      this.modal.openCreateUserModal = false;
    },

    getUsers() {
      api.get(`/users`)
      .then(response => {
        this.table.data = response.data;
        this.loading = false;
      })
      .catch(error => error)
    }
  }

}
</script>

<style scoped>
</style>