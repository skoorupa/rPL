/*
 * (C) 2015 Adam Skorupski
 * License: MIT License
*/

/*
 * Polskie ogonki: ęółąńśćżź
 * Normalne znaki: eolansczz
 *
*/

String.prototype.replacePolishLetters = function(){
   var result=this; // schowek
   
   // zamiana 
   
   result=result.replace(/ę/g,"e"); result=result.replace(/Ę/g,"E");
   result=result.replace(/ó/g,"o"); result=result.replace(/Ó/g,"O");
   result=result.replace(/ł/g,"l"); result=result.replace(/Ł/g,"L");
   result=result.replace(/ą/g,"a"); result=result.replace(/Ą/g,"A");
   result=result.replace(/ń/g,"n"); result=result.replace(/Ń/g,"N");
   result=result.replace(/ś/g,"s"); result=result.replace(/Ś/g,"S");
   result=result.replace(/ć/g,"c"); result=result.replace(/Ć/g,"C");
   result=result.replace(/ż/g,"z"); result=result.replace(/Ż/g,"Z");
   result=result.replace(/ź/g,"z"); result=result.replace(/Ź/g,"Z");
   
   return result; //zwrócenie
}
