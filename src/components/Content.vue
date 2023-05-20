<script setup>
import ElementItem from './ElementItem.vue'
import GraphIcon from './icons/IconGraph.vue'
import DataIcon from './icons/IconData.vue'
import MapIcon from './icons/IconMap.vue'
import TeamMemberIcon from './icons/IconTeammember.vue'
</script>

<template>
  <ElementItem>
    <template #icon>
      <GraphIcon />
    </template>
    <template #heading>Graph</template>
      The images come from three sources: SUDO, Twitter and Mastodon.
      These images show the impact of the pandemic on jobs and other causes
      in large and small cities in Australia.
      <br>
      To see the graph you can click on the icons.
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
      To see the source data you can click on the icons.
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
      To see how the data is displayed on the map you can click on the icons.
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

</template>
