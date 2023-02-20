<script setup lang="ts">
import { ref, Ref } from 'vue';
import {
    MDBFooter,
    MDBContainer,
    MDBBtn,
    MDBIcon
} from 'mdb-vue-ui-kit';

const socialIcons: Ref<Array<string>> = ref(["facebook-f", "twitter", "google", "instagram", "linkedin-in", "github"]);
</script>

<template>
    <MDBFooter bg="dark" :text="['center', 'white']">
        <!-- Grid container -->
        <MDBContainer class="p-4 pb-0">
            <!-- Section: Social media -->
            <section class="mb-4">
                <!-- Facebook -->
                <MDBBtn
                    v-for="iconKey in socialIcons"
                    tag="a"
                    outline="light"
                    floating
                    class="m-1"
                >
                    <MDBIcon iconStyle="fab" :icon="iconKey"></MDBIcon>
                </MDBBtn>
            </section>
            <!-- Section: Social media -->
        </MDBContainer>
        <!-- Grid container -->
        
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
            © 2020 Copyright:
            Mayur Upadhayay
        </div>
        <!-- Copyright -->
    </MDBFooter>
</template>