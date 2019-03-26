<template>
  <DefaultLayout>
    <h1 class="display-3">Privacy Policy</h1>

    <div class="pa-3 my-3 grey lighten-1">
      <h3 class="display-1">Table of Contents</h3>
      <ul class="body-2">
        <li><a href="#what-you-collect">What data do you collect?</a></li>
        <li><a href="#why-you-collect">Why do you collect data?</a></li>
        <li><a href="#can-i-control">Can I control what data is collected?</a></li>
      </ul>
    </div>

    <div class="pa-3">
      <h5 class="headline" id="what-you-collect">What data do you collect?</h5>
      <p class="body-1">
        As of March 20, 2019, the only data collected by The Diol App Team is analytical data for this website.
        This could potentially change in the future, and if you use our app (once it launches), then we will be
        sure to send out notifications via the app to let users know when our Privacy Policy changes. If you want
        to be sure you are in the know, however, then please feel free to sign up for our Privacy Mailing List
        using the form located at the bottom of this page, so you will recieve an email each time the Privacy
        Policy is updated.
      </p>
      <p class="body-1">
        As for specifics on what data is collected. We use Google Analytics, which collects the following
        (source <a href="https://developers.google.com/analytics/resources/concepts/gaConceptsTrackingOverview#trackingCodeExecution">Google LLC</a>):
        <ul>
          <li>Our Google Analytics ID</li>
          <li>All cookies associated with the request for the page</li>
          <li>Information regarding how many times/for how long you are on our site</li>
          <li>The language encoding for your web browser</li>
          <li>The title of the page</li>
          <li>The version of Adobe Flash your browser is running</li>
          <li>The hostname of the request (Google's side of the request)</li>
          <li>Whether or not your browser is Java enabled</li>
          <li>The page you requested from our site</li>
          <li>The complete URL you visited, including referrers</li>
          <li>The color depth and resolution of your screen (web browser)</li>
          <li>The language of your browser</li>
        </ul>
      </p>

      <p class="body-1">
        While this is a lot of information, the majority of this information is simply what
        is sent to Google and we have no access to that information. For more information
        regarding Google's Privacy Policy, please visit
        <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.
      </p>
    </div>

    <div class="pa-3">
      <h5 class="headline" id="why-you-collect">Why do you collect data?</h5>
      <p class="body-1">
        What data we do collect, we collect so that we can help improve our website and the content on it. We know
        it sounds cliché, but that's the honest truth. We honestly use very little of the analytical data collected
        by Google Analytics. What we are concerned with is what led a user to our site, and then we build upon that
        information to drive more users to our site, so we can share our app with the world.
      </p>
    </div>

    <div class="pa-3">
      <h5 class="headline" id="can-i-control">Can I control what data is collected?</h5>
      <p class="body-1">
        Absolutely, since the only data we collect is Google Analytics, when you first visit our website, you will
        get a dialog popup asking you if you want to allow analytics. If you selected <code>Privacy Policy</code>
        and ended up here, and you do want to allow analytics, then you can do so from the menu on the navbar or form
        the hamburger menu on mobile. While it isn't in any way required, and we aren't asking you to, if you agree to
        allow analytics, we very much greatly appreciate it.
      </p>
    </div>
  </DefaultLayout>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  metaInfo: {
    title: 'Privacy Policy',
  },
};
</script>

