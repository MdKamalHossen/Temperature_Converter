

const calculateTemp = ()=>{
    debugger;
   const tempInput = document.getElementById('temp').value;
    const tempSelected = document.getElementById('tem_diff');
    const valueTemp  = tem_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel)=>{
    let ferhenheit = Math.round((cel * 9/5) +32);
    return ferhenheit;
    }
    const fehToCel = (fer)=>{
        let Celsius = Math.round((fer - 32) * 5/9);
        return Celsius;
}

let result;
if(valueTemp == 'cel'){
    result = celToFah(tempInput);
    document.getElementById('show').innerHTML = `${result} Farhenheite`;
}
else{
    result = fehToCel(tempInput);
    document.getElementById('show').innerHTML = `${result} Celsius`;
}
}