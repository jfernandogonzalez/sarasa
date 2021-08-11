function mostrar() {
 /* Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
  nombre,
  carrera("Quimica";"Fisica";"Sistemas"),
  sexo (masculino - femenino -no binario),
  cantidad de materias(entre 1 y 5),
  Nota promedio del alumno(entre 0 y 10),
  edad (validar).
  Se debe informar de existir, o informar que no existe , en el caso que corresponda.
  a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
  b) El nombre de la alumna mas joven.
  c) Porcentaje de estudiantes que estudia cada carrera.
  d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

  let nombre;
  let carrera;
  let sexo;
  let cantidadMat;
  let nota;
  let edad;
  let mejorPromFisica=0;
  let nombreMPFisica;
  let alumnaMasjoven;
  let nombreMasJoven;
  let contQuimica=0;
  let contFisica=0;
  let contSistemas=0;
  let maxMaterias=0;
  let edadMaxMaterias;
  let nombreMaxMaterias;
  let flagPromedio=1;
  let flagMasJoven=1;
  let flagMaxmaterias=1;
  let porcFisica;
  let porcQuimica;
  let porcSistemas;

for(i=0;i<500;i++)
{
	nombre=prompt("Por favor ingrese su nombre.");

  carrera=prompt("Por favor ingrese la carrera").toLowerCase();
  while(carrera!="quimica" && carrera!="fisica" && carrera!="sistemas")
  {
    carrera=prompt("Carrera invalida, reingrese la carrera").toLowerCase();
  }

  sexo=prompt("Por favor ingrese su sexo. (masculino, femenino, no binario)").toLowerCase();
    while(sexo!="masculino" && sexo!="femenino" && sexo!="no binario")
    {
      sexo=prompt("Sexo invalido, por favor reingrese su sexo");
    }
  cantidadMat=parseInt(prompt("Por favor, ingrese la cantidad de materias. (Entre 1 y 5)"));
  while(cantidadMat<1 || cantidadMat>5)
  {
    cantidadMat=parseInt(prompt("Cantidad invalida, por favor reingrese la cantidad de materias. (Entre 1 y 5)"));
  }
  nota=prompt("Por favor ingrese su nota promedio. (Entre 0 y 10)");
  while(nota<0 || nota>10)
  {
    nota=prompt("Nota invalida, por favor reingrese su nota promedio. (Entre 0 y 10)");
  }
  edad=parseInt(prompt("Por favor ingrese su edad."));
  while(isNaN(edad) || edad<0)
  {
    edad=parseInt(prompt("Edad invalida, por favor reingrese su edad."));
  }
  if(carrera=="fisica")
  {
    contFisica++;
    if(flagPromedio || nota<mejorPromFisica)
    {
     mejorPromFisica=nota;
     nombreMPFisica=nombre;
     flagPromedio=0;	
    }
  }
  else if(carrera=="quimica")
  {
    contQuimica++;
  }
  else
  {
    contSistemas++;
  }
  if(sexo== "femenino" && (flagMasJoven || edad<alumnaMasjoven))
  {
    alumnaMasjoven=edad;
    nombreMasJoven=nombre;
    flagMasJoven=0;
  }
  if(carrera!="quimica" && (flagMaxmaterias || cantidadMat>maxMaterias))
  {
    maxMaterias=cantidadMat;
    edadMaxMaterias=edad;
    nombreMaxMaterias=nombre;
    flagMaxmaterias=0
  }

}
/* FIN DEL FOR*/
/*punto a*/
document.write("El nombre del mejor promedio entre los alumnos que estudian fisica es: "+nombreMPFisica+" con un promedio de: "+mejorPromFisica+"<br>");
/*punto b*/
document.write("El nombre de la alumna mas joven es: "+nombreMasjoven+" con una edad de: "+alumnaMasjoven+" años. <br>");
/*punto c*/
porcFisica=contFisica*100/500;
document.write("El porcentaje de estudiantes de Fisica"+porcFisica+" por ciento.<br>");

porcQuimica=contQuimica*100/500;
document.write("El porcentaje de estudiantes de Quimica"+porcQuimica+" por ciento.<br>");

porcSistemas=contSistemas*100/500;
document.write("El porcentaje de estudiantes de Sistemas"+porcSistemas+" por ciento.<br>");
/*punto d*/
document.write("El nombre del estudiante con mayor cantidad de materias es: "+nombreMaxMaterias+" con "+edadMaxMaterias+" años y una cantidad de "+maxMaterias+" materias.<br>");



























































}


