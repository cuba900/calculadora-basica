function calcula(operacion) {
    let operando1=document.calc.operando1.value
    let operando2=document.calc.operando2.value 
    let result=eval(operando1 + operacion + operando2)
    document.calc.resultado.value = result
}

function clearcalc(e) {
    e.preventDefault();
    $("#calc")[0].reset()
}
    