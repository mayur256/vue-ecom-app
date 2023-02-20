<script setup lang="ts">
import AppLayout from '@/AppLayout.vue';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardHeader,
    MDBInput,
    MDBIcon,
    MDBBtn,
    MDBCardBody,
MDBCardTitle
} from 'mdb-vue-ui-kit';

const cart: Array<any> = [
    // {
    //     id: 1,
    //     image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp',
    //     name: 'Blue denim shirt',
    //     color: 'Blue',
    //     size: 'M',
    //     quantity: 5,
    //     price: 17.99
    // }
];
</script>

<template>
    <AppLayout>
        <section class="h-100 gradient-custom">
            <MDBContainer>

                <!-- Non empty cart -->
                <MDBRow center class="my-4" v-if="cart.length">
                    <MDBCol md="8">
                        <MDBCard class="mb-4">
                            <MDBCardHeader class="py-3">
                                <h5 class="mb-0">Cart - {{ cart.length }} items</h5>
                            </MDBCardHeader>

                            <MDBCardBody>
                                <!-- Single item -->
                                <MDBRow v-for="item in cart">
                                    <MDBCol lg="3" md="12" class="mb-4 mb-lg-0">
                                        <!-- Image -->
                                        <div class="bg-image hover-overlay hover-zoom ripple rounded"
                                            data-mdb-ripple-color="light">
                                            <img
                                                :src="item.image"
                                                class="w-100"
                                                :alt="item.name"
                                            />
                                            <a href="#!">
                                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                                            </a>
                                        </div>
                                        <!-- Image -->
                                    </MDBCol>

                                    <MDBCol lg="5" md="6" class="mb-4 mb-lg-0">
                                        <!-- Data -->
                                        <p><strong>{{ item.name }}</strong></p>
                                        <p>Color: {{ item.color }}</p>
                                        <p>Size: {{ item.size }}</p>
                                        <MDBBtn color="primary" type="button" size="sm" class="me-1 mb-2"
                                            data-mdb-toggle="tooltip" title="Remove item">
                                            <MDBIcon iconStyle="fas" icon="trash" />
                                        </MDBBtn>

                                        <MDBBtn type="button" color="danger" size="sm" class="mb-2"
                                            data-mdb-toggle="tooltip" title="Move to the wish list">
                                            <MDBIcon iconStyle="fas" icon="heart" />
                                        </MDBBtn>
                                        <!-- Data -->
                                    </MDBCol>

                                    <MDBCol lg="4" md="6" class="mb-4 mb-lg-0">
                                        <!-- Quantity -->
                                        <div class="d-flex mb-4" style="max-width: 300px">
                                            <MDBBtn type="button" color="primary" class="px-3 me-2">
                                                <MDBIcon iconStyle="fas" icon="minus" />
                                            </MDBBtn>

                                            <MDBInput
                                                type="number"
                                                name="quantity"
                                                :value="item.quantity"
                                                min="0"
                                            />

                                            <MDBBtn type="button" color="primary" class="px-3 ms-2">
                                                <MDBIcon iconStyle="fas" icon="plus" />
                                            </MDBBtn>
                                        </div>
                                        <!-- Quantity -->

                                        <!-- Price -->
                                        <p class="text-start text-md-center">
                                            <strong>${{ item.price }}</strong>
                                        </p>
                                        <!-- Price -->
                                    </MDBCol>
                                </MDBRow>
                                <!-- Single item -->

                                <hr class="my-4" />
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                    <MDBCol md="4">
                        <MDBCard class="mb-4">
                            <MDBCardHeader class="py-3">
                                <h5 class="mb-0">Summary</h5>
                            </MDBCardHeader>

                            <MDBCardBody>
                                <ul class="list-group list-group-flush">
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>$53.98</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Gratis</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p class="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>$53.98</strong></span>
                                    </li>
                                </ul>

                                <MDBBtn block type="button" color="primary" size="lg">
                                    Go to checkout
                                </MDBBtn>
                            </MDBCardBody>

                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <!-- Empty Cart -->
                <MDBRow center class="my-5" v-else>
                    <MDBCol md="12">
                        <MDBCard class="mb-4">
                            <MDBCardHeader class="text-center">
                                <MDBCardTitle>
                                    <strong>Your cart is empty!!</strong>
                                </MDBCardTitle>
                            </MDBCardHeader>

                            <MDBCardBody class="text-center">
                                <MDBBtn block type="button" color="info" size="lg" rounded>
                                    Continue shopping
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    </AppLayout>
</template>