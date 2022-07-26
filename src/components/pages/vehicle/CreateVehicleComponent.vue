<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Cadastro de veículo</b-card-title>
    <b-form @submit.prevent="storeVehicle()">
      <b-row>
        <b-col>
          <b-form-group label="Marca" label-for="input-brand">
            <b-form-input
              id="input-brand"
              type="text"
              :state="form.errors.brand ? !(form.errors.brand !== undefined) : null"
              v-model="form.inputs.brand"
              placeholder="Digite a marca"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.brand"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Modelo" label-for="input-model">
            <b-form-input
              id="input-model"
              type="text"
              v-model="form.inputs.model"
              placeholder="Digite o modelo"
             :state="form.errors.model ? !(form.errors.model !== undefined) : null"
            ></b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.model"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Placa" label-for="input-license-plate">
            <b-form-input
              id="input-license-plate"
              type="text"
              v-model="form.inputs.license_plate"
              placeholder="Digite a placa"
              :state="form.errors.license_plate ? !(form.errors.license_plate !== undefined) : null"
            ></b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.license_plate"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Ano/Modelo" label-for="input-year-model">
            <b-form-select
              id="input-year-model"
              v-model="form.inputs.year_model"
              :options="select.yearModelOptions"
              :state="form.errors.year_model ? !(form.errors.year_model !== undefined) : null"
            ></b-form-select>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.year_model"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Cor" label-for="input-color">
            <b-form-input
              id="input-color"
              type="text"
              v-model="form.inputs.color"
              placeholder="Digite a cor"
              :state="form.errors.color ? !(form.errors.color !== undefined) : null"
            ></b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.color"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            label="Quantidade de eixos"
            label-for="input-axle-quantity"
          >
            <b-form-input
              id="input-axle-quantity"
              type="number"
              v-model="form.inputs.axle_quantity"
              placeholder="Digite a quantidade de eixos"
              :state="form.errors.axle_quantity ? !(form.errors.axle_quantity !== undefined) : null"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.axle_quantity"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Torque" label-for="input-torque">
            <b-form-input
              id="input-torque"
              type="number"
              v-model="form.inputs.torque"
              placeholder="Digite o torque"
              :state="form.errors.torque ? !(form.errors.torque !== undefined) : null"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.torque"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Caixa de marchas" label-for="input-state">
            <b-form-select
              v-model="form.inputs.gearbox_id"
              :options="select.gearBoxOptions"
              value-field="id"
              text-field="name"
              :state="form.errors.gearbox_id ? !(form.errors.gearbox_id !== undefined) : null"
            ></b-form-select>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gearbox_id"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group
            label="Relação 1ª Marcha"
            label-for="input-relation-first-gear"
          >
            <b-form-input
              id="input-relation-first-gear"
              type="number"
              step="0.01"
              v-model="form.inputs.relation_first_gear"
              placeholder="Digite a relação"
              :state="form.errors.relation_first_gear ? !(form.errors.relation_first_gear !== undefined) : null"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.relation_first_gear"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            label="Relação diferencial"
            label-for="input-axle_differential"
          >
            <b-form-input
              id="input-axle_differential"
              type="number"
              step="0.01"
              v-model="form.inputs.axle_differential"
              placeholder="Digite a relação diferencial"
              :state="form.errors.axle_differential ? !(form.errors.axle_differential !== undefined) : null"
            ></b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.axle_differential"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col>
          <b-form-group
            label="Peso (tara)"
            label-for="input-weight"
          >
            <b-form-input
              id="input-weight"
              type="number"
              step="0.01"
              v-model="form.inputs.weight"
              placeholder="Digite o peso"
              :state="form.errors.weight ? !(form.errors.weight !== undefined) : null"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.weight"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            label="Potência"
            label-for="input-potency"
          >
            <b-form-input
              id="input-potency"
              type="number"
              step="0.01"
              v-model="form.inputs.potency"
              placeholder="Digite a potência"
              :state="form.errors.potency ? !(form.errors.potency !== undefined) : null"
            ></b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.potency"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col>
          <b-form-group
            label="Balanço dianteiro"
            label-for="input-front_balance"
          >
            <b-form-input
              id="input-front_balance"
              type="number"
              step="0.01"
              v-model="form.inputs.front_balance"
              placeholder="Digite o balanço dianteiro"
              :state="form.errors.front_balance ? !(form.errors.front_balance !== undefined) : null"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.front_balance"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            label="Balanço traseiro"
            label-for="input-back_balance"
          >
            <b-form-input
              id="input-back_balance"
              type="number"
              step="0.01"
              v-model="form.inputs.back_balance"
              placeholder="Digite o balanço traseiro"
              :state="form.errors.back_balance ? !(form.errors.back_balance !== undefined) : null"
            ></b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.back_balance"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group
            label="Entre eixos"
            label-for="input-between_axles_first"
          >
            <b-form-input
              id="input-between_axles_first"
              type="number"
              step="0.01"
              v-model="form.inputs.between_axles_first"
              placeholder="Digite o valor entre eixos"
              :state="form.errors.between_axles_first ? !(form.errors.between_axles_first !== undefined) : null"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.between_axles_first"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
        
        <b-col>
          <b-form-group
            label="Entre eixos"
            label-for="input-between_axles_second"
          >
            <b-form-input
              id="input-between_axles_second"
              type="number"
              step="0.01"
              v-model="form.inputs.between_axles_second"
              placeholder="Digite o valor entre eixos"
              :state="form.errors.between_axles_second ? !(form.errors.between_axles_second !== undefined) : null"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.between_axles_second"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            label="Entre eixos"
            label-for="input-between_axles_third"
          >
            <b-form-input
              id="input-between_axles_third"
              type="number"
              step="0.01"
              v-model="form.inputs.between_axles_third"
              placeholder="Digite o valor entre eixos"
              :state="form.errors.between_axles_third ? !(form.errors.between_axles_third !== undefined) : null"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.between_axles_third"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <hr>
      <h6 class="text-center">Pesquisar Proprietário</h6>
      <br>
      <b-row>
        <b-col md="3">
          <b-form-select v-model="filterOwner.attributeSearch" :options="filterAttributeOptionsOwner"></b-form-select>
        </b-col>
        <b-col md="2">
          <b-button variant="danger" @click="cleanFilterOwner()">Limpar</b-button>
        </b-col>
        <b-col md="6">
          <b-row>
            <b-col md="10">
              <b-form-input
                type="text"
                placeholder="Pesquisar"
                v-model="filterOwner.keywords"
              ></b-form-input>
            </b-col>
            <b-col md="2">
              <b-button
                variant="success"
                @click="searchOwners()"
                :disabled="(filterOwner.keywords === '' || filterOwner.attributeSearch === '')"
                ><i class="fa-solid fa-magnifying-glass"></i
              ></b-button>
            </b-col>
            <br />
          </b-row>
        </b-col>
      </b-row>
      <br />

      <b-row>
        <b-col v-if="loadingOwnerSelect">
          <div class="text-center">
            <b-spinner variant="secondary" class="m-5"></b-spinner>
          </div>
        </b-col>

        <b-col v-else>
          <b-form-group label="Proprietário" label-for="input-owner">
            <b-form-select
              id="input-owner"
              v-model="form.inputs.owner_id"
              :options="select.ownersOptions"
              value-field="id"
              text-field="name"
              :state="form.errors.owner_id ? !(form.errors.owner_id !== undefined) : null"
            ></b-form-select>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.owner_id"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>
      <hr>
      
      <h6 class="text-center">Pesquisar Cliente</h6>
      <br>
      <b-row>
        <b-col md="3">
          <b-form-select v-model="filterCustomer.attributeSearch" :options="filterAttributeOptionsCustomer"></b-form-select>
        </b-col>
        <b-col md="2">
          <b-button variant="danger" @click="cleanFilter()">Limpar</b-button>
        </b-col>
        <b-col md="6">
          <b-row>
            <b-col md="10">
              <b-form-input
                type="text"
                placeholder="Pesquisar"
                v-model="filterCustomer.keywords"
              ></b-form-input>
            </b-col>
            <b-col md="2">
              <b-button
                variant="success"
                @click="searchCustomers()"
                :disabled="(filterCustomer.keywords === '' || filterCustomer.attributeSearch === '')"
                ><i class="fa-solid fa-magnifying-glass"></i
              ></b-button>
            </b-col>
            <br />
          </b-row>
        </b-col>
      </b-row>
      <br />

      <b-row>
        <b-col v-if="loadingCustomerSelect">
          <div class="text-center">
            <b-spinner variant="secondary" class="m-5"></b-spinner>
          </div>
        </b-col>

        <b-col v-else>
          <b-form-group label="Cliente associado" label-for="input-customer">
            <b-form-select
              id="input-customer"
              v-model="form.inputs.customer_id"
              :options="select.customersOptions"
              value-field="id"
              text-field="name"
              :state="form.errors.customer_id ? !(form.errors.customer_id !== undefined) : null"
            ></b-form-select>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.customer_id"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="text-center" v-if="form.loading">
        <b-spinner variant="secondary" class="m-5"></b-spinner>
      </div>

      <b-row class="mt-5">
        <b-col class="d-flex justify-content-center">
          <b-button
            type="button"
            variant="danger"
            @click.prevent="close"
            :disabled="form.loading"
          >
            Cancelar <i class="fa-solid fa-xmark"></i>
          </b-button>
        </b-col>

        <b-col class="d-flex justify-content-center">
          <b-button
            type="submit"
            variant="success"
            @click.prevent="storeVehicle()"
            :disabled="form.loading"
          >
            Salvar <i class="fa-solid fa-floppy-disk"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import { yearModelList } from "../../utilities/yearModelList";
import api from "../../../api";

export default {
  name: "create-vehicle-component",

  props: {
    active: Boolean,
    token: String,
    close: { tye: Function },
  },

  mounted() {
    this.getAllGearBoxes();
  },

  created() {
    this.$emit("close");
  },

  data() {
    return {
      filterOwner: {
        perPage: 10,
        page: 1,
        nextPage: null,
        keywords: '',
        attributeSearch: '',
        filterByAttribute: false
      },

      filterCustomer: {
        perPage: 10,
        page: 1,
        nextPage: null,
        keywords: '',
        attributeSearch: '',
        filterByAttribute: false
      },

      form: {
        inputs: {},
        errors: {},
        loading: false,
      },

      filterAttributeOptionsOwner: [
        {value: null, text: 'Filtro'},
        {value: 'name', text: 'Nome'},
        {value: 'document', text: 'CPF/CPNJ'},
        {value: 'phone', text: 'Telefone'},
        {value: 'email', text: 'E-mail'}
      ],

      filterAttributeOptionsCustomer: [
        {value: null, text: 'Filtro'},
        {value: 'name', text: 'Nome'},
        {value: 'document', text: 'CPF/CPNJ'},
        {value: 'phone', text: 'Telefone'},
        {value: 'email', text: 'E-mail'}
      ],

      select: {
        yearModelOptions: yearModelList,
        gearBoxOptions: [],
        ownersOptions: [],
        customersOptions: [],
      },

      loadingOwnerSelect: false,
      loadingCustomerSelect: false,

    };
  },

  methods: {
    storeVehicle() {
      this.form.loading = true;
      const data = this.form.inputs;

      api.post("/vehicles", data, {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then(response => this.afterSuccessfulStore())
        .catch(errors => this.afterErrorStore(errors));
    },

    getAllGearBoxes() {
      api.get("/gearboxes/all", {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        },
      })
      .then(response => this.select.gearBoxOptions = response.data)
      .catch(errors => console.log(errors));
    },

    searchOwners() {
      this.loadingOwnerSelect = true;
      this.filterOwner.filterByAttribute = true;

      api.get("/owners", {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        },
        params: this.filterOwner
      })
      .then(response => {
        this.select.ownersOptions = response.data.data;
        this.loadingOwnerSelect = false;
      })
      .catch(errors => {
        console.log(errors);
        this.table.loadingOwnerSelect = false;
      });
    },

    searchCustomers() {
      this.loadingCustomerSelect = true;
      this.filterCustomer.filterByAttribute = true;

      api.get("/customers", {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        },
        params: this.filterCustomer
      })
        .then(response => {
          this.select.customersOptions = response.data.data;
          this.loadingCustomerSelect = false;
        })
        .catch(error => {
          console.log(error);
          this.loadingCustomerSelect = false;
        });
    },

    afterSuccessfulStore() {
      this.showSuccessMessage("Conluído! Veículo cadastrado com sucesso!");
      this.close();
    },

    afterErrorStore(errors) {
      this.form.loading = false;
      this.form.errors = errors.response.data.errors;
      this.showErrorMessage(
        "Ops! Ocorreu um erro ao cadastrar um novo veículo!"
      );
    },

    showSuccessMessage(message) {
      this.$toast.success(message);
    },

    showErrorMessage(message) {
      this.$toast.error(message);
    },

    cleanFilterOwner () {
      this.filterOwner.attributeSearch = '',
      this.filterOwner.filterByAttribute = false;
      this.filterOwner.keywords = '';
    },

    cleanFilterCustomer () {
      this.filterCustomer.attributeSearch = '',
      this.filterCustomer.filterByAttribute = false;
      this.filterCustomer.keywords = '';
    }
  },
};
</script>

<style scoped>
</style>