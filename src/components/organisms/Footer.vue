<script setup lang="ts">
import {
    MDBFooter,
    MDBContainer,
    MDBBtn,
    MDBIcon
} from 'mdb-vue-ui-kit';
</script>

<template>
    <MDBFooter bg="dark" :text="['center', 'white']" class="fixed-bottom">
        <!-- Grid container -->
        <MDBContainer class="p-4 pb-0">
            <!-- Section: Social media -->
            <section class="mb-4">
                <!-- Facebook -->
                <MDBBtn tag="a" outline="light" href="#!" floating class="m-1">
                    <MDBIcon iconStyle="fab" icon="facebook-f"></MDBIcon>
                </MDBBtn>
                <!-- Twitter -->
                <MDBBtn tag="a" outline="light" href="#!" floating class="m-1">
                    <MDBIcon iconStyle="fab" icon="twitter"></MDBIcon>
                </MDBBtn>
                <!-- Google -->
                <MDBBtn tag="a" outline="light" href="#!" floating class="m-1">
                    <MDBIcon iconStyle="fab" icon="google"></MDBIcon>
                </MDBBtn>
                <!-- Instagram -->
                <MDBBtn tag="a" outline="light" href="#!" floating class="m-1">
                    <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
                </MDBBtn>
                <!-- Linkedin -->
                <MDBBtn tag="a" outline="light" href="#!" floating class="m-1">
                    <MDBIcon iconStyle="fab" icon="linkedin-in"></MDBIcon>
                </MDBBtn>
                <!-- Github -->
                <MDBBtn tag="a" outline="light" href="#!" floating class="m-1">
                    <MDBIcon iconStyle="fab" icon="github"></MDBIcon>
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