

const url = 'https://randomuser.me/api/'

const btn = document.querySelector('button')
const spinner = document.querySelector('.spinner-border')
const divEl = document.querySelector('img')

// spinner.styl.displey = 'none'

btn.addEventListener('click', () => {
    fetch(url)
     .then(( response ) => {
        console.log(response);
        
        return response.json()
     })
     .then((userImg) => {
        console.log(userImg);
        // divEl.innerHTML = ''
        for(const user of 'userImg'){
            console.log(user.url);
            divEl.innerHTML+= `
            <img src="${user.url}" alt="">
            `
           }
     })
})