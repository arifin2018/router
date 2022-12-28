<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <div>
      <ul>
        <li v-for="(id, key) in userId" :key="key">
          <router-link :to="{ name: 'Profile', params: { user_id: id } }"
            >Profile {{ id }}</router-link
          >
        </li>
      </ul>
      <button @click="About()">About</button>
      <button @click="Contact()">Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: {
    About() {
      this.$router.push({ name: "About" });
    },
    Contact() {
      this.$router.push({ name: "Contact" });
    }
  }
};
</script>

<style scoped>
nav {
  text-align: center;
}

nav ul {
  padding: 0;
}

nav li {
  display: inline-block;
  margin: 0;
  padding: 8px;
}
</style>
