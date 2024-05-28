<script setup>
import { ref, onMounted } from 'vue'

const list = ref([
  { text: 'Back to Home', id: 'tooltip-home' },
  { text: 'Change Theme', id: 'tooltip-mode' },
  { text: 'Guide', id: 'tooltip-info' },
  { text: 'Save', id: 'tooltip-add' }
])

const itemRefs = ref([])

</script>

<template>
    <div v-for="(item, index) in list" :key="index" ref="setItemRef" :id="item.id" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
        {{ item.text }}
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</template>