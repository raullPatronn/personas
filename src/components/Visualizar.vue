<script type="text/javascript">
  
import axios from 'axios'
let API_URL = `/api/getPersonasUxd.php`
export default {
  data() {
    return {
      persona: [],
    };
  },
  mounted() {
    axios.get(API_URL)
      .then((response) => {
        this.persona = response.data.personas;
        console.log(response.data);
      })
  },
}
</script>

<template>


  <ul>
  <div class="caja w-96 text-white">
    <li v-for="d in persona">
    <div class="border bg-red-300 mx-3 my-2 px-3 py-2 rounded-md hover:bg-green-200" style="margin: 10px 10px 10px 10px">
      <div class="cajas">
        <a class="text-xl text-black info">{{d.nombre}}</a>
        <a class="text-xl text-black info">{{d.edad}}</a>
      </div>
    </div>
    </li>
  </div>
  </ul>


</template>
<style>
 .info{
  display: block;
 }
  .caja{
    display: inline;
  }
  .box{
    padding: 20px;
  }
</style>