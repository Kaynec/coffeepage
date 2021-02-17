import {main} from './contentloaded'
import {displayController}from './contentloaded'
import workFunction from './work'
import contact from './contact'


main()
const content = document.getElementById('content')

content.addEventListener('click',(e)=>{
    if (e.target.id==='main'){
        displayController()
    }else if (e.target.id==='Menu'){
        workFunction()
    }else if (e.target.id==='contact'){
        contact()
    }
})

