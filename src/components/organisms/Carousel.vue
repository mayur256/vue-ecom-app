<script setup lang="ts">
import { ref } from "vue";
import { MDBCarousel } from "mdb-vue-ui-kit";

const items1 = [
    {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg",
        alt: "...",
        label: "First slide label",
        caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg",
        alt: "...",
        label: "Second slide label",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg",
        alt: "...",
        label: "Third slide label",
        caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
];

const carousel1 = ref(0);
</script>

<template>
    <MDBCarousel
        v-model="carousel1"
        :items="items1"
        fade
    />
</template>

<style lang="scss">
.carousel-inner {
    max-height: 400px;

    img {
        max-height: 400px;
    }
}

.carousel-indicators img {
    max-width: 100px;
}
</style>