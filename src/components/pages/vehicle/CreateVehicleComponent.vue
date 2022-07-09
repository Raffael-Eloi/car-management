<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Cadastro de veículo</b-card-title>
    <b-form @submit.prevent="storeVehicle()">
        <b-row>
          <b-col>
            <b-form-group label="Marca" label-for="input-brand">
              <b-form-input id="input-brand" type="text" v-model="form.inputs.brand" placeholder="Digite a marca">
              </b-form-input>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.brand" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Modelo" label-for="input-model">
              <b-form-input id="input-model" type="text" v-model="form.inputs.model" placeholder="Digite o modelo"></b-form-input>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.model" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Placa" label-for="input-license-plate">
              <b-form-input id="input-license-plate" type="text" v-model="form.inputs.license_plate" placeholder="Digite a placa"></b-form-input>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.license_plate" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Ano/Modelo" label-for="input-year-model">
              <b-form-select id="input-year-model" v-model="form.inputs.year_model" :options="select.yearModelOptions"></b-form-select>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.year_model" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Cor" label-for="input-color">
              <b-form-input id="input-color" type="text" v-model="form.inputs.color" placeholder="Digite a cor"></b-form-input>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.color" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Quantidade de eixos" label-for="input-axle-quantity">
              <b-form-input id="input-axle-quantity" type="number" v-model="form.inputs.axle_quantity" placeholder="Digite a quantidade de eixos">
              </b-form-input>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.axle_quantity" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group label="Torque" label-for="input-torque">
              <b-form-input id="input-torque" type="number" v-model="form.inputs.torque" placeholder="Digite a cidade">
              </b-form-input>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.torque" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
          
          <b-col>
            <b-form-group label="Caixa de marchas" label-for="input-state">
              <b-form-select v-model="form.inputs.gearbox_id" :options="select.gearBoxOptions" value-field="id" text-field="name"></b-form-select>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.gearbox_id" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Relação 1ª Marcha" label-for="input-relation-first-gear">
              <b-form-input id="input-relation-first-gear" type="number" step="0.01" v-model="form.inputs.relation_first_gear" placeholder="Digite a relação">
              </b-form-input>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.relation_first_gear" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Relação diferencial" label-for="input-axle_differential">
              <b-form-input id="input-axle_differential" type="number" step="0.01" v-model="form.inputs.axle_differential" placeholder="Digite a relação diferencial"></b-form-input>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.axle_differential" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
        </b-row>

        <div class="text-center" v-if="form.loading">
          <b-spinner variant="secondary" class="m-5"></b-spinner>
        </div>
    
        <b-row class="mt-5">
          <b-col class="d-flex justify-content-center">
            <b-button type="button" variant="danger" @click.prevent="close" :disabled="form.loading">
              Cancelar <i class="fa-solid fa-xmark"></i>
            </b-button>
          </b-col>

          <b-col class="d-flex justify-content-center">
            <b-button type="submit" variant="success" @click.prevent="storeVehicle()" :disabled="form.loading">
              Salvar <i class="fa-solid fa-floppy-disk"></i>
            </b-button>
          </b-col>
        </b-row>
    </b-form>
  </b-card>
</template>

<script>
import { yearModelList } from '../../utilities/yearModelList';
import api from '../../../api';

export default { 
  name: 'create-vehicle-component',

  props: {
    active: Boolean,
    close: { tye: Function}
  },

  mounted() {
    this.getAllGearBoxes();
  },

  created() {
    this.$emit('close');
  },

  data() {
    return {
      form: {
        inputs: {},
        errors: {},
        loading: false
      },

      select: {
        yearModelOptions: yearModelList,
        gearBoxOptions: []
      }
    }
  },

  methods: {
    storeVehicle() {
      this.form.loading = true;
      const data = this.form.inputs;

      api.post('/vehicles', data)
      .then(response => this.afterSuccessfulStore())
      .catch(errors => this.afterErrorStore(errors))
    },

    getAllGearBoxes() {
      api.get('/gearboxes')
      .then(response => this.select.gearBoxOptions = response.data)
      .catch(errors => console.log(errors))
    },

    afterSuccessfulStore () {
      this.showSuccessMessage("Conluído! Veículo cadastrado com sucesso!");
      this.close();
    },

    afterErrorStore (errors) {
      console.log('errors', errors.response)
      this.form.loading = false;
      this.form.errors = errors.response.data.errors;
      this.showErrorMessage("Ops! Ocorreu um erro ao cadastrar um novo veículo!")
    },

    showSuccessMessage(message) {
      this.$toast.success(message);
    },

    showErrorMessage (message) {
      this.$toast.error(message);
    },
  }

  
}
</script>

<style scoped>

</style>