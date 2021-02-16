export default contact
function contact(){
    let content=document.getElementById('content')
    let navbar=document.createElement("NAV")
    navbar.classList.add('navbar')
    let logo = document.createElement("A")
    let span = document.createElement('SPAN')
    let span2 = document.createElement('SPAN')
    span.classList.add('span')
    span2.classList.add('span2')
    span.textContent='Club'
    span2.textContent='Coffee'
    logo.classList.add('logo')
    
    navbar.appendChild(logo)
    logo.appendChild(span)
    logo.appendChild(span2)

    let ul = document.createElement('UL')
        navbar.appendChild(ul)
        let listItem1=document.createElement('Li')
        listItem1.textContent='Main'
        listItem1.setAttribute("id","main")
        ul.appendChild(listItem1)
    
        let listItem2=document.createElement('Li')
        listItem2.textContent='Menu'
        listItem2.setAttribute("id","Menu")
        ul.appendChild(listItem2)
    
        let listItem3=document.createElement('Li')
        listItem3.textContent='Contact'
        listItem3.setAttribute("id","contact")
        ul.appendChild(listItem3)

        navbar.appendChild(ul)

    let wrapper=document.createElement('DIV')
    wrapper.classList.add('wrapper3')
    let header=document.createElement('H1')
    header.textContent='Want To Contact Us?'
    wrapper.append(header)

    let div1 = document.createElement('DIV')
    div1.classList.add('fisrtDiv')
    let para = document.createElement('P')
    para.classList.add('text')
    para.textContent=`
619 Congress Street
Portland, ME
04101
207-221-3000`
div1.appendChild(para)
    let div2 = document.createElement('DIV')
    div2.classList.add('secondDiv')
    let textInfo=document.createElement('SPAN')
    textInfo.textContent='Our Social Media Links'
    let facebook=document.createElement('A')
    facebook.classList.add('fa')
    facebook.classList.add('fa-facebook')

    let twitter=document.createElement('A')
    twitter.classList.add('fa')
    twitter.classList.add('fa-twitter')
    let instagram=document.createElement('A')
    instagram.classList.add('fa')
    instagram.classList.add('fa-instagram')


    content.append(navbar,wrapper)
    wrapper.append(div1)
    wrapper.append(div2)
    div2.append(textInfo,facebook,twitter,instagram)
}