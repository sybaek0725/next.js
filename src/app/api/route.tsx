export default function api(){
    fetch("https://api.sampleapis.com/futurama/characters") 
    .then(resp => resp.json()) 
    .then(data => console.log(data)); 
}