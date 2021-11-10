const WEATHER_API_KEY=process.env.WEATHER_API_KEY;

function onGeoOk(position){
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
    const url=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    //units=metric 추가시 섭씨로 온도 제공
    fetch(url).then(response=>response.json()).then((data)=>{
        const weatherInfo=document.getElementById("weather");
        const city=data.name;
        const kind=data.weather[0].main;
        const heat=data.main.temp;
        weatherInfo.innerText=`${city} ${kind} ${heat}`
    });
    // 서버가 url에 접근, url에 접근을 하면 then 뒤에 구문들이 실행됨
    // url의 json 파일을 불러옴(=response.json)
    // fethc 순서 : url 호출 → url에서 json값 받아옴 → 받아온 json값에서 원하는 데이터 출력력    console.log(url);

}

function onGeoError(){
    alert("찾을 수 업음")
}

export function weather(){
    console.log(WEATHER_API_KEY);
    navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
}
