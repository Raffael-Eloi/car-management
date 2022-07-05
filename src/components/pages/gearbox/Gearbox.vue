<template>
  <main>
    <header-component />
    <b-row>
      <b-col mb="3">
        <sidebar-component />
      </b-col>

      <b-col md="9">
        <b-row class="mt-3" v-if="!isModalOpen()">
          <b-col md="8">
            <b-row>
              <b-col md="10">
                <b-form-input type="text" placeholder="Pesquisar caixa de marchas"></b-form-input>
              </b-col>
              <b-col md="2">
                <b-button variant="success"><i class="fa-solid fa-magnifying-glass"></i></b-button>
              </b-col>
              <br />
            </b-row>
          </b-col>

          <b-col md="4" v-if="!isModalOpen()">
            <b-button type="button" variant="success" @click.prevent="modal.openCreateUserModal = true">
              <i class="fa-solid fa-plus text-light"></i> Cadastrar caixa de marchas
            </b-button>
          </b-col>
        </b-row>

        <h5 class="text-center mt-5" v-if="!isModalOpen()">Lista de caixa de marchas</h5> 

        <div class="text-center" v-if="loading && !isModalOpen()">
          <b-spinner variant="secondary" class="m-5"></b-spinner>
        </div>

        <b-row class="px-4" v-if="!isModalOpen()">
          <b-col>
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
                <b-tr>
                  <b-td class="text-center">111.111.111-11</b-td>
                  <b-td class="text-center" colspan="2">João da Silva</b-td>
                  <b-td class="text-center">(63) 91111-1111</b-td>
                  <b-td class="text-center">
                    <i class="fa-solid fa-eye me-3 text-primary"></i>
                    <i class="fa-solid fa-pencil me-3"></i>
                    <i class="fa-solid fa-trash me-3 text-danger"></i>
                  </b-td>
                </b-tr>
              </b-tbody>
              <b-tfoot>
                <b-tr>
                  <b-td colspan="5" variant="success" class="text-end"><span class="me-5">Total de usuários: <b>5</b></span></b-td>
                </b-tr>
              </b-tfoot>
            </b-table-simple>
          </b-col>
        </b-row>

        <b-row class="px-5">
          <b-col v-if="isModalOpen()">
            <create-gearbox-component :active="modal.openCreateUserModal" :close="closeModalUserCreation"/>
          </b-col>
        </b-row>

      </b-col>
    </b-row>

  </main>
</template>

<script>
import Header from '../../shared/header/Header.vue';
import Sidebar from '../../shared/sidebar/Sidebar.vue';
import CreateGearboxComponent from './CreateGearboxComponent.vue'

export default {
  name: 'page-user',
  
  components: {
    'header-component': Header,
    'sidebar-component': Sidebar,
    'create-gearbox-component': CreateGearboxComponent
  },

  data() {
    return {
      modal: {
        openCreateUserModal: false,
        openEditUserModal: false,
        openShowUserModal: false
      },

      loading: false
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