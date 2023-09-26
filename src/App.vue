<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Content -->
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
:root {
  --primary: #5F5B6B;
  --grey: #3D3B3C;
  --primary-alt: #7F7979;
  --dark: #323031;
  --dark-alt: #3D3B3C;
  --light: #C1BDB3;
  --sidebar-width: 300px;
}

::-webkit-scrollbar {
  width: 8px; /* Width of the scrollbar */
}

::-webkit-scrollbar-thumb {
  background: var(--dark-alt);
  border-radius: 6px; 
}

::-webkit-scrollbar-track {
  background: var(--light);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}


body{
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}

</style>
