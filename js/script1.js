function main() {
    
    let rnum = Math.floor(Math.random() * 3 + 1);
    // console.log(rnum);
    const arr = [1, 2, 3];
    var indexnum = arr.indexOf(rnum);
    sessionStorage.setItem('indexnum', indexnum )
    var symbolEle = document.getElementsByClassName(indexnum)[0];
    symbolEle.innerText = "*";
    // console.log(symbolEle.innerText);s
}  
main();

function show(x) {
    
    let containerx = document.getElementById(x);
    let style1 = document.getElementById('0').getAttribute('style');
    let style2 = document.getElementById('1').getAttribute('style');
    let style3 = document.getElementById('2').getAttribute('style');
    if (style1 != "visibility: hidden" && style2 != "visibility: hidden" && style3 != "visibility: hidden") {
    let indexnum = sessionStorage.getItem('indexnum');
    containerx.setAttribute("style", "visibility: hidden");
    if(x == indexnum) {
        // console.log(x);
        win();
    }
    else {
        lose();
    }
}
else {
    // console.log("please click on replay");
}

   
}
function win () {
    let won = document.createElement('h1')
    won.className = "text-center";
    let t = document.createTextNode("Correct Guess, Congratulations!");
    won.appendChild(t);
    let res = document.getElementsByClassName("result")[0];
    res.append(won);
    // console.log("you won")
}
function lose() {
    let lost = document.createElement('h1')
    lost.className = "text-center";
    let t = document.createTextNode("Oops, Try Again");
    lost.appendChild(t);
    let res = document.getElementsByClassName("result")[0];
    res.append(lost);
    // console.log("you lost")
    
}
let refresh = document.getElementById('refresh')
refresh.addEventListener('click', function () {
    window.location.reload();
    console.log("page refreshed")
} )




