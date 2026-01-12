const convertBtn = document.getElementById("convertBtn")
const clearBtn = document.getElementById("clearBtn")
const date = document.getElementById('dateInput').value
const results = document.getElementById('results')
const format1 = document.getElementById('format1')
const format2 = document.getElementById('format2')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const noSeparators = document.getElementById('noSeparators')
const reversed = document.getElementById('reversed')
data = date.split('-')

clearBtn.addEventListener('click', function(){
    data = ''
    format1.innerText = ``
    format2.innerText = ``
    day.innerText = ``
    month.innerText = ``
    year.innerText = ''
    noSeparators.innerText = ''
    reversed.innerText = ''

})

convertBtn.addEventListener("click", function(){
    results.style.display = 'block'

    data = date.split('-')

    format1.innerText = `${data[2]}-${data[1]}-${data[0]}`
    format2.innerText = `${data[0]}.${data[1]}.${data[2]}`
    day.innerText = `${data[0]}`
    month.innerText = `${data[1]}`
    year.innerText = `${data[2]}`
    noSeparators.innerText = `${data[0]}${data[1]}${data[2]}`
    reversed.innerText = `${data[2]}-${data[1]}-${data[0]}`

})
