<script setup>
import { ref, onMounted } from 'vue'

const list = ref([
{ text: 'About', href: '#' },
  { text: 'Privacy Policy', href: '#' },
  { text: 'Licensing', href: '#' },
  { text: 'Contact', href: '#' }
])

const itemRefs = ref([])

</script>

<template>
  <ul class="flex flex-wrap gap-4 items-center mb-6 text-sm italic text-gray-500 sm:mb-0 dark:text-gray-400">
    <li v-for="(item, index) in list" :key="index" ref="setItemRef">
        <div class="flex items-center justify-center ">
            <div class="relative text-slate-800 dark:text-slate-200 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute dark:before:bg-slate-200 before:bg-slate-800 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute dark:after:bg-slate-200 after:bg-slate-800 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
        <span><a :href="item.href" class="me-4 md:me-6">{{ item.text }}</a></span>
            </div>
        </div>
    </li>
    </ul>
</template>