const readLineSync = require('readline-sync');
const {mostrarListaEstudiantes} = require('./lista_Estudiantes');

const registrarEstudiantes = () => {
    const cantidadEstudiantes = readLineSync.question("Ingresar la cantidad de Estudiantes a registrar: ") 
    const estudiantes = []; 

    for(let i = 0; i < cantidadEstudiantes; i++){ 
        const nombre = readLineSync.question(`Ingresar el nombre del estudiante ${i} : `);
        const edad = readLineSync.question(`Ingrese la edad de ${nombre} : `);

        //Objeto
        const estudiante = { 
            nombre, 
            edad
        };;   
        estudiantes.push(estudiante); 
    } 
    mostrarListaEstudiantes(estudiantes); 
};

//Inicia el registro de estudiantes
registrarEstudiantes(); 