<template>
  <div>
    <v-text-field
        v-model="appointment.date"
        readonly
        label="Date"
    />
    <v-text-field
        v-model="appointment.fullName"
        readonly
        label="Name"
    />
    <v-text-field
        v-model="appointment.note"
        readonly
        label="Note"
    />
    <v-btn
        color="primary"
        class="mr-4"
        @click="$emit('back')"
    >
      Back
    </v-btn>
    <v-btn
        color="success"
        class="mr-4"
        @click="submit"
    >
      Create
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    appointment: {
      type: Object,
      required: true
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('addAppointment', this.appointment)
      this.$router.push('/')
    }
  }
}
</script>

