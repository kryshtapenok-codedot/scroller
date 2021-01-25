    const test = document.getElementById('1');
    const topcoord = test.getBoundingClientRect().top;
    const bottomcoord  = test.getBoundingClientRect().bottom;
    let koord = 0;

 
   
    

const scroller = (id)=>{ 
/*     const scrollablecontent = document.getElementById(id);
 
    if(test.getBoundingClientRect().top <600 & test.getBoundingClientRect().bottom>0){
    scrollablecontent.style.setProperty("--newtransition","-"+(Math.abs(pageYOffset-topcoord)*1.6)/2000*100+"%")
    console.log(test.getBoundingClientRect().top)
    console.log(pageYOffset)}
    else{
        scrollablecontent.style.setProperty("--nawtransition","0%")
    } */


    const scrollablecontent1 = document.getElementById(id);
    if (topcoord-pageYOffset <= 400){
        console.log(test.getBoundingClientRect().top) 
        scrollablecontent1.style.position = "fixed"
        scrollablecontent1.style.setProperty("--newtransitionX","-110%")
        scrollablecontent1.style.top = "72%"
    if (topcoord- pageYOffset>0){
    koord = Math.abs(topcoord - pageYOffset-400);
    scrollablecontent1.style.setProperty("--newtransitionY","-"+(koord*1.6)/2000*100+"%")
    console.log((koord*1.6)/2000*100);
    }
    else{
        if (test.getBoundingClientRect().bottom>980){
        scrollablecontent1.style.setProperty("--newtransitionY","-"+((pageYOffset-topcoord+koord)*1.6)/2000*100+"%")
    }
    else{
        scrollablecontent1.style.position = "absolute";
        scrollablecontent1.style.setProperty("--newtransitionX","-110%") 
        scrollablecontent1.style.top = "86%"
    }
}
    
    
}
else{
    
    scrollablecontent1.style.position = "absolute"
    scrollablecontent1.style.setProperty("--newtransitionX","-110%")
    scrollablecontent1.style.top = "300px"  

    
}
}
window.addEventListener("scroll",() => scroller('2'))

