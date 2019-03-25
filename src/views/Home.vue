<template>
  <FullWidthLayout>
    <v-responsive min-height="100vh" min-width="100vw" class="intro text-xs-center secondary white--text ma-0 pa-0">
      <v-img class="center-image" src="/images/logo.png" max-height="35vh" max-width="35vh" contain alt="Diol Logo" />
      <h1 class="display-4">Diol</h1>
      <p class="display-2">The app we've wanted for a wiol.</p>
      <p class="headline">Coming soon to Google Play and F-Droid.</p>
    </v-responsive>

    <v-responsive min-height="100vh" min-width="100vw" class="ma-0 pa-4">
      <v-layout align-center justify-center row fill-height wrap>
        <v-flex xs12 md6 class="text-xs-center">
          <p>Images coming soon</p>
        </v-flex>
        <v-flex xs12 sm12 md6>
          <h1 class="display-3">What is this?</h1>
          <p class="headline">
            Ignoring the <span class="dashed-underline" @mouseenter="togglePuns" @mouseleave="togglePuns">{{puns}}</span> puns.
            Diol <code>pronounced: dī - ul</code> is a dialer app for Android based on the AOSP Dialer. While
            currently rather barren, we hope to implement many of the features present
            in Google's Phone app, plus many more.
          </p>
        </v-flex>
      </v-layout>
    </v-responsive>

    <hr />

    <v-responsive min-height="100vh" min-width="100vw" class="ma-0 pa-4">
      <v-layout align-center justify-center row fill-height wrap>
        <v-flex xs12 md6 order-xs2 order-md1>
          <h1 class="display-3">But Why?</h1>
          <p class="headline">
            If I'm honest, I just want to stock Android all the things. I hate OEM implementations
            of the Android, and think the world would just be better off with stock Android. To that
            end, <em>almost</em> all of the stock Android apps have now been put out there for all to
            easily access, except the Dialer. I was inspired by
            <a href="https://lawnchair.app" target="_blank">Lawnchair</a> and
            <a href="https://opencamera.sourceforge.io/" target="_blank">OpenCamera</a>, and I may have
            <em>ever so slightly</em> copied Lawnchair's format <span class="caption">(sorry, don't sue me!)</span>.
          </p>
        </v-flex>
        <v-flex xs12 md6 order-xs1 order-md2 class="text-xs-center">
          <p>Images coming soon</p>
        </v-flex>
      </v-layout>
    </v-responsive>

    <hr />

    <v-responsive min-height="100vh" min-width="100vw" class="ma-0 pa-4">
      <v-layout align-center justify-center row fill-height wrap>
        <v-flex xs12 md6 class="text-xs-center">
          <p>Images coming soon</p>
        </v-flex>
        <v-flex xs12 sm12 md6>
          <h1 class="display-3">Free and Open Source</h1>
          <p class="headline">
            It is our promise to you that Diol is now and always will remain FOSS.
            We will never implement any sort of paid tier system, nor will we ever have ads.
            That said, app development of any time is a time and labor intensive process, so
            if you want to support our project, feel free to check our social links.
          </p>
        </v-flex>
      </v-layout>
    </v-responsive>
  </FullWidthLayout>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      puns: 'bad',
    };
  },
  methods: {
    togglePuns() {
      if (this.puns === 'bad') {
        this.puns = 'clever';
      } else {
        this.puns = 'bad';
      }
    },
  },
};
</script>

<style lang="scss">
.center-image {
  display: block;
  margin: auto;
}

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashed-underline {
  text-decoration-line: underline;
  text-decoration-style: dotted;
}
</style>

