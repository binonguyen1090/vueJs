
Vue.createApp({
    data(){
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue)
        }
    }
}).mount('#app');












// let buttonEl =document.querySelector('button');
// let inputEl =document.querySelector('input');
// let listEl =document.querySelector('ul');
// function addGoal() {
//     let enteredValue=inputEl.value;
//     let listItemEl=document.createElement ('li');
//     listItemEl.textContent=enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value='';
// }
 
// buttonEl.addEventListener('click', addGoal);