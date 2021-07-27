<template>
  <div class="weather">
    <v-col cols="12" sm="6">
        <v-text-field
            v-model.trim="city"
            label="Your City"  
            hint="For example, Chester, UK"
            outlined
            @keyup.enter="getWeather"
        ></v-text-field>

    </v-col>

    <div v-if="haveWeQueried!=='false'">
      <WeatherCard />
    </div>

  </div>

</template>

<script>

import WeatherCard from "./WeatherCard";

export default {
    data () {
        return {
        }
    },

    computed: {
        city: {
          get() {
            return this.$store.getters['lookupCity'].city;
          },
          set(newValue) {
            return this.$store.dispatch('setLookupCity', newValue)
          },
        },

        haveWeQueried() {
          return this.$store.getters.returnQueryStatus
        }
      },

    methods: {
      getWeather() {     
        this.$store.dispatch('newWeather', this.query)
      }
    },

    components: {
        WeatherCard
    }
}
</script>