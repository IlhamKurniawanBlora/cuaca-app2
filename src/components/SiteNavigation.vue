<template>
  <nav class="bg-slate-200 dark:bg-slate-800 shadow-lg bg-blur-sm fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container flex flex-col sm:flex-row items-center gap-4 dark:text-white text-slate-600 py-6">
      <div class="flex items-center gap-3 ">
        <div class="flex items-center justify-center " @click="router.push({name: 'home'});">
          <BaseUnderline >
            <h1 class="text-2xl"><i class="fa-solid fa-sun text-2xl"></i> Cuaca 2.0 </h1>
          </BaseUnderline>
        </div>
      </div>
      <div class="flex gap-3 flex-1 justify-end ">
        <MenuButton data-tooltip-target="tooltip-home" @click="router.push({name: 'home'});">
            <i class="fa-solid fa-home w-5 h-5"></i>
        </MenuButton>
        <MenuButton data-tooltip-target="tooltip-mode" id="theme-toggle"> 
          <p id="theme-toggle-dark-icon" class="hidden"><i  class=" fa-solid fa-moon w-5 h-5"></i></p>
          <p id="theme-toggle-light-icon" class="hidden"><i  class=" fa-solid fa-sun w-5 h-5"></i></p>
        </MenuButton>
        <MenuButton data-tooltip-target="tooltip-info" @click="toggleModal">
          <i class="fa-solid fa-circle-info w-5 h-5"></i>
        </MenuButton>
        <MenuButton data-tooltip-target="tooltip-add" v-if="route.query.preview" @click="tambahKota" >
          <i class="fa-solid fa-plus fa-circle-info w-5 h-5"></i>
        </MenuButton>

        <TooltipMenu />
      </div>
      <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
        <ModalGuide />
      </BaseModal>
      <AddAlert ref="AddAlertToast" />
    </div>
  </nav>
  <slot />
</template>



<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { uid } from "uid";
import ModalGuide from "./ModalGuide.vue";
import BaseModal from "./BaseModal.vue";
import BaseUnderline from "./BaseUnderline.vue";
import AddAlert from "./AddAlert.vue";
import TooltipMenu from "./Navigation/TooltipMenu.vue";
import MenuButton from "./Navigation/MenuButton.vue";

const AddAlertToast = ref(null);

const route = useRoute();
const router = useRouter();

const modalActive = ref(null);
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
  // Tampilkan Add alert
  AddAlertToast.value.showAddAlert("Data Kota Berhasil Ditambahkan!");
};
</script>
