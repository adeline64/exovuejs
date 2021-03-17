<template>
  <div id="utilisateur">
    <h1>Nos utilisateurs</h1>

    <p>La liste de nos différents utilisateurs</p>

    <b-table
      responsive="true"
      striped
      hover
      :items="utilisateurs"
      :fields="fields"
    >
      <template #cell(Action)="data">
      <!-- {{data.item}} -->
        <b-button
          variant="danger"
          size="sm"
          v-on:click="modifier(data.item.id)"
          class="mr-2"
        >
          Modifier
        </b-button>
        <b-button
          variant="primary"
          size="sm"
          v-on:click="supprimer(data.item.id)"
          class="mr-2"
        >
          Supprimer
        </b-button>
      </template>
    </b-table>

    <b-button variant="success" v-on:click="add"
      >Ajouter un utilisateur</b-button
    >
    <!--on clique sur le bouton add pour pouvoir retourner
    sur la page d'ajout d'utilisateur-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "nom",
          label: "NOM",
        },
        {
          key: "prenom",
          label: "PRENOM",
        },
        {
          key: "Action",
          label: "ACTION",
        },
      ],
    };
  },
  computed: {
    utilisateurs() {

      return this.$store.state.utilisateurs;
    },
  },
  methods: {
    modifier(id) {
      console.log("id" + " " + id);
      let route = this.$router.push({ name: "rename", params: { userId : id } });
      console.log("la route" + " " + route);
    },

    supprimer(id) {
      let suprUtilisateur;
      for (let i = 0; i < this.utilisateurs.length; i++) {
        //on boucle dans le tableau pour avoir la liste de nos utilisateur

        let utilisateur = this.utilisateurs[i];
        console.log("tableau utilisateurs avec position i" + " " + utilisateur);
        // on déclare l'utilisateur et on lui assigne l'utilisateur courant du tableau

        if (utilisateur.id == id) {
          // est ce que l'id de l'utilisateur est égal a l'id qu'on envoie (qu'on veut supprimer)
          suprUtilisateur = utilisateur;
          console.log(
            "supression de l'utilisateur choisi" + " " + suprUtilisateur
          );
        }
      }
      this.$store.commit(
        "SUPPRIMER_UTILISATEUR",

        suprUtilisateur
      );
      // on appel la mutation SUPPRIMER_UTILISATEUR
      // et on passe suprUtilisateur comme paramètre

      console.log(this.utilisateurs);
      // pour appeler une variable on utilise this.
    },

    add() {
      this.$router.push("/add");
    },
  },
};
</script>