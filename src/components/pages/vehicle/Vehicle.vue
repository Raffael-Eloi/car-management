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
          <b-col md="7">
            <b-row>
              <b-col md="10">
                <b-form-input
                  type="text"
                  placeholder="Pesquisar veículo"
                  v-model="table.filter.keywords"
                ></b-form-input>
              </b-col>
              <b-col md="2">
                <b-button
                  variant="success"
                  @click="searchVehicle()"
                  :disabled="(table.filter.keywords === '' || table.filter.attributeSearch === '')"
                  ><i class="fa-solid fa-magnifying-glass"></i
                ></b-button>
              </b-col>
              <br />
            </b-row>
          </b-col>

          <b-col md="3" v-if="!isModalOpen()">
            <b-button
              type="button"
              variant="success"
              @click.prevent="modal.openCreateVehicleModal = true"
            >
              <i class="fa-solid fa-plus text-light"></i> Cadastrar veículos
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
            <b-button variant="secondary" @click="getVehicles()">
              Atualizar tabela <i class="fa-solid fa-arrows-rotate"></i>
            </b-button>
          </b-col>
        </b-row>

        <h5 class="text-center mt-5" v-if="!isModalOpen()">
          Lista de veículos
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
                  <b-th class="text-center">Marca</b-th>
                  <b-th class="text-center">Modelo</b-th>
                  <b-th class="text-center">Placa</b-th>
                  <b-th class="text-center">Ano/Modelo</b-th>
                  <b-th class="text-center">Cor</b-th>
                  <b-th class="text-center">Ação</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(vehicle, index) in table.data" :key="index">
                  <b-td class="text-center">{{ vehicle.brand }}</b-td>
                  <b-td class="text-center">{{ vehicle.model }}</b-td>
                  <b-td class="text-center">{{ vehicle.license_plate }}</b-td>
                  <b-td class="text-center">{{ vehicle.year_model }}</b-td>
                  <b-td class="text-center">{{ vehicle.color }}</b-td>
                  <b-td class="text-center">
                    <i
                      class="fa-solid fa-eye me-3 text-primary"
                      @click.prevent="openModalShowVehicle(vehicle)"
                    ></i>
                    <i
                      class="fa-solid fa-pencil me-3"
                      @click.prevent="openModalEditVehicle(vehicle)"
                    ></i>
                    <i
                      class="fa-solid fa-trash me-3 text-danger"
                      @click.prevent="deleteVehicleModal(vehicle)"
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
            <create-vehicle-component
              :active="modal.openCreateVehicleModal"
              :token="token"
              :close="closeModalCreateVehicle"
            />
            <show-vehicle-component
              :active="modal.openShowVehicleModal"
              :vehicle="vehicle"
              :close="closeModalShowVehicle"
            />
            <edit-vehicle-component
              :active="modal.openEditVehicleModal"
              :vehicle="vehicle"
              :token="token"
              :close="closeModalEditVehicle"
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
import CreateVehicleComponent from "./CreateVehicleComponent.vue";
import ShowVehicleComponent from "./ShowVehicleComponent.vue";
import EditVehicleComponent from "./EditVehicleComponent.vue";
import router from '../../../routes.js';
import api from "../../../api";

export default {
  name: "page-vehicle",

  components: {
    "header-component": Header,
    "sidebar-component": Sidebar,
    "create-vehicle-component": CreateVehicleComponent,
    "show-vehicle-component": ShowVehicleComponent,
    "edit-vehicle-component": EditVehicleComponent,
  },

  beforeMount() {
    this.authUser();
  },

  mounted() {
    this.getVehicles();
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
        {value: 'brand', text: 'Marca'},
        {value: 'model', text: 'Modelo'},
        {value: 'license_plate', text: 'Placa'},
        {value: 'color', text: 'Cor'}
      ],

      modal: {
        openCreateVehicleModal: false,
        openEditVehicleModal: false,
        openShowVehicleModal: false,
      },

      loading: false,

      vehicle: {},

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
        this.modal.openCreateVehicleModal ||
        this.modal.openEditVehicleModal ||
        this.modal.openShowVehicleModal
      )
        return true;
      else return false;
    },

    openModalShowVehicle(vehicle) {
      this.modal.openShowVehicleModal = true;
      this.vehicle = vehicle;
    },

    openModalEditVehicle(vehicle) {
      this.modal.openEditVehicleModal = true;
      this.vehicle = vehicle;
    },

    closeModalCreateVehicle() {
      this.modal.openCreateVehicleModal = false;
      this.getVehicles();
    },

    closeModalShowVehicle() {
      this.modal.openShowVehicleModal = false;
    },

    closeModalEditVehicle() {
      this.modal.openEditVehicleModal = false;
      this.getVehicles();
    },

    getVehicles() {
      this.loading = true;
      api.get("/vehicles", {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        },
        params: this.table.filter
        
      })
        .then((response) => {
          console.log('response', response.data)
          this.table.filter.nextPage = response.data.next_page_url;
          this.table.data = response.data.data;
          this.loading = false;
          console.log('filter', this.table)
        })
        .catch((error) => console.log(error));
    },

    deleteVehicleModal(vehicle) {
      this.loading = true;

      this.$swal({
        title: "Você tem certeza que deseja excluir o veículo?",
        text: "Não será possível recuperar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteVehicle(vehicle.id);
        } else this.loading = false;
      });
    },

    deleteVehicle(id) {
      api.delete(`/vehicles/${id}`, {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then((response) => {
          this.showSuccessfulDeleteMessage();
          this.loading = false;
          this.getVehicles();
        })
        .catch((error) => error);
    },

    showSuccessfulDeleteMessage() {
      this.$swal("Concluído!", "Veículo excluído com sucesso.", "success");
    },

    previousPage() {
      if (this.table.filter.page !== 1) {
        this.table.filter.page -= 1;
        this.getVehicles();
      }
    },

    nextPage() {
      if (this.table.filter.nextPage !== null) {
        this.table.filter.page += 1;
        this.getVehicles();
      }
    },

    searchVehicle () {
      this.table.filter.filterByAttribute = true;
      this.getVehicles();
    }
  },
};
</script>

<style scoped>
i:hover {
  cursor: pointer;
}
</style>