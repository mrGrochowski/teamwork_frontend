<template>
  <div class="accordeon-container">
    <img class="image-container" :src="settings.items[currentIndex].image" :alt="settings.items[currentIndex].title">
    <div class="accordeon">
      <label class="accordeon__caption">{{ settings.tag }}</label>
      <h1 class="accordeon__header">
        {{ settings.title }}
      </h1>
      <Section
        v-for="(item,index) in settings.items"
        :key="`section_${index}`"
        :tabindex="index+1"
        :autofocus="index==0"
        v-bind="sectionProps[index]"
        @focus.native="setCurrentCard(index)"
      >
        <template slot="title">
          {{ item.title }}
        </template>
        <template slot="text">
          {{ item.text }}
        </template>
        <template slot="image">
          <img :src="settings.items[currentIndex].image" :alt="settings.items[currentIndex].title">
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
      this.currentIndex = index
    }
  }

}
</script>
<style lang="scss">
  .accordeon-container {
    display:flex;
    justify-content:space-evenly;
    align-items: center;
    padding:90px;
  }
  @media (min-width: $lg) {
    .accordeon {
      width:30%;
    }

  }
  @media (max-width: $lg) {
    .image-container {
      display: none;
    }
    .accordeon-container {
      padding:10px
    }
    .accordeon {
      width:100%;
    }
   }
  .image-container {
    width:40%;
  }
  .accordeon {
    display:flex;
    flex-direction: column;
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
</style>
