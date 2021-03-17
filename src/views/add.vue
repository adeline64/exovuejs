<template>
  <div id="formulaire">
    <formulaire v-bind:utilisateur="utilisateur">
      <template v-slot:bouton>
        <b-button variant="success" v-on:click="submit">valider</b-button>
      </template>
    </formulaire>

    <!-- 1) on appel le formulaire ce trouvant dans component
    2) on lui passe comme paramètre le nom et le prenom qui sont
    déclaré dans data-->

      <br /> 
    <div v-if="afficherUtilisateur !=null">
    <!-- si afficherUtilisateur est différent de null -->
      <p>
        le dernier utilisateur enregistré est : {{ afficherUtilisateur.nom }} - {{ afficherUtilisateur.prenom }}
      </p>
    </div>
    <div v-else>
      <p>Aucun nouvel utilisateur</p>
    </div>
    <br>
    <b-button variant="success" v-on:click="pageUtilisateur">liste des utilisateurs</b-button>
  </div>
</template>

<script>
import formulaire from "./formulaire.vue";
//on importe le formulaire.vue et on lui donne le nom formulaire

export default {
  data() {
    return {
      utilisateur: {
        nom: "",
        prenom: "",
      },
    };
  },
  components: {
    formulaire,
    //on appel le import formulaire que l'on viens de déclarer
  },

  computed: {
    afficherUtilisateur() {

      if (this.$store.state.utilisateurs.length != 0) {
        //si la longueur du tableau utilisateurs est différent de 0

        return this.$store.state.utilisateurs[
          this.$store.state.utilisateurs.length - 1
        ];
        
        //on retourne le tableau utilisateurs avec comme
        // placement la longueur du tableau utilisateurs -1
        // et on demande le nom
      } else {
        return null;
        //on retourne null car il n'y a rien a afficher
      }
    },
  },
  methods: {
    submit() {
      console.log("nom : " + this.utilisateur.nom);
      console.log("prenom : " + this.utilisateur.prenom);

      let utilisateur = {
        nom: this.utilisateur.nom,
        prenom: this.utilisateur.prenom,
      };
      //on déclare une variable utilisateur qui contient le nom
      // et le prénom
      this.$store.commit(
        "CREATION_UTILISATEUR",
        // on appel la mutation
        utilisateur
        // et on lui donne le paramètre utilisateur qui contient nom
        // et prenom
      );
    },
    pageUtilisateur() {
      this.$router.push("/utilisateur");
      //lorsqu'on clique sur le bouton on est rediriger
      // grace à une route sur la page avec la liste des utilisateurs
    },
  },
};
</script>