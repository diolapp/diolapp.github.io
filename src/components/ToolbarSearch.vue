<template>
  <div>
    <v-btn flat icon @click.prevent="toggleSearch">
      <v-icon>search</v-icon>
    </v-btn>
    <v-expand-x-transition>
      <div v-show="searchOpen">
        <v-text-field ref="searchField" id="search-field" @keydown.escape="toggleSearch" v-model="searchText" hide-details single-line clearable></v-text-field>
      </div>
    </v-expand-x-transition>
  </div>
</template>

<script>
export default {
  name: 'toolbar-search',
  data() {
    return {
      searchText: '',
      searchOpen: false,
    };
  },
  methods: {
    toggleSearch(e) {
      if (this.searchOpen) return this.hideSearch(e);
      return this.expandSearch();
    },
    expandSearch() {
      this.searchOpen = true;
      setTimeout(() => document.addEventListener('click', this.hideSearch), 0);
      this.$nextTick(this.$refs.searchField.focus);
    },
    hideSearch(e) {
      if ((document.activeElement === document.getElementById('search-field')) && e.type !== 'keydown') return;
      this.searchOpen = false;
      document.removeEventListener('click', this.hideSearch);
    },
  },
};
</script>
