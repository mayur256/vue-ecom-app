<script lang="ts" setup>
import { MDBPagination, MDBPageNav, MDBPageItem } from 'mdb-vue-ui-kit';
</script>

<template>
    <MDBPagination circle>
        <MDBPageNav prev></MDBPageNav>
        <MDBPageItem href="#">1</MDBPageItem>
        <MDBPageItem active href="#">2</MDBPageItem>
        <MDBPageItem href="#">3</MDBPageItem>
        <MDBPageNav next></MDBPageNav>
    </MDBPagination>
</template>