<template>
  <default-layout>

    <div class="pa-3">
      <h3 class="display-2 pb-2">Contributing to the code</h3>
      <p class="body-1">
        You can contribute to the code in a variety of ways: testing alpha/beta versions
        of the app, before they release to F-Droid and Google Play; reporting bugs and
        issues with the app; and getting down and dirty with the code and actually making
        changes and improvments.
      </p>

      <div class="pa-4">
        <h5 class="display-1">Testing alpha/beta versions</h5>
        <p>
          There is a couple of ways to do this. First, you could sign up for the beta of the
          app through Google Play, using the link provided below once it becomes available.
          These versions of the app will have already been tested by the members of the
          community that took part in the Github alphas and betas, so they will be a bit more
          stable. <b>NOTE</b>: even though these versions of the app will have already had
          most of their bugs sorted out, they are <b>STILL</b> beta versions and should be
          considered unstable. Alternatively, if you are willing and able to do so, you can
          test the Github alphas and betas, using the link below. These versions will be fresh
          from the repository and will likely contain a lot of bugs and issues, you have been
          warned.
        </p>
        <v-layout align-center wrap row>
          <v-flex xs12 md6>
            <v-btn flat large href="https://github.com/diolapp/Diol/releases">
              <v-icon left>fab fa-github</v-icon>
              Access the Github alpha/beta releases
            </v-btn>
          </v-flex>
          <v-flex xs12 md6>
            <v-btn flat large disabled>
              <v-icon left>fab fa-google-play</v-icon>
              Sign up for the Google Play Beta Program
            </v-btn>
          </v-flex>
        </v-layout>
      </div>

      <div class="pa-4">
        <h5 class="display-1">Reporting bugs and issues with the app</h5>
        <p>
          Did you find a bug or a problem with the app? Or, did you think of a super awesome,
          killer feature that we left out? Well, all you need to do is pop right on over to the
          Github repo and open an issue so we can look into it. Once you get over there, the Github
          issue template will walk you through the steps you need to take to get everything
          submitted. Be aware though, as I state below, I'm a full-time truck driver, so I may not
          get to it right away. Also, you may want to keep an eye on the known issues page of the
          repo because your issue may be listed there with a workaround.
        </p>
        <v-layout align-center wrap row>
          <v-flex xs-12 md-6>
            <v-btn flat large href="https://github.com/diolapp/Diol/issues">
              <v-icon left>bug_report</v-icon>
              Github issues
            </v-btn>
          </v-flex>
          <v-flex xs-12 md-6>
            <v-btn flat large disabled>
              <v-icon left>error</v-icon>
              Known issues
            </v-btn>
          </v-flex>
        </v-layout>
      </div>

      <div class="pa-4">
        <h5 class="display-1">Working with the code</h5>
        <p>
          So, you wanna get down and dirty with the code? Well, I ain't gonna go easy on ya. I am going to
          assume you understand how to work with Git, Android Studio, and Java. Any issue tagged with
          <code>help wanted</code> is fair game, just reply to the issue to let us know that you are going
          to work on it and we will remove the tag so we don't have multiple people trying to work the same
          issue. That said, there are a few major things that still need to be done:
          <ul>
            <li>The code needs to be cleaned up...alot...Google's code is really, REALLY messy</li>
            <li>All of the translations need to be merged in (trust me this takes a LONG time), there are 84 of them</li>
            <li>Some strings need to be translated because they are not correct, since they refer to Google</li>
          </ul>
          All in all though, the app is mostly ready for release. In the beginning, it will only be released
          in the United States and Canada until we have the issues relating to translations ironed out. I don't
          want to release the app in any country that the app is not translated to work in.
        </p>
        <p>
          A note to code contributors. Please, please, PLEASE, do <b>NOT</b> take it upon yourself to add new
          features without warning. Please, open an issue, or post in the Gitter chat, in the Developer's Lounge,
          and well will discuss the feature and potentially open a poll in the Community to see if that is indeed
          a feature that would work well with the app. We will notify you directly, add a Github milestone for
          your feature and assign you to it, if your feature will be added. Then, at that point, you can fork
          the repo and begin working on your new feature. Also, PLEASE DO NOT create new branches for features.
          This repo will run only 1 branch...master.
        </p>

        <v-layout align-center wrap row>
          <v-flex xs-12 md-6>
            <v-btn flat large href="https://github.com/diolapp/Diol">
              <v-icon left>fab fa-github</v-icon>
              Github Repository
            </v-btn>
          </v-flex>
          <v-flex xs-12 md-6>
            <v-btn flat large href="https://gitter.im/diolapp">
              <v-icon left>fab fa-gitter</v-icon>
              Gitter Chat
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </div>

    <hr />
    <br />

    <div class="pa-3">
      <h3 class="display-2 pb-2">Contributing to the cause</h3>
      <p class="body-1">
        If you wish to donate, but lack the technolocial skills to get down and dirty with
        it, that's okay, you can always contribute monetarily. This is <b><em>NOT</em></b>
        in any way required to use our app or access our services, but this is a time
        intensive and labourious process, and I work full-time as an over the road truck
        driver, so I sometimes don't have a lot of time to spend on this project, but if
        there every came a time that I reached a level in monetary donations, I could
        quit my job and work full-time on Diol, but I do not ever expect that to happen.
        If you still wish to donate money, you can do so, either one-time via Paypal, or
        recurring through Patreon. Simply click the buttons below to go to the platform
        of your choosing.
      </p>

      <v-layout align-center wrap row>
        <v-flex xs-12 md-6>
          <v-btn flat large disabled>
            <v-icon left>fab fa-paypal</v-icon>
            Donate via Paypal
          </v-btn>
        </v-flex>
        <v-flex xs-12 md-6>
          <v-btn flat large disabled>
            <v-icon left>fab fa-patreon</v-icon>
            Donate via Patreon
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </default-layout>
</template>

<script>
export default {
  name: 'Contributing',
  metaInfo: {
    title: 'Contributing',
  },
};
</script>

