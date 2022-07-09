<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Visualizar caixa de marchas</b-card-title>
    <b-form>
        <b-row>
          <b-col>
            <b-form-group label="Nome" label-for="input-name">
              <b-form-input id="input-name" type="text" v-model="form.inputs.name" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="CL" label-for="input-cl">
              <b-form-input id="input-cl" type="number" step="0.01" v-model="form.inputs.cl" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="CR" label-for="input-cr">
              <b-form-input id="input-cr" type="number" step="0.01" v-model="form.inputs.cr" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <!-- Gear: 1 to 4 -->
        <b-row>
          <b-col>
            <b-form-group label="1ª Marcha" label-for="input-gear-1">
              <b-form-input id="input-gear-1" type="number" step="0.01" v-model="form.inputs.gear_1" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="2ª Marcha" label-for="input-gear-2">
              <b-form-input id="input-gear-2" type="number" step="0.01" v-model="form.inputs.gear_2" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="3ª Marcha" label-for="input-gear-3">
              <b-form-input id="input-gear-3" type="number" step="0.01" v-model="form.inputs.gear_3" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="4ª Marcha" label-for="input-gear-4">
              <b-form-input id="input-gear-4" type="number" step="0.01" v-model="form.inputs.gear_4" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <!-- Gear: 5 to 8 -->
        <b-row>
          <b-col>
            <b-form-group label="5ª Marcha" label-for="input-gear-4">
              <b-form-input id="input-gear-4" type="number" step="0.01" v-model="form.inputs.gear_5" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="6ª Marcha" label-for="input-gear-6">
              <b-form-input id="input-gear-6" type="number" step="0.01" v-model="form.inputs.gear_6" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="7ª Marcha" label-for="input-gear-7">
              <b-form-input id="input-gear-7" type="number" step="0.01" v-model="form.inputs.gear_7" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="8ª Marcha" label-for="input-gear-8">
              <b-form-input id="input-gear-8" type="number" step="0.01" v-model="form.inputs.gear_8" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <!-- Gear: 9 to 12 -->
        <b-row>
          <b-col>
            <b-form-group label="9ª Marcha" label-for="input-gear-9">
              <b-form-input id="input-gear-9" type="number" step="0.01" v-model="form.inputs.gear_9" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="10ª Marcha" label-for="input-gear-10">
              <b-form-input id="input-gear-10" type="number" step="0.01" v-model="form.inputs.gear_10" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="11ª Marcha" label-for="input-gear-11">
              <b-form-input id="input-gear-11" type="number" step="0.01" v-model="form.inputs.gear_11" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="12ª Marcha" label-for="input-gear-12">
              <b-form-input id="input-gear-12" type="number" step="0.01" v-model="form.inputs.gear_12" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <!-- Gear: 13 to 16 -->
        <b-row>
          <b-col>
            <b-form-group label="13ª Marcha" label-for="input-gear-13">
              <b-form-input id="input-gear-13" type="number" step="0.01" v-model="form.inputs.gear_13" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="14ª Marcha" label-for="input-gear-14">
              <b-form-input id="input-gear-14" type="number" step="0.01" v-model="form.inputs.gear_14" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="15ª Marcha" label-for="input-gear-15">
              <b-form-input id="input-gear-15" type="number" step="0.01" v-model="form.inputs.gear_15" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="16ª Marcha" label-for="input-gear-16">
              <b-form-input id="input-gear-16" type="number" step="0.01" v-model="form.inputs.gear_16" disabled>
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <div class="text-center" v-if="form.loading">
          <b-spinner variant="secondary" class="m-5"></b-spinner>
        </div>
    
        <b-row class="mt-5">
          <b-col class="d-flex justify-content-center">
            <b-button type="button" variant="danger" @click.prevent="close" :disabled="form.loading">
              Fechar <i class="fa-solid fa-xmark"></i>
            </b-button>
          </b-col>
        </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default { 
  name: 'show-gearbox-component',

  props: {
    active: Boolean,
    gearbox: Object,
    close: { tye: Function}
  },

  created() {
    this.$emit('close');
  },

  data() {
    return {
      form: {
        inputs: this.gearbox,
        errors: {},
        loading: false
      },
    }
  },
}
</script>

<style scoped>
.has-error-custom {
  border-color: red;
}
</style>