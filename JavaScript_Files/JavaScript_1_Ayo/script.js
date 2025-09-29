const about = document.getElementById('about')
const contact = document.getElementById('contact')
const skill = document.getElementById('skill')
const skillOut = document.getElementById('skill-out')
const contactOut = document.getElementById('contact-out')
const aboutOut = document.getElementById('about-out')

about.onclick = function(){
    aboutOut.style.display = 'block'
    contactOut.style.display = 'none'
    skillOut.style.display = 'none'
    about.style.background = 'green'
    about.style.color = 'white'
    contact.style.background = 'none'
    contact.style.color = 'black'
    skill.style.background = 'none'
    skill.style.color = 'black'
}
contact.onclick = function(){
    contactOut.style.display = 'flex'
    aboutOut.style.display = 'none'
    skillOut.style.display = 'none'
    about.style.background = 'none'
    about.style.color = 'black'
    contact.style.background = 'green'
    contact.style.color = 'white'
    skill.style.background = 'none'
    skill.style.color = 'black'
}
skill.onclick = function(){
    skillOut.style.display = 'block'
    aboutOut.style.display = 'none'
    contactOut.style.display = 'none'
// btn stylings
    about.style.background = 'none'
    about.style.color = 'black'
    contact.style.background = 'none'
    contact.style.color = 'black'
    skill.style.background = 'green'
    skill.style.color = 'white'
}