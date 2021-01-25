    const test = document.getElementById('1');
    const topcoord = test.getBoundingClientRect().top;
    const bottomcoord  = test.getBoundingClientRect().bottom;
    let koord = 0;
 
   
    

const scroller = (id)=>{ 
    const scrollablecontent = document.getElementById(id);
   /*  console.log()
    console.log(pageYOffset)
    if (topcoord-pageYOffset <= 400){
        scrollablecontent.style.position = "fixed"
        scrollablecontent.style.setProperty("--newtransitionX","-110%")
        scrollablecontent.style.top = "72%"
    if (topcoord- pageYOffset>0){
    koord = Math.abs(topcoord - pageYOffset-400);
    scrollablecontent.style.setProperty("--newtransitionY","-"+(koord*1.6)/2000*100+"%")
    }
    else{
        if (test.getBoundingClientRect().bottom>980){
        scrollablecontent.style.setProperty("--newtransitionY","-"+((pageYOffset-topcoord+koord)*1.6)/2000*100+"%")
    }
    else{
        scrollablecontent.style.position = "absolute";
        scrollablecontent.style.setProperty("--newtransitionX","-110%") 
        scrollablecontent.style.top = "86%"
    }
}
    
    
}
else{
    
    scrollablecontent.style.position = "absolute"
    scrollablecontent.style.setProperty("--newtransitionX","-110%")
    scrollablecontent.style.top = "300px"  

    
} */

if (topcoord-pageYOffset <= 200){
    scrollablecontent.style.position = "fixed"
    scrollablecontent.style.top = "50px" 
console.log(test.getBoundingClientRect().bottom)
    if (topcoord- pageYOffset>0){
        koord = Math.abs(topcoord - pageYOffset-200);
        scrollablecontent.style.setProperty("--newtransitionY","-"+(koord*1.2)/2000*100+"%")
        }
        else{
            if (test.getBoundingClientRect().bottom>560){
            scrollablecontent.style.setProperty("--newtransitionY","-"+((pageYOffset-topcoord+koord)*1.2)/2000*100+"%")
        }
        else{
            scrollablecontent.style.position = "absolute"
             scrollablecontent.style.setProperty("--newtransitionX","-625%")
            scrollablecontent.style.top = "74%"
        }
        }

}
else{
    
    scrollablecontent.style.position = "absolute"
    scrollablecontent.style.setProperty("--newtransitionX","-625%")
    scrollablecontent.style.top = "-160px"  

    
} 









}
window.addEventListener("scroll",() => scroller('2'))

