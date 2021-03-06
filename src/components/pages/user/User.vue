<template>
  <main>
    <header-component />
    <b-row>
      <b-col mb="3">
        <sidebar-component />
      </b-col>

      <b-col md="9">
        <b-row class="mt-3" v-if="!isModalOpen()">
          <b-col md="2">
            <b-form-select v-model="table.filter.attributeSearch" :options="filterAttributeOptions"></b-form-select>
          </b-col>
          <b-col md="1">
            <b-button variant="danger" @click="cleanFilter()">Limpar</b-button>
          </b-col>
          <b-col md="6">
            <b-row>
              <b-col md="10">
                <b-form-input
                  type="text"
                  placeholder="Pesquisar"
                  v-model="table.filter.keywords"
                ></b-form-input>
              </b-col>
              <b-col md="2">
                <b-button
                  variant="success"
                  @click="searchUser()"
                  :disabled="(table.filter.keywords === '' || table.filter.attributeSearch === '')"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </b-button>
              </b-col>
              <br />
            </b-row>
          </b-col>

          <b-col md="3" v-if="!isModalOpen()">
            <b-button
              type="button"
              variant="success"
              @click.prevent="modal.openCreateUserModal = true"
            >
              <i class="fa-solid fa-plus text-light"></i> Cadastrar usuário
            </b-button>
          </b-col>
        </b-row>

        <b-row class="px-5 mt-5" v-if="!isModalOpen()">
          <b-col md="4">
            <b-row>
              <b-col md="4">
                <b-form-select v-model="table.filter.perPage">
                  <b-form-select-option :value="10">10</b-form-select-option>
                  <b-form-select-option :value="25">25</b-form-select-option>
                  <b-form-select-option :value="50">50</b-form-select-option>
                  <b-form-select-option :value="100">100</b-form-select-option>
                </b-form-select>
              </b-col>
              <b-col md="8" class="mt-2">
                Resultados por página
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4"></b-col>
          <b-col md="4">
            <b-button variant="secondary" @click="getUsers()">
              Atualizar tabela <i class="fa-solid fa-arrows-rotate"></i>
            </b-button>
          </b-col>
        </b-row>

        <h5 class="text-center mt-5" v-if="!isModalOpen()">
          Lista de usuários
        </h5>

        <b-row class="px-5" v-if="!isModalOpen()">
          <!-- loading -->
          <div class="text-center" v-if="loading && !isModalOpen()">
            <b-spinner variant="secondary" class="m-5"></b-spinner>
          </div>

          <b-col v-else>
            <b-table-simple
              hover
              small
              caption-top
              responsive
              style="border-radius: 10px"
            >
              <b-thead head-variant="success">
                <b-tr>
                  <b-th class="text-center">CPF/CPNJ</b-th>
                  <b-th class="text-center" colspan="2">Nome</b-th>
                  <b-th class="text-center">Telefone</b-th>
                  <b-th class="text-center">Ações</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(user, index) in table.data" :key="index">
                  <b-td class="text-center">{{ user.document }}</b-td>
                  <b-td class="text-center" colspan="2">{{ user.name }}</b-td>
                  <b-td class="text-center">{{ user.phone }}</b-td>
                  <b-td class="text-center">
                    <i
                      class="fa-solid fa-eye me-3 text-primary"
                      @click.prevent="openModalShowUser(user)"
                    ></i>
                    <i
                      class="fa-solid fa-pencil me-3"
                      @click.prevent="openModalEditUser(user)"
                    ></i>
                    <i
                      class="fa-solid fa-trash me-3 text-danger"
                      @click.prevent="deleteUserModal(user)"
                    ></i>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </b-col>
        </b-row>

        <b-row v-if="!loading && !isModalOpen()">
          <b-col md="8"></b-col>
          <b-col md="4">
            <b-button-group>
              <b-button
                @click="previousPage()"
                :disabled="this.table.filter.page === 1"
              >
                Anterior
              </b-button>
              <b-button>{{ table.filter.page }}</b-button>
              <b-button 
                @click="nextPage()"
                :disabled="table.filter.nextPage === null"
              >
                Próximo
              </b-button>
            </b-button-group>
          </b-col>
        </b-row>

        <b-row class="px-5">
          <b-col v-if="isModalOpen()">
            <create-user-component
              :active="modal.openCreateUserModal"
              :token="token"
              :close="closeModalCreateUser"
            />
            <show-user-component
              :active="modal.openShowUserModal"
              :user="user"
              :close="closeModalShowUser"
            />
            <edit-user-component
              :active="modal.openEditUserModal"
              :user="user"
              :token="token"
              :close="closeModalEditUser"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import Header from "../../shared/header/Header.vue";
