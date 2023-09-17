<template>
  <nav class="navbar fixed-top bg-dark navbar-expand-lg bg-body-tertiary mb-r">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <div class="navbar-nav me-auto mb-2 mb-lg-0">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
          <RouterLink class="nav-link" aria-current="page" to="/login">Login</RouterLink>
        </div>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.nav-link.active {
  color: red;
}
</style>