const Formulario = document.getElementById ("form");
Formulario.addEventListener ('submit',e=>{
    e.preventDefault();
    const nombres = Formulario['nombre'].value;
    console.log(nombre);
})