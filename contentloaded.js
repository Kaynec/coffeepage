export   {main} 
export {displayController}
     function displayController(){
        let content=document.getElementById('content')
        let navbar=document.createElement("NAV")
        navbar.classList.add('navbar')
        let logo = document.createElement("A")
        let span = document.createElement('SPAN')
        let span2 = document.createElement('SPAN')
        span.classList.add('span')
        span2.classList.add('span2')
        span.innerText='Club'
        span2.innerText='Coffee'
        logo.classList.add('logo')
        
        navbar.appendChild(logo)
        logo.appendChild(span)
        logo.appendChild(span2)

        let ul = document.createElement('UL')
        navbar.appendChild(ul)
        let listItem1=document.createElement('Li')
        listItem1.innerText='Main'
        listItem1.setAttribute("id","main")
        ul.appendChild(listItem1)
    
        let listItem2=document.createElement('Li')
        listItem2.innerText='Menu'
        listItem2.setAttribute("id","Menu")
        ul.appendChild(listItem2)
    
        let listItem3=document.createElement('Li')
        listItem3.innerText='Contact'
        listItem3.setAttribute("id","contact")
        ul.appendChild(listItem3)

        navbar.appendChild(ul)

        let wrapper=document.createElement('DIV')
        wrapper.classList.add('wrapper')

        let header=document.createElement('H1')
        header.classList.add('h1')
        header.innerText=` Way too Much Coffee Here ...`
        wrapper.appendChild(header)

        let disc=document.createElement('SPAN')
        disc.classList.add('disk')
        disc.innerText=` Serving Only The Best Since Forever`
        wrapper.appendChild(disc)
        content.appendChild(navbar)
        content.appendChild(wrapper)  
    }

    function main(){
        let content=document.getElementById('content')
        content.classList.add('transition')
        setTimeout(()=>{
        content.classList.remove('transition')
        },4000);
        window.addEventListener('DOMContentLoaded',displayController)
    }