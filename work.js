export default workFunction

function workFunction(){
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
    wrapper.classList.add('wrapper2')
    let header1=document.createElement('H1')
    header1.textContent=`What Do You Need?`
    wrapper.append(header1)


    let div1=document.createElement('DIV')
    div1.classList.add('div')
    div1.classList.add('div1')
    let div2=document.createElement('DIV')
    div2.classList.add('div')
    div2.classList.add('div2')
    let div3=document.createElement('DIV')
    div3.classList.add('div')
    div3.classList.add('div3')
    wrapper.append(div1,div2,div3)
    content.append(navbar,wrapper)



    let natural=document.createElement('SPAN')
    natural.textContent='Natural'
    let coffee = document.createElement('SPAN')
    coffee.textContent=` Coffee`
    div1.append(natural,coffee)

    let chinese=document.createElement('SPAN')
    chinese.textContent='Chinese'
    let tea = document.createElement('SPAN')
    tea.textContent=' '+'Tea'
    div2.append(chinese,tea)

    let sweet=document.createElement('SPAN')
    sweet.textContent='Sweet'
    let desserts = document.createElement('SPAN')
    desserts.textContent=' '+'Desserts'
    div3.append(sweet,desserts)

    let p = document.createElement('P')
    p.textContent='Never Underestimate the Importance of Being Properly Caffeinated.'

    wrapper.append(p)

}