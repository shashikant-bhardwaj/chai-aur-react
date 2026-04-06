function customRender(reactElememt , container){
   /*
    const domElemennt = document.createElement(reactElememt.type)
    domElemennt.innerHTML = reactElememt.children
    domElemennt.setAttribute('href', reactElememt.props.href)
    domElemennt.setAttribute('target', reactElememt.props.target)
    container.appendChild(domElemennt)
    */
    
    const domElemennt = document.createElement(reactElememt.type)
    domElemennt.innerHTML = reactElememt.children
    for (const prop in reactElememt.props) {
        if (prop === 'children') continue;
        domElemennt.setAttribute(prop , reactElememt.props[prop])
    }
    container.appendChild(domElemennt)
}


const reactElememt = {
    type: 'a',
    props: {href: 'https://google.com',
             target: '_blank'

    }, 
    children: 'click me to visit '

}


const mainContainer = document.querySelector('#root')

customRender(reactElememt , mainContainer)

q