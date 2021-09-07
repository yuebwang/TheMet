
const objectID = Math.floor(Math.random() * 470000);
const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
const objectURL = `${url}/${objectID}`;
console.log(objectURL);
// const url = 'https://services2.arcgis.com/RiZWfy7B1r76pKTz/arcgis/rest/services/COVID_city_FC/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';
// const url = 'https://dog.ceo/api/breeds/image/random';

const imgTag = document.querySelector('img');
const captionTag = document.querySelector('.caption');
const buttonTag = document.querySelector('button.fetchData');

// console.log(url);
const fetchArt = async () => {
    const response = await fetch(objectURL);
    const data = await response.json();
    //console.log(data.primaryImage);
    

    imgTag.src = data.primaryImage === undefined ? "./refresh.jpg" : data.primaryImage;
    captionTag.innerHTML = data.title === undefined ? "Uh oh, try refresh 🔄" : data.title;
    
    if (data.primaryImage === "") {
        imgTag.src = "./refresh.jpg";
        captionTag.innerHTML = "Uh oh, try refresh 🔄";
    }
}

fetchArt();


