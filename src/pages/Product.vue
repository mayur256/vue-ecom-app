<script setup lang="ts">
// top level imports
import { ref } from 'vue';
import AppLayout from '@/AppLayout.vue';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBadge,
    MDBBtn,
    MDBIcon,
    MDBInput
} from 'mdb-vue-ui-kit';

const productQty = ref('1')

</script>

<template>
    <AppLayout>
        <MDBContainer class="mt-5">

            <MDBRow>
                <MDBCol md="6" class="mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" class="img-fluid"
                        alt="" />
                </MDBCol>
        
                <MDBCol md="6" class="mb-4">
                    <!--Content-->
                    <div class="p-4">
                        <div class="mb-3">
                            <MDBBadge color="dark me-1">Category 1</MDBBadge>
                            <MDBBadge color="info me-1">New</MDBBadge>
                            <MDBBadge color="danger me-1">Bestseller</MDBBadge>
                        </div>
        
                        <p class="lead">
                            <span class="me-1">
                                <del>$200</del>
                            </span>
                            <span>$100</span>
                        </p>
        
                        <strong>
                            <p class="fs-4">Description</p>
                        </strong>
        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa
                            sint
                            voluptatibus! Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia
                            sapiente.
                        </p>
        
                        <form class="d-flex justify-content-left">
                           
                            <div class="form-outline me-1" style="width: 100px;">
                                <MDBInput type="number" v-model="productQty" />
                            </div>

                            <MDBBtn color="primary ms-1">
                                Add to cart
                                <MDBIcon iconStyle="fas" icon="shopping-cart" class="ms-1" />
                            </MDBBtn>
                        </form>
                    </div>
                    <!--Content-->
                </MDBCol>
        
                <hr />
            </MDBRow>
        
            <MDBRow center>
                
                <MDBCol md="6" class="text-center">
                    <h4 class="my-4 h4">Additional information</h4>
        
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit
                        voluptates, quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.
                    </p>
                </MDBCol>
                
            </MDBRow>
        
            <!--Grid row-->
            <MDBRow>
                
                <MDBCol lg="4" md="12" class="mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" class="img-fluid"
                        alt="" />
                </MDBCol>
        
                <MDBCol lg="4" md="6" class="mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" class="img-fluid"
                        alt="" />
                </MDBCol>
        
                <MDBCol lg="4" md="6" class="mb-4">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" class="img-fluid"
                        alt="" />
                </MDBCol>
                
            </MDBRow>
            
        </MDBContainer>
    </AppLayout>
</template>