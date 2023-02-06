<script setup lang="ts">
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardLink,
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
            <MDBCardLink>
                <MDBCardTitle>Product Name</MDBCardTitle>
            </MDBCardLink>

            <MDBCardLink class="text-reset">
                <MDBCardText>Category</MDBCardText>
            </MDBCardLink>

            <MDBCardLink class="text-reset">
                <h5 class="price fs-900" :style="{fontWeight: 'bold'}">139$</h5>
            </MDBCardLink>
        </MDBCardBody>
    </MDBCard>
</template>