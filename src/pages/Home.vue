<script setup lang="ts">

// Atoms / Molecules / Organisms
import Card from "@/components/molecules/Card.vue";
import AppLayout from "@/AppLayout.vue";
import Carousel from "@/components/organisms/Carousel.vue";
import Pagination from "@/components/molecules/Pagination.vue";

</script>

<template>
    <AppLayout>
        <Carousel />
        <div class="container pt-2">
            <div class="text-center">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <Card
                            category="Apparel"
                            :price="200"
                            image="/denim_shirt.jpg"
                            title="Denim Shirt"
                        />
                    </div>
                </div>
            </div>
        </div>

        <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-3">
            <Pagination />
        </nav>
    </AppLayout>
</template>

<style>

</style>
