<script setup lang="ts">
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImg,
MDBCardText
} from "mdb-vue-ui-kit";


interface IProps {
    title: string;
    image: string;
}

const props = defineProps<IProps>();

</script>

<template>
    <MDBCard>
        <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light">
            <MDBCardImg
                top
                :src="props.image"
                :alt="title"
            />
        </div>

        <MDBCardBody>
            <MDBCardTitle>Product</MDBCardTitle>

            <MDBCardText>Category</MDBCardText>

            <h5 class="price fs-900" :style="{fontWeight: 'bold'}">139$</h5>
        </MDBCardBody>
    </MDBCard>
</template>