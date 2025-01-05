<template>   
    <div class="flex flex-col flex-1 items-center md:mt-12 mt-16">
        <!-- Banner -->
        <div v-if="route.query.preview" class="w-full dark:text-white text-slate-600 bg-slate-300 dark:bg-cuaca-sekunder p-4 text-center">
            <transition name="banner">
                <div class="relative">
                    <p>
                        untuk menambahkan kota ke halaman depan klik "+" di pojok atas.
                    </p>
                </div>
            </transition>
        </div>
        <!-- tampilan cuaca  -->
        <div class="flex flex-col items-center dark:text-white text-slate-600 py-20">
            <h1 class="text-4xl mb-4">
                {{ route.params.kota }}
            </h1>
            <p class="text-base">
                {{
                    new Date(DataCuaca.currentTime).toLocaleDateString(
                        "id-ID",
                        {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        }
                    )
                }}
            </p>
            <p class="text-center mb-10 font-bold">
                {{
                new Date(DataCuaca.currentTime).toLocaleTimeString("id-ID", {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                }).replace(':', '.')
                }}
            </p>
            <p class="text-8xl mb-8">
                {{ Math.round(((DataCuaca.current.temp) - 32) * 5 / 9) }}&deg;C
            </p>
            <p>
                Suhu Rata-Rata {{ Math.round(((DataCuaca.current.feels_like) - 32) * 5 / 9) }}&deg;C
            </p>
            <p class="capitalize">
                {{ DataCuaca.current.weather[0].description }}
            </p>
            <img :src="`https://openweathermap.org/img/wn/${DataCuaca.current.weather[0].icon}@2x.png`" alt="icon cuaca"
                class="m-auto w-[150px] h-auto" />
        </div>
    </div>
    <!-- detail cuaca per Jam -->
    <div class="w-max-screen-md w-full py-10 container border-t-2 border-slate-600 dark:border-slate-200">
        <div class="mx-8 dark:text-white text-slate-600 mb-12">
            <h2 class="mb-4 text-xl">
                Perkiraan Cuaca Hari ini
            </h2>
            <div class="w-full max-w-4xl overflow-x-scroll whitespace-nowrap scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-10 py-4">
                <div class="rounded-xl inline-block w-48 mr-4 group shadow-lg dark:shadow-slate-950 shadow-slate-600"  v-for="DataperJam in DataCuaca.hourly" :key="DataperJam.dt">
                    <div class="opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 cursor-pointer relative w-48 h-48 rounded-xl shadow-xl overflow-hidden bg-slate-800">
                        <div class="absolute inset-0 bg-slate-800 rounded-xl">
                            <img :src="`https://openweathermap.org/img/wn/${DataperJam.weather[0].icon}@2x.png`" class="absolute inset-0 w-36 h-36 m-auto animate-fade-in opacity-100 transition duration-300 group-hover:scale-125" alt="icon cuaca">
                        </div>
                        <div class="absolute inset-0 bg-slate-800 bg-opacity-50 flex flex-col justify-end p-4 transition duration-300 ease-in-out group-hover:-translate-y-4 group-hover:translate-x-4 group-hover:scale-110 rounded-xl">
                            <h1 class="font-serif text-2xl font-bold text-white">
                                {{ new Date(DataperJam.currentTime).toLocaleTimeString("en-us", {
                            hour: "numeric"}) 
                            }}
                            </h1>
                            <p class="text-sm font-light text-gray-200">Suhu : {{ Math.round(((DataperJam.temp) - 32) * 5 / 9) }}&deg;C</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    <!-- detail cuaca Harian -->
    <div class="w-max-screen-md w-full py-10 container border-t-2 border-slate-900 dark:border-slate-200">
        <div class="mx-8 dark:text-white text-slate-600 mb-6">
            <h2 class="mb-4 text-xl">
                Perkiraan Cuaca Harian
            </h2>
            <div v-for="DataHarian in DataCuaca.daily" :key="DataHarian.dt" class="group relative inline-flex mb-2 rounded-md items-center border-2 dark:border-slate-200 border-slate-600 w-full">
                <span class="rounded-md w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-slate-800 dark:text-slate-200 uppercase bg-slate-200 dark:bg-slate-800 ring-1 ring-slate-600 ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                    <p class="flex-1">
                        {{ new Date(DataHarian.dt * 1000).toLocaleDateString("id-ID" , {
                            weekday: "long",
                        }) }}
                    </p>
                    <img :src="`https://openweathermap.org/img/wn/${DataHarian.weather[0].icon}@2x.png`" alt="icon cuaca"
                    class="m-auto w-[50px] h-auto object-cover" />
                    <div class="flex gap-4 flex-1 justify-end">
                        <p>
                            <i class="mr-2 fa-solid fa-arrow-up"></i>{{ Math.round(((DataHarian.temp.max) - 32) * 5 / 9) }}&deg; C
                        </p>
                        <p>
                            <i class="mr-2 fa-solid fa-arrow-down"></i> {{ Math.round(((DataHarian.temp.min) - 32) * 5 / 9) }}&deg; C
                        </p>
                    </div>
                </span>
            </div>
            
            
        </div>
    </div>

    <!-- delete button  -->
    <div class="my-8 flex items-center" >
            <button @click="hapusKota" class="mx-auto relative inline-flex items-center gap-2 cursor-pointer group m-auto border-slate-800 dark:border-slate-200 border-2 rounded-md hover:text-red-500 text-center duration-200 ease-in-out hover:border-slate-800 dark:hover:border-slate-200 bg-red-600">
                <span class="dark:border-slate-200 group-hover:border-slate-800 dark:group-hover:border-slate-200 group-hover:bg-red-600 text-red-600 group-hover:text-slate-200 border-2 rounded-md w-full inline-flex items-center justify-center self-stretch px-6 py-3 dark:text-slate-200 text-center bg-slate-200 dark:bg-slate-800 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                    <p><i class="fa-solid fa-trash mr-2"></i>Hapus Kota</p>
            </span>
            </button>
    </div>
    <DeleteAlert ref="DeleteAlertToast" />
</template>

<script setup>
import {ref} from "vue";
import DeleteAlert from "../components/DeleteAlert.vue";
import axios from 'axios';
import { useRoute, useRouter } from "vue-router";

const DeleteAlertToast = ref(null);

const route = useRoute();
const getDataCuaca = async () => {
    try {
        const DataCuaca = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=86ef87ad2764e0f33b4034b66a2340a9&units=imperial`
        );

        // menghitung hari dan waktu
        const localOffset = new Date().getTimezoneOffset() * 60000;
        const utc = DataCuaca.data.current.dt * 1000 + localOffset;
        DataCuaca.data.currentTime =
            utc + 1000 * DataCuaca.data.timezone_offset;

        // menghitung cuaca perjam
        DataCuaca.data.hourly.forEach((hour) => {
            const utc = hour.dt * 1000 + localOffset;
            hour.currentTime =
                utc + 1000 * DataCuaca.data.timezone_offset;
        });

        // delay 
        await new Promise((res) => setTimeout(res, 1000));
        return DataCuaca.data;

    } catch (err) {
        console.log(err);
    }
};
const DataCuaca = await getDataCuaca();
// console.log(DataCuaca);
// hapus kota tersimpan
const router = useRouter();
const hapusKota = () => {
    DeleteAlertToast.value.showDeleteAlert('Data Berhasil Dihapus!');
    const kota = JSON.parse(localStorage.getItem("kotaTersimpan"));
    const updatekota = kota.filter(
        (kota) => kota.id !== route.query.id);
    localStorage.setItem("kotaTersimpan", 
    JSON.stringify(updatekota));
    setTimeout(() => {
        router.push({
            name: 'home',
        });
    }, 2000);
    
};
</script>
<style scoped>
.scrollbar-thin {
    scrollbar-width: thin;
}
.scrollbar-thumb-rounded::-webkit-scrollbar {
    height: 8px;
}
.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 9999px;
}
.scrollbar-thumb-rounded::-webkit-scrollbar-track {
    background-color: lightgray;
}
/* alert transition */
.banner-enter-active, .banner-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.banner-enter-from, .banner-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

</style>
