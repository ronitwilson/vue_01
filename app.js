const app = Vue.createApp({
    data () {
        return {
            title: "the final empire",
            author: "The new author",
            age: 45
        }
    },
    methods: {
        changeTitleToLowerCase(){
            this.title= this.title.toLowerCase()
        }
    }
})

app.mount('#app')

console.log("hello vue")
