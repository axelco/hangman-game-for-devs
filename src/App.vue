<template>
  <div class="container">
    <div class="row">
      <div id="site-parent" class="col-12 col-lg-8 mx-auto">
        <header id="site-header">
          <h1 class="brand">
            <router-link to="/">Hangman Game for developpers</router-link>
          </h1>
        </header>
        <main id="site-main" class="my-3">
          <router-view />
        </main>
        <footer id="site-footer">
            <p class="mb-0">
              Made with ❤ by
              <a href="https://alexandrerozec.me" target="_blank"
                >Alexandre Rozec</a
              >
            </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
