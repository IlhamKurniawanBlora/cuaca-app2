<template>
  <nav class="sticky top-0 bg-slate-200 dark:bg-slate-800 shadow-lg bg-blur-sm">
    <div class="container flex flex-col sm:flex-row items-center gap-4 dark:text-white text-slate-600 py-6">
      <div class="flex items-center gap-3 ">
        <RouterLink :to="{ name: 'home' }">
          <div class="flex items-center justify-center ">
          <div
            class="relative text-slate-600 dark:text-slate-200 hover:text-slate-800 dark:hover:text-slate-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <span><p class="text-2xl"><i class="fa-solid fa-sun text-2xl"></i> Cuaca 2.0 </p></span>
          </div>
        </div>
        </RouterLink>
      </div>
      <div class="flex gap-3 flex-1 justify-end ">
        <RouterLink :to="{ name: 'home' }">
          <button data-tooltip-target="tooltip-home" data-tooltip-style="light" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 border-4 border-slate-600">
            <i class="fa-solid fa-home w-5 h-5"></i>
          </button>
          <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
              Back to Home
              <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </RouterLink>        
        <button data-tooltip-target="tooltip-mode" data-tooltip-style="light" id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 border-4 border-slate-600">
        <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        
        <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
        <div id="tooltip-mode" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
              ganti mode
              <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        <button data-tooltip-target="tooltip-info" data-tooltip-style="light" @click="toggleModal" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 border-4 border-slate-600">
          <i class="fa-solid fa-circle-info w-5 h-5"></i>
        </button>
        <div id="tooltip-info" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
              Petunjuk
              <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        <button data-tooltip-target="tooltip-add" data-tooltip-style="light" id="sucsess-add" @click="tambahKota"  v-if="route.query.preview"  type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 border-4 border-slate-600">
          <i class="fa-solid fa-plus fa-circle-info w-5 h-5"></i>
        </button>
        <div id="tooltip-add" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
              Tambahkan Kota
              <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
      </div>
      <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
        <div class="text-black mb-4">
          <h1 class="text-2xl mb-1">Tentang :</h1>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Cuaca App dapat kamu gunakan untuk mengecek Prakiraan cuaca sesuai lokasi yang kamu tentukan.
          </p>
          <h2 class="text-2xl">Cara Kerja :</h2>
          <ol class="list-decimal list-inside text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <li>
              Masukan nama kotamu di kolom pencarian.
            </li>
            <li>
              Pilh hasil sesuai dengan kota yang kamu pilih.
            </li>
            <li>
              Tekan "+" untuk menambahkan kota di tampilan awal.
            </li>
          </ol>
          <h2 class="text-2xl">
            Menghapus nama kota :
          </h2>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            jika kamu ingin menghapus kota yang tidak kamu ingin kan maka tekan tombol "Hapus".
          </p>
          <h2 class="text-2xl">Sumber Informasi :
          </h2>
          <p>
            APi Map Box : <a class="text-blue-600 underline" href="https://www.mapbox.com/">https://www.mapbox.com/</a>
          </p>
          <p>
            API Open Weather : <a class="text-blue-600 underline"
              href="https://openweathermap.org/api">https://openweathermap.org/api</a>
          </p>
          <p>
            Github Source Code : <a class="text-blue-600 underline"
              href="https://github.com/IlhamKurniawanBlora/cuaca-app">https://github.com/IlhamKurniawanBlora/cuaca-app</a>
          </p>
        </div>
      </BaseModal>
    </div>
  </nav>
  <slot />

  <div ref="toast" v-if="VisibleAdd"  id="toast-success" class="absolute right-5 bottom-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Data Kota berhasil disimpan</div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { uid } from "uid";
import BaseModal from "./BaseModal.vue";

const VisibleAdd = ref(false);

const modalActive = ref(null);
const route = useRoute();
const router = useRouter();
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const kotaTersimpan = ref([])
// menambahkan kota ke halaman home
const tambahKota = () => {
  if (localStorage.getItem("kotaTersimpan")) {
    kotaTersimpan.value = JSON.parse(
      localStorage.getItem("kotaTersimpan")
    );
  }
  const lokasiObj = {
    id: uid(),
    negara: route.params.negara,
    kota: route.params.kota,
    coords: {
      lat: route.query.lat,
      lng: route.query.lng,
    },
  };

  kotaTersimpan.value.push(lokasiObj);
  localStorage.setItem('kotaTersimpan', JSON.stringify(kotaTersimpan.value))

  let query = Object.assign({}, route.query);
  delete query.preview;
  query.id = lokasiObj.id;
  router.replace({ query });
  // Tampilkan toast alert
  VisibleAdd.value = true;
  setTimeout(() => {
    VisibleAdd.value = false;
  }, 3000);
};
</script>
