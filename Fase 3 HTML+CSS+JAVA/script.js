//MudaFotoAoClick
const images = [ "https://media.licdn.com/dms/image/v2/D4E03AQHeueQxrSvYZw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728622866497?e=1735776000&v=beta&t=603KeQGLycRuCPutJhM-UMrqY9vJm7iQ_nhMEybMU4w",  "https://assets.codepen.io/13063257/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1726718581&width=512"
];
let currentIndex = 0;
function changeImage() {
    const mainImage = document.getElementById('mainImage');
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
}
//FunçãoAdicionarNovaUC
function addNewUC() {
  let newUC = prompt("Digite o nome da nova UC:");
  if (newUC) {
  let table = document.getElementById('ucTable');
  let newRow = table.insertRow();
  let newCell = newRow.insertCell();
    newCell.colSpan = 7;
    newCell.textContent = newUC;
    //BotõesDeOrdenação
     let btnCell = newRow.insertCell();
     btnCell.innerHTML = `<button onclick="moveRow(this, 'up')">↑</button><button onclick="moveRow(this, 'down')">↓</button>`;
    }
}
//FunçãoMoverUCs(cima/baixo)
function moveRow(button, direction) {
    let row = button.parentNode.parentNode;
    let sibling = (direction === 'up') ? row.previousElementSibling : row.nextElementSibling;
    if (sibling) {
    if (direction === 'up') {
    row.parentNode.insertBefore(row, sibling);
        } else {
            sibling.parentNode.insertBefore(sibling, row);
        }
    }
}
//FunçãoValidarCPF
function validateCPF() {
 const cpf = document.getElementById('cpf').value;
 const cpfError = document.getElementById('cpfError');
 const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!cpfPattern.test(cpf)) {
        cpfError.textContent = "CPF inválido.Exemplo: 123.456.789-00";
        alert("CPF inválido.Use este formato ddd.ddd.ddd-dd");
    } else {
        cpfError.textContent = "";
    }
}
//FunçãoValidarE-mail
function validateEmail() {
 const email = document.getElementById('email').value;
 const emailError = document.getElementById('emailError');
 const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "E-mail inválido.Exemplo: SeuEmail@dominio.com";
      alert("E-mail inválido.Use este formato SeuEmail@dominio.com");
    } else {
      emailError.textContent = "";
    }
}