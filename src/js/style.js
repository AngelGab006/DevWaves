const hr = document.getElementById('border-nav');
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
document.addEventListener('scroll', ()=>{
    if(isInViewport(hr)) {
        hr.style.animationName = 'hr-animation'
        hr.style.width = '94.5%'
    } else {
        hr.style.animationName = ''
        hr.style.width = '0px'
    }  
})
