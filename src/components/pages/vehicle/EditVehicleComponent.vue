<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Editar veículo</b-card-title>
    <b-form @submit.prevent="updateVehicle()">
      <b-row>
        <b-col>
          <b-form-group label="Marca" label-for="input-brand">
            <b-form-input
              id="input-brand"
              type="text"
              v-model="form.inputs.brand"
              placeholder="Digite a marca"
              :class="form.errors.brand ? 'has-error-custom' : ''"
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
              :class="form.errors.model ? 'has-error-custom' : ''"
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
              :class="form.errors.license_plate ? 'has-error-custom' : ''"
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
              :class="form.errors.year_model ? 'has-error-custom' : ''"
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
              :class="form.errors.color ? 'has-error-custom' : ''"
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
              :class="form.errors.axle_quantity ? 'has-error-custom' : ''"
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
              :class="form.errors.torque ? 'has-error-custom' : ''"
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

        <b-col v-if="select.gearBoxOptions.length === 0">
          <div class="text-center">
            <b-spinner variant="secondary" class="m-5"></b-spinner>
          </div>
        </b-col>

        <b-col v-else>
          <b-form-group label="Caixa de marchas" label-for="input-state">
            <b-form-select
              v-model="form.inputs.gearbox_id"
              :options="select.gearBoxOptions"
              value-field="id"
              text-field="name"
              :class="form.errors.gearbox_id ? 'has-error-custom' : ''"
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
              :class="form.errors.relation_first_gear ? 'has-error-custom' : ''"
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
              :class="form.errors.axle_differential ? 'has-error-custom' : ''"
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
            @click.prevent="updateVehicle()"
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
  name: "edit-vehicle-component",

  props: {
    active: Boolean,
    vehicle: Object,
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
      form: {
        inputs: this.vehicle,
        errors: {},
        loading: false,
      },

      select: {
        yearModelOptions: yearModelList,
        gearBoxOptions: [],
      },
    };
  },

  methods: {
    updateVehicle() {
      this.form.loading = true;
      const data = this.form.inputs;

      api.put(`/vehicles/${this.form.inputs.id}`, data, {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then((response) => this.afterSuccessfulUpdate())
        .catch((errors) => this.afterErrorUpdate(errors));
    },

    getAllGearBoxes() {
      api.get("/gearboxes", {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then((response) => (this.select.gearBoxOptions = response.data))
        .catch((errors) => console.log(errors));
    },

    afterSuccessfulUpdate() {
      this.showSuccessMessage("Conluído! Veículo atualizado com sucesso!");
      this.close();
    },

    afterErrorUpdate(errors) {
      this.form.loading = false;
      this.form.errors = errors.response.data.errors;
      this.showErrorMessage("Ops! Ocorreu um erro ao editar o veículo!");
    },

    showSuccessMessage(message) {
      this.$toast.success(message);
    },

    showErrorMessage(message) {
      this.$toast.error(message);
    },
  },
};
</script>

<style scoped>
.has-error-custom {
  border-color: red;
}
</style>