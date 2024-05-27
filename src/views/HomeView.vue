<template>
  <main class="container dark:text-white text-slate-600">
    <div class="pt-4 mb-8 relative">
      
      <div class="relative">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        </div>
        <input
          type="search"
          id="default-search"
          v-model="searchQuery"
          @input="getSearchResults"
          placeholder="Masukan Nama Kota "
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" />
      </div>
      <ul
        class="rounded-xl border-2 shadow-slate-500 border-slate-400 absolute bg-slate-200 text-slate-800 dark:bg-gray-900 dark:text-slate-200 w-full shadow-md py-2 px-1 top-[66px]"
        v-if="mapboxSearchResults"
      >
        <p class="py-2" v-if="searchError">
          Maaf, Terjadi Kesalahan Sistem
        </p>
        <p
          class="py-2"
          v-if="!searchError && mapboxSearchResults.length === 0"
        >
          Tidak Ada Kota Yang ditemukan 
        </p>
        <template v-else>
          <li
            v-for="searchResult in mapboxSearchResults"
            :key="searchResult.id"
            class="py-2 px-6 cursor-pointer border-b-[1px] border-white hover:bg-slate-600 hover:text-slate-200 ease-in duration-300 rounded-md "
            @click="tampilKota(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
    <div class="flex flex-col gap-4">
      <Suspense>
        <ListKota />
        <template #fallback>
          <KotaPlaceholder />
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import ListKota from "../components/ListKota.vue";
import KotaPlaceholder from "../components/KotaPlaceholder.vue";

const router = useRouter();

// pencarian menampilkan list kota
const tampilKota = (searchResult) => {
  // console.log(searchResult);
  const [kota, provinsi, negara] = searchResult.place_name.split(",");
  // console.log(kota, provinsi, negara);
  router.push({
    name: "kotaView",
    params: {negara: negara, provinsi: provinsi, kota: kota},
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true, 
    },
  })
};
// API token map box
const mapboxAPIToken = "pk.eyJ1IjoiaWxoYW1ibG9yYSIsImEiOiJjbGp2NHZ5YmwxZGZuM21vN2J2N2lrMTJxIn0.ElRkJ-GUzMcU0-IPW-y8OA";
const searchQuery = ref("");
const queryTimeout = ref(null);
const searchError = ref(null);
const mapboxSearchResults = ref(null);


// pencarian kota with map box
const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIToken}&types=place`
        );
        mapboxSearchResults.value = result.data.features;
        // console.log(mapboxSearchResults.value);
        return; 
      } catch {
        searchError.value = true;
      }

      return;
    }
    mapboxSearchResults.value = null;
  }, 300);
};
</script>

