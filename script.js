const app = Vue.createApp({
    data() {
        return {
            title: 'The Millionaire Next Door',
            author: 'Thomas Stanley',
            age: 71
        }
    },
    methods: {
        reverseTitle() {
            this.title = 'The Millionaire Next Door';
        },
        changeAuthor(author) {
            this.author = author;
        }
    }
})

app.mount("#app");