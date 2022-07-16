<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Visualizar veículo</b-card-title>
    <b-form>
      <b-row>
        <b-col>
          <b-form-group label="Marca" label-for="input-brand">
            <b-form-input
              id="input-brand"
              type="text"
              disabled
              v-model="form.inputs.brand"
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Modelo" label-for="input-model">
            <b-form-input
              id="input-model"
              type="text"
              disabled
              v-model="form.inputs.model"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Placa" label-for="input-license-plate">
            <b-form-input
              id="input-license-plate"
              type="text"
              disabled
              v-model="form.inputs.license_plate"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Ano/Modelo" label-for="input-state">
            <b-form-input
              disabled
              v-model="form.inputs.year_model"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Cor" label-for="input-color">
            <b-form-input
              id="input-color"
              type="text"
              disabled
              v-model="form.inputs.color"
            ></b-form-input>
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
              disabled
              v-model="form.inputs.axle_quantity"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Torque" label-for="input-torque">
            <b-form-input
              id="input-torque"
              type="number"
              disabled
              v-model="form.inputs.torque"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      
        <b-col>
          <b-form-group label="Caixa de marchas" label-for="input-state">
            <b-form-input
              v-if="(form.inputs.gearbox && form.inputs.gearbox.name)"
              type="text"
              disabled
              v-model="form.inputs.gearbox.name"
            ></b-form-input>
            <b-form-input
              v-else
              disabled
              v-model="form.inputs.gearbox"
            ></b-form-input>
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
              disabled
              v-model="form.inputs.relation_first_gear"
            >
            </b-form-input>
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
              disabled
              v-model="form.inputs.axle_differential"
            ></b-form-input>
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
              disabled
            >
            </b-form-input>
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
              disabled
            ></b-form-input>
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
              disabled
            >
            </b-form-input>
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
              disabled
            ></b-form-input>
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
              disabled
            >
            </b-form-input>
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
              disabled
            >
            </b-form-input>
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
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Proprietário" label-for="input-owner">
            <b-form-input
              type="text"
              id="input-owner"
              v-model="form.inputs.owner.name"
              disabled
            >
            </b-form-input>
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
            Fechar <i class="fa-solid fa-xmark"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default {
  name: "show-vehicle-component",

  props: {
    active: Boolean,
    vehicle: Object,
    close: { tye: Function },
  },

  created() {
    this.$emit("close");
  },

  data() {
    return {
      form: {
        inputs: this.vehicle,
        errors: {},
        loading: false,
      },

      select: {
        gearBoxOptions: [],
      },
    };
  },
};
</script>

<style scoped>
</style>