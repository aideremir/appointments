<template>
  <v-container>
    <h1>Appointments</h1>
    <v-list>
      <appointment-item v-for="(item, index) in $store.getters.upcoming" :key="index" :item="item" />
    </v-list>
  </v-container>
</template>

<script>
import AppointmentItem from "@/components/AppointmentIem";
export default {
  name: 'Appointments',
  components: {AppointmentItem}
}
</script>
