
window.onload = function(){
    let div = document.querySelector('.text');

    // div.onclick = function(){
    //     div.style.background = 'red';
    // }

    // div.onclick = function(){
    //     div.style.color = 'blue';
    // }

    // div.addEventListener('click',function(){
    //     div.style.background = 'red';
    // });

    div.addEventListener('click',stBg);

    function stBg(){
        div.style.background = 'red';
        div.style.color = 'blue';
    }


}




