import Sidebar from "../../shared/sidebar/Sidebar.vue";
import CreateUserComponent from "./CreateUserComponent.vue";
import ShowUserComponent from "./ShowUserComponent.vue";
import EditUserComponent from "./EditUserComponent.vue";
import router from '../../../routes.js';
import api from "../../../api";

export default {
  name: "page-user",

  components: {
    "header-component": Header,
    "sidebar-component": Sidebar,
    "create-user-component": CreateUserComponent,
    "show-user-component": ShowUserComponent,
    "edit-user-component": EditUserComponent,
  },

  beforeMount() {
    this.authUser();
  },

  mounted() {
    this.getUsers();
  },

  data() {
    return {
      table: {
        filter: {
          perPage: 10,
          page: 1,
          nextPage: null,
          keywords: '',
          attributeSearch: '',
          filterByAttribute: false
        },
        data: [],
      },

      filterAttributeOptions: [
        {value: null, text: 'Filtro'},
        {value: 'name', text: 'Nome'},
        {value: 'document', text: 'CPF/CPNJ'},
        {value: 'phone', text: 'Telefone'},
        {value: 'email', text: 'E-mail'}
      ],

      modal: {
        openCreateUserModal: false,
        openEditUserModal: false,
        openShowUserModal: false,
      },

      loading: true,

      user: {},

      userId: '',
      token: ''
    };
  },

  methods: {
    authUser () {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!userId && !token) router.push({name: 'login'});
      else {
        this.currentUserId = userId;
        this.token = token;
        this.getCurrentUser();
      }
    },

    getCurrentUser() {
      api.get(`users/${this.currentUserId}`,{
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
      .then(response => {})
      .catch(errors => this.afterAuthError(errors));
    },
    
    afterAuthError (errors) {
      if (errors.response.statusText === "Unauthorized") router.push({name: 'login'});
    },
    
    isModalOpen() {
      if (
        this.modal.openCreateUserModal ||
        this.modal.openEditUserModal ||
        this.modal.openShowUserModal
      )
        return true;
      else return false;
    },

    openModalShowUser(user) {
      this.modal.openShowUserModal = true;
      this.user = user;
    },

    openModalEditUser(user) {
      this.modal.openEditUserModal = true;
      this.user = user;
    },

    closeModalCreateUser() {
      this.modal.openCreateUserModal = false;
      this.getUsers();
    },

    closeModalShowUser() {
      this.modal.openShowUserModal = false;
    },

    closeModalEditUser() {
      this.modal.openEditUserModal = false;
      this.getUsers();
    },

    getUsers() {
      this.loading = true;
      api.get("/users", {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        },
        params: this.table.filter
      })
        .then((response) => {
          this.table.data = response.data.data;
          this.loading = false;
        })
        .catch((error) => console.log(error));
    },

    deleteUserModal(user) {
      this.loading = true;

      this.$swal({
        title: "Você tem certeza que deseja excluir o usuário?",
        text: "Não será possível recuperar o usuário!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUser(user.id);
        } else this.loading = false;
      });
    },

    deleteUser(id) {
      api.delete(`/users/${id}`, {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then((response) => {
          this.showSuccessfulDeleteMessage();
          this.loading = false;
          this.getUsers();
        })
        .catch((error) => error);
    },

    showSuccessfulDeleteMessage() {
      this.$swal("Concluído!", "Usuário excluído com sucesso.", "success");
    },

    previousPage() {
      if (this.table.filter.page !== 1) {
        this.table.filter.page -= 1;
        this.getUsers();
      }
    },

    nextPage() {
      if (this.table.filter.nextPage !== null) {
        this.table.filter.page += 1;
        this.getUsers();
      }
    },

    searchUser () {
      this.table.filter.filterByAttribute = true;
      this.getUsers();
    },

    cleanFilter() {
      this.table.filter.attributeSearch = '';
      this.table.filter.filterByAttribute = false;
      this.table.filter.keywords = '';
      this.getUsers();
    }
  },
};
</script>

<style scoped>
i:hover {
  cursor: pointer;
}
</style>