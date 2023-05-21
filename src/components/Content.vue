<script setup>
import ElementItem from './ElementItem.vue'
import GraphIcon from './icons/IconGraph.vue'
import DataIcon from './icons/IconData.vue'
import MapIcon from './icons/IconMap.vue'
import TeamMemberIcon from './icons/IconTeammember.vue'
import axios from "axios";
import {ref} from "vue";

function backmain(){ // back to the main page
    document.getElementById("mainpage").style.display=''
    document.getElementById("graph").style.display='none'
    document.getElementById("map").style.display='none'
    document.getElementById("data").style.display='none'
}
function graphclick(){ // show graph page
    document.getElementById("mainpage").style.display='none'
    document.getElementById("graph").style.display=''
}
function dataclick(){ // show data page
    document.getElementById("mainpage").style.display='none'
    document.getElementById("data").style.display=''
    // when page change to data page make sure the data is ready
    get_GCCSA()
    get_SA4()
}
function mapclick(){ // show map page
    document.getElementById("mainpage").style.display='none'
    document.getElementById("map").style.display=''
}

let GCCSA_data = ref(null) // define the data set
let SA4_data = ref(null)
async function get_GCCSA(){ // get data from back end
    try {
        GCCSA_data.value = (await axios.get('http://127.0.0.1:5000/get_source_data_GCCSA')).data
    } catch (error) {
        console.log(error)
    }

}
async function get_SA4(){ // get data from back end
    try {
        SA4_data.value = (await axios.get('http://127.0.0.1:5000/get_source_data_SA4')).data
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
    console.log(GCCSA_data)
}


function show_SA4(){// show data
    document.getElementById("dataview_GCCSA").style.display='none'
    document.getElementById("dataview_SA4").style.display=''
    console.log(SA4_data)
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
      we get in real time from MASTODON
      <br>
      To see the source data you can click on <a @click="dataclick" style="cursor: pointer">here</a>.
  </ElementItem>

  <ElementItem>
    <template #icon>
      <MapIcon />
    </template>
    <template #heading>Data on the map</template>
      Our data contains location information,
      which can be presented on a map to make comparisons
      between data more intuitive.
      <br>
      To see how the data is displayed on the map you can click on <a @click="mapclick" style="cursor: pointer">here</a>.
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
        Hello world

    </a>
  </div>
    <div id="data" style="display: none">
        <div>
            <a @click="backmain" style="cursor: pointer">
              Back
            </a>
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
    <div id="map" style="display: none">
        <a @click="backmain" style="cursor: pointer">
            Hello world

        </a>
    </div>
</template>
