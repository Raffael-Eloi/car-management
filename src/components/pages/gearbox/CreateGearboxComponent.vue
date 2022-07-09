<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center"
      >Cadastro de caixa de marchas</b-card-title
    >
    <b-form @submit.prevent="storeGearBox()">
      <b-row>
        <b-col>
          <b-form-group label="Nome" label-for="input-name">
            <b-form-input
              id="input-name"
              type="text"
              v-model="form.inputs.name"
              placeholder="Digite o nome da caixa de marcha"
              :class="form.errors.name ? 'has-error-custom' : ''"
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
              :class="form.errors.cl ? 'has-error-custom' : ''"
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
              :class="form.errors.cr ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_1 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_2 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_3 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_4 ? 'has-error-custom' : ''"
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
          <b-form-group label="5ª Marcha" label-for="input-gear-4">
            <b-form-input
              id="input-gear-4"
              type="number"
              step="0.01"
              v-model="form.inputs.gear_5"
              placeholder="Digite a marcha"
              :class="form.errors.gear_5 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_6 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_7 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_8 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_9 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_10 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_11 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_12 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_13 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_14 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_15 ? 'has-error-custom' : ''"
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
              :class="form.errors.gear_16 ? 'has-error-custom' : ''"
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
            @click.prevent="storeGearBox()"
            :disabled="form.loading"
          >
            Cadastrar <i class="fa-solid fa-floppy-disk"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import api from "../../../api";

export default {
  name: "create-gearbox-component",

  props: {
    active: Boolean,
    close: { tye: Function },
  },

  mounted() {
    this.cleanForm();
  },

  created() {
    this.$emit("close");
  },

  data() {
    return {
      form: {
        inputs: {},
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

    storeGearBox() {
      this.form.loading = true;
      const data = this.form.inputs;

      api.post("/gearboxes", data)
        .then(this.afterSuccessfulStore())
        .catch((error) => this.afterErrorStore(error));
    },

    afterSuccessfulStore() {
      this.showSuccessMessage(
        "Conluído! Caixa de marcha cadastrada com sucesso!"
      );
      this.close();
    },

    afterErrorStore(error) {
      this.form.loading = false;
      this.form.errors = error.response.data.errors;
      this.showErrorMessage(
        "Ops! Ocorreu um erro ao cadastrar uma nova caixa de marcha!"
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
.has-error-custom {
  border-color: red;
}
</style>