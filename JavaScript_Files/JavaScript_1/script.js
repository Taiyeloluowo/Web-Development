let aboutMeBtn = document.getElementById('about-me')
let mySkillBtn = document.getElementById('my-skill')
let contactBtn = document.getElementById('my-contact')
let paragraph1 = document.getElementById('about-me-content')
let paragraph2 = document.getElementById('skill-content')
let paragraph3 = document.getElementById('contact-content')


aboutMeBtn.onclick = () => {
    paragraph1.style.display = 'block'
    paragraph2.style.display = 'none'
    paragraph3.style.display = 'none'
}

mySkillBtn.onclick = () => {
    paragraph1.style.display = 'none'
    paragraph2.style.display = 'block'
    paragraph3.style.display = 'none'
}

contactBtn.onclick = () => {
    paragraph1.style.display = 'none'
    paragraph2.style.display = 'none'
    paragraph3.style.display = 'block'
}