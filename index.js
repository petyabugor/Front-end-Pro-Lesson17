//доступ к элементу с Важной информацией
console.log(document.body.firstElementChild)
console.log(document.body.children[0])
console.log(document.body.childNodes[1])

//доступ к всем элементам с женскими именами
const woman= document.querySelectorAll('[data-id="woman"]')
for( const item of woman){
  console.log(item)
}

var elems = document.querySelectorAll('[data-id="woman"]');
for (var i = 0; i < elems.length; i++) {
  console.log( elems[i].innerHTML );
}


//счетчик
let count = document.getElementById("buttonCountNumber");

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  count.innerHTML++;
  return countPlus
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  count.innerHTML--;
  return countMinus
}