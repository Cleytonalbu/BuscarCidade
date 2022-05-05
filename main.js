async function estados() {
    try {
        const res = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
        const data = await res.json();
        console.log(data)
        data.forEach(element => {
            document.getElementById('estados').innerHTML += ("<option value=" + element.sigla + ">" + element.nome + "</option>")
        });


    } catch (error) {
        console.log(error)
    }
}

async function cidades() {
    try {
        var x = document.getElementById('estados')
        var texto = x.options[x.selectedIndex].value;
        console.log(texto)
        const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${texto}/municipios`);
        const data = await res.json();

        data.forEach(element => {
            document.getElementById('cidades').innerHTML += ("<option value=" + element.nome + ">" + element.nome + "</option>")
        });

    } catch (error) {
        console.log(error)
    }
}