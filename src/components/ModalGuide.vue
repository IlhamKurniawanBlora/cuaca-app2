<template>
    <div class="text-black mb-4">
          <h1 class="text-2xl mb-1 text-slate-800 dark:text-slate-200">Tentang :</h1>
          <p class="text-base leading-relaxed text-slate-800 dark:text-slate-200">
            Cuaca App dapat kamu gunakan untuk mengecek Prakiraan cuaca sesuai lokasi yang kamu tentukan.
          </p>
          <h2 class="text-slate-800 dark:text-slate-200 text-2xl">Cara Kerja :</h2>
          <ol class="ml-4 list-decimal list-inside text-base leading-relaxed text-slate-800 dark:text-slate-200">
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
          <h2 class="text-slate-800 dark:text-slate-200 text-2xl">
            Menghapus nama kota :
          </h2>
          <p class="ml-4 text-base leading-relaxed text-slate-800 dark:text-slate-200">
            jika kamu ingin menghapus kota yang tidak kamu ingin kan maka tekan tombol "Hapus".
          </p>
          <h2 class="text-slate-800 dark:text-slate-200 text-2xl">Sumber Informasi :
          </h2>
          <p class="ml-4 text-slate-800 dark:text-slate-200 max-w-fit">
            APi Map Box : 
            <BaseUnderline >
              <a class="text-lg" href="https://www.mapbox.com/">https://www.mapbox.com/</a>
            </BaseUnderline>
             API Open Weather : 
            <BaseUnderline>
              <a class="text-lg"
                href="https://openweathermap.org/api">https://openweathermap.org/api</a>
            </BaseUnderline>
            Github Source Code : 
            <BaseUnderline>
              <a class="text-lg" href="https://github.com/IlhamKurniawanBlora/cuaca-app">https://github.com/IlhamKurniawanBlora/cuaca-app</a>
            </BaseUnderline>
          </p>
        </div>
</template>
<script setup>
import BaseUnderline from './BaseUnderline.vue'
</script>