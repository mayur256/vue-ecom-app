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
    MDBCardBody
} from 'mdb-vue-ui-kit';
</script>

<template>
    <AppLayout>
        <section class="h-100 gradient-custom">
            <MDBContainer class="py-5">
                <MDBRow center class="my-4">
                    <MDBCol md="8">
                        <MDBCard class="mb-4">
                            <MDBCardHeader class="py-3">
                                <h5 class="mb-0">Cart - 2 items</h5>
                            </MDBCardHeader>
        
                            <MDBCardBody>
                                <!-- Single item -->
                                <MDBRow>
                                    <MDBCol lg="3" md="12" class="mb-4 mb-lg-0">
                                        <!-- Image -->
                                        <div class="bg-image hover-overlay hover-zoom ripple rounded"
                                            data-mdb-ripple-color="light">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                                                class="w-100" alt="Blue Jeans Jacket" />
                                            <a href="#!">
                                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                                            </a>
                                        </div>
                                        <!-- Image -->
                                    </MDBCol>
        
                                    <MDBCol lg="5" md="6" class="mb-4 mb-lg-0">
                                        <!-- Data -->
                                        <p><strong>Blue denim shirt</strong></p>
                                        <p>Color: blue</p>
                                        <p>Size: M</p>
                                        <MDBBtn color="primary" type="button" size="sm" class="me-1 mb-2"
                                            data-mdb-toggle="tooltip" title="Remove item">
                                            <MDBIcon iconStyle="fas" icon="trash" />
                                        </MDBBtn>
        
                                        <MDBBtn type="button" color="danger" size="sm" class="mb-2" data-mdb-toggle="tooltip"
                                            title="Move to the wish list">
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
                                                value="1"
                                                min="0"
                                            />
        
                                            <MDBBtn type="button" color="primary" class="px-3 ms-2">
                                                <MDBIcon iconStyle="fas" icon="plus" />
                                            </MDBBtn>
                                        </div>
                                        <!-- Quantity -->
        
                                        <!-- Price -->
                                        <p class="text-start text-md-center">
                                            <strong>$17.99</strong>
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
            </MDBContainer>
        </section>
    </AppLayout>
</template>