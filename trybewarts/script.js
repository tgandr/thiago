const btnEnviar = document.querySelector('#entrar');
btnEnviar.addEventListener('click', (evento) => {
  evento.preventDefault();
  const email = document.querySelector('[name=email]');
  const password = document.querySelector('[name=password]');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
const btn1 = document.querySelector('#submit-btn');
btn1.disabled = true;
const confirmed = document.querySelector('#agreement');
confirmed.addEventListener('click', (evento) => {
  if (evento.target.checked === true) {
    btn1.disabled = false;
  }
});

const count = document.querySelector('textarea');
count.addEventListener('keyup', () => {
  const caract = document.querySelector('#counter');
  const qcaract = document.querySelector('textarea').value.length;
  caract.innerHTML = 500 - qcaract;
});

function selecionados() {
  const materiasSelecionadas = [];
  const materias = document.querySelectorAll('.family input[type=checkbox]:checked');
  for (let index = 0; index < materias.length; index += 1) {
    materiasSelecionadas.push(materias[index].value);
  }
  return materiasSelecionadas.join(', ');
}

function valores() {
  const valor = {
    Nome: `${document.querySelector('#input-name').value} ${
      document.querySelector('#input-lastname').value
    }`,
    Email: `${document.querySelector('#input-email').value}`,
    Casa: `${document.querySelector('#house').value}`,
    Família: `${document.querySelector('[name=family]:checked').value}`,
    Matérias: selecionados(),
    Avaliação: `${document.querySelector('[name=rate]:checked').value}`,
    Observações: `${document.querySelector('#textarea').value}`,
  };
  return valor;
}
const btn2 = document.querySelector('#submit-btn');
const form2 = document.querySelector('#evaluation-form');

btn2.addEventListener('click', (evento) => {
  evento.preventDefault();
  const valor = valores();
  const form = document.querySelectorAll('#evaluation-form div');

  for (let index = 0; index < form.length; index += 1) {
    form[index].remove();
  }

  for (let index = 0; index < Object.keys(valor).length; index += 1) {
    const cria = document.createElement('p');
    cria.innerHTML = `${Object.keys(valor)[index]}: ${valor[Object.keys(valor)[index]]}`;
    form2.appendChild(cria);
  }
});

/* window.onload = function (){
    let btnEnviar = document.querySelector("#entrar")
    btnEnviar.addEventListener("click", function (evento) {
        evento.preventDefault()
        let email = document.querySelector("[name=email]")
        let password = document.querySelector("[name=password]")
        if (email.value == "tryber@teste.com" && password.value == "123456") {
            alert("Olá, Tryber!")
        } else {
            alert("Email ou senha inválidos.")
        }
    })

    document.querySelector("#submit-btn").disabled = true
    let confirmed = document.querySelector("#agreement")
    confirmed.addEventListener("click", function(evento){
        if (evento.target.checked == true) {
            document.querySelector("#submit-btn").disabled = false
        }
    })

    let count = document.querySelector("textarea");
    count.addEventListener("keyup", function(){
        let caract = document.querySelector("#counter")
        let qcaract = document.querySelector("textarea").value.length
        caract.innerHTML = 500 - qcaract
    })

    let btn2 = document.querySelector("#submit-btn")
    let contentArr = []
    btn2.addEventListener("click", function (evento){
        evento.preventDefault()
        let form = document.querySelector("#evaluation-form")
        for (let i = 0; i < form.length; i++) {
            let testIdentifying = document.querySelector("#identifying")
            let testMailHouse = document.querySelector("#mail-house")
            let testFamily = document.querySelector("#family")
            let testContent = document.querySelector("#content")
            let testValuation = document.querySelector("#valuation")
            let testComments = document.querySelector("#comments")

            if (testIdentifying != null) {
                let nome = document.createElement("p")
                nome.innerText = "Nome: " + document.querySelector("#input-name").value + " " + document.querySelector("#input-lastname").value
                form.removeChild(testIdentifying)
                form.appendChild(nome)
            }
            if (testMailHouse != null) {
                let email = document.createElement("p")
                let house = document.createElement("p")
                email.innerText = "Email: " + document.querySelector("#input-email").value
                house.innerText = "Casa: " + document.querySelector("#house").value
                form.removeChild(testMailHouse)
                form.appendChild(email)
                form.appendChild(house)
            }
            if (testFamily != null) {
                let family = document.createElement("p")
                family.innerText = "Família: " + document.querySelector('input[name="family"]:checked').value
                form.removeChild(testFamily)
                form.appendChild(family)
            }
            if (testContent != null) {
                let content = document.createElement("p")
                for (let i = 0; i < testContent.children.length; i++) {
                    if (testContent.children[i].checked == true) {
                        contentArr.push(" " + testContent.children[i].value)
                        testContent.removeChild(testContent.children[i])
                        i = 0
                    } else {
                        testContent.removeChild(testContent.firstChild)
                        i = 0
                    }
                }
                content.innerText = "Matérias:" + contentArr.toString()
                form.removeChild(testContent)
                form.appendChild(content)
            }
            if (testValuation != null) {
                let valuation = document.createElement("p")
                valuation.innerText = "Avaliação: " + document.querySelector('input[name="rate"]:checked').value
                form.removeChild(testValuation)
                form.appendChild(valuation)
            }
            if (testComments != null) {
                let comments = document.createElement("p")
                comments.innerText = "Observações: " + document.querySelector("#textarea").value
                form.removeChild(testComments.nextElementSibling)
                form.removeChild(testComments.nextElementSibling)
                form.removeChild(testComments)
                form.appendChild(comments)
            }
        }
    })
} */
