let elementosForm = document.querySelectorAll("input");
let verificador = document.querySelectorAll(".verificar");
let verificadorTotal = document.querySelector("#verificarTodos");
var form = document.querySelector("#formulario");


let check = true;
let index = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

checkFields = () => {
   elementosForm.forEach((element) => {
    if (element.value.trim() == "") falha();
    else index++;
   });

   verificadorTotal.style.visibility = "visible";
   verificadorTotal.innerHTML = "Campos obrigatórios não registrados";
    
   if (check) sucesso();
};

falha = () => {
    verificador[index].innerHTML = "*Campo Obrigatório";
    verificador[index].style.visibility = "visible";
    check = false;
    index++;
};

sucesso = () => {
    verificadorTotal.innerHTML = `<p class= "sucess">Sucesso!</p>`;
    reloadPage();
}

reloadPage = () => {
    setTimeout(() => {
    window.location.reload();
}, 3000);
};






