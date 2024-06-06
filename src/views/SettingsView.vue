<script setup>
import { useI18n } from 'vue-i18n'
import { useLocale } from '../composables/locale.js'
import { useMouse } from '../composables/mouse'
// import { ref } from 'vue';
const { locale } = useI18n()
// const { my_locale } = useLocale()

// function myfunc() {
//     console.log("123");
// }
const { x, y } = useMouse()
const { my_locale } = useLocale()

</script>

<script>
export default {
    data: () => ({
        tab: null,
    }),
}
</script>

<template>
    <div class="settings">
        <v-card>
            <v-tabs color="primary" v-model="tab" align-tabs="center" show-arrows>
                <v-tab value="one">General</v-tab>
                <v-tab value="two">Robot</v-tab>
                <v-tab value="three">Setup</v-tab>
                <v-tab value="four">Calibration</v-tab>
                <v-tab value="five">Log</v-tab>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item class=pa-1 value="one">
                        <v-btn class=mx-1 color="primary" @click="locale = 'da'">Danish</v-btn>
                        <v-btn class=mx-1 color="primary" @click="locale = 'en'">English</v-btn>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="two">
                        Two
                    </v-tabs-window-item>

                    <v-tabs-window-item value="three">
                        Three
                    </v-tabs-window-item>
                    <v-tabs-window-item value="four">
                        Four
                    </v-tabs-window-item>
                    <v-tabs-window-item value="five">
                        Five
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>


    </div>
</template>