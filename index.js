const url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getLoc() {
    const response = await fetch(url);
    const data = await response.json();
    const { name, latitude, longitude, altitude, velocity, visibility } = data;
    console.log(data);
    document.querySelector('.name').textContent = name;
    document.querySelector('.lat').textContent = latitude;
    document.querySelector('.long').textContent = longitude;
    document.querySelector('.alt').textContent = altitude;
    document.querySelector('.vel').textContent = velocity;
    document.querySelector('.vis').textContent = visibility;
}

getLoc();