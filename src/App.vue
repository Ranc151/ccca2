<script setup>
import ProjectStatement from './components/ProjectStatement.vue'
import Content from './components/Content.vue'

</script>

<template>
  <header style="width: 200px">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <ProjectStatement msg="CCC A2" />
        <h3>
            This webpage is a Showcase of Team 16's assignments.
        </h3>
    </div>

  </header>

  <main style="width: 924px">
    <Content />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (max-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
