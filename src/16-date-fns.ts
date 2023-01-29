import {subDays, format} from 'date-fns'; // Traemos subDays para hacer restas entre fechas, tiene ya tipado que podemos ver recive fecha ó níumero y amount que es un número

const date = new Date(1998,1,28); // En typescript el 0 = Enero, 1 = Febrero... 11 = Diciembre
const rta = subDays(date, 365);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
