(function (){
    'use strict'
    var $minutes = document.querySelector('[data-js="minutes"');
    var $seconds = document.querySelector('[data-js="seconds"]');
    var $hours = document.querySelector('[data-js="hours"]');
    var $start = document.querySelector('[data-js="start"]')
    var $pause = document.querySelector('[data-js="stop"]')
    var $reset = document.querySelector('[data-js="reset"]')
    var intervalo;
    var counterMinutes = 0;
    var counterSeconds = 0;
    var counterHours = 0;
    $pause.disabled=true;
    

    $start.addEventListener('click',contador,false);
    $pause.addEventListener('click', pause,false);
    $reset.addEventListener('click', reset, false);
   
    
    
    
    function contador(){
        $start.innerHTML = 'Start';
        $start.disabled=true;
        $pause.disabled=false;
        if(counterSeconds === 60){
            counterSeconds = 0;
            counterMinutes++;
            counterMinutes < 10 ? $minutes.innerHTML  = '0'+counterMinutes+'m' : $minutes.innerHTML = counterMinutes+'m';
        }
        if(counterMinutes === 60){
            counterMinutes = 0;
            counterHours++;
            counterHours < 10 ? $hours.innerHTML  = '0'+counterHours+'h' : $hours.innerHTML = counterHours+'h';
        }
        counterSeconds < 10 ? $seconds.innerHTML  = '0'+counterSeconds+'s' : $seconds.innerHTML = counterSeconds+'s';
        
        counterSeconds++;
        
        intervalo = setTimeout(contador,1000)
    }

    function pause(){
        clearInterval(intervalo);
        $start.disabled=false;
        $start.innerHTML = 'Continue';
        $start.addEventListener('click',contador);
    }
    function reset(){
        counterMinutes = 0;
        counterSeconds = 0;
        counterHours = 0;
        
    }
})();