<template>
  <div class="pare p-3">
    <h4>Component Pare</h4>
        <Fill v-for="item in itemsFill" v-bind:key="item.id" :nom="item.nom" @suma=item.mes++ :mes="item.mes"></Fill>
  </div>
</template>

<script src="../scripts/pare.js"></script> 
