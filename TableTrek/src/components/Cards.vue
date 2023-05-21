<template>
    <div>
        <v-card class="mx-auto my-12" id="contenedorCards" width="1000px">
            <v-row>
                <v-col cols="6">
                    <v-img cover width="100%" height="100%"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                </v-col>

                <v-col cols="6">
                    <v-card-item>
                        <v-card-title style="font-size: 30px;">Cafe Badilico</v-card-title>
                    </v-card-item>

                    <v-card-text>
                        <div class="my-4 text-subtitle-1" style="margin-top: 0px!important;">
                            $ • Italian, Cafe
                        </div>

                        <div>
                            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4 mb-1"></v-divider>

                    <v-card-title>Tonight's availability</v-card-title>

                    <div class="px-4">
                        <v-chip-group v-model="selection">
                            <v-chip>5:30PM</v-chip>
                            <v-chip>7:30PM</v-chip>
                        </v-chip-group>
                    </div>

                    <v-card-actions>
                        <v-btn color="black" variant="text">
                            Reserve
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show" class="my-4">
                            <v-divider></v-divider>
                            <v-sheet class="mx-auto" style="max-width: 450px;">
                                <v-form fast-fail @submit.prevent style="margin-top: 10px;">
                                    <v-text-field v-model="Persons" label="Cantidad de personas"
                                        :rules="personsRules"></v-text-field>
                                    <v-text-field type="date" name="datetime"></v-text-field>
                                    <v-text-field type="time" name="datetime"></v-text-field>
                                    <v-btn type="submit" block class="mt-2">Submit</v-btn>
                                </v-form>
                            </v-sheet>
                        </div>
                    </v-expand-transition>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import { VCard } from 'vuetify/components'

export default {
    components: {
        VCard,
    },
    data: () => ({
        show: false,
    }),
}
</script>

<style>
#contenedorCards {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
}
</style>
