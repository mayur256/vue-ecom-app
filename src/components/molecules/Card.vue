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
    category: string;
    price: number;
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
                :alt="props.title"
            />
        </div>

        <MDBCardBody>
            <MDBCardTitle>{{ props.title ?? 'Product Title' }}</MDBCardTitle>

            <MDBCardText>{{ props.category ?? 'Category' }}</MDBCardText>

            <h5 class="price fs-900" :style="{fontWeight: 'bold'}">{{ props.price }}$</h5>
        </MDBCardBody>
    </MDBCard>
</template>