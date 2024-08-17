const scriptURL = 'https://script.google.com/macros/s/AKfycbwOLVYvpXVw_BtMWM7uzHGIX3Rr3U8gtDAOIAfmsYi3pkveLgi9ese9EFrES6CR7PTw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Спасибо за Ваше обращение, мы скоро Вам ответим.."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

// function dateformat() {
//     var date = document.getElementById('date').value;
//     date = moment(date).format('D MMM, YYYY');
//     console.log(date)
//     return false;
// }