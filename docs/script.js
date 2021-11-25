const sections = document.querySelectorAll('section')
var sectionId;
//console.log(sections)
window.addEventListener('scroll', scrollActive)
function scrollActive() {
    const scrollY = window.pageYOffset
    //console.log(scrollY)
    sections.forEach(current => {
        //console.log(current);
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 300;
        sectionId = current.getAttribute('id')
        //console.log(sectionId);
        if (document.querySelector('.nav-item a[href*=' + sectionId + ']') != null) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                console.log(document.querySelector('.nav-item a[href*=' + sectionId + ']'))
                console.log(document.querySelector('.nav-item a[href*=' + sectionId + ']').classList)
                document.querySelector('.nav-item a[href*=' + sectionId + ']').classList?.add('active')
                console.log(document.querySelector('.nav-item a[href*=' + sectionId + ']').classList)
            } else {
                document.querySelector('.nav-item a[href*=' + sectionId + ']').classList?.remove('active')
            }
        }

    })
}