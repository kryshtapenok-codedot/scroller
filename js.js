const test = (id)=>{
    const elem = document.getElementById(id);
    elem.style.setProperty("--newtransition","-"+(pageYOffset*1.6)/2000*100+"%")
}
window.addEventListener("scroll",() => test('2'))