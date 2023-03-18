const app = Vue.createApp({
    data () {
        return {
            title: "the final empire",
            author: "The new author",
            age: 45,
            showBook: true,
            x:0,
            y:0
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
        },

        handleMouseOverEvent(arg, e){
            console.log("mouse over event")
            console.log("printing arg ", arg)
            console.log("printing event ", e)
        },
    
        handleMouseMove(e){
            console.log("mouse over event")
            console.log("event type is ", e.type)
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')

console.log("hello vue")
