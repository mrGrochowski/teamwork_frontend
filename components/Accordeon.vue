<template>
  <div class="container">
    <div class="image-container">
      <img class="image-container__image" :src="settings.items[currentIndex].image" alt="image">
    </div>
    <div class="accordeon">
      <label class="accordeon__caption">{{ settings.tag }}</label>
      <h1 class="accordeon__header">
        {{ settings.title }}
      </h1>
      <Section
        v-for="(item,index) in settings.items"
        :key="`section_${index}`"
        :tabindex="index+1"
        v-bind="sectionProps[index]"
        @focus.native="setCurrentCard(index)"
      >
        <template slot="title">
          {{ item.title }}
        </template>
        <template slot="text">
          {{ item.text }}
        </template>
      </Section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamworkAccordeon',
  data () {
    return {
      settings: this.$store.getters.getAccordeonData,
      currentIndex: 0,
      sectionProps: [{
        subHeaderHighlight: true,
        rotateArrow: true,
        contentVisible: true
      }]
    }
  },
  watch: {
    currentIndex (e) {
      this.sectionProps = this.settings?.items?.map((e, i) => ({
        subHeaderHighlight: i === this.currentIndex,
        rotateArrow: i === this.currentIndex,
        contentVisible: i === this.currentIndex
      }))
    }
  },
  methods: {
    setCurrentCard (index) {
      console.log(index)
      this.currentIndex = index
    }
  }

}
</script>
<style lang="scss">
  .container {
    display:flex;
    justify-content:space-evenly;
    align-items: center;
    padding:90px;
  }
  .image-container__image {
    width:60%;
  }
  .accordeon {
    display:flex;
    flex-direction: column;
    width:30%;
    //max-width:364px;
  }
  .accordeon__header {
    font-family: $text-name;
    font-size: $text-size-heading;
    line-height: $text-height-heading;
    font-weight: $text-weight-heading;
    color:$text-emphasis;
  }

  .accordeon__caption {
    font-size: $text-size-caption;
    line-height: $text-height-caption;
    font-weight: $text-weight;
    color:$text-red;
  }
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
  .card__content--active {
    display: block;
  }
  .card__arrow--rotated {
    transform: rotate(180deg);
  }
</style>
