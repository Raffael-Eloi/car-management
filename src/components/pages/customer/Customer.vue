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
                <b-form-input
                  type="text"
                  placeholder="Pesquisar cliente"
                ></b-form-input>
              </b-col>
              <b-col md="2">
                <b-button variant="success" @click="getCustomer()"
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
              @click.prevent="modal.openCreateCustomerModal = true"
            >
              <i class="fa-solid fa-plus text-light"></i> Cadastrar cliente
            </b-button>
          </b-col>
        </b-row>

        <b-row class="px-5 mt-5" v-if="!isModalOpen()">
          <b-col md="4">
            <b-button variant="secondary" @click="getCustomer()">
              Atualizar tabela <i class="fa-solid fa-arrows-rotate"></i>
            </b-button>
          </b-col>
          <b-col md="4"></b-col>
          <b-col md="4"></b-col>
        </b-row>

        <h5 class="text-center mt-5" v-if="!isModalOpen()">
          Lista de clientes
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
                <b-tr v-for="(customer, index) in table.data" :key="index">
                  <b-td class="text-center">{{ customer.document }}</b-td>
                  <b-td class="text-center" colspan="2">{{
                    customer.name
                  }}</b-td>
                  <b-td class="text-center">{{ customer.phone }}</b-td>
                  <b-td class="text-center">
                    <i
                      class="fa-solid fa-eye me-3 text-primary"
                      @click.prevent="openModalShowCustomer(customer)"
                    ></i>
                    <i
                      class="fa-solid fa-pencil me-3"
                      @click.prevent="openModalEditCustomer(customer)"
                    ></i>
                    <i
                      class="fa-solid fa-trash me-3 text-danger"
                      @click.prevent="deleteCustomerModal(customer)"
                    ></i>
                  </b-td>
                </b-tr>
              </b-tbody>
              <b-tfoot>
                <b-tr>
                  <b-td colspan="5" variant="success" class="text-end"
                    ><span class="me-5"
                      >Total de usuários: <b>{{ table.data.length }}</b></span
                    ></b-td
                  >
                </b-tr>
              </b-tfoot>
            </b-table-simple>
          </b-col>
        </b-row>

        <b-row class="px-5">
          <b-col v-if="isModalOpen()">
            <create-customer-component
              :active="modal.openCreateCustomerModal"
              :close="closeModalCreateCustomer"
              :token="token"
            />
            <show-customer-component
              :active="modal.openShowCustomerModal"
              :customer="customer"
              :close="closeModalShowCustomer"
            />
            <edit-customer-component
              :active="modal.openEditCustomerModal"
              :customer="customer"
              :close="closeModalEditCustomer"
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
import CreateCustomerComponent from "./CreateCustomerComponent.vue";
import ShowCustomerComponent from "./ShowCustomerComponent.vue";
import EditCustomerComponent from "./EditCustomerComponent.vue";
import router from '../../../routes.js';
import api from "../../../api";

export default {
  name: "page-customer",

  components: {
    "header-component": Header,
    "sidebar-component": Sidebar,
    "create-customer-component": CreateCustomerComponent,
    "show-customer-component": ShowCustomerComponent,
    "edit-customer-component": EditCustomerComponent,
  },

  beforeMount() {
    this.authUser();
  },

  mounted() {
    this.getCustomer();
  },

  data() {
    return {
      table: {
        data: [],
      },

      modal: {
        openCreateCustomerModal: false,
        openEditCustomerModal: false,
        openShowCustomerModal: false,
      },

      loading: true,

      customer: {},

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
        this.modal.openCreateCustomerModal ||
        this.modal.openEditCustomerModal ||
        this.modal.openShowCustomerModal
      )
        return true;
      else return false;
    },

    openModalShowCustomer(customer) {
      this.modal.openShowCustomerModal = true;
      this.customer = customer;
    },

    openModalEditCustomer(customer) {
      this.modal.openEditCustomerModal = true;
      this.customer = customer;
    },

    closeModalCreateCustomer() {
      this.modal.openCreateCustomerModal = false;
      this.getCustomer();
    },

    closeModalShowCustomer() {
      this.modal.openShowCustomerModal = false;
    },

    closeModalEditCustomer() {
      this.modal.openEditCustomerModal = false;
      this.getCustomer();
    },

    getCustomer() {
      this.loading = true;
      api.get("/customers", {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then((response) => {
          this.table.data = response.data;
          this.loading = false;
        })
        .catch((error) => console.log(error));
    },

    deleteCustomerModal(customer) {
      this.loading = true;

      this.$swal({
        title: "Você tem certeza que deseja excluir o cliente?",
        text: "Não será possível recuperar o cliente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) this.deleteCustomer(customer.id);
        else this.loading = false;
      });
    },

    deleteCustomer(id) {
      api.delete(`/customers/${id}`, {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then((response) => {
          this.showSuccessfulDeleteMessage();
          this.loading = false;
          this.getCustomer();
        })
        .catch((error) => error);
    },

    showSuccessfulDeleteMessage() {
      this.$swal("Concluído!", "Cliente excluído com sucesso.", "success");
    },
  },
};
</script>

<style scoped>
i:hover {
  cursor: pointer;
}
</style>