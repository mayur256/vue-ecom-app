<script setup lang="ts">
import { ref } from "vue";
import {
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBBadge,
    MDBIcon,
    MDBCollapse
} from 'mdb-vue-ui-kit';

const collapse7 = ref(true);
</script>

<template>
    <MDBNavbar container expand="lg" dark bg="dark" class="d-flex justify-content-between">
        <MDBNavbarBrand>
            <MDBIcon icon="mdb" iconStyle="fab" size="2x" />
        </MDBNavbarBrand>
        <MDBNavbarToggler target="#navbarColor01" @click="collapse7 = !collapse7"></MDBNavbarToggler>
        <MDBCollapse id="navbarColor01" v-model="collapse7">
            <MDBNavbarNav class="mb-2 mb-lg-0">
                <router-link to="/">
                    <MDBNavbarItem linkClass="link-secondary" class="text-white me-2">Home</MDBNavbarItem>
                </router-link>
                <router-link to="/product">
                    <MDBNavbarItem linkClass="link-secondary" class="text-white me-2">Product</MDBNavbarItem>
                </router-link>
                <router-link to="/checkout">
                    <MDBNavbarItem linkClass="link-secondary" class="text-white me-2">Checkout</MDBNavbarItem>
                </router-link>
            </MDBNavbarNav>
        </MDBCollapse>
    
        <MDBNavbarNav class="mb-2 mb-lg-0 d-flex flex-row">
            <MDBNavbarItem to="#" class="me-3 me-lg-0" linkClass="link-secondary">
                <MDBIcon icon="shopping-cart"></MDBIcon>
            </MDBNavbarItem>
            <MDBNavbarItem to="#" class="me-3 me-lg-0" linkClass="link-secondary">
                <MDBIcon icon="bell" />
                <MDBBadge notification color="danger" pill>1</MDBBadge>
            </MDBNavbarItem>
            <MDBNavbarItem href="#" class="me-3 me-lg-0">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle" height="22" alt=""
                    loading="lazy" />
            </MDBNavbarItem>
        </MDBNavbarNav>
    </MDBNavbar>
</template>

<style>

</style>