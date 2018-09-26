export default {
  name: 'app',
  data() {
    return {
      inventory1A: 'Books',
      inventory2A: 'Electronics',
      inventory3A: 'Shirts',
      order1A: 'Order-1',
      order2A: 'Order-2',
      order3A: 'Order-3',

      inventory1B: '',
      inventory2B: '',
      inventory3B: '',
      order1B: '',
      order2B: '',
      order3B: '',

      inventory1C: '',
      inventory2C: '',
      inventory3C: '',
      order1C: '',
      order2C: '',
      order3C: '',

      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,

      lableA: 'On-Prem SFO',
      lableB: 'AWS us-west-1',
      lableC: 'Alibaba cn-beijing'
    }
  },
  methods: {
    turnOffSwitch(switch1, switch2, switch3, switch4) {
        this.switch1 = switch1;
        this.switch2 = switch2;
        this.switch3 = switch3;
        this.switch4 = switch4;
      },
      syncData1() {
        if (this.switch1 || this.switch2 || this.switch3 || this.switch4) {
          this.inventory1C = this.inventory1B = this.inventory1A;
          this.inventory2C = this.inventory2B = this.inventory2A;
          this.inventory3C = this.inventory3B = this.inventory3A;
          if (this.switch2) {
            this.order1A = this.order1B;
            this.order2A = this.order2B;
            this.order3A = this.order3B;
          } else {
            this.order1C = this.order1B = this.order1A;
            this.order2C = this.order2B = this.order2A;
            this.order3C = this.order3B = this.order3A;
          }
        }
      },
      syncData4b() {
        if (this.switch1 || this.switch2 || this.switch3 || this.switch4) {
          this.inventory1C = this.inventory1A = this.inventory1B;
          this.inventory2C = this.inventory2A = this.inventory2B;
          this.inventory3C = this.inventory3A = this.inventory3B;
          if (this.switch2) {
            this.order1A = this.order1B;
            this.order2A = this.order2B;
            this.order3A = this.order3B;
          } else {
            this.order1C = this.order1A = this.order1B;
            this.order2C = this.order2A = this.order2B;
            this.order3C = this.order3A = this.order3B;
          }

        }
      },
      syncData4c() {
        if (this.switch1 || this.switch2 || this.switch3 || this.switch4) {
          this.inventory1B = this.inventory1A = this.inventory1C;
          this.inventory2B = this.inventory2A = this.inventory2C;
          this.inventory3B = this.inventory3A = this.inventory3C;
          if (!this.switch2) {
            this.order1B = this.order1A = this.order1C;
            this.order2B = this.order2A = this.order2C;
            this.order3B = this.order3A = this.order3C;
          }
        }
      },
      clearData4() {
        this.inventory1C = this.inventory1B = "";
        this.inventory2C = this.inventory2B = "";
        this.inventory3C = this.inventory3B = "";
        this.order1C = this.order1B = "";
        this.order2C = this.order2B = "";
        this.order3C = this.order3B = ""
      },
      clearFunction(name) {
        // switch(name){
        //   case "A":
        this.order1A = this.inventory1A = "";
        this.order2A = this.inventory2A = "";
        this.order3A = this.inventory3A = "";
        //   break
        // case "B":
        this.order1B = this.inventory1B = "";
        this.order2B = this.inventory2B = "";
        this.order3B = this.inventory3B = "";
        //   break
        // case "C":
        this.order1C = this.inventory1C = "";
        this.order2C = this.inventory2C = "";
        this.order3C = this.inventory3C = "";
        //   break
        // }
        // this.clearData4();
        // if(this.switch1 || this.switch2 || this.switch3){
        //   this.syncData1();
        // }else if (this.switch4) {
        //   this.syncData4b();
        // }
      },
      resetFunction() {
        this.clearData4();
        this.inventory1A = 'Books';
        this.inventory2A = 'Electronics';
        this.inventory3A = 'Shirts';
        this.order1A = 'Order-1';
        this.order2A = 'Order-2';
        this.order3A = 'Order-3';
        this.turnOffSwitch(false, false, false, false);
      },
      switchChange(name, status) {
        this.clearData4();
        if (status) {
          switch (name) {
            case 1:
              this.turnOffSwitch(true, false, false, false);
              this.syncData1();
              break
            case 2:
              this.turnOffSwitch(false, true, false, false);
              this.syncData1();
              break
            case 3:
              this.turnOffSwitch(false, false, true, false);
              this.syncData1();
              break
            case 4:
              this.turnOffSwitch(false, false, false, true);
              this.syncData4b();
              break
          }
        }
      }
  },
}
