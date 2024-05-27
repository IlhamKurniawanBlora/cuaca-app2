<template>
    <div class="relative flex py-6 px-3 bg-slate-300 dark:bg-gray-900 rounded-md shadow-md cursor-pointer text-slate-800 dark:text-slate-100">
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div class="flex flex-col flex-1">
            <h2 class="text-3xl">{{ kota.kota }}</h2>
            <h3 class="">{{ kota.negara }}</h3>
        </div>
        <div class="flex flex-col gap-2 ">
            <p class="text-3xl self-end">
                {{ Math.round(((kota.weather.main.temp) - 32) * 5 / 9) }}&deg; C
            </p>
            <div class="flex gap-2">
                <span class="text-xs">
                    <i class="mr-2 fa-solid fa-arrow-up"></i>{{ Math.round(((kota.weather.main.temp_max) - 32) * 5 / 9) }}&deg; C
                </span>
                <span class="text-xs">
                    <i class="mr-2 fa-solid fa-arrow-down"></i>{{ Math.round(((kota.weather.main.temp_min) - 32) * 5 / 9) }}&deg; C
                </span>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import { useRoute, useRouter } from "vue-router";
    const route = useRoute();

    defineProps({
        kota: {
            type: Object,
            default: () => {},
        },
    });

</script>
