
const app = new Vue({
    el: "#app",
    data: {
        reqExpOut : 0,
        expAchievedOut: 1,
        expLvlUpOut: 0,
        goalLvlExpIn: 0,
        goalLvlExpOut: 0,
        killToLvlUp: 0,
        timeTolvlUp: 0,
        killToGoalLvlUp: 0,
        timeToGoalLvlUp: 1,
        currentLvl: 1,
        expAchievedIn: 1,
        expPerMobin: 1,
        errors: [],
        expToGoalLvl: 0,

    },
    computed: {
        expOut: function(){
            const result = this.findLvlExp();
            this.goalLvlExpIn = this.currentLvl;
            return this.reqExpOut = result.exp;
        },
        expAchieved: function(){
            const result = this.findLvlExp();
            return this.expAchievedOut = Math.round(result.exp * this.expAchievedIn / 100);
        },
        expToLvl: function(){
            const result = DATA.find(level => level.level == this.currentLvl);
            return this.expLvlUpOut = Math.round(result.exp - this.expAchievedOut);
        },
        toGoalLvl: function(){
            const goal = DATA.findIndex(result => result.level == this.currentLvl);
            const goalEnd = DATA.findIndex(res => res.level == this.goalLvlExpIn)
            const newGoal = DATA.slice(goal, goalEnd);
            const expToLvl = newGoal.map(exp => exp.exp).reduce((prev, next) => prev + next, 0) ;
            return this.expToGoalLvl = expToLvl;
        },
        expPerMobOut: function(){
            const result = this.expLvlUpOut / this.expPerMobin;
            return Math.round(result);
        },
        mobToGoalLvl: function(){
            const result = this.expToGoalLvl / this.expPerMobin;
            return Math.round(result);
        },
        timeTolvl: function(){
            const result = this.expLvlUpOut / this.timeTolvlUp;
            console.log(result)
        }
        
        
        
    },
    methods :{
        findLvlExp: function(){
            return  DATA.find(level => level.level == this.currentLvl);
        },
        splitThousands: function(n) {
            return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        toTime: function(number){
            let seconds = number
            const days = Math.floor(seconds / (3600 * 24));
            seconds -= days * 3600 * 24;
            const hours = Math.floor(seconds / 3600);
            second -= hours * 3600;
            

        }
        
    }

})






