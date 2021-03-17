<template>
  <div id="app">
    <p>
      <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand>NAVBAR</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text>
              <router-link to="/add">Ajouter</router-link>
            </b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </p>
  </div>
</template>

<script>
</script>


<style >
</style>
