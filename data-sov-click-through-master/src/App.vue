<template>
  <div id="app">
    <div class="paddingTop"></div>
    <div class="col-sm-10 offset-sm-1 row">
      <div class="col-sm-12 row ">
        <div class="col-sm-4 row" style = "margin-right: 10px;">
          <div class=" col-sm-2 ">
            <img src="/static/appIcon.png" class="" >
          </div>
          <v-text-field class="col-sm-9 cloudTitle" style="margin-left: 10px;"
            v-model = "lableA">
          </v-text-field>
        </div>
        <div class="col-sm-4 row" style = "margin-right: 10px; margin-left: 5px;">
          <div class="col-sm-2">
            <img src="/static/appIcon.png" class="" >
          </div>
          <v-text-field class="col-sm-9 cloudTitle" style="margin-left: 10px;"
            v-model = "lableB">
          </v-text-field>
        </div>
        <div class="col-sm-4 row" style = "margin-left: 5px;">
          <div class="col-sm-2">
            <img src="/static/appIcon.png" class="" >
          </div>
          <v-text-field class="col-sm-9 cloudTitle" style="margin-left: 10px;"
            v-model = "lableC">
          </v-text-field>
        </div>
      </div>
      <div class="col-sm-12 row">
        <div class="col-sm-4 row tableBorder">
          <div class="col-sm-12 cloudA paddingTop" style="border-radius: 12px 12px 12px 12px;">
            <table class="table inventoryTable">
                <tr><th class="inventoryHeading">/inventory</th></tr>
              <tbody>
                <tr>
                  <td><input type="text" class="form-control inventoryStyle" v-model="inventory1A" @keyup="syncData1"></td>
                  <td><input type="text" class="form-control inventoryStyle" v-model="inventory2A" @keyup="syncData1"></td>
                  <td><input type="text" class="form-control inventoryStyle" v-model="inventory3A" @keyup="syncData1"></td>
              </tr>

              <tr>
                <th class="orderHeading">/order <i v-if="switch3" class="fa fa-clock-o" aria-hidden="true" style="color: #ea5a5a;"></i></th>
              </tr>

                <tr>
                  <td><input type="text" class="form-control orderStyle" v-model="order1A" @keyup="syncData1" :disabled="switch2 || switch3"></td>
                  <td><input type="text" class="form-control orderStyle" v-model="order2A" @keyup="syncData1" :disabled="switch2 || switch3"></td>
                  <td><input type="text" class="form-control orderStyle" v-model="order3A" @keyup="syncData1" :disabled="switch2 || switch3"></td>
              </tr>
              <tr>
                <td colspan=3>
                  <div clas="row" style='width:100%;'>
                    <i class="fa fa-cloud cloudIcon" aria-hidden="true" ></i>
                    <div style="float: right; display: inline-flex;  margin-top: 20px;">
                      <div @click="clearFunction('A')" title="Clear" class="pointer primary" style="color: #0087fe; padding-right:15px">
                        <i class="fa fa-trash-o fa-lg"  aria-hidden="true"></i>
                      </div>
                      <div @click="resetFunction" title="Reset" class="pointer primary" style="color: #0087fe">
                        <i class="fa fa-repeat fa-lg"  aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
              </td>
              </tr>


              </tbody>
            </table>
          </div>
        </div>

        <div class="col-sm-4 row tableBorder" style='margin-left:5px'>
          <div class="col-sm-12 cloudB paddingTop" style="border-radius: 12px 12px 12px 12px;">
            <table class="table inventoryTable">

                <tr><th class="inventoryHeading">/inventory</th></tr>

              <tbody>

                <tr>
                  <td><input type="text" class="form-control inventoryStyle" v-model="inventory1B" :disabled="switch1 || switch2 || switch3" @keyup="syncData4b"></td>
                  <td><input type="text" class="form-control inventoryStyle" v-model="inventory2B" :disabled ="switch1 || switch2 || switch3" @keyup="syncData4b"></td>
                  <td><input type="text" class="form-control inventoryStyle" v-model="inventory3B" :disabled ="switch1 || switch2 || switch3" @keyup="syncData4b"></td>
                </tr>

                <tr>

                  <th class="orderHeading">/order <i v-if="switch3" class="fa fa-clock-o" aria-hidden="true" style="color: #ea5a5a;"></i></th>

                </tr>

                <tr>
                  <td><input type="text" class="form-control orderStyle" v-model="order1B" :disabled ="switch1 || switch3" @keyup="syncData4b"></td>
                  <td><input type="text" class="form-control orderStyle" v-model="order2B" :disabled ="switch1 || switch3" @keyup="syncData4b"></td>
                  <td><input type="text" class="form-control orderStyle" v-model="order3B" :disabled ="switch1 || switch3" @keyup="syncData4b"></td>
                </tr>
                <tr>
                  <td colspan=3>
                    <div clas="row" style='width:100%;'>
                      <i class="fa fa-cloud cloudIcon" aria-hidden="true"></i>
                      <div style="float: right; display: inline-flex;  margin-top: 20px;">
                        <div @click="clearFunction('B')" title="Clear" class="pointer primary" style="color: #0087fe; padding-right:15px">
                          <i class="fa fa-trash-o fa-lg"  aria-hidden="true"></i>
                        </div>
                        <div @click="resetFunction" title="Reset" class="pointer primary" style="color: #0087fe">
                          <i class="fa fa-repeat fa-lg"  aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        <div class="col-sm-4 row" style='margin-left:5px'>
          <div class="col-sm-12 cloudC paddingTop" style="border-radius: 12px 12px 12px 12px;">
            <table class="table inventoryTable">

                <tr><th class="inventoryHeading">/inventory</th></tr>

              <tbody>
                <tr><td><input type="text" class="form-control inventoryStyle" v-model="inventory1C" :disabled ="switch1 || switch2 || switch3" @keyup="syncData4c"></td><td><input type="text" class="form-control inventoryStyle" v-model="inventory2C" :disabled ="switch1 || switch2 || switch3" @keyup="syncData4c"></td>
                  <td><input type="text" class="form-control inventoryStyle" v-model="inventory3C" :disabled ="switch1 || switch2 || switch3" @keyup="syncData4c"></td></tr>

                  <tr>

                    <th class="orderHeading">/order</th>

                  </tr>


                  <tr>
                    <td><input type="text" class="form-control orderStyle" v-model="order1C" :disabled ="switch1" @keyup="syncData4c"></td>
                    <td><input type="text" class="form-control orderStyle" v-model="order2C" :disabled ="switch1" @keyup="syncData4c"></td>
                    <td><input type="text" class="form-control orderStyle" v-model="order3C" :disabled ="switch1" @keyup="syncData4c"></td>
                  </tr>
                  <tr>
                    <td colspan=3>
                      <div clas="row" style='width:100%;'>
                        <i class="fa fa-cloud cloudIcon" aria-hidden="true"></i>
                        <div style="float: right; display: inline-flex; margin-top: 20px;">
                          <div @click="clearFunction('C')" title="Clear" class="pointer primary" style="color: #0087fe; padding-right:15px">
                            <i class="fa fa-trash-o fa-lg"  aria-hidden="true"></i>
                          </div>
                          <div @click="resetFunction" title="Reset" class="pointer primary" style="color: #0087fe">
                            <i class="fa fa-repeat fa-lg"  aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>


              </tbody>
            </table>
          </div>

        </div>
      </div>


      <div class="col-sm-12 row">
        <div class="col-sm-4 row">
          <div style="font-size: 1.25rem; margin: auto">
            (A)
          </div>
        </div>
        <div class="col-sm-4 row" style='margin-left:30px'>
          <div style="font-size: 1.25rem; margin: auto">
            (B)
          </div>
        </div>
        <div class="col-sm-4 row" style='margin-left:30px'>
          <div style="font-size: 1.25rem; margin: auto">
            (C)
          </div>
        </div>
      </div>
    </div>
    <div class="paddingTop"></div>
    <div class="policyArea col-sm-6 offset-sm-3 row">
      <div class="col-sm-1">
        <img src="/static/menu.png" class="navigationKmesh">
      </div>
      <div class="col-sm-11">
        <div class="col-sm-12 offset-sm-1 row">
          <h3 class="inventoryHeading" style="padding-left">POLICIES</h3>
        </div>
        <div class="col-sm-12 offset-sm-1 row">
          <div class="col-sm-9">
            <b class="fontSize">Producer-Consumers </b>
            <v-switch color="green" v-model="switch1" @change="switchChange(1, switch1)"></v-switch>
          </div>
          <span class="col-sm-9 helpText">
            /inventory A -> (B and C)<br>
            /order A -> (B and C)
          </span>
        </div>
        <div class="col-sm-12 offset-sm-1 paddingTop row">
          <div class="col-sm-9">
            <b class="fontSize">Controlled Dataflow </b>
            <v-switch color="green" v-model="switch2" @change="switchChange(2, switch2)"></v-switch>
          </div>
          <span class="col-sm-9 helpText">/inventory A -> (B and C)<br> /order B -> A </span>
        </div>
        <div class="col-sm-12 offset-sm-1 paddingTop row">
          <div class="col-sm-9">
            <b class="fontSize">Data Localization </b>
            <v-switch color="green" v-model="switch3" @change="switchChange(3, switch3)"></v-switch>
          </div>
          <span class="col-sm-8 helpText">
            Update Local and Access Global<br>
            /inventory A -> (B and C)<br>
            /order stays local at C others can access it
            </span>
        </div>
        <div class="col-sm-12 offset-sm-1 paddingTop row">
          <div class="col-sm-9">
            <b class="fontSize">Simultaneous Update </b>
            <v-switch color="green" v-model="switch4" @change="switchChange(4, switch4)"></v-switch>
          </div>
          <span class="col-sm-9 helpText">A, B, C sync all</span>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  body {
    font-family: 'Roboto', sans-serif;
  }
  th {
    padding-bottom:0px;
  }

  .logo {
    padding-top: 4px;
    width: 70px
  }
  .paddingUp {
    padding-top: 25px;
  }
  .paddingTop {
    padding-top: 15px;
  }
  .table td, .table th {
      border-top: none;
  }
  .v-input--selection-controls {
    margin-top: -3px;
    padding-top: 4px;
    float: right;
  }
  .fontSize {
    font-size: 17px;
  }
  .inventoryStyle{
    ##border: 2px solid;
    ##border-color: #1b4c7e;
  }
  .inventoryHeading{
    #color: #1b4c7e;
  }
  .inventoryTable{
    ##background: #f0f7ff;
  }
  .orderStyle{
    ##border: 2px solid;
    ##border-color: #a27277;
  }
  .orderHeading{
    #color: #ca747c;
  }
  .orederTable{
    //background: #fde4e4;
  }
  .appArea{
    border: 1px solid #e4e8ec;
    border-radius: 20px;
    padding: 10px;
  }
  .policyArea{
    border: 1px solid #e4e8ec;
    border-radius: 20px;
    padding: 10px;
  }
  .tableBorder{
    #border-right: 2px solid grey;
    margin-right: 10px;
  }
  .cloudTitle{
    font-size: 19px;
    /* margin-top: -5px;
    margin-left: -20px; */
  }
  .navigationKmesh{
    height: 300px;
    width: 60px;
  }
  .helpText{
    margin-top: -20px;
    font-size: 12px;
  }
  .cloudA{
    background: #d0d2fd;
  }
  .cloudB{
    background: #ffd79e;
  }
  .cloudC{
    background: #dbffdb;
  }
  tbody>tr>td{
    padding: 4px;
  }
  .cloudIcon{
    font-size: 50px;
    color: #78aaff;
    position: relative;
    top: 17px;
  }
  .pointer{
    cursor: pointer;
  }
</style>
<script src="./App.js"></script>
