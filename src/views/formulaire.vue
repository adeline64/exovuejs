<template>
  <div id="formulaire">
    <h1>{{ title }}</h1>

    <b-form-group id="input-group-1" label="Nom" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="utilisateurLocal.nom"
        type="text"
        required
      >
      </b-form-input>
    </b-form-group>


    <b-form-group id="input-group-1" label="Prenom" label-for="input-1">
      <b-form-input
        id="input-2"
        v-model="utilisateurLocal.prenom"
        type="text"
        required
      >
      </b-form-input>
    </b-form-group>

    <slot name="bouton"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Merci de remplir le formulaire",
    },
    utilisateur: {
      type: Object,
      required: true,
    },
  },
  computed: {
  
    utilisateurLocal: {
      get: function () {
        return this.utilisateur;
      },
      set: function (newValueUtilisateur) {
        if (!newValueUtilisateur) {
          this.utilisateur = newValueUtilisateur;
        }
      },
    },
  },
};
</script>