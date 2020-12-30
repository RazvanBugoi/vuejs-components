const app = Vue.createApp({
    data() {
        return {
            title: 'The Millionaire Next Door',
            author: 'Thomas Stanley',
            age: 71,
            showBooks: true
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
})

app.mount("#app");