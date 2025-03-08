<template>
    <main class="demo-container">
      <ProductRatingBadge
        :rating="95"
        header-text="AUSZEICHNUNG"
        expiration-date="2025-01"
        accent-color="blue"
      />
      
      <ProductRatingBadge
        :rating="75"
        header-text="AUSZEICHNUNG"
        expiration-date="2025-01"
        accent-color="red"
      />
      
      <ProductRatingBadge
        :rating="83"
        header-text="xyz"
        expiration-date="2025-01"
        display-mode="number"
      />
    </main>
  </template>
  
  <style scoped>
  .demo-container {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #f9f9f9;
  }
  </style>