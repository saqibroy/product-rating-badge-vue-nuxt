<template>
  <article 
    class="badge"
    :class="accentColor"
    role="region"
    aria-labelledby="badgeHeader"
  >
    <header 
      id="badgeHeader"
      class="badge-header"
      role="heading"
      aria-level="2"
    >
      {{ headerText }}
    </header>
    
    <p class="badge-subtitle">
      Unsere Bewertung
    </p>
    
    <div 
      class="badge-grade"
      aria-live="polite"
      :aria-label="displayMode === 'number' 
        ? `Bewertung: ${formattedNumericGrade}`
        : `Bewertung: ${gradeText}`"
    >
      <span v-if="displayMode === 'number'">
        {{ formattedNumericGrade }}
      </span>
      <span v-else>
        {{ gradeText }}
      </span>
    </div>
    
    <footer class="badge-date">
      <time :datetime="expirationDate">
        {{ formattedDate }}
      </time>
    </footer>
  </article>
</template>
  
<script setup lang="ts">
  const props = defineProps({
    rating: {
      type: Number,
      required: true,
      validator: (v: number) => v >= 1 && v <= 100
    },
    headerText: {
      type: String,
      required: true
    },
    expirationDate: {
      type: String,
      required: true
    },
    displayMode: {
      type: String as () => 'text' | 'number',
      default: 'text'
    },
    accentColor: {
      type: String as () => 'blue' | 'red',
      default: 'blue'
    }
  })
  
  const numericGrade = computed(() => (100 - props.rating) / 10)
  const formattedNumericGrade = computed(() => 
    numericGrade.value.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  )
  
  const gradeText = computed(() => {
    if (props.rating >= 90) return 'sehr gut'
    if (props.rating >= 70) return 'gut'
    if (props.rating >= 50) return 'befriedigend'
    if (props.rating >= 30) return 'ausreichend'
    if (props.rating >= 20) return 'mangelhaft'
    return 'ungenügend'
  })
  
  const formattedDate = computed(() => {
    const [year, month] = props.expirationDate.split('-')
    return `${month.padStart(2, '0')}/${year}`
  })
</script>
  
<style lang="scss">
:root {
  --badge-padding: 0.5rem;
  --badge-border-width: 0.125rem;
  --badge-font-base: 1rem;

  // Color Variables
  --color-blue: #0298d5;
  --color-blue-dark: #0277a3;
  --color-red: #e30613;
  --color-red-dark: #b2050f;
  --color-gray: #f5f5f5;
  --color-gray-dark: #e0e0e0;
  --color-white: #ffffff;
  --color-black: #000000;
}

.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 9.75rem;
  min-height: 9.0625rem;
  border: var(--badge-border-width) solid;
  margin: 0 auto;
  padding: 0 var(--badge-padding);
  font-family: 'Open Sans', system-ui, sans-serif;
  text-align: center;
  text-transform: uppercase;
  background: var(--color-white);

  &-header {
    width: 100%;
    padding: var(--badge-padding);
    font-size: calc(var(--badge-font-base) * 0.8125);
    font-weight: 600;
    line-height: 1.2;
    color: var(--color-white);
  }

  &-subtitle {
    font-size: calc(var(--badge-font-base) * 0.75);
    margin: 0.25rem 0;
    color: var(--color-black);
  }

  &-grade {
    font-size: calc(var(--badge-font-base) * 1.125);
    font-weight: 700;
    flex-grow: 1;
    padding: 0.25rem 0;
    color: var(--color-black);
  }

  &-date {
    width: 100%;
    padding: var(--badge-padding);
    background-color: var(--color-gray);
    border-top: 1px solid var(--color-gray-dark);
    font-size: calc(var(--badge-font-base) * 0.75);
    color: var(--color-black);
  }

  // Blue Variant
  &.blue {
    border-color: var(--color-blue);

    .badge-header {
      background-color: var(--color-blue);
    }

    .badge-grade {
      color: var(--color-blue);
    }
  }

  // Red Variant
  &.red {
    border-color: var(--color-red);

    .badge-header {
      background-color: var(--color-red);
    }

    .badge-grade {
      color: var(--color-red);
    }
  }
}
</style>