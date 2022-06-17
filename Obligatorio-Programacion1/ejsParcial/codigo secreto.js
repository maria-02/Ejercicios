/*Un código secreto está formado por dígitosy "*".Para  verificar  que  es  válido,  se  tiene  que  cumplir  que  existe  al  menos  un  par  de  dígitos  en  el  código  que  cumplen  todas  estascondiciones:
a) entre ellos hay exactamente 3 "*"
b) no puede haber entre ellos otro dígito
c) los dos dígitos suman 11 Ejemplos:
códigos válidos:***4**2****9*6***528***34*5****código inválido:38***4*0*0**29
Implementar la función validoCodigo que recibe unstring con el código secreto y 
retorna true si cumple las condiciones o false en otro caso.
Encabezado: function validoCodigo (codigoSecreto)Se  pide:Subir unarchivo Ej2XXXXXX.js(NO  PDF,  XXXXXX  es  el  número  de  estudiante) con  el  código JavaScript dela función validoCodigo. Incluir nombre de autor en el código. 
*/
function validoCodigo(codigoSecreto) {
  let hayAst = false;
  let valido = false;
  for (i = 1; i <= codigoSecreto.length - 3; i++) {
 if (
      codigoSecreto[i] == "*" &&
      codigoSecreto[i + 1] == "*" &&
      codigoSecreto[i + 2] == "*"
    ) {
      hayAst = true;
      if (hayAst && parseInt(codigoSecreto[i - 1]) + parseInt(codigoSecreto[i + 3]) == 11) {
        valido = true;
      }
    }
  }
  return valido;
}
validoCodigo('***4**2****9*6***528***34*5****')