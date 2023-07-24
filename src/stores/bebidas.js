import { ref, onMounted, reactive } from "vue";
import { defineStore } from "pinia";
import APIService from "../services/APIService";

export const useBebidasStore = defineStore('bebidas', () => {

    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    })
    const recetas = ref([])
    
    onMounted(async function() {
        const {data: {drinks}} = await APIService.obtenerCategorias()

        categorias.value = drinks
    })

    async function obtenerRecetas() {
        const {data: {drinks}} = await APIService.buscarRecetas(busqueda)
        recetas.value = drinks
    }

    async function seleccionarBebida(id) {
        const {data: {drinks}} = await APIService.buscarReceta(id)
        console.log(drinks);
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas,
        obtenerRecetas,
        recetas,
        seleccionarBebida
    }
})