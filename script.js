var compoundint = new Vue({
    el: '#compoundInterest',
    data: {
    principal: '',
    rate: '',
    years: '',
    compoundrate: '',
    },
    computed: {
        calcCompoundInterest: function() {
            var p2 = this.principal;
            var r2 = this.rate;
            var t2 = this.years;
            var n2 = this.compoundrate;
            var calcs = (p2* Math.pow(1 + (r2/(n2)), (n2*t2)));
            return (calcs).toFixed(2);
        },
        calcInterest: function(){
            var p = this.principal;
            var r = this.rate;
            var t = this.years;
            var n = this.compoundrate;
            var calc = (p* Math.pow(1 + (r/(n)), (n*t)));
            var interest = calc - p
            return (interest).toFixed(2);
    }
    
},
methods: {
    computeReset: function(e){
    this.principal = 0;
    this.rate = 0;
    this.years = 0;
    this.compoundrate = 0;
    done = false
    }
    }
   
});


    
    