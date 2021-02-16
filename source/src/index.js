import {main} from './contentloaded'
import {displayController}from './contentloaded'
import workFunction from './work'
import contact from './contact'


main()
const content = document.getElementById('content')

content.addEventListener('click',(e)=>{
    if (e.target.id==='main'){
        content.innerHTML=''
        content.classList.add('transition')
        setTimeout(()=>{
        content.classList.remove('transition')
        },4000);
        displayController()
    }else if (e.target.id==='Menu'){
        content.innerHTML=''
        content.classList.add('transition')
        setTimeout(()=>{
        content.classList.remove('transition')
        },4000);
        workFunction()
    }else if (e.target.id==='contact'){
        content.innerHTML=''
        content.classList.add('transition')
        setTimeout(()=>{
        content.classList.remove('transition')
        },4000);
        contact()
    }
})

