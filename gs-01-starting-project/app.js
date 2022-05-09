const app = Vue.createApp({
    data(){
        return {
            courseGoalA: '<h3>Finish Good</h3>',
            courseGoalB: 'Finish Bad ',
            vueLink: 'https://www.google.com/',
        }
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber > 0.5){
                return this.courseGoalA 
            }else{
                return this.courseGoalB 
            }
        }
    }
});

app.mount('#user-goal')