//efeito do botão voltar ao Topo
function topo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

//Validação de Login
function login() {
  var logado = 0;
  var usuario = document.getElementsByName('usuario')[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementById('senha').value;
  senha = senha.toLowerCase();

  if (usuario == "admin" && senha == "123456") {
    window.location = "index.html";
    logado = 1;
  }

  if (logado == 0) {
    alert("Acesso Negado. Dados incorretos");
  }
}

//Ativar alert no botão cadastrar
function cadastro() {
  alert("Cadastrado com sucesso!");
  window.location.href = "index.html";
}

//Efeito de revelar os cards de novidades e galeria conforme o scroll
var elementosRevelados = document.querySelectorAll(".novidade-card, .galeria-grid figure");

if (elementosRevelados.length > 0 && "IntersectionObserver" in window) {
  elementosRevelados.forEach(function (elemento) {
    elemento.style.opacity = 0;
    elemento.style.transform = "translateY(16px)";
    elemento.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.style.opacity = 1;
        entrada.target.style.transform = "translateY(0)";
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.2 });

  elementosRevelados.forEach(function (elemento) {
    observador.observe(elemento);
  });
}
