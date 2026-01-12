const refreshBtn = document.getElementById("refreshBtn")
const date = document.getElementById("date")
const time = document.getElementById("time")
const dayOfWeek = document.getElementById("dayOfWeek")
const monthName = document.getElementById("monthName")
const fullInfo = document.getElementById("fullInfo")

const dni = [ 'niedziela','poniedzialek','wtorek','sroda','czwartek','piatek','sobota']

const miesiac = ['styczen','luty','marzec','kwiecien','maj','czerwiec','lipiec','sierpien','wrzesien','pazdziernik','listopad','grudzien']

refreshBtn.addEventListener("click", function(){
    data = new Date()

    date.innerText = `${data.getDate()}.${data.getMonth()+1}.${data.getFullYear()}`

    time.innerText = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`

    dayOfWeek.innerText = `${dni[data.getDay()]}`

    monthName.innerText = `${miesiac[data.getMonth()]}`

    fullInfo.innerText = `Dzisiaj jest ${dni[data.getDay()]}, ${data.getDate()}.${data.getMonth()+1}.${data.getFullYear()}, godzinia ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`

})
