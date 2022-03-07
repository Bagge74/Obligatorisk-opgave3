let word = "";

Vue.createApp({
    data(){
        return {
            words: [],
            result: []
        }
    }, methods: {
        save(word){
            this.words.push(word)
            this.words.push(word.toUpperCase())
            this.words.push(word.toLowerCase())
            this.words.push(word.charAt(0).toUpperCase() + word.slice(1))
            this.words.push(word.slice(0,word.length-1) + word.charAt(word.length-1).toUpperCase())

            let reversed = ""
            for(let i = word.length-1; i >= 0; i--){
                reversed += word.charAt(i)
            }
            this.words.push(reversed)
        },
        show(){
            this.result = this.words
        },
        clear(){
            this.words = []
            this.result = null
        }
    }
}).mount ("#app")