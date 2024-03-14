
const techStackElem = document.getElementById('tech');

if(window.screen.width >= 768){
    techStackElem.addEventListener('mouseenter', () => {
        const [stackA, stackB] = techStackElem.children
        stackA.children[0].textContent = 'techIKnow='
        stackA.classList.add('stack-a__col')
        stackB.classList.add('stack-b__col')
    })
    techStackElem.addEventListener('mouseleave', () => {
        const [stackA, stackB] = techStackElem.children
        stackA.children[0].textContent = 'XXXXXXXXXX'
        stackA.classList.remove('stack-a__col')
        stackB.classList.remove('stack-b__col')
    })
} else {
    const [stackA, stackB] = techStackElem.children
    stackA.children[0].textContent = 'techIKnow='
    stackA.classList.add('stack-a__col')
    stackB.classList.add('stack-b__col')
}
