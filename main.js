let target1 = document.getElementById('targetObject1');
let target2 = document.getElementById('targetObject2');
let opsi = document.getElementById('selection');
let input = document.getElementById('inputValue');

let update = ()=>{
    let option = opsi.options.selectedIndex;
    if(input.value == ''){
        alert('inputan Kosong!')
        return 0;
    }
    switch(option){
        case 1:
            target1.style.backgroundColor = input.value
            break;
        case 2:
            target2.style.color = input.value
            break;
        case 3:
            target2.style.fontSize = input.value+'px'
            break;
        case 4:
            target2.style.fontFamily = input.value
            break;
        case 5:
            target1.style.width = input.value+'px'
            break;
        case 6:
            target1.style.height = input.value+'px'
            break;
        case 7:
            target1.innerText = input.value
            break;
        default:
            alert('Pilihan tidak ada!')
            break;
    }
}

input.addEventListener('keyup', (e)=>{
    if(e.keyCode == 13){
        update();
    }
})