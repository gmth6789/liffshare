<template>
  <section class="section"></section>
</template>

<script>
export default {
  mounted() {
    let liffId = this.getLiffAppId();
    this.$router
        .replace(this.getURLQuery() + this.$route.hash)
        .then(() => {
          liff
            .init({
              liffId: liffId
            })
            .then(() => {
              const path = this.$route.query.appType;
              let query = this.$route.query;
              delete query.appType;
              this.$router.replace({ path: path, query: query });
            })
            .catch(err => {
              console.log(err.code, err.message);
            });
        })
        .catch(err => {});
  },
  methods: {
    getLiffAppId() {
      return this.getURLSearchParams().get("appType");
    },
    getURLSearchParams() {
      return new URLSearchParams(this.getURLQuery());
    },
    getURLQuery() {
      // Android location.search return ?liff.state=/
      // iOS location.search return ?liff.state=
      return decodeURIComponent(window.location.search).replace(/\?liff.state=(?:\/)?/gi, "")
    },
  }
};
</script>