<script setup lang="ts">

// Atoms / Molecules / Organisms
import Card from "@/components/molecules/Card.vue";
import Carousel from "@/components/organisms/Carousel.vue";
import Navbar from "@/components/organisms/Navbar.vue";
import Footer from "@/components/organisms/Footer.vue";

</script>

<template>
    <Navbar />

    <Carousel />
    
    <div class="container pt-2">
        <div class="text-center">
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                    <Card
                        image="/denim_shirt.jpg"
                        title="Text"
                    />
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<style>

</style>
