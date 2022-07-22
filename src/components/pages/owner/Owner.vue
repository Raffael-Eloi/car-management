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
                  @click="searchOwner()"
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
              @click.prevent="modal.openCreateOwnerModal = true"
            >
              <i class="fa-solid fa-plus text-light"></i> Cadastrar proprietário
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
            <b-button variant="secondary" @click="getOwners()">
              Atualizar tabela <i class="fa-solid fa-arrows-rotate"></i>
            </b-button>
          </b-col>
        </b-row>

        <h5 class="text-center mt-5" v-if="!isModalOpen()">
          Lista de proprietários
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
                <b-tr v-for="(owner, index) in table.data" :key="index">
                  <b-td class="text-center">{{ owner.document }}</b-td>
                  <b-td class="text-center" colspan="2">{{
                    owner.name
                  }}</b-td>
                  <b-td class="text-center">{{ owner.phone }}</b-td>
                  <b-td class="text-center">
                    <i
                      class="fa-solid fa-eye me-3 text-primary"
                      @click.prevent="openModalShowOwner(owner)"
                    ></i>
                    <i
                      class="fa-solid fa-pencil me-3"
                      @click.prevent="openModalEditOwner(owner)"
                    ></i>
                    <i
                      class="fa-solid fa-trash me-3 text-danger"
                      @click.prevent="deleteOwnerModal(owner)"
                    ></i>
                    <i
                      class="fa-solid fa-car"
                      @click.prevent="showCarAssociateds(owner)"
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
            <create-owner-component
              :active="modal.openCreateOwnerModal"
              :close="closeModalCreateOwner"
              :token="token"
            />
            <show-owner-component
              :active="modal.openShowOwnerModal"
              :owner="owner"
              :close="closeModalShowOwner"
            />
            <edit-owner-component
              :active="modal.openEditOwnerModal"
              :owner="owner"
              :close="closeModalEditOwner"
              :token="token"
            />
            <cars-associated-component
              :active="modal.openCarsAssociatedModel"
              :owner="owner"
              :close="closeModalShowCarAssociated"
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
import CreateOwnerComponent from "./CreateOwnerComponent.vue";
import ShowOwnerComponent from "./ShowOwnerComponent.vue";
import EditOwnerComponent from "./EditOwnerComponent.vue";
import CarsAssociatedComponent from "./CarsAssociatedComponent.vue";
import router from '../../../routes.js';
import api from "../../../api";

export default {
  name: "page-owner",

  components: {
    "header-component": Header,
    "sidebar-component": Sidebar,
    "create-owner-component": CreateOwnerComponent,
    "show-owner-component": ShowOwnerComponent,
    "edit-owner-component": EditOwnerComponent,
    "cars-associated-component": CarsAssociatedComponent,
  },

  beforeMount() {
    this.authUser();
  },

  mounted() {
    this.getOwners();
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
        openCreateOwnerModal: false,
        openEditOwnerModal: false,
        openShowOwnerModal: false,
        openCarsAssociatedModel: false
      },

      loading: true,

      owner: {},

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
      api.get(`users/${this.currentUserId}`, {
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
        this.modal.openCreateOwnerModal ||
        this.modal.openEditOwnerModal ||
        this.modal.openShowOwnerModal ||
        this.modal.openCarsAssociatedModel
      )
        return true;
      else return false;
    },

    openModalShowOwner(owner) {
      this.owner = owner;
      this.modal.openShowOwnerModal = true;
    },

    openModalEditOwner(owner) {
      this.owner = owner;
      this.modal.openEditOwnerModal = true;
    },

    showCarAssociateds(owner) {
      this.owner = owner;
      this.modal.openCarsAssociatedModel = true;
    },

    closeModalCreateOwner() {
      this.modal.openCreateOwnerModal = false;
      this.getOwners();
    },

    closeModalShowOwner() {
      this.modal.openShowOwnerModal = false;
    },

    closeModalEditOwner() {
      this.modal.openEditOwnerModal = false;
      this.getOwners();
    },

    closeModalShowCarAssociated() {
      this.modal.openCarsAssociatedModel = false;
    },

    getOwners() {
      this.loading = true;
      api.get("/owners", {
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

    deleteOwnerModal(owner) {
      this.loading = true;

      this.$swal({
        title: "Você tem certeza que deseja excluir o proprietário?",
        text: "Não será possível recuperar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) this.deleteOwner(owner.id);
        else this.loading = false;
      });
    },

    deleteOwner(id) {
      api.delete(`/owners/${id}`, {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then((response) => {
          this.showSuccessfulDeleteMessage();
          this.loading = false;
          this.getOwners();
        })
        .catch((error) => error);
    },

    showSuccessfulDeleteMessage() {
      this.$swal("Concluído!", "Proprietário excluído com sucesso.", "success");
    },

    previousPage() {
      if (this.table.filter.page !== 1) {
        this.table.filter.page -= 1;
        this.getOwners();
      }
    },

    nextPage() {
      if (this.table.filter.nextPage !== null) {
        this.table.filter.page += 1;
        this.getOwners();
      }
    },

    searchOwner () {
      this.table.filter.filterByAttribute = true;
      this.getOwners();
    },

    cleanFilter() {
      this.table.filter.attributeSearch = '';
      this.table.filter.filterByAttribute = false;
      this.table.filter.keywords = '';
      this.getOwners();
    }
  },
};
</script>

<style scoped>
i:hover {
  cursor: pointer;
}
</style>