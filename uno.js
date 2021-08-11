function mostrar() {
 /* Enunciado:
Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad*/

let nombre;
let tipo;
let sangre;
let edad;
let sexo;
let contAnimales=0;
let contRept=0;
let contAve=0;
let contMamifero=0;
let acumEdadRept=0;
let tipoMasJoven=0;
let sexoMasJoven;
let edadMasJoven;
let promedioEdadRept=0;
let porcentaje;
let tipoMax;
let contMax;
let flag=1;
let seguir;

do
{
	nombre=prompt("Por favor ingrese su nombre.(Entre 3 y 8 caracteres)");
	while(nombre.length <3 || nombre.length>=8)
	{
		nombre=prompt("Numero de caracteres invalidos, por favor ingrese un nombre valido.");
	}
  tipo=prompt("Por favor ingrese el tipo de animal(mamifero, reptil, ave)").toLowerCase();
  while(tipo!="mamifero" && tipo!="reptil" && tipo!="ave")
  {
    tipo=prompt("Tipo de vacuna animal, reingrese el tipo de animal.").toLowerCase();
  }
	if(tipo=="reptil")
	{
    alert("El animal es reptil y tiene sangre fria.");
		sangre="fria";
	}
	else
	{
    sangre=prompt("Por favor ingrese el tipo de sangre del animal(fria, calida)").toLowerCase();
    while(sangre!="fria" && sangre!="calida")
    {
      sangre=prompt("sangre invalida, por favor reingrese la sangre.");
    }
  }
    edad=parseInt(prompt("Por favor ingrese su edad."));
    while(isNaN(edad) || edad<0)
    {
      edad=parseInt(prompt("Edad invalida, por favor reingrese su edad."));
    }
    sexo=prompt("Por favor ingrese su sexo. (h/m)").toLowerCase();
    while(sexo!="h" && sexo!="m")
    {
      sexo=prompt("Sexo invalido, por favor reingrese su sexo");
    
  }
    
    if(tipo=="reptil")
    {
      contRept++;
      acumEdadRept+=edad;
    }
    else if(tipo=="mamifero")
    {
      contMamifero++;
    }
    else
    {
      contAve++;
    }
    
    
    if(flag || edad<edadMasJoven)
    {
      edadMasJoven=edad;
      sexoMasJoven=sexo;
      tipoMasJoven=tipo;
      flag=0;	
    }
    contAnimales++;
    seguir=prompt("Quiere seguir ingresando animales?(si/no)").toLowerCase();
}while(seguir=="si");
	
/*punto a*/
if(contRept<0)  
{
  promedioEdadRept=acumEdadRept/contRept;
  document.write("El promedio de edad de los reptiles es de: "+promedioEdadRept+"<br>");
}
else
{
  document.write("No se ingresó ningun reptil.<br>");
}
/*punto b*/
document.write("La mascota mas joven es de tipo: "+tipoMasJoven+" y su sexo es: "+sexoMasJoven+" con una edad de: "+edadMasJoven+"<br>");
/* punto c */
if(contAve>0) 
{
  porcentaje=contAve*100/contAnimales;
  document.write("El porcentaje de aves es de: "+porcentaje+" por ciento. <br>");
}
else
{
  document.write("No se ingresaron aves. <br>");
}
/*punto d*/
if(contRept>contAve && contRept>contMamifero)
{
  tipoMax="reptil";
  contMax=contRept;
}
else if(contAve>=contRept && contAve>contMamifero)
{
  tipoMax="ave";
  contMax=contAve;
}
else
{
  tipoMax="mamifero";
  contMax=contMamifero;
}
document.write("El tipo de mascota con mas cantidad es: "+tipoMax+" con una cantidad de: "+contMax+"<br>");

}
