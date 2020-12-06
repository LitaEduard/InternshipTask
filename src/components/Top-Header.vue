<template>
  <div id="nav">
    <div v-if="loggedIn">

      <ul>
        <li><a  ><router-link to="/secret">Settings</router-link></a>
        <li><a  @click="signOut" ><router-link to="/">Logout</router-link></a></li>
        
      </ul>
    
      
    </div>
    <div v-else>
      <li><a class="active" ><router-link to="/login">Login</router-link></a></li>
    </div>

  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}




</style>