function obtener_datos(event){
    event.preventDefault();

    let A = parseFloat(document.getElementById("variable_a").value);
    let B = parseFloat(document.getElementById("variable_b").value);
    let dA = parseFloat(document.getElementById("variable_da").value);
    let dB = parseFloat(document.getElementById("variable_db").value);

    let operaciones = document.getElementById("operaciones").value;

    let resultado = escoger_operacion(A,B,dA,dB,operaciones)

    imprimir_resultado(operaciones,resultado)
}   

function suma(A, B, dA, dB) {
    let operacion = A + B;
    let operacion_derivada = dA + dB;
    return { operacion, operacion_derivada };
}

function multiplicacion(A, B, dA, dB) {
    let operacion = A * B;
    let operacion_derivada = (A * dB) + (B * dA);
    return { operacion, operacion_derivada };
}

function division(A, B, dA, dB) {
    let operacion = A / B;
    let operacion_derivada = ((B * dA) - (A * dB)) / (B ** 2);
    return { operacion, operacion_derivada};
}

function escoger_operacion(A,B,dA,dB,operaciones){
    if (isNaN(A) || isNaN(B) || isNaN(dA) || isNaN(dB)){
        document.getElementById("resultado").textContent = "Por favor ingresa todos los datos."
    }


    let resultado;
    switch  (operaciones){
        case "suma":
            resultado = suma(A,B,dA,dB);
            break;
        case "multiplicacion":
            resultado = multiplicacion(A,B,dA,dB);
            break; 
        case "division":
            resultado = division(A,B,dA,dB);
            break;
    }

    return resultado
}

function truncar(numero, decimales) {
    const factor = Math.pow(10, decimales);
    return Math.trunc(numero * factor) / factor;
}

function redondear(numero, decimales) {
    return Number(numero.toFixed(decimales));
}


function imprimir_resultado(operaciones,resultado){
    document.getElementById("resultado_variables").textContent = `Variable ${operaciones}: ${resultado.operacion}`;
    document.getElementById("resultado_derivadas").textContent = `Derivada ${operaciones}: ${resultado.operacion_derivada}`;
    document.getElementById("resultado_truncado").textContent = `Derivada truncada ${operaciones}: ${truncar(resultado.operacion_derivada,4)}`;
    document.getElementById("resultado_redondeado").textContent = `Derivada redondeada ${operaciones}: ${redondear(resultado.operacion_derivada,0)}`;
}
