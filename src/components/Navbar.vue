<template>
    <div class="main">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Cota Agora</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/cripto">Criptomoedas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/quotation">Cotações</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/login">Entrar</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Procurar" aria-label="Search">
              <button class="btn btn-primary" type="submit">Procurar</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}    
</script>

<style scoped>
.main {
    height: 100%;
}



</style>