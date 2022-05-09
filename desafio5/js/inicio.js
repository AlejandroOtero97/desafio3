async function main(){
    const response = await fetch('template/inicio.handlebars')
    const templateText = await response.text()
    const templateFn = Handlebars.compile(templateText);
    const html = templateFn({nombre:'coder'});
    document.getElementById('espacioParaContenido').innerHTML = html;
}


