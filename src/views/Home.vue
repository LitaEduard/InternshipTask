<template>
  <div >
    <div class="search_animals"> <input style="width: 80%; height: 30px; font-size:20px" type="text" v-model="search" placeholder="search animals" ></div>
    <div class="home">
      <div v-for="(animalName,key) in animals" :key='key'>
        
        <div class="card">
          <div class="edit-text">Rasa: {{animalName.rasa}}</div>
          <div class="edit-text">Locatie: {{animalName.locatie}}</div>
          <div class="edit-text">Sex: {{animalName.sex}}</div>
          <div class="edit-text">Varsta: {{animalName.varsta}}</div>        
        </div>         
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as firebase from "firebase";
import "firebase/auth";


export default {
  name: "home",
  components: {},
  data() {
    return {
      animal: "",
      search_animals:{
        rasa:"",
        locatie: "",
        sex:"",
        varsta:""
      }
     ,
      animals:{
        editRasa:[],
        editLocatie:[],
        editSex:[],
        editVarsta:[]},
      
      search:'',

    }
  
  },

  mounted() {
    this.getSecrets();
  },

  methods: {
    addAnimal(){
      firebase.database().ref("animals").push({
        rasa:this.animal,
        locatie:this.animal,
        sex:this.animal,
        varsta:this.animal,
      })
      .then((data)=>{console.log(data)})
      .catch((error)=>{console.log(error)})
    },

    editAnimal(key){
      firebase.database().ref("animals/"+key).set({
        rasa:this.editRasa[key],
        locatie:this.editLocatie[key],
        sex:this.editSex[key],
        varsta:this.editVarsta[key]
      });
      
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
    })
  },

  computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.resources.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }else{
        return this.resources;
      }
    }
  }

 
  
};
</script>
<style lang="scss">
.home{
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: space-between;
}
div {
  color: inherit;
}
.card{
  display:grid;
  align-items: center;
  
  width: 200px;
  height: 200px;
  border: 1px solid #262d13;
  margin: 20px;
  background-color: cadetblue;
  
}
.edit-text {
  width: 10wh;
  font-size: 20px;
  margin-top: 2px;
  margin-bottom: 2px;
}
.search_animals{
  margin-top: 20px;
  
}

</style>
