<template>
    <Teleport to="body">
        <Transition name="modal-outer">
            <div v-show="modalActive" 
             class="fixed overflow-y-auto overflow-x-hidden top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full mx-auto">
                <Transition name="modal-inner">
                    <div v-if="modalActive" class="mx-auto p-4 dark:bg-slate-800 shadow-md shadow-slate-200 bg-slate-200 text-black self-start mt-5 max-w-screen-md rounded-lg px-4">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-slate-600 px-4">
                            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-200">
                                Petunjuk :
                            </h3>
                            <button @click="$emit('close-modal')" type="button" class="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-slate-600 dark:hover:text-slate-200" data-modal-hide="default-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        
                        <slot />
                       
                        <div class="flex items-center p-4 md:p-5 border-t border-slate-200 rounded-b dark:border-slate-600">
                            <button @click="$emit('close-modal')" data-modal-hide="default-modal" type="button" class="text-slate-200 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Baik, Mengerti</button>
                            
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
    defineProps({
        modalActive: {
            type: Boolean,
            dafault: false,
        },
    });
    defineEmits(['close-modal']);
</script>

<style scoped>
/* modal outer transition */
.modal-outer-enter-active,
.modal-outer-leave-active {
    transition: opacity 1s cubic-bezier(0.52, 0.02, 0.29, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
opacity: 0;
}
/* modal inner transition */

.modal-inner-enter-active {
    transition: all 1s cubic-bezier(0.52, 0.02, 0.29, 1.02) 0,15s;
}
.modal-inner-leave-active {
    transition: all 1s cubic-bezier(0.52, 0.02, 0.29, 1.02);
}
.modal-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
}
.modal-inner-leave-to {
    transform: scale(0.8);
}
</style>