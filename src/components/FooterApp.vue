<template>
<footer class="bg-slate-400 rounded-lg border-t-2 border-slate-200 dark:border-slate-800 shadow-lg dark:bg-gray-900 m-4 px-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex rounded-sm mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse items-center">
            <ProfilePoopover />     
        </div>
        <FooterLink />
    </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="flex flex-inline text-sm text-gray-500 sm:text-center dark:text-gray-400 items-center justify-center ">© 2024 
        <div class="flex items-center justify-center ">
        <BaseUnderline >
        <p class="mx-1">
            Ilhamk
        </p>
        </BaseUnderline>
    </div>. All Rights Reserved.</span>
    </div>
</footer>


</template>

<script setup>
import ProfilePoopover from "./Footer/ProfilePoopover.vue";
import FooterLink from "./Footer/Link.vue";
import BaseUnderline from "./BaseUnderline.vue";

</script>
