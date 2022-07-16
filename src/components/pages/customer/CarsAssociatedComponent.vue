<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Visualizar veículos associados</b-card-title>
    <b-form>
      <b-row>
        <b-col>
          <b-form-group label="Nome" label-for="input-name">
            <b-form-input
              id="input-name"
              type="text"
              v-model="form.inputs.name"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="CPF/CPNJ" label-for="input-document">
            <b-form-input
              id="input-document"
              type="text"
              v-model="form.inputs.document"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mt-5" v-if="form.inputs.vehicles.length > 0">
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
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="(vehicle, index) in form.inputs.vehicles" :key="index">
              <b-td class="text-center">{{ vehicle.brand }}</b-td>
              <b-td class="text-center">{{ vehicle.model }}</b-td>
              <b-td class="text-center">{{ vehicle.license_plate }}</b-td>
              <b-td class="text-center">{{ vehicle.year_model }}</b-td>
              <b-td class="text-center">{{ vehicle.color }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-row>
      
      <b-row class="mt-5" v-else>
        <h5 class="text-center text-secondary">Nenhum veículo associado.</h5>
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
            Fechar <i class="fa-solid fa-xmark"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default {
  name: "cars-associated-component",

  props: {
    active: Boolean,
    customer: Object,
    close: { tye: Function },
  },

  created() {
    this.$emit("close");
  },

  data() {
    return {
      form: {
        inputs: this.customer,
        errors: {},
        loading: false,
      },
    };
  },
};
</script>

<style scoped>
</style>