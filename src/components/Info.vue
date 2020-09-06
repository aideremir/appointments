<template>
  <v-form
      ref="form"
      v-model="valid"
      @submit="$emit('next')"
  >
    <v-date-picker
        v-model="appointment.date"
        :rules="rules.date"
        label="Date"
        required
    />
    <v-text-field
        v-model="appointment.fullName"
        :rules="rules.fullName"
        label="Name"
        required
    />
    <v-text-field
        v-model="appointment.note"
        label="Note"
    />
    <v-btn
        color="primary"
        class="mr-4"
        @click="$router.push('/')"
    >
      Back
    </v-btn>
    <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="$emit('next')"
    >
      Next
    </v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    appointment: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    valid: false,
    rules: {
      fullName: [
        v => !!v || 'Name is required'
      ],
      date: [
        v => !!v || 'Date is required'
      ]
    }
  })
}
</script>
