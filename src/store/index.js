import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    utilisateurs: [

    ]
  },
  mutations: {
    CREATION_UTILISATEUR(state, utilisateur) {

      if (state.utilisateurs.length == 0) {
        // si la longueur du tableau est égal à 0
        let idUtilisateur = 1
        console.log("idUtilisateur est de : " + " " + idUtilisateur);
        // on déclare la variable idUtilisateur à 1
        utilisateur.id = idUtilisateur;
        console.log("utilisateur.id est de " + " " + utilisateur.id);
        //on prend l'objet utilisateur et on demande son id et on lui donne le nouvel id avec idutilisateur
      } else {
        let lastUtilisateur = state.utilisateurs[state.utilisateurs.length - 1]
        //le dernier utilisateur
        console.log("le dernier utilisateur est" + " " + lastUtilisateur.nom);

        let lastId = lastUtilisateur.id;
        //l'id du dernier utilisateur
        console.log("le dernier id est" + " " + lastId);

        let newId = ++lastId
        // nouvel id pour le nouvel utilisateur
        console.log("le nouvel id est" + " " + newId);

        utilisateur.id = newId;
        // on affecte a utilisateur.id le nouvel id avec newId
        console.log("l'id du nouvel utilisateur est" + " " + utilisateur.id);
      }

      state.utilisateurs.push(
        // on désire pousser un nouvel utilisateur dans le tableau
        // des utilisateurs
        utilisateur

        // pour cela on appel le nouvel utilisateur
      )
      console.log("nom" + " " + utilisateur.nom + " " + "prenom" + " " + utilisateur.prenom);
    },

    MODIFIER_UTILISATEUR(state, modifUtilisateur) {
      for (let i = 0; i < state.utilisateurs.length; i++) {
        console.log("liste des utilisateurs : " + " " + "nom : " + " " + state.utilisateurs[i].nom + " " + " prenom" + " " + state.utilisateurs[i].prenom + " " + " id :" + " " + state.utilisateurs[i].id);
        // je boucle dans le tableau pour avoir la liste des utilisateurs

        // je fais une condition pour que la position qui correspond à l'utilisateur
        // cherché soit la meme que celle envoyé via le formulaire

        if (state.utilisateurs[i].id == modifUtilisateur.id) {

          ///maintenant nous connaissons les emplacements du 
          // tableau, je dois faire une condition pour que 
          // les identifiants du tableau dans lequel je boucle
          // corresponde aux identifiants que je reçoit

          console.log("id de la position i du tableau" + " " + state.utilisateurs[i].id);
          console.log("id de l'objet modifutilisateur" + " " + modifUtilisateur.id);

          console.log("nom de l'utilisateur dans le tableau" + " " + state.utilisateurs[i].nom);
          console.log("nom dans l'objet modifutilisateur" + " " + modifUtilisateur.nom);

            state.utilisateurs[i].nom = modifUtilisateur.nom
            state.utilisateurs[i].prenom = modifUtilisateur.prenom

            console.log("nom de l'utilisateur dans le tableau : " + " " + state.utilisateurs[i].nom);
            console.log("nom dans l'objet modifutilisateur : " + " " + modifUtilisateur.nom);

              // je modifie l'utilisateur
            


        } else {
          console.log("impossible de modifier")
        }

      } //fin boucle for
    },

    SUPPRIMER_UTILISATEUR(state, suprUtilisateur) {

      for (let i = 0; i < state.utilisateurs.length; i++) {
        console.log("liste des utilisateurs" + " " + state.utilisateurs[i].nom + " " + state.utilisateurs[i].prenom);
        // je boucle dans le tableau pour avoir la liste des utilisateurs
        console.log("tableau des utilisateurs" + " " + state.utilisateurs);

        console.log("tableau des utilisateurs à la position i ou on demande l'id de cet position" + " " + state.utilisateurs[i].id);
        console.log(JSON.stringify("l'utilisateur à suprimer est" + " " + suprUtilisateur.nom));
        console.log("objet suprUtilisateur avec son id" + " " + suprUtilisateur.id);



        if (state.utilisateurs[i].id == suprUtilisateur.id) {
          ///maintenant nous connaissons les emplacements du 
          // tableau, je dois faire une condition pour que 
          // les identifiants du tableau dans lequel je boucle
          // corresponde aux identifiants que je reçoit

          let supression = state.utilisateurs.splice(i, 1)
          // je supprime l'utilisateur



          console.log("utilisateur à suprimer" + " " + supression);

        }

      }


    },
  },

  actions: {
  },

  modules: {
  }

})
