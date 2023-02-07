<script setup lang="ts">
import Navbar from '@/components/organisms/Navbar.vue';
import Footer from './components/organisms/Footer.vue';

</script>
<template>
    <Navbar />

    <main>
        <slot></slot>
    </main>

    <Footer />
</template>