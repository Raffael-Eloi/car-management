<template>
  <div>
    <b-sidebar>
      <b-list-group>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>
    </b-sidebar>
    <!-- <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button> -->
    <!-- <b-collapse visible class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button size="sm">Toggle Inner Collapse</b-button>
      <b-collapse  class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse> -->
    <!-- <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Gerenciamento" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/200/200/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar> -->





    <!-- <b-card>
    <div>
      <b-button
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-controls="collapse-4"
        @click="visible = !visible"
      >
        Toggle Collapse
      </b-button>
      <b-collapse id="collapse-4" v-model="visible" class="mt-2">
        <b-card>I should start open!</b-card>
      </b-collapse>
    </div>
  </b-card> -->
  </div>
</template>

<script>
export default {
  name: 'sidebar-component',

  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>

</style>