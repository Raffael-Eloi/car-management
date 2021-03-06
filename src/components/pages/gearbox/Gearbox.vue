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
          <b-col md="5">
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
                  @click="searchGearbox()"
                  :disabled="(table.filter.keywords === '' || table.filter.attributeSearch === '')"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </b-button>
              </b-col>
              <br />
            </b-row>
          </b-col>

          <b-col md="4" v-if="!isModalOpen()">
            <b-button
              type="button"
              variant="success"
              @click.prevent="modal.openCreateGearboxModal = true"
            >
              <i class="fa-solid fa-plus text-light"></i> Cadastrar caixa de
              marchas
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
            <b-button variant="secondary" @click="getGerBoxes()">
              Atualizar tabela <i class="fa-solid fa-arrows-rotate"></i>
            </b-button>
          </b-col>
        </b-row>

        <h5 class="text-center mt-5" v-if="!isModalOpen()">
          Lista de caixa de marchas
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
                  <b-th class="text-center" colspan="4">Nome</b-th>
                  <b-th class="text-center">Ação</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(gearbox, index) in table.data" :key="index">
                  <b-td class="text-center" colspan="4">{{
                    gearbox.name
                  }}</b-td>
                  <b-td class="text-center">
                    <i
                      class="fa-solid fa-eye me-3 text-primary"
                      @click.prevent="openModalShowUser(gearbox)"
                    ></i>
                    <i
                      class="fa-solid fa-pencil me-3"
                      @click.prevent="openModalEditUser(gearbox)"
                    ></i>
                    <i
                      class="fa-solid fa-trash me-3 text-danger"
                      @click.prevent="deleteGearboxModal(gearbox)"
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
            <create-gearbox-component
              :active="modal.openCreateGearboxModal"
              :close="closeModalCreateGearbox"
              :token="token"
            />
            <show-gearbox-component
              :active="modal.openShowGearboxModal"
              :gearbox="gearbox"
              :close="closeModalShowGearbox"
            />
            <edit-gearbox-component
              :active="modal.openEditGearboxModal"
              :gearbox="gearbox"
              :close="closeModalEditGearbox"
              :token="token"
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
import CreateGearboxComponent from "./CreateGearboxComponent.vue";
import ShowGearboxComponent from "./ShowGearboxComponent.vue";
import EditGearboxComponent from "./EditGearboxComponent.vue";
import router from '../../../routes.js';
import api from "../../../api";

export default {
  name: "page-user",

  components: {
    "header-component": Header,
    "sidebar-component": Sidebar,
    "create-gearbox-component": CreateGearboxComponent,
    "show-gearbox-component": ShowGearboxComponent,
    "edit-gearbox-component": EditGearboxComponent,
  },
  
  beforeMount() {
    this.authUser();
  },

  mounted() {
    this.getGerBoxes();
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
        {value: 'name', text: 'Nome'}
      ],

      modal: {
        openCreateGearboxModal: false,
        openEditGearboxModal: false,
        openShowGearboxModal: false,
      },

      loading: false,

      gearbox: {},

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
        this.modal.openCreateGearboxModal ||
        this.modal.openEditGearboxModal ||
        this.modal.openShowGearboxModal
      )
        return true;
      else return false;
    },

    openModalShowUser(gearbox) {
      this.modal.openShowGearboxModal = true;
      this.gearbox = gearbox;
    },

    openModalEditUser(gearbox) {
      this.modal.openEditGearboxModal = true;
      this.gearbox = gearbox;
    },

    closeModalCreateGearbox() {
      this.modal.openCreateGearboxModal = false;
      this.getGerBoxes();
    },

    closeModalShowGearbox() {
      this.modal.openShowGearboxModal = false;
    },

    closeModalEditGearbox() {
      this.modal.openEditGearboxModal = false;
    },

    getGerBoxes() {
      this.loading = true;
      api.get("/gearboxes", {
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

    deleteGearboxModal(gearbox) {
      this.loading = true;

      this.$swal({
        title: "Você tem certeza que deseja excluir a caixa de marcha?",
        text: "Não será possível recuperar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteGearbox(gearbox.id);
        } else this.loading = false;
      });
    },

    deleteGearbox(id) {
      api.delete(`/gearboxes/${id}`, {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then((response) => {
          this.showSuccessfulDeleteMessage();
          this.loading = false;
          this.getGerBoxes();
        })
        .catch((error) => error);
    },

    showSuccessfulDeleteMessage() {
      this.$swal(
        "Concluído!",
        "Caixa de marcha excluída com sucesso.",
        "success"
      );
    },

    previousPage() {
      if (this.table.filter.page !== 1) {
        this.table.filter.page -= 1;
        this.getGerBoxes();
      }
    },

    nextPage() {
      if (this.table.filter.nextPage !== null) {
        this.table.filter.page += 1;
        this.getGerBoxes();
      }
    },

    searchGearbox () {
      this.table.filter.filterByAttribute = true;
      this.getGerBoxes();
    },

    cleanFilter() {
      this.table.filter.attributeSearch = '';
      this.table.filter.filterByAttribute = false;
      this.table.filter.keywords = '';
      this.getGerBoxes();
    }
  },
};
</script>

<style scoped>
i:hover {
  cursor: pointer;
}
</style>