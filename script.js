function crearSucesion() {

    // Obtener los valores escritos por el usuario

    let primero =
        Number(
            document.getElementById(
                "primerTermino"
            ).value
        );


    let segundo =
        Number(
            document.getElementById(
                "segundoTermino"
            ).value
        );


    let cantidad =
        Number(
            document.getElementById(
                "cantidad"
            ).value
        );



    // Comprobar los datos

    if (
        isNaN(primero) ||
        isNaN(segundo) ||
        cantidad < 4
    ) {

        alert(
            "Introduce valores válidos. " +
            "Debes generar al menos 4 términos."
        );

        return;
    }



    // Vaciar la sucesión anterior

    sucesion = [];



    // Agregar los dos primeros términos

    sucesion.push(primero);

    sucesion.push(segundo);



    // Crear los siguientes términos

    for (
        let i = 2;
        i < cantidad;
        i++
    ) {

        let anterior =
            sucesion[i - 1];


        let anteriorAnterior =
            sucesion[i - 2];


        let nuevo =
            2 * anterior +
            anteriorAnterior;


        sucesion.push(nuevo);
    }



    // Obtener la tabla

    let tabla =
        document.getElementById(
            "tablaTerminos"
        );


    // Limpiar la tabla

    tabla.innerHTML = "";



    // Crear las filas de la tabla

    for (
        let i = 0;
        i < sucesion.length;
        i++
    ) {

        let fila =
            document.createElement("tr");


        let numeroTermino =
            document.createElement("td");


        let operacion =
            document.createElement("td");


        let resultado =
            document.createElement("td");



        numeroTermino.textContent =
            "u" + (i + 1);


        resultado.textContent =
            sucesion[i];



        // Primeros dos términos

        if (
            i === 0 ||
            i === 1
        ) {

            operacion.textContent =
                "Número inicial";

        }


        // Términos restantes

        else {

            operacion.textContent =
                "2(" +
                sucesion[i - 1] +
                ") + " +
                sucesion[i - 2];

        }



        fila.appendChild(
            numeroTermino
        );

        fila.appendChild(
            operacion
        );

        fila.appendChild(
            resultado
        );


        tabla.appendChild(fila);
    }



    // Actualizar el selector

    actualizarSelector();

}



/* =========================
   ACTUALIZAR SELECTOR
========================= */

function actualizarSelector() {

    let selector =
        document.getElementById(
            "terminoOrigen"
        );


    // Limpiar las opciones anteriores

    selector.innerHTML = "";



    /*
        Para realizar el Cuarto Fantasma
        necesitamos cuatro términos:

        a = término de origen
        b = siguiente
        c = siguiente
        d = siguiente

        Por eso los últimos tres términos
        no pueden ser términos de origen.
    */

    let cantidadOpciones =
        sucesion.length - 3;



    for (
        let i = 0;
        i < cantidadOpciones;
        i++
    ) {

        let opcion =
            document.createElement(
                "option"
            );


        opcion.value = i;


        opcion.textContent =
            "u" +
            (i + 1) +
            " = " +
            sucesion[i];


        selector.appendChild(
            opcion
        );
    }

}



/* =========================
   CALCULAR CUARTO FANTASMA
========================= */

function calcularFantasma() {

    // Comprobar que exista una sucesión

    if (
        sucesion.length < 4
    ) {

        alert(
            "Primero debes crear una sucesión."
        );

        return;
    }



    // Obtener el término de origen

    let origen =
        Number(
            document.getElementById(
                "terminoOrigen"
            ).value
        );



    /*
        Los cuatro términos son:

        a = término de origen
        b = siguiente término
        c = siguiente término
        d = siguiente término
    */

    let a =
        sucesion[origen];


    let b =
        sucesion[origen + 1];


    let c =
        sucesion[origen + 2];


    let d =
        sucesion[origen + 3];



    // =========================
    // CALCULAR LA SUMA
    // =========================

    let primeraSuma =
        a + b;


    let segundaSuma =
        c + d;


    let suma =
        primeraSuma +
        segundaSuma;



    // =========================
    // CALCULAR LA RESTA
    // =========================

    let primeraResta =
        d - c;


    let segundaResta =
        a - b;


    let resultado =
        primeraResta -
        segundaResta;



    // Mostrar los resultados

    let caja =
        document.getElementById(
            "resultadoFantasma"
        );


    caja.innerHTML = `

        <div class="subtitulo">
            ✨ Los cuatro términos seleccionados
        </div>


        <div class="terminos">
            ${a}, ${b}, ${c}, ${d}
        </div>



        <div class="suma">

            <strong>
                Suma de los cuatro términos:
            </strong>

            <br><br>

            a + b + c + d

            <br>

            ${a} + ${b} + ${c} + ${d}

            <br>

           = ${primeraSuma} + ${segundaSuma}

            <br>

        </div>
 <div class="numero">
    👻 ${suma}
</div>
    

    `;
}
