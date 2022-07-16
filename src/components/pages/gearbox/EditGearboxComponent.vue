<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center"
      >Cadastro de caixa de marchas</b-card-title
    >
    <b-form @submit.prevent="updateGearbox()">
      <b-row>
        <b-col>
          <b-form-group label="Nome" label-for="input-name">
            <b-form-input
              id="input-name"
              type="text"
              v-model="form.inputs.name"
              placeholder="Digite o nome da caixa de marcha"
              :state="form.errors.name ? !(form.errors.name !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.name"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="CL" label-for="input-cl">
            <b-form-input
              id="input-cl"
              type="number"
              step="0.01"
              v-model="form.inputs.cl"
              placeholder="Digite o CL"
              :state="form.errors.cl ? !(form.errors.cl !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.cl"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="CR" label-for="input-cr">
            <b-form-input
              id="input-cr"
              type="number"
              step="0.01"
              v-model="form.inputs.cr"
              placeholder="Digite o CR"
              :state="form.errors.cr ? !(form.errors.cr !== undefined) : null"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.cr"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Gear: 1 to 4 -->
      <b-row>
        <b-col>
          <b-form-group label="1ª Marcha" label-for="input-gear-1">
            <b-form-input
              id="input-gear-1"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_1"
              placeholder="Digite a marcha"
              :state="form.errors.gear_1 ? !(form.errors.gear_1 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_1"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="2ª Marcha" label-for="input-gear-2">
            <b-form-input
              id="input-gear-2"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_2"
              placeholder="Digite a marcha"
              :state="form.errors.gear_2 ? !(form.errors.gear_2 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_2"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="3ª Marcha" label-for="input-gear-3">
            <b-form-input
              id="input-gear-3"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_3"
              placeholder="Digite a marcha"
              :state="form.errors.gear_3 ? !(form.errors.gear_3 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_3"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="4ª Marcha" label-for="input-gear-4">
            <b-form-input
              id="input-gear-4"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_4"
              placeholder="Digite a marcha"
              :state="form.errors.gear_4 ? !(form.errors.gear_4 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_4"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Gear: 5 to 8 -->
      <b-row>
        <b-col>
          <b-form-group label="5ª Marcha" label-for="input-gear-5">
            <b-form-input
              id="input-gear-5"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_5"
              placeholder="Digite a marcha"
              :state="form.errors.gear_5 ? !(form.errors.gear_5 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_5"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="6ª Marcha" label-for="input-gear-6">
            <b-form-input
              id="input-gear-6"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_6"
              placeholder="Digite a marcha"
              :state="form.errors.gear_6 ? !(form.errors.gear_6 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_6"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="7ª Marcha" label-for="input-gear-7">
            <b-form-input
              id="input-gear-7"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_7"
              placeholder="Digite a marcha"
              :state="form.errors.gear_7 ? !(form.errors.gear_7 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_7"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="8ª Marcha" label-for="input-gear-8">
            <b-form-input
              id="input-gear-8"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_8"
              placeholder="Digite a marcha"
              :state="form.errors.gear_8 ? !(form.errors.gear_8 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_8"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Gear: 9 to 12 -->
      <b-row>
        <b-col>
          <b-form-group label="9ª Marcha" label-for="input-gear-9">
            <b-form-input
              id="input-gear-9"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_9"
              placeholder="Digite a marcha"
              :state="form.errors.gear_9 ? !(form.errors.gear_9 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_9"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="10ª Marcha" label-for="input-gear-10">
            <b-form-input
              id="input-gear-10"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_10"
              placeholder="Digite a marcha"
              :state="form.errors.gear_10 ? !(form.errors.gear_10 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_10"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="11ª Marcha" label-for="input-gear-11">
            <b-form-input
              id="input-gear-11"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_11"
              placeholder="Digite a marcha"
              :state="form.errors.gear_11 ? !(form.errors.gear_11 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_11"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="12ª Marcha" label-for="input-gear-12">
            <b-form-input
              id="input-gear-12"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_12"
              placeholder="Digite a marcha"
              :state="form.errors.gear_12 ? !(form.errors.gear_12 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_12"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Gear: 13 to 16 -->
      <b-row>
        <b-col>
          <b-form-group label="13ª Marcha" label-for="input-gear-13">
            <b-form-input
              id="input-gear-13"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_13"
              placeholder="Digite a marcha"
              :state="form.errors.gear_13 ? !(form.errors.gear_13 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_13"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="14ª Marcha" label-for="input-gear-14">
            <b-form-input
              id="input-gear-14"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_14"
              placeholder="Digite a marcha"
              :state="form.errors.gear_14 ? !(form.errors.gear_14 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_14"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="15ª Marcha" label-for="input-gear-15">
            <b-form-input
              id="input-gear-15"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_15"
              placeholder="Digite a marcha"
              :state="form.errors.gear_15 ? !(form.errors.gear_15 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_15"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="16ª Marcha" label-for="input-gear-16">
            <b-form-input
              id="input-gear-16"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_16"
              placeholder="Digite a marcha"
              :state="form.errors.gear_16 ? !(form.errors.gear_16 !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.gear_16"
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
            @click.prevent="updateGearbox()"
            :disabled="form.loading"
          >
            salvar <i class="fa-solid fa-floppy-disk"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import api from "../../../api";

export default {
  name: "edit-gearbox-component",

  props: {
    active: Boolean,
    gearbox: Object,
    token: String,
    close: { tye: Function },
  },

  created() {
    this.$emit("close");
  },

  data() {
    return {
      form: {
        inputs: this.gearbox,
        errors: {},
        loading: false,
      },
    };
  },

  methods: {
    cleanForm() {
      this.form.inputs = {};
      this.form.errors = {};
      this.form.loading = false;
    },

    updateGearbox() {
      this.form.loading = true;
      const data = this.form.inputs;

      api.put(`/gearboxes/${this.form.inputs.id}`, data, {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then(response => this.afterSuccessfulUpdate())
        .catch((error) => this.afterErrorUpdate(error));
    },

    afterSuccessfulUpdate() {
      this.showSuccessMessage(
        "Conluído! Caixa de marcha atualizada com sucesso!"
      );
      this.close();
    },

    afterErrorUpdate(error) {
      this.form.loading = false;
      this.form.errors = error.response.data.errors;
      this.showErrorMessage(
        "Ops! Ocorreu um erro ao editar a caixa de marcha!"
      );
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
</style>