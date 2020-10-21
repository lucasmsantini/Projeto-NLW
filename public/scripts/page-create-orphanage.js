const map = L.map('mapid').setView([-27.8139819,-50.3030171], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
    .addTo(map);

    const icon = L.icon({
        iconUrl: "./images/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29,68],
    
});

//create and add

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value=lat;
    document.querySelector('[name=lng]').value=lng;

    //remover o iconAnchor
    marker && map.removeLayer(marker);

    //adicionar icon
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
})

// adicionar campo de foto

function addPhotoField () {
    //pegar o container de fotos #images
    const container = document.querySelector('#images');

    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //verificar se campo estavazio, se nao, nao adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value=""
    console.log('limpou o campo');

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
    console.log('adicionado clone');
    
}


function deleteField(event){
    console.log(event.currentTarget)
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    console.log(fieldsContainer.length);
    if(fieldsContainer.length < 2) {
        
        //limpar o valor do campo
        span.parentNode.children[0].value = "";
        console.log('ParentNode')
        console.log(parentNode)
       
        return
    }
    
    //deletar o campo
    span.parentNode.remove();
}

//troca do sim e não
function toggleSelect(event) {

    //retirar a classe active dos botoes 
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'));

    //colocar a classee Active no botao clicado
    const button = event.currentTarget
    
    button.classList.add('active');

    //atualizar o inputReader com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    
    input.value = button.dataset.value
}

function validate (event) {
    //validar se lat e lng estão preenchidos
    const needLatLng = false; //deixar TRUE e mandar para FALSE automaticamente para o código funcionar
    if(needLatLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }    
}