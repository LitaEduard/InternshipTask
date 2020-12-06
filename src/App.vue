<template>
  <div id="app">

    <ul>
      <li><a class="active" ><router-link to="/">Home</router-link></a></li>
      <li><top-header ></top-header></li>
    </ul>

    <!-- <header></header> -->
    
    <router-view />
    
  </div>
</template>

<script>


import Header from "./components/Top-Header";


export default {
  components: {
    "top-header": Header
  },
  data() {
    return {
      blah: "erik"
    };
  }
};
</script>  

<style lang="scss">
///

ul {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {

  float: left;
  display: block;
  text-align: center;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px ;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

///

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background: #ffffff;

}


#nav {
  display: flex;
  align-items: center;
  background-color: #333;
  height: 40px;
  
  
   
}
</style>
