let p1 = document.querySelectorAll('p')[0];
let p2 = document.querySelectorAll('p')[1];
let p3 = document.querySelectorAll('p')[2];

function changerVille(){
    let ville = document.getElementById('ville').value;





    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ ville + "&appid=6f88826d767f323ad19cd282444924e9"
    const apiMeteo = fetch(url)
                    .then(async response =>{
                        if(response.status == 200){
                            const json = await response.json();
  
                            let temperature = json.main.temp;
                            temperature -= 273.15;
                            temperature = temperature.toFixed(2);
                            let nomville = json.name;
                            let temps = json.weather[0].main;
                        
                            document.getElementById('nom').textContent = nomville;
                            document.getElementById('temps').textContent = temps;
                            document.getElementById('temperature').textContent = temperature;
                        }else{
                            console.log("C'est pas ce qui est demandé, changer nom de ville");
                        }
                        
                    
                        
                    });

                }
