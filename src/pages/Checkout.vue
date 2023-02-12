<script setup lang="ts">
import AppLayout from '@/AppLayout.vue';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBInput,
    MDBTextarea,
    MDBCheckbox,
    MDBRadio,
    MDBBtn
} from 'mdb-vue-ui-kit';
</script>
<template>
    <AppLayout>
        <MDBContainer>
            <!-- Heading -->
            <h2 class="my-5 text-center">Checkout form</h2>

            <!--Grid row-->
            <MDBRow>
                <!--Grid column-->
                <MDBCol class="mb-4" md="8">
                    <!--Card-->
                    <MDBCard class="p-4">
                        <!--Grid row-->
                        <MDBRow class="mb-3">
                            <!--Grid column-->
                            <MDBCol md="6" class="mb-2">
                                <!--firstName-->
                                <MDBInput label="First name" invalidFeedback="Please provide your first name"
                                    validFeedback="Looks good!" required />
                            </MDBCol>
                            <!--Grid column-->

                            <!--Grid column-->
                            <MDBCol md="6" class="mb-2">
                                <!--lastName-->
                                <MDBInput label="Last name" invalidFeedback="Please provide your last name"
                                    validFeedback="Looks good!" required />
                            </MDBCol>
                            <!--Grid column-->
                        </MDBRow>
                        <!--Grid row-->

                        <!--address-->
                        <div class="form-outline mb-4">
                            <MDBTextarea label="Address" rows="2" required invalidFeedback="Please enter address" />
                        </div>

                        <MDBRow>
                            <MDBCol md="12" lg="4" class="mb-4">
                                <MDBInput label="Country" invalidFeedback="Please enter country"
                                    validFeedback="Looks good!" required />
                            </MDBCol>

                            <MDBCol md="12" lg="4" class="mb-4">
                                <MDBInput label="State" invalidFeedback="Please enter state" validFeedback="Looks good!"
                                    required />
                            </MDBCol>

                            <MDBCol md="12" lg="4" class="mb-4">
                                <MDBInput type="number" label="Zip" invalidFeedback="Please enter country"
                                    validFeedback="Looks good!" required />
                            </MDBCol>
                        </MDBRow>
                        <!--Grid row-->

                        <hr />
                        <MDBCheckbox label="Shipping address is the same as my billing address"
                            invalidFeedback="Example invalid feedback text" validFeedback="Looks good!" required
                            wrapperClass="mb-3" />

                        <MDBCheckbox label="Save this information for next time"
                            invalidFeedback="Example invalid feedback text" validFeedback="Looks good!" required
                            wrapperClass="mb-3" />

                        <hr />

                        <div class="my-3">
                            <MDBRadio v-for="item in ['Credit Card', 'Debit Card', 'Paypal']" :label="item"
                                name="payment_methods" :value="item" required
                                invalidFeedback="More example invalid feedback text" wrapperClass="mb-2" />
                        </div>

                        <MDBRow class="mb-3">

                            <MDBCol md="6" class="mb-3">
                                <MDBInput label="Name on card" invalidFeedback="Please enter name on the card"
                                    validFeedback="Looks good!" required />
                            </MDBCol>
                            <MDBCol md="6" class="mb-3">
                                <MDBInput label="Credit card number" invalidFeedback="Please enter card number"
                                    validFeedback="Looks good!" required />
                            </MDBCol>

                        </MDBRow>

                        <MDBRow>
                            <MDBCol md="3" class="mb-3">
                                <MDBInput label="Expiration" invalidFeedback="Card expiration date cannot be empty"
                                    validFeedback="Looks good!" required />
                            </MDBCol>
                            <MDBCol md="3" class="mb-3">
                                <MDBInput label="CVV" invalidFeedback="Card expiration date cannot be empty"
                                    validFeedback="Looks good!" required />
                            </MDBCol>
                        </MDBRow>
                        <hr class="mb-4" />
                        <MDBBtn color="primary"> Continue to checkout </MDBBtn>

                    </MDBCard>
                    <!--/.Card-->
                </MDBCol>
                <!--Grid column-->

                <!--Grid column-->
                <MDBCol class="mb-4" md="4">
                    <!-- Heading -->
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Your cart</span>
                        <span class="badge rounded-pill badge-primary">3</span>
                    </h4>

                    <!-- Cart -->
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <h6 class="my-0">Product name</h6>
                                <small class="text-muted">Brief description</small>
                            </div>
                            <span class="text-muted">$12</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <h6 class="my-0">Second product</h6>
                                <small class="text-muted">Brief description</small>
                            </div>
                            <span class="text-muted">$8</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <div>
                                <h6 class="my-0">Third item</h6>
                                <small class="text-muted">Brief description</small>
                            </div>
                            <span class="text-muted">$5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between bg-light">
                            <div class="text-success">
                                <h6 class="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span class="text-success">-$5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>
                    <!-- Cart -->

                    <!-- Promo code -->
                    <form class="card p-2">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Promo code" aria-label="Promo code"
                                aria-describedby="button-addon2" />
                            <button class="btn btn-primary" type="button" id="button-addon2"
                                data-mdb-ripple-color="dark">
                                redeem
                            </button>
                        </div>
                    </form>
                    <!-- Promo code -->
                </MDBCol>
                <!--Grid column-->
            </MDBRow>
            <!--Grid row-->
        </MDBContainer>
    </AppLayout>
</template>
