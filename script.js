const Hr = document.getElementById("horas");
const Mn = document.getElementById("minutos");
const Sg = document.getElementById("segundos");
const Tempo=[]

Tempo=setInterval(function time(){
    const DateDay= new Date();
    const hr = DateDay.getHours()
    const mn = DateDay.getMinutes();
    const sg = DateDay.getSeconds();


    if(hr<10)hr = '0'+ hr;
    if(mn<10)mn = '0'+ mn;
    if(sg<10)sg = '0'+ sg;

    Hr.textContent=hr;
    Mn.textContent=mn;
    Sg.textContent=sg;
})
function Show(){
    let menubar=document.querySelector('.menu-bar')
    if(menubar.classList.contains('open')){
        menubar.classList.remove('open')
    }else{
        menubar.classList.add('open')
    }
}
