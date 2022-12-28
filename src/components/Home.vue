<template>
  <div>
    <input type="text" placeholder="input your name" v-model="title" />
    <H1>My name: {{ title == "" ? "arifin" : title }}</H1>
    <input type="text" placeholder="input your question" v-model="question" />
    <H5>{{ answer }}</H5>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Arifin",
      question: "",
      answer:
        "Saya tidak dapat memberikan jawaban sampai anda bertanya kepada saya!"
    };
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      // if (newQuestion.includes("?")) {
      this.getAnswer();
      // }
    }
  },
  methods: {
    async getAnswer() {
      this.answer = "Thinking...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer;
      } catch (error) {
        this.answer = "Error! Could not reach the API. " + error;
      }
    }
  }
};
</script>
