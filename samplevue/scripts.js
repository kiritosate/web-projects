
const blog = Vue.createApp({

    data(){
        var numbers = 10
        this.main(numbers)
        return{
            user: []
        }
    },
    methods:{
        main(nums){
            for(var i=0;i<nums;i++){
            const temp = this.getUser(i)
        }
        },
        async getUser(num){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            

            this.user.push(
                {'firstname':results[0].name.first,
                'lastname':results[0].name.last,
                'email':results[0].email,
                'picture':results[0].picture.large,
                'gender':results[0].gender,
                }
            )
        },
        more(){
            
            this.numbers = (typeof this.numbers==="undefined")?10:this.numbers=10;
            this.main(this.numbers)
            console.log(this.numbers)
        }
    }
})

const nav = Vue.createApp({
    data(){
        return{
            brandname:'Blog',
            active: '',
        }
    },
    methods:{
        nowGet(btn){
             
        }
    }
})

nav.mount("#navbar");
blog.mount("#app");