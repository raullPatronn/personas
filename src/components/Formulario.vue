<script>
import inputs from '../components/Input.vue';
import btnEnviar from '../components/Botones.vue';
import slider from '../components/Slider.vue';
import axios from "axios";
let API_URL = `/api/guardarPersonasUxd.php`; //HACE LA CONEXION CON LA API
export default {
  components: {
    inputs, btnEnviar, slider
  },
  emits: ['personalidad'],
  data() {
    return {
      pers01: 50,
      pers02: 50,
      pers03: 50,
      pers04: 50,
      nombre: "",
      edad: "",
      estadoCivil: "",
      trabajo: "", //GUARDARA LOS DATOS QUE SE INGRESARAN
      residencia: "",
      cita: "",
      citaAutor: "",
      bio: "",
      personalidad01: "",
      personalidad02: "",
      personalidad03: "",
      personalidad04: "",
      objetivos: [],
      frustraciones: [],
      motivaciones: [],
      porcentaje: "",
      marcas: "",
    };
  },
  methods: {
    pers1(s) {
      this.pers01 = s;
      console.log(s);
    },
    pers2(s) {
      this.pers02 = s;
      console.log(s);
    },
    pers3(s) {
      this.pers02 = s;
      console.log(s);
    },
    pers4(s) {
      this.pers02 = s;
      console.log(s);
    },

    summit() {
      API_URL + this.pagina;
      console.log(API_URL);
      axios.post("/api/guardarPersonasUxd.php", {
        nombre: this.nombre, //METODO DEL AXIOS PARA REALIZAR EL ENVIO DE LOS DATOS
        edad: this.edad,
        estadoCivil: this.estadoCivil,
        trabajo: this.trabajo,
        residencia: this.residencia,
        cita: this.cita,
        citaAutor: this.citaAutor,
        bio: this.bio,
        personalidad01: this.personalidad01,
        personalidad02: this.personalidad02,
        personalidad03: this.personalidad03,
        personalidad04: this.personalidad04,
        objetivos: this.objetivos,
        frustraciones: this.frustraciones,
        motivaciones: this.motivaciones,
        porcentaje: this.porcentaje,
        marcas: this.marcas,
        //completar las variables, estas deben llamarse como las que se recibirán en el backend sin el símbolo del dolar $
      })
        .then((response) => {
          console.log(response.status)
        });
    },
  },
};
</script>

<template>
  <div class="min-h-screen flex sm:justify-center">
    <div style="margin: 50px 100px 100px 50px" class="rounded-xl px-6 py-4 bg-gray-100 border-8">
      <form class="w-full max-w-lg">

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="nombre">
              NOMBRE
            </label>
            <inputs v-model="nombre"></inputs>
          </div>


          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="edad">
              EDAD
            </label>
            <inputs v-model="edad"></inputs>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="estadoCivil">
            ESTADO CIVIL
          </label>
          <div class="relative ">
            <select v-model="estadoCivil" class="bg-red-300 mx-3 my-2 px-3 py-2 rounded-md hover:bg-emerald-400">
              <option selected>Estado civil</option>
              <option value="1">Soltero</option>
              <option value="2">Casado</option>
              <option value="3">Divorciado</option>
              <option value="4">Separado</option>
              <option value="5">Union libre</option>
              <option value="6">Viudo</option>
            </select>
          </div>


          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="trabajo">
              TRABAJO
            </label>
            <inputs v-model="trabajo"></inputs>
          </div>

        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="residencia">
              RESIDENCIA
            </label>
            <inputs v-model="residencia"></inputs>
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="cita">
              CITA
            </label>
            <inputs v-model="cita"></inputs>
          </div>

        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="citaAutor">
              CITA AUTOR
            </label>
            <inputs v-model="citaAutor"></inputs>
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="bio">
              BIO
            </label>
            <inputs v-model="bio"></inputs>
          </div>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="personalidad01">
              PERSONALIDAD 1
            </label>
            <slider @person="pers1">Personalidad 01</slider>
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="personalidad02">
              PERSONALIDAD 2
            </label>
            <slider @person="pers2">Personalidad 02</slider>
          </div>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="personalidad03">
              PERSONALIDAD 3
            </label>
            <slider @person="pers3">Personalidad 03</slider>
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="personalidad04">
              PERSONALIDAD 4
            </label>
            <slider @person="pers4">Personalidad 04</slider>
          </div>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="objetivos">
              OBJETIVOS
            </label>
            <inputs v-model="objetivos"></inputs>
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="frustraciones">
              FRUSTRACIONES
            </label>
            <inputs v-model="frustraciones"></inputs>
          </div>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="motivaciones">
              MOTIVACIONES
            </label>
            <inputs v-model="motivaciones"></inputs>
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="porcentaje">
              PORCENTAJES
            </label>
            <inputs v-model="porcentaje"></inputs>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block mb-2 font-medium text-black dark:text-black mb-2" for="marcas">
              MARCAS
            </label>
            <inputs v-model="marcas"></inputs>
          </div>
        </div>
        <!--//LLAMARA A LA FUNCION PARA ENVIAR LOS DATOS//-->
        <btnEnviar @click="summit()">Registrar persona</btnEnviar> <!--ESTE BOTON PERMITIRA EL ENVIO DE LOS DATOS-->

      </form>
    </div>

  </div>
</template>
<style type="text/css">
  .Datos{
    display: inline-block;
    padding: 5px;
  }
   .Datos2{
    display: flex;
   }
   .slider{
    margin: 0px 10px 0px 5px;
   }
  .inn{
    text-align: center;
  }
</style>