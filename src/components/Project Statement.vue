<script setup>
import axios from 'axios'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
        This webpage is a Showcase of Team 16's assignments and the team members are
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
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
