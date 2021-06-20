function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

const app = Vue.createApp({
    data() {
      return {
        price: "16.00",
        sliderVal: 50,
        pageViews: "100k",
        priceType: "Month",
        billingMonthly: true
      };
    },
    methods: {
        sliderChange(){
            if(this.billingMonthly == true){
                if(inRange(this.sliderVal, 0, 20)){
                    this.price = "8.00",
                    this.pageViews = "10k"
                } else if(inRange(this.sliderVal, 21, 40)){
                    this.price = "12.00",
                    this.pageViews = "50k"
                } else if(inRange(this.sliderVal, 41, 60)){
                    this.price = "16.00",
                    this.pageViews = "100k"
                } else if(inRange(this.sliderVal, 61, 80)){
                    this.price = "24.00",
                    this.pageViews = "500k"
                } else if(inRange(this.sliderVal, 81, 100)){
                    this.price = "36.00",
                    this.pageViews = "1M"
                } 
            } else {
                if(inRange(this.sliderVal, 0, 20)){
                    this.price = (8 * 12) * .25 + ".00",
                    this.pageViews = "10k"
                } else if(inRange(this.sliderVal, 21, 40)){
                    this.price = (12 * 12) * .25 + ".00",
                    this.pageViews = "50k"
                } else if(inRange(this.sliderVal, 41, 60)){
                    this.price = (16 * 12) * .25 + ".00",
                    this.pageViews = "100k"
                } else if(inRange(this.sliderVal, 61, 80)){
                    this.price = (24 * 12) * .25 + ".00",
                    this.pageViews = "500k"
                } else if(inRange(this.sliderVal, 81, 100)){
                    this.price = (36 * 12) * .25 + ".00",
                    this.pageViews = "1M"
                } 
            }

        },
        checkChange() {
            this.billingMonthly = !this.billingMonthly
            if (this.billingMonthly) {
                this.priceType = "Month"
            } else {
                this.priceType = "Year"
            }
            this.sliderChange()
        }
    },
  });
  
  app.mount('#app');