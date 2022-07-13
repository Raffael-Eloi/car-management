<template>
  <aside style="height: 100vh" class="bg-dark bg-gradient">
    <b-list-group class="p-2">
      <h5 class="text-light text-center mb-3"><i class="fa-solid fa-bars"></i> Menu de opções</h5>

      <router-link :to="{ name: 'user' }">
        <b-list-group-item class="list-item-custom">
          <i class="fa-solid fa-user ms-5"></i> Usuários
        </b-list-group-item>
      </router-link>

      <router-link :to="{ name: 'customer' }">
        <b-list-group-item class="list-item-custom">
          <i class="fa-solid fa-users ms-5"></i> Clientes
        </b-list-group-item>
      </router-link>
      
      <router-link :to="{ name: 'owner' }">
        <b-list-group-item class="list-item-custom">
          <i class="fa-solid fa-address-card ms-5"></i> Proprietários
        </b-list-group-item>
      </router-link>

      <router-link :to="{ name: 'vehicle' }">
        <b-list-group-item class="list-item-custom">
          <i class="fa-solid fa-car ms-5"></i> Veículos
        </b-list-group-item>
      </router-link>

      <router-link :to="{ name: 'gearbox' }">
        <b-list-group-item class="list-item-custom">
          <i class="fa-solid fa-gears ms-5"></i> Caixa de marchas
        </b-list-group-item>
      </router-link>
    </b-list-group>
  </aside>
</template>

<script>
export default {
  name: "sidebar-component",

  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a:active {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

.list-item-custom {
  transition: 400ms;
}

.list-item-custom:hover {
  background-color: #198754;
}
</style>