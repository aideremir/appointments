<template>
  <v-container>
    <h1>Make appointment</h1>

    <v-tabs v-model="tab">
      <v-tab>Info</v-tab>
      <v-tab>Confirmation</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <info :appointment="appointment" @next="tab = 1"/>
          </v-card-text>
        </v-card>

      </v-tab-item>
      <v-tab-item>
        <confirmation :appointment="appointment" @back="tab = 0"/>
      </v-tab-item>
    </v-tabs-items>


  </v-container>
</template>

<script>
import Info from "@/components/Info"
import Confirmation from "@/components/Confirmation"

export default {
  components: {Confirmation, Info},
  data: () => ({
    tab: 0,
    appointment: {
      fullName: '',
      date: '',
      note: ''
    }
  })
}
</script>
