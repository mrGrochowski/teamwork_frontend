<template>
  <section
    class="card"
    role="tab"
  >
    <h2
      class="card__subheader"
      :class="{'card__subheader--highlighted': subHeaderHighlight}"
    >
      <slot name="title"></slot>
      <Triangle class="card__arrow" :class="{'card__arrow--rotated': rotateArrow}" />
    </h2>
    <div class="card__content" :class="{ 'card__content--visible' : contentVisible}">
      <slot name="text"></slot>
    </div>
  </section>
</template>

<script>
import Triangle from '../assets/images/triangle.svg?inline'
export default {
  name: 'AccordeonSection',
  components: { Triangle },
  props: ['subHeaderHighlight', 'rotateArrow', 'contentVisible']
}
</script>

<style lang="scss" scoped>
  .card {
    background-color:$block-background;
    padding:$spacing-padding;
    margin:0 0 $spacing-elements 0 ;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
  .card__subheader {
    margin:0px;
    font-size: $text-size-subheading;
    line-height: $text-height-subheading;
    font-weight: $text-weight-subheading;
    color:$text-emphasis;
    display: flex;
    justify-content: space-between;
  }
  .card__subheader--highlighted {
    color:$text-highlighted;
  }
  .card__content {
    margin:0px;
    padding:$spacing-subheading 0 0 0;
    width:90%;
    display: none;
  }
  .card__content--visible {
    display: block;
  }
  .card__arrow--rotated {
    transform: rotate(180deg);
  }
</style>
