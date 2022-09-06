// NavBar que estará presente em todas as páginas
function getNav() {
  return `<nav class="navbar navbar-expand-lg bg-transparent position-absolute w-100">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="https://joaovictorsl.github.io/portfolio-uninter">JVSL</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars" style="color: white;"></i>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item text-end">
          <a class="nav-link text-light active" aria-current="page" href="https://joaovictorsl.github.io/portfolio-uninter/src/view/sobre_mim.html">Sobre mim</a>
        </li>
        <li class="nav-item text-end">
          <a class="nav-link text-light" href="https://joaovictorsl.github.io/portfolio-uninter/src/view/formacao.html">Formação</a>
        </li>
        <li class="nav-item text-end">
          <a class="nav-link text-light" href="https://joaovictorsl.github.io/portfolio-uninter/src/view/contato.html">Contato</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
}
// Pegando o body da página
let body = document.getElementsByTagName('body')[0];
// Adicionando NavBar ao body da página antes de qualquer elemento dentro dele.
body.innerHTML = getNav() + body.innerHTML;
