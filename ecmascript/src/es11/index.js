// Dinamic import
const button=document.getElementById('btn');
// Descarga el archivo solo cuando sea necesario
button.addEventListener('click',async function(){
    const module= await import('./file.js');
    module.hello();
});