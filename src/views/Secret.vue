<template>
  <div>
    <div class="formular-box">
      <h1>Formular introducere animale:</h1>
      <!-- input add in database -->
      <div class="edit-card"> Rasa:    <input type="text" v-model='rasa' class="input" @keyup.enter='addAnimal' placeholder="Introduceti rasa animalului"> </div>
      <div class="edit-card"> Locatie: <input type="text" v-model='locatie' class="input" @keyup.enter='addAnimal' placeholder="Introduceti sexul animalului"></div>
      <div class="edit-card"> Sex:     <input type="text" v-model='sex' class="input" @keyup.enter='addAnimal' placeholder="Introduceti locatie animalului"></div>
      <div class="edit-card"> Varsta:  <input type="text" v-model='varsta' class="input" @keyup.enter='addAnimal' placeholder=" Introduceti varsta animalului"></div>
      <!--  -->
    </div>
    <div style="border:solid ; width: 80%; margin: auto; "></div>
    <h1 style="margin-top:45px">Baza de date</h1>
    <div class="elementsbox">
      <div class="edit-container" v-for="(animalName,key) in animals" :key='key'>
        <h1>Editare date id: {{key}}</h1>
        <div class="edit-card">
          <div class="edit-text">Rasa: {{animalName.rasa}}</div>
          <input type="text" v-model="editRasa[key]" class="input" @keyup.enter="editAnimal(key)" placeholder="Modificati rasa animalului">
        </div>
        
        <div class="edit-card">
          <div class="edit-text">Locatie: {{animalName.locatie}}</div>
          <input type="text" v-model="editLocatie[key]" class="input" @keyup.enter="editAnimal(key)" placeholder="Modificati sexul animalului">
        </div>
        
        <div class="edit-card">
          <div class="edit-text">Sex: {{animalName.sex}}</div>
          <input type="text" v-model="editSex[key]" class="input" @keyup.enter="editAnimal(key)" placeholder="Modificati locatia animalului">
        </div>
        
        <div class="edit-card">
          <div class="edit-text">Varsta: {{animalName.varsta}}</div>
          <input type="text" v-model="editVarsta[key]" class="input" @keyup.enter="editAnimal(key)" placeholder="Modificati varsta animalului">
        </div>
      
        <button class="buton-edit" @click="editAnimal(key)"> Edit</button>
        <button class="buton-delete" @click="deleteAnimal(key)" > Delete</button>
     
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/";
import "firebase/auth";

export default {
  data() {
    return {
      secrets: "",
      animal: "",
      rasa:"",
      locatie: "",
      sex:"",
      varsta:"",
      animals:{},
      editRasa:[],
      editLocatie:[],
      editSex:[],
      editVarsta:[],
    
      
    }
  },
  mounted() {
    this.getSecrets();
  },
  methods: {
    addAnimal(){
      const animal = {
        rasa:this.rasa,
        locatie:this.locatie,
        sex:this.sex,
        varsta:this.varsta,
      }
      firebase.database().ref("animals").push(animal) 
      .then((data)=>{console.log(data)})
      .catch((error)=>{console.log(error)})
    },

    editAnimal(key){
      firebase.database().ref("animals/"+key).set({
    
        rasa:this.editRasa[key],
        locatie:this.editLocatie[key],
        sex:this.editSex[key],
        varsta:this.editVarsta[key],
      })
    },
      
  
    
    deleteAnimal(key){
      firebase.database().ref("animals/"+key).remove();
    },

    async getSecrets() {
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      this.secrets = await this.$axios.get(
        "http://localhost:8080/",
        config
      );
      this.secrets = this.secrets.data;
    }
  },
  created(){
    firebase.database().ref('animals').on("value",(snapshot)=>{
    
      this.animals=snapshot.val();    
    
    });
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}

.buton-edit{
  display: row;
  height: 70px;
  width: 100px;
  font-size: 30px;
  border-radius: 8px;
  background-color:  #2a692c;

}

.buton-delete{
  display: row;
  height: 70px;
  width: 100px;
  font-size: 30px;
  border-radius: 8px;
  background-color: #9b4a44;

}
.elementsbox{
  grid-template-columns: auto ;
  
 
}


.input {
  border-radius: 8px;
  width: 80wh;
  padding: 17px;
  margin: 10px;
  font-size: 15px;
}

.edit-text {
  width: 10wh;
}

.edit-card{
  text-align: left;
  align-items: center;
  padding: 5px;
  display: grid;
  grid-template-columns: auto auto ;
  font-size: 30px;
}

.edit-container {
  align-content: center;
  margin-bottom: 20px;
  padding: 15px;
  margin-top: 5vh;
  margin-left: 45vh;
  margin-right: 45vh;
  font-size: 100%;  
  background: #474350;
  border: 2px solid  black;
}

.formular-box {
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 15px;
  margin-left: 45vh;
  margin-right: 45vh;
  margin-bottom: 50px;
  font-size: 100%;  
  background: cadetblue;
  border: 2px solid  black;
}

</style>