<template>
  <div class="formulaire">
    <!-- <h1>{{title}}</h1>
    
   nouveau nom : <input type="text" v-model="nom" />
   nouveau prenom : <input type="text" v-model="prenom" />
  <button v-on:click="modifier_post">valider</button> -->

    <!-- <formulaire v-bind:nom="nomLocal" v-bind:prenom="prenomLocal">
   -->
    <formulaire v-bind:utilisateur="utilisateur">
      <template v-slot:bouton>
        <b-button variant="success" v-on:click="modifier"
          >valider</b-button
        >
      </template>
    </formulaire>
  </div>
</template>

<script>
import formulaire from "./formulaire.vue";
export default {
  components: {
    formulaire,
    //on appel le import formulaire que l'on viens de déclarer
  },
  // props:{
  //   title:{
  //     type:String,
  //     default:"Modifier un utilisateur",
  //   },
  //   nom : {
  //     type:String,
  //     required:true,
  //   },
  //   prenom:{
  //     type:String,
  //     required:true
  //   },
  // },
  data() {
    return {
      // nom: "",
      // prenom: "",
      utilisateur: {
        nom: "",
        prenom: "",
      },
    };
  },
  computed: {
    // nomLocal:{
    //   get:function(){
    //     return this.nom
    //   },
    //   set:function(newvalueNom){
    //     this.nom = newvalueNom
    //     // on dit au nom de prendre la nouvelle valeur du nom
    //   },
    // },
    // prenomLocal:{
    //   get:function(){
    //     return this.prenom
    //   },
    //   set:function(newvaluePrenom){
    //     this.prenom = newvaluePrenom
    //   }
    // },
    utilisateurs() {
      // return this.$store.state.nom + this.$store.state.prenom
      //  return this.$store.state.utilisateurs[this.$store.state.utilisateurs]

      return this.$store.state.utilisateurs;
    },
  },
  methods: {
    modifier() {
      
      let modifUtilisateur = {
        nom: this.utilisateur.nom,
        prenom: this.utilisateur.prenom,
        id: this.utilisateur.id
      };
      console.log("id de l'objet modifutilisateur" + " " +modifUtilisateur.id);
      this.$store.commit(
        "MODIFIER_UTILISATEUR",

        modifUtilisateur
      );

      this.$router.push("/utilisateur");
    },
  },
  mounted: function () {
    //cette fonction se charge des le début
    let identifiant = this.$route.params.userId;
    // on récupère l'identifiant par la route
    console.log("identifiant" + " " + identifiant);
    for (let i = 0; i < this.utilisateurs.length; i++) {
      if (this.utilisateurs[i].id == identifiant) {
        console.log("tableau utilisateurs à la position i ou l'on demande l'id" + " " +this.utilisateurs[i].id);
        console.log("identifiant" + " " + identifiant);
        this.utilisateur.nom = this.utilisateurs[i].nom;
        console.log("nom" + " " +this.utilisateur.nom);
        this.utilisateur.prenom = this.utilisateurs[i].prenom;
        console.log("prenom" + " " +this.utilisateur.prenom);
        this.utilisateur.id = this.utilisateurs[i].id
        console.log("id" + " " +this.utilisateur.id);
      }
    }
  },
};
</script>