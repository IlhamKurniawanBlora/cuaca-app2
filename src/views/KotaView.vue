<template>
    <main >
        <Suspense>
            <AsyncKotaView />
            <template #fallback>
                <div>
                    <KotaViewSkeleton />
                </div>
            </template>
        </Suspense>
    </main>
</template>

<script setup>
import AsyncKotaView from '../components/AsyncKotaView.vue';
import KotaViewSkeleton from '../components/KotaViewSkeleton.vue';


</script>
