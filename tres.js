function mostrar() {
 /* Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)*/

let tipo;
let origen;
let precio;
let tipoMasVendido;
let contMuneca=0;
let contRomp=0;
let contPelota=0;
let acumPrecioImp=0;
let contImp=0;
let promedio;
let recTotal=0;
let precioMenorRomp=0;
let contRompNac=0;
let ivaTotal;
let contMasVendido=0;
let flag=1;
let seguir;

do
    {
      tipo=prompt("Por favor ingrese el tipo de juguete(muñeca, rompecabezas, pelota)").toLowerCase();
      while(tipo!="muñeca" && tipo!="rompecabezas" && tipo!="pelota")
      {
          origen=prompt("El tipo es incorrecto, por favor ingrese el tipo de juguete(muñeca, rompecabezas, pelota)").toLowerCase();
      }
        origen=prompt("Por favor ingrese el origen de los juguetes(nacional, importado)").toLowerCase();
        while(origen!="importado" && origen!="nacional")
        {
            origen=prompt("El origen es incorrecto, por favor ingrese el origen de los juguetes(nacional, importado)").toLowerCase();
        }
        precio=parseInt(prompt("Por favor ingrese el precio del juguete"));
        while(isNaN(precio) || (precio<1000 || precio>5000))
        {
            precio=parseInt(prompt("precio invalido, por favor reingrese el precio del juguete"));
        }
        if(tipo=="rompecabezas" && origen=="nacional" && (flag || precio<precioMenorRomp))
        {
          precioMenorRomp=precio;
          contRompNac++;
          flag=0
        }
        
        if(origen=="importado")
        {
          acumPrecioImp+=precio;
          contImp++;
        }
        
        if(tipo=="muñeca")
        {
            contMuneca++;
        }
        else if(tipo=="rompecabezas")
        {
            contRomp++;
        }
        else
        {
            contPelota++;
        }
        recTotal+=precio;

        seguir=prompt("¿Quiere seguir ingresando juguetes?(si/no)").toLowerCase();
    }while(seguir=="si");
/*punto A*/
if(contMuneca>contRomp && contMuneca>contPelota)
{
  tipoMasVendido="muñeca";
  contMasVendido=contMuneca;
}
else if(contRomp>=contMuneca && contRomp>contPelota)
{
  tipoMasVendido="rompecabezas"
  contMasVendido=contRomp;
}
else
{
  tipoMasVendido="pelota"
  contMasVendido=contPelota;
}
document.write("El tipo de juguete mas vendido es: "+tipoMasVendido+" con una cantidad de "+contMasVendido+" ejemplares. <br>");
/*punto b*/
if(contImp>0)
{
  promedio=acumPrecioImp/contImp;
  document.write("El promedio de precio de juguetes importados es de: "+promedio +"<br>");
}
else{
  document.write("No se ingresaron juguetes importados <br>");

}
/*punto c*/
document.write("El total de la recaudacion por ventas es de: "+recTotal+" pesos.<br>");
/*punto d*/
if(contRompNac>0)
{
  document.write("El precio menor de Rompecabezas nacional es de: "+precioMenorRomp+" pesos. <br>");
}
else
{
  document.write("No se ingreso ningun rompecabezas nacional.<br>");
}
/*punto e*/
ivaTotal=recTotal*.21;
document.write("El iva total recaudado (21%) es de: "+ivaTotal+" pesos.<br>");
















}
