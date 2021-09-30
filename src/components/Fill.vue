<template>
  <div class="fill text-dark p-3 w-25 mx-auto mb-3 bg-light">
    
      <h4>{{ nom }}</h4>
      <b-button @click="$emit('suma')" variant="success">{{ mes }}</b-button>
      
      
    
  </div>
</template>

<script src="../scripts/fill.js"></script>