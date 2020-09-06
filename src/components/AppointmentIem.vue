<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox
          :input-value="item.isComplete"
          color="primary"
          @change="$store.dispatch('toggleCompleteAppointment', item)"
      />
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="item.fullName" />
      <v-list-item-subtitle v-text="item.date" />
    </v-list-item-content>
    <v-list-item-action>
      <v-btn icon @click="removeHandler">
        <v-icon color="red">mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
  export default {
    name: 'AppointmentItem',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      removeHandler() {
        if (confirm('Really?')) {
          this.$store.dispatch('removeAppointment', this.item)
        }
      }
    }
  }
</script>
