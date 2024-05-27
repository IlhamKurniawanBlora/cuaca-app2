<template>
<footer class="bg-slate-400 rounded-lg border-t-2 border-slate-200 dark:border-slate-800 shadow-lg dark:bg-gray-900 m-4 px-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex rounded-sm mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse items-center">
                
                <ProfilePoopover />     
            </div>
            <ul class="flex flex-wrap gap-4 items-center mb-6 text-sm italic text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <div class="flex items-center justify-center ">
                        <div
                            class="relative text-slate-800 dark:text-slate-200 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute dark:before:bg-slate-200 before:bg-slate-800 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute dark:after:bg-slate-200 after:bg-slate-800 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            <span><a href="#" class="me-4 md:me-6">About</a></span>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="flex items-center justify-center ">
                        <div
                            class="relative text-slate-800 dark:text-slate-200 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute dark:before:bg-slate-200 before:bg-slate-800 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute dark:after:bg-slate-200 after:bg-slate-800 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            <span><a href="#" class="me-4 md:me-6">Privacy Policy</a></span>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="flex items-center justify-center ">
                        <div
                            class="relative text-slate-800 dark:text-slate-200 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute dark:before:bg-slate-200 before:bg-slate-800 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute dark:after:bg-slate-200 after:bg-slate-800 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            <span><a href="#" class="me-4 md:me-6">Licensing</a></span>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div class="flex items-center justify-center ">
                        <div
                            class="relative text-slate-800 dark:text-slate-200 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute dark:before:bg-slate-200 before:bg-slate-800 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute dark:after:bg-slate-200 after:bg-slate-800 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            <span><a href="#" class="me-4 md:me-6">Contact</a></span>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="flex flex-inline text-sm text-gray-500 sm:text-center dark:text-gray-400 items-center justify-center ">© 2024 
        <div class="flex items-center justify-center ">
        <div class="relative text-slate-800 dark:text-slate-200 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute dark:before:bg-slate-200 before:bg-slate-800 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute dark:after:bg-slate-200 after:bg-slate-800 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"><span><p class="mx-1">
            Ilhamk
        </p></span>
         </div>
                    </div>. All Rights Reserved.</span>
    </div>
</footer>


</template>

<script setup>
import ProfilePoopover from "./ProfilePoopover.vue";

</script>
