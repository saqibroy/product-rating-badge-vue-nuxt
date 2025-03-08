import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductRatingBadge from '../components/ProductRatingBadge.vue'

describe('ProductRatingBadge', () => {
  it('renders the correct grade text for a rating of 95', () => {
    const wrapper = mount(ProductRatingBadge, {
      props: {
        rating: 95,
        headerText: 'AUSZEICHNUNG',
        expirationDate: '2025-01'
      }
    })

    expect(wrapper.find('.badge-grade').text()).toBe('sehr gut')
  })

  it('renders the correct numeric grade for a rating of 83 in number mode', () => {
    const wrapper = mount(ProductRatingBadge, {
      props: {
        rating: 83,
        headerText: 'abc.abc',
        expirationDate: '2025-01',
        displayMode: 'number'
      }
    })

    expect(wrapper.find('.badge-grade').text()).toBe('1,7')
  })

  it('renders the correct header text', () => {
    const wrapper = mount(ProductRatingBadge, {
      props: {
        rating: 75,
        headerText: 'AUSZEICHNUNG',
        expirationDate: '2025-01'
      }
    })

    expect(wrapper.find('.badge-header').text()).toBe('AUSZEICHNUNG')
  })

  it('applies the blue accent color when accentColor is blue', () => {
    const wrapper = mount(ProductRatingBadge, {
      props: {
        rating: 90,
        headerText: 'AUSZEICHNUNG',
        expirationDate: '2025-01',
        accentColor: 'blue'
      }
    })

    expect(wrapper.classes()).toContain('blue')
  })

  it('applies the red accent color when accentColor is red', () => {
    const wrapper = mount(ProductRatingBadge, {
      props: {
        rating: 70,
        headerText: 'AUSZEICHNUNG',
        expirationDate: '2025-01',
        accentColor: 'red'
      }
    })

    expect(wrapper.classes()).toContain('red')
  })

  it('formats the date correctly', () => {
    const wrapper = mount(ProductRatingBadge, {
      props: {
        rating: 50,
        headerText: 'AUSZEICHNUNG',
        expirationDate: '2025-01'
      }
    })

    expect(wrapper.find('.badge-date').text()).toBe('01/2025')
  })

  it('renders the correct grade text for a rating of 20', () => {
    const wrapper = mount(ProductRatingBadge, {
      props: {
        rating: 20,
        headerText: 'AUSZEICHNUNG',
        expirationDate: '2025-01'
      }
    })

    expect(wrapper.find('.badge-grade').text()).toBe('mangelhaft')
  })

  it('renders the correct grade text for a rating of 10', () => {
    const wrapper = mount(ProductRatingBadge, {
      props: {
        rating: 10,
        headerText: 'AUSZEICHNUNG',
        expirationDate: '2025-01'
      }
    })

    expect(wrapper.find('.badge-grade').text()).toBe('ungenügend')
  })
})