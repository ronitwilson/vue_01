const app = Vue.createApp({
    data () {
        return {
            title: "the final empire",
            author: "The new author",
            age: 45,
            showBook: true
        }
    },
    methods: {
        changeTitleToLowerCase(){
            this.title= this.title.toLowerCase()
        },
        signByMe(signer) {
            this.title=this.title + " signed by " + signer
        },
        toggleShowBook(){
            this.showBook = !this.showBook
        }

    }
})

app.mount('#app')

console.log("hello vue")
