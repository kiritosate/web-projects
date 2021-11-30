
const app = Vue.createApp({
    data(){
        return{
            firstname: 'user',
            lastname: '',
            gender: 'male',
            email: 'email',
            picture: 'picture',
        }
    },
    methods:{
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            console.log(res)

            this.firstname = results[0].name.first 
            this.lastname = results[0].name.last
            this.gender = results[0].gender
            this.email = results[0].email
            this.picture = results[0].picture.medium
        },
    }
})





app.mount('#app')