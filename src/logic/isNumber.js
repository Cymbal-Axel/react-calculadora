export default function isNumber (item){
    return /[0-9]+/.test(item)  //use una regExp para decirle que lo que reciba por parametro se fije si es un numero del 0 al 9.
}