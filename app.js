function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

const app = Vue.createApp({
    data() {
      return {
        price: "16.00",
        priceType: "Month",
        sliderVal: 50,
        pageViews: "100k"
      };
    },
    methods: {
        sliderChange(){
            if(this.priceType == "Month"){
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

            }

        }
    },
  });
  
  app.mount('#app');