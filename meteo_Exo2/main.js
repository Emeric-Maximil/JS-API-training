
const url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9"
const apiMeteo = fetch(url)
                    .then(async response =>{
                        console.log(response);
                        const json = await response.json();
                        console.log(response);

                        let temp = json.main.temp;
                        temp -= 273.15;
                        temp = temp.toFixed(2);
                        let ville = json.name;
                        let latEtLong = json.coord.lat +' & '+ json.coord.lon;
                    
                        document.getElementById('temp').textContent = temp;
                        document.getElementById('ville').textContent = ville;
                        document.getElementById('latetlong').textContent = latEtLong;
                    
                        document.getElementById('image').setAttribute('src', `https://openweathermap.org/img/wn/` + json.weather[0].icon + "@2x.png");
                    });
