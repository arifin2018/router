<template>
  <div class="profile">
    <h2>Profile {{ $route.params.user_id }} {{ Userid }}</h2>
  </div>
</template>

<script>
import { watch } from "vue";
export default {
  name: "profile",
  data() {
    return {
      Userid: this.$route.params.user_id
    };
  },
  watch: {
    "$route.params.user_id": {
      handler: function(search) {
        console.log(search);
      },
      deep: true,
      immediate: true
    }
  },
  watch: {
    $route(to, from) {
      this.updateUserID(to.params.user_id);
    }
  },
  methods: {
    updateUserID(value) {
      this.Userid = value;
    }
  }
};
</script>

<style scoped>
h2 {
  color: green;
}
</style>
