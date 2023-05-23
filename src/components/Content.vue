<script setup>
import ElementItem from './ElementItem.vue'
import GraphIcon from './icons/IconGraph.vue'
import DataIcon from './icons/IconData.vue'
import RankingIcon from './icons/IconRanking.vue'
import TeamMemberIcon from './icons/IconTeammember.vue'
import ChartPage from './chart.vue'

import axios from 'axios';
import {ref} from 'vue';


const url = 'http://172.26.133.17:8080'
// const url = 'http://127.0.0.1:5000'

function backmain(){ // back to the main page
    document.getElementById("mainpage").style.display=''
    document.getElementById("graph").style.display='none'
    document.getElementById("ranking").style.display='none'
    document.getElementById("data").style.display='none'
}

function graphclick(){ // show graph page
    document.getElementById("mainpage").style.display='none'
    document.getElementById("graph").style.display=''
    get_graph()

}
function dataclick(){ // show data page
    document.getElementById("mainpage").style.display='none'
    document.getElementById("data").style.display=''
    // when page change to data page make sure the data is ready
    get_GCCSA()
    get_SA4()
}
function rankingclick(){ // show map page
    document.getElementById("mainpage").style.display='none'
    document.getElementById("ranking").style.display=''

}

let graph_1_b64 = ref(null)
let graph_2_b64 = ref(null)
let graph_3_b64 = ref(null)
let graph_4_b64 = ref(null)
let graph_5_b64 = ref(null)
async function get_graph(){ // get the graph from back end
    try {
        graph_1_b64.value = (await axios.get(url+'/get_graph_1')).data
        graph_2_b64.value = (await axios.get(url+'/get_graph_2')).data
        graph_3_b64.value = (await axios.get(url+'/get_graph_3')).data
        graph_4_b64.value = (await axios.get(url+'/get_graph_4')).data
        graph_5_b64.value = (await axios.get(url+'/get_graph_5')).data
    } catch (error) {
        console.log(error)
    }
}
let img_url1 = ref(null)
let img_url2 = ref(null)
let img_url3 = ref(null)
let img_url4 = ref(null)
let img_url5 = ref(null)

function show_graph(){
    document.getElementById("showgraph").style.display=''

    img_url1 = "data:image/png;base64," + graph_1_b64.value
    document.getElementById("graph1").src=img_url1

    img_url2 = "data:image/png;base64," + graph_2_b64.value
    document.getElementById("graph2").src=img_url2

    img_url3 = "data:image/png;base64," + graph_3_b64.value
    document.getElementById("graph3").src=img_url3

    img_url4 = "data:image/png;base64," + graph_4_b64.value
    document.getElementById("graph4").src=img_url4

    img_url5 = "data:image/png;base64," + graph_5_b64.value
    document.getElementById("graph5").src=img_url5
    // console.log(img_url)
}
function hidden_graph(){
    document.getElementById("showgraph").style.display='none'
}

let GCCSA_data = ref(null) // define the data set
let SA4_data = ref(null)
async function get_GCCSA(){ // get data from back end
    try {
        GCCSA_data.value = (await axios.get(url+'/get_source_data_GCCSA')).data
    } catch (error) {
        console.log(error)
    }

}
async function get_SA4(){ // get data from back end
    try {
        SA4_data.value = (await axios.get(url+'/get_source_data_SA4')).data
    } catch (error) {
        console.log(error)
    }

}
function hidden_data(){ // hidden the data
    document.getElementById("dataview_GCCSA").style.display='none'
    document.getElementById("dataview_SA4").style.display='none'
}


function show_GCCSA() { // show data
    document.getElementById("dataview_GCCSA").style.display=''
    document.getElementById("dataview_SA4").style.display='none'
}


function show_SA4(){// show data
    document.getElementById("dataview_GCCSA").style.display='none'
    document.getElementById("dataview_SA4").style.display=''
}

</script>

<template>
  <div id="mainpage">
  <ElementItem>
    <template #icon>
      <GraphIcon />
    </template>
    <template #heading>Graph</template>
      The images come from three sources: SUDO, Twitter and Mastodon.
      These images show the impact of the pandemic on jobs and other causes
      in large and small cities in Australia.
      <br>
      To see the graph you can click on <a @click="graphclick" style="cursor: pointer">here</a>.
  </ElementItem>

  <ElementItem>
    <template #icon>
      <DataIcon />
    </template>
    <template #heading>Source Data</template>
      Our data consists of three parts:
      the first is a twitter file, the second is
      data downloaded from SUDO, and the third is data
      we get in real time from MASTODON. Here are some of the source data from SUDO.
      <br>
      To see the source data you can click on <a @click="dataclick" style="cursor: pointer">here</a>.
  </ElementItem>

  <ElementItem>
    <template #icon>
      <RankingIcon />
    </template>
    <template #heading>Data distribution</template>
      Our data is sourced from all over Australia, with many cities contributing data.
      The bar chart here shows the distribution of the data by city.
      <br>
      To see how the data is distribution you can click on <a @click="rankingclick" style="cursor: pointer">here</a>.
  </ElementItem>

  <ElementItem>
    <template #icon>
      <TeamMemberIcon />
    </template>
    <template #heading>TeamMember</template>
      <ul>
          <li>
              Ran Chen (Front and back end, deployment)
          </li>
          <li>
              Jiaxuan Shi (Data access, Data analysis)
          </li>
          <li>
              Xuheng Li (Data access)
          </li>
          <li>
              Weiyan Chen (Data analysis)
          </li>
          <li>
              Kai Xu (Data analysis)
          </li>
      </ul>
  </ElementItem>
  </div>


  <div id="graph" style="display: none">
    <a @click="backmain" style="cursor: pointer">
        Back
    </a>
      >
      <br>
      <a @click="show_graph" style="cursor: pointer">
          show graph
      </a>
           |
      <a @click="hidden_graph" style="cursor: pointer">
          hidden graph
      </a>
      <div id = "showgraph" style="display: none">

          <img id="graph1" src="{{img_url1}}" alt="" >
          <img id="graph2" src="{{img_url2}}" alt="" >
          <img id="graph3" src="{{img_url3}}" alt="" >
          <img id="graph4" src="{{img_url4}}" alt="" >
          <img id="graph5" src="{{img_url5}}" alt="" >
      </div>


  </div>


    <div id="data" style="display: none">
        <div>
            <a @click="backmain" style="cursor: pointer">
              Back
            </a>
            >
            <br>
            <a id = "GCCSA" style="cursor: pointer" @click="show_GCCSA">show GCCSA Data(part of data)</a>
            <br>
            <a id = "SA4" style="cursor: pointer" @click="show_SA4">show SA4 Data(part of data)</a>
            <br>
            <div id ="dataview_GCCSA" style="display: none; cursor: pointer">
                    <a @click="hidden_data">hidden</a>
                    <json-viewer :value="GCCSA_data"  style="cursor: pointer"/>
            </div>
            <div id ="dataview_SA4" style="display: none; cursor: pointer">
                <a @click="hidden_data">hidden</a>
                <json-viewer :value="SA4_data"  style="cursor: pointer"/>
            </div>
        </div>

    </div>


    <div id="ranking" style="display: none">
        <a @click="backmain" style="cursor: pointer">
            Back
        </a>
        >
        <br>
        <div>
            <ChartPage />
        </div>
    </div>
</template>
