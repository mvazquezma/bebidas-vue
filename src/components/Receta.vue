<script setup>
    defineProps({
        receta: {
            type: Object
        }
    })
</script>

<template>
    <div class="border shadow-lg">
        <div class="overflow-hidden">
            <img 
                :src="receta.strDrinkThumb"
                class="hover:scale-125 transition-transform hover:rotate-2"
                :alt="'Imagen de ' + receta.strDrink"
            />
        </div>
        <div class="p-5">
            <h2 class="text-2xl truncate font-extrabold">{{ receta.strDrink }}</h2>
            <button
                type="button"
                class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white"
            >
                Ver receta
            </button>
        </div>
    </div>
</template>