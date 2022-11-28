var Factores = new Array(101);
var Respuestas = new Array(101);
var ResumenFactores = new Array(16);
////////////////////////////////////////////////////////////////////////
function MetodoPreguntas(){
    Factores[0] = {
        NumeroDePregunta:1,
        Factor: "D",
        Texto:"1. ¿Está su memoria mejor ahora que antes?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[1] = {
        NumeroDePregunta:2, 
        Factor: "A",
        Texto:"2. ¿Podría tolerar usted vivir solo, lejos de todo el mundo, como un ermitaño?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
};Factores[2] = {
    NumeroDePregunta:3, 
        Factor: "B",
        Texto:"3. ¿Cómo llamaría a un criminal una persona que el cielo esta abajo y que en invierno hace calor?", 
        opciones: [
                    {OpcionText:"Un gangsters", valor: 0}, 
                    {OpcionText:"Un Santo", valor: 1}, 
                    {OpcionText:"Una Nube", valor: 0}]  
};
Factores[3] = {
    NumeroDePregunta:4,
        Factor: "C",
        Texto:"4. ¿Que hace usted cuando se encuentra con gente desarreglada y desordenada", 
        opciones: [
                    {OpcionText:"La acepta", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Se siente disgustado y molesto", valor: 0}]  
};
Factores[4] = {
    NumeroDePregunta:5,
        Factor: "E",
        Texto:"5. ¿A veces trata usted de ser demasiado gentil con los meseros y meseras?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[5] = {
    NumeroDePregunta:6,
        Factor: "F",
        Texto:"6. ¿En una fiesta, prefiere usted esperar que otra gente empiece a contar chistes y los cuentos?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[6] = {
    NumeroDePregunta:7,
        Factor: "G",
        Texto:"7. ¿Cree usted que la gente debería observar las leyes morales mas rígidamente?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[7] = {
    NumeroDePregunta:8,
        Factor: "H", 
        Texto:"8. ¿A la mayoría de la gente que conoce, le da verdadero gusto encontrarle en una fiesta?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
};Factores[8] = {
    NumeroDePregunta:9,
        Factor: "I", 
        Texto:"9. Preferiría usted hacer ejercicio con:", 
        opciones: [
                    {OpcionText:"Ping Pong y Baile", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Futbol y Boxeo", valor: 0}]  
};
Factores[9] = {
    NumeroDePregunta:10,
        Factor: "L", 
        Texto:"10. ¿Le causan risa las grandes diferencias entre lo que hace la gente y lo que dice que hace?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
};
Factores[10] = {
    NumeroDePregunta:11,
        Factor: "M", 
        Texto:"11. ¿Cuando niño sentía tristeza al salir de la casa para ir a la escuela cada día?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[11] = {
    NumeroDePregunta:12,
        Factor: "N", 
        Texto:"12. ¿Que hace usted si se pasa por alto algún comentario suyo?", 
        opciones: [
                    {OpcionText:"Lo olvida", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Lo repite hasta que la gente comprenda", valor: 2}]  
}
Factores[12] = {
    NumeroDePregunta:13,
        Factor: "O", 
        Texto:"13. ¿Se ve usted en la necesidad de evitar la excitación porque le cansa?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[13] = {
    NumeroDePregunta:14,
        Factor: "Q1", 
        Texto:"14. ¿De ser posible, qué preferiría jugar?", 
        opciones: [
                    {OpcionText:"Ajedrez", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Ludo o parchis", valor: 0}]  
}
Factores[14] = {
    NumeroDePregunta:15,
        Factor: "Q2", 
        Texto:"15. ¿Cuándo piensa hacer algo, lo trata de hacer completamente a solas, sin solicitar ayuda de otro?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[15] = {
    NumeroDePregunta:16,
        Factor: "Q3", 
        Texto:"16. ¿Se rehúsa usted a dedicar tiempo pensando ¨Lo que podía haber sido¨?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[16] = {
    NumeroDePregunta:17,
        Factor: "Q4", 
        Texto:"17. ¿Es usted persona que se deshace fácilmente de las preocupaciones y responsabilidades?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[17] = {
    NumeroDePregunta:18,
        Factor: "D", 
        Texto:"18. ¿En alguna ocasión, aunque haya sido por un momento ha sentido resentimiento con sus padres?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[18] = {
    NumeroDePregunta:19,
        Factor: "A", 
        Texto:"19. ¿Tomaría usted un trabajo en el que tuviera que escuchar quejas de los empleados o de los clientes durante el día entero?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[19] = {
    NumeroDePregunta:20,
        Factor: "B", 
        Texto:"20. ¿Cuál de las siguientes palabras es lo opuesto, de lo opuesto de inexacto?", 
        opciones: [
                    {OpcionText:"Casual", valor: 0}, 
                    {OpcionText:"Preciso", valor: 0}, 
                    {OpcionText:"Aproximado", valor: 1}]  
}
Factores[20] = {
    NumeroDePregunta:21,
        Factor: "C", 
        Texto:"21. ¿Siempre cuenta usted con bastante energía cuando mas lo necesita?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[21] = {
    NumeroDePregunta:22,
        Factor: "E", 
        Texto:"22. ¿Le daría vergüenza estar en una sala de baños turcos sin ropas?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[22] = {
    NumeroDePregunta:23,
        Factor: "F", 
        Texto:"23. ¿Busca usted las reuniones grandes, como las fiestas o bailes?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[23] = {
    NumeroDePregunta:24,
        Factor: "G", 
        Texto:"24. Cree usted que:", 
        opciones: [
                    {OpcionText:"Hay trabajos que no requieren el mismo cuidado que otros", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Cualquier trabajo, si es que se va a ejecutar, debe hacerse bien", valor: 2}]  
}
Factores[24] = {
    NumeroDePregunta:25,
        Factor: "H", 
        Texto:"25. ¿Al caminar por la calle, a veces se disgusta por la manera como le mira alguna gente?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[25] = {
    NumeroDePregunta:26,
        Factor: "I", 
        Texto:"26. ¿Qué preferiría ser usted?", 
        opciones: [
                    {OpcionText:"Sacerdote", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Coronel", valor: 0}]  
}
Factores[26] = {
    NumeroDePregunta:27,
        Factor: "L", 
        Texto:"27. ¿Si un vecino constantemente le hace trampas pequeñas, cree usted que es mejor simplemente, acomodarse que desenmascararlo?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[27] = {
    NumeroDePregunta:28,
        Factor: "M", 
        Texto:"28.  Preferiría ver:", 
        opciones: [
                    {OpcionText:"Una buena película sobre la época brava", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Una farsa ingeniosa de la colonización sobre la sociedad del futuro", valor: 2}]  
}
Factores[28] = {
    NumeroDePregunta:29,
        Factor: "N", 
        Texto:"29. ¿Cuando se le ha hecho responsable por algún proyecto, insiste usted en imponer siempre su punto de vista o renunciar?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[29] = {
    NumeroDePregunta:30,
        Factor: "O", 
        Texto:"30. ¿Cuando en opinión suya alguien muestra mala educación?", 
        opciones: [
                    {OpcionText:"No dice nada para no querer parecer ningun fastidioso", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Le hace ver claramente a esta persona lo que piensa", valor: 2}]  
}
Factores[30] = {
    NumeroDePregunta:31,
        Factor: "Q1", 
        Texto:"31. ¿Cuándo le presentan a alguien, usted?", 
        opciones: [
                    {OpcionText:"Tener una discusión placentera sobre la política y puntos de vista sociales", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Que le cuente unos chistes", valor: 0}]  
}
Factores[31] = {
    NumeroDePregunta:32,
        Factor: "Q2", 
        Texto:"32. ¿Cree usted que es cruel vacunar a los niños pequeños y que los padres deben tener derecho a aplazar la vacuna?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[32] = {
    NumeroDePregunta:33,
        Factor: "Q3", 
        Texto:"33. Es mejor confiar en:", 
        opciones: [
                    {OpcionText:"La suerte de la vida", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"La capacitacion personal", valor: 0}]  
}
Factores[33] = {
    NumeroDePregunta:34,
        Factor: "Q4", 
        Texto:"34. ¿Cuando tiene pendiente algún viaje, siente usted apuros, tensión, ansiedad, aunque sabe que cuenta con bastante tiempo", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[34] = {
    NumeroDePregunta:35,
        Factor: "D", 
        Texto:"35. ¿Le es dificil admitir que esta equivocado?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[35] = {
    NumeroDePregunta:36,
        Factor: "A", 
        Texto:"36. En una fábrica, preferiría usted encargarse de: ", 
        opciones: [
                    {OpcionText:"Maquinas", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Entrevistar y contratar al nuevo personal", valor: 2}]  
}
Factores[36] = {
    NumeroDePregunta:37,
        Factor: "B", 
        Texto:"37. ¿Cuál palabra no va con las otras dos?", 
        opciones: [
                    {OpcionText:"Gato", valor: 0}, 
                    {OpcionText:"Atras", valor: 1}, 
                    {OpcionText:"Sol", valor: 0}]  
}
Factores[37] = {
    NumeroDePregunta:38,
        Factor: "C", 
        Texto:"38. ¿Es usted de salud variable, que a veces le obliga a cambiar sus proyectos inesperadamente?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[38] = {
    NumeroDePregunta:39,
        Factor: "E", 
        Texto:"39. ¿Le gustaría ser atendido por sirvientes personales?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[39] = {
    NumeroDePregunta:40,
        Factor: "F", 
        Texto:"40. ¿Se siente usted incómodo en compañía de otros, de manera que nunca presenta su mejor aspecto?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[40] = {
    NumeroDePregunta:41,
        Factor: "G", 
        Texto:"41. ¿Si le sobrara dinero de sus necesidades cotidianas, cree que debería donar gran parte del sobrante a programas de bienestar social?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[41] = {
    NumeroDePregunta:42,
        Factor: "H", 
        Texto:"42. ¿Hay ocasiones que se enfurece tanto, que le parece mejor no decir nada", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[42] = {
    NumeroDePregunta:43,
        Factor: "I", 
        Texto:"43. ¿Puede usted hacer trabajo físico duro sin fatigarse tanto, como la mayoría de las personas?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[43] = {
    NumeroDePregunta:44,
        Factor: "L", 
        Texto:"44. ¿Cree usted que aún cuando es para ellos riesgoso, la mayoría de los testigos dicen la verdad?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[44] = {
    NumeroDePregunta:45,
        Factor: "M", 
        Texto:"45. ¿Le ayuda ir y venir cuando piensa?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[45] = {
    NumeroDePregunta:46,
        Factor: "N", 
        Texto:"46. Cree usted que nuestro país debería gastar más en:", 
        opciones: [
                    {OpcionText:"Armamento", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Educacion", valor: 0}]  
}
Factores[46] = {
    NumeroDePregunta:47,
        Factor: "O", 
        Texto:"47. Preferiría usted pasarse la noche:", 
        opciones: [
                    {OpcionText:"En un juego reñido de naipes", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Mirando Fotos", valor: 2}]  
}
Factores[47] = {
    NumeroDePregunta:48,
        Factor: "Q1", 
        Texto:"48. ¿Preferiría usted leer: ", 
        opciones: [
                    {OpcionText:"Una buena novela histórica", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Un ensayo de algún científico sobre la manera de aprovechar los recursos del mundo", valor: 2}]  
}
Factores[48] = {
    NumeroDePregunta:49,
        Factor: "Q2", 
        Texto:"49. ¿Está usted verdaderamente seguro que hay mas gente amable que gente tonta en el mundo?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[49] = {
    NumeroDePregunta:50,
        Factor: "Q3", 
        Texto:"50.  ¿Hace usted más proyectos y es más energético, en cuanto a llevar a cabo su trabajo, que otras personas que han tenido éxito?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[50] = {
    NumeroDePregunta:51,
        Factor: "Q4", 
        Texto:"51. ¿Hay ocasiones que preferiría ver a nadie?", 
        opciones: [
                    {OpcionText:"Muy rara vez", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Muy a menudo", valor: 2}]  
}
Factores[51] = {
    NumeroDePregunta:52,
        Factor: "D", 
        Texto:"52. ¿Cuando sabe que lo que dice es correcto, siempre le es fácil hacerlo?", //AQUI ME QUEDE, SEGUIR HOY//
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[52] = {
    NumeroDePregunta:53,
        Factor: "A", 
        Texto:"53.Preferiría:", 
        opciones: [
                    {OpcionText:"Trabajar en una oficina de negocios, organizando a la gente", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Ser arquitecto proyectando edificios", valor: 0}]  
}
Factores[53] = {
    NumeroDePregunta:54,
        Factor: "B", 
        Texto:"54. El negro se compara con el gris como el dolor se compara con", 
        opciones: [
                    {OpcionText:"La herida", valor: 0}, 
                    {OpcionText:"La enfermedad", valor: 0}, 
                    {OpcionText:"La molestia", valor: 1}]  
}
Factores[54] = {
    NumeroDePregunta:55,
        Factor: "C", 
        Texto:"55. ¿Siempre duerme usted bien sin hablar o caminar dormido?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[55] = {
    NumeroDePregunta:56,
        Factor: "E", 
        Texto:"56. Si le es necesario, puede usted decirle una mentira a un desconocido si cambiar de expresión", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[56] = {
    NumeroDePregunta:57,
        Factor: "F", 
        Texto:"57. ¿Ha participado usted activamente en la organización de algún club o grupo social?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[57] = {
    NumeroDePregunta:58,
        Factor: "G", 
        Texto:"58. ¿A quién admira usted más?", 
        opciones: [
                    {OpcionText:"Una persona lista pero poco confiable", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Una persona media con la voluntad de resistir las tentaciones", valor: 2}]  
}
Factores[58] = {
    NumeroDePregunta:59,
        Factor: "H", 
        Texto:"59. ¿Cuando presenta usted una queja justa, siempre consigue satisfacción?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[59] = {
    NumeroDePregunta:60,
        Factor: "I", 
        Texto:"60. ¿Las circunstancias desalentadoras lo dejan al borde de las lágrimas?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[60] = {
    NumeroDePregunta:61,
        Factor: "L", 
        Texto:"61. ¿Cree usted que muchos países extranjeros sienten más amistad con nosotros de lo que suponemos?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[61] = {
    NumeroDePregunta:62,
        Factor: "M", 
        Texto:"62. ¿Hay momentos del día en que le gusta estar solo con sus pensamientos, aparte de la gente?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[62] = {
    NumeroDePregunta:63,
        Factor: "N", 
        Texto:"63. ¿Hay veces que se exaspera a consecuencia de reglas y restricciones pequeñas, que en momentos más calmados los acepta?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[63] = {
    NumeroDePregunta:64,
        Factor: "O", 
        Texto:"64. ¿Cree usted que mucha educación moderna, dizque 'progresista' no es tan buena como las reglas disciplinarias de sentido común de la escuela antigua?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[64] = {
    NumeroDePregunta:65,
        Factor: "Q1", 
        Texto:"65. Aprendió usted más en la escuela:", 
        opciones: [
                    {OpcionText:"Asistiendo a las clases", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Leyendo textos", valor: 2}]  
}
Factores[65] = {
    NumeroDePregunta:66,
        Factor: "Q2", 
        Texto:"66. ¿Trata usted de evitar mezclarse en responsabilidades sociales", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[66] = {
    NumeroDePregunta:67,
        Factor: "Q3", 
        Texto:"67.Cuando tiene usted mucho que hacer, y un problema se vuelve demasiado difícil, busca", 
        opciones: [
                    {OpcionText:"Un problema distinto", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Otra manera de resolver el mismo problema", valor: 2}]  
}
Factores[67] = {
    NumeroDePregunta:68,
        Factor: "Q4", 
        Texto:"68. ¿Deriva usted ánimos fuertes como la ansiedad, la risa, la ira de incidentes pequeños?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[68] = {
    NumeroDePregunta:69,
        Factor: "D", 
        Texto:"69. ¿Hay veces que su mente no funciona tan bien como en otras ocasiones?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[69] = {
    NumeroDePregunta:70,
        Factor: "A", 
        Texto:"70. ¿Complace usted a la gente cumpliendo con citas a horas que les conviene a ellos?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[70] = {
    NumeroDePregunta:71,
        Factor: "B", 
        Texto:"71. ¿Si la mamá de María es la hermana del papá de Federico, que parentesco tiene Federico con el papá de María?", 
        opciones: [
                    {OpcionText:"Primo", valor: 0}, 
                    {OpcionText:"Sobrino", valor: 1}, 
                    {OpcionText:"Tio", valor: 0}]  
}
Factores[71] = {
    NumeroDePregunta:72,
        Factor: "C", 
        Texto:"72. ¿Se siente usted crítico del trabajo de mucha gente?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[72] = {
    NumeroDePregunta:73,
        Factor: "E", 
        Texto:"73. ¿Le molesta la gente que dice que puede hacer las cosas mejor que los demás?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[73] = {
    NumeroDePregunta:74,
        Factor: "F", 
        Texto:"74. ¿Le encantaría salir de viaje todo el tiempo?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[74] = {
    NumeroDePregunta:75,
        Factor: "G", 
        Texto:"75. ¿Ha llegado usted casi a desmayarse por algún dolor repentino o al ver la sangre?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[75] = {
    NumeroDePregunta:76,
        Factor: "H", 
        Texto:"76. ¿Dedica usted mucho tiempo a platicar sobre los problemas regionales con la gente?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[76] = {
    NumeroDePregunta:77,
        Factor: "I", 
        Texto:"77. Preferiría usted ser:", 
        opciones: [
                    {OpcionText:"Ingeniero", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Profesor de teorías sociales", valor: 2}]  
}
Factores[77] = {
    NumeroDePregunta:78,
        Factor: "L", 
        Texto:"78. ¿Es necesario a menudo dominarse para no meterse a tratar de resolver los problemas de otras personas?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[78] = {
    NumeroDePregunta:79,
        Factor: "M", 
        Texto:"79. ¿Cuánto de tus vecinos le aburren platicando?", 
        opciones: [
                    {OpcionText:"La mayoría", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Casi ninguno", valor: 0}]  
}
Factores[79] = {
    NumeroDePregunta:80,
        Factor: "N", 
        Texto:"80. ¿Si hay propaganda escondida en lo que esta leyendo usted, generalmente la nota antes de que alguien se lo indique?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[80] = {
    NumeroDePregunta:81,
        Factor: "O", 
        Texto:"81. ¿Cree usted que cada cuento debe indicar alguna moraleja?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[81] = {
    NumeroDePregunta:82,
        Factor: "Q1", 
        Texto:"82. Causa mas dificultad el hecho de que la gente:", 
        opciones: [
                    {OpcionText:"Cambia y Modifica Métodos ya bien comprobados", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"Rechaza los métodos nuevos y modernos", valor: 2}]  
}
Factores[82] = {
    NumeroDePregunta:83,
        Factor: "Q2", 
        Texto:"83. ¿Hay veces que no se atreve a utilizar sus propias ideas por que le parecen poco prácticas?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[83] = {
    NumeroDePregunta:84,
        Factor: "Q3", 
        Texto:"84. ¿Parecen molestarse algunas personas estiradas al ver que usted se acerca?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[84] = {
    NumeroDePregunta:85,
        Factor: "Q4", 
        Texto:"85. ¿Puede usted confiar en que su memoria no le traiciona, aún en detalles pequeños?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[85] = {
    NumeroDePregunta:86,
        Factor: "D", 
        Texto:"86. ¿A veces es usted menos considerado de las demás personas que ellas de usted?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[86] = {
    NumeroDePregunta:87,
        Factor: "A", 
        Texto:"87. ¿Es usted lento para decir lo que siente, en comparación con la demás gente?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[87] = {
    NumeroDePregunta:88,
        Factor: "B", 
        Texto:"88. El número correcto para continuar la serie de números 1, 2, 3, 6, 5, es:", 
        opciones: [
                    {OpcionText:"5", valor: 0}, 
                    {OpcionText:"7", valor: 0}, 
                    {OpcionText:"10", valor: 2}]  
}
Factores[88] = {
    NumeroDePregunta:89,
        Factor: "C", 
        Texto:"89. ¿Se impacienta usted hasta enfurecerse cuando alguien lo demora?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[89] = {
    NumeroDePregunta:90,
        Factor: "E", 
        Texto:"90. ¿Dice la gente que usted es una persona que tiende ha salirse con la suya?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[90] = {
    NumeroDePregunta:91,
        Factor: "F", 
        Texto:"91. ¿Es usted lento para quejarse si no se le da el material adecuado para su trabajo?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[91] = {
    NumeroDePregunta:92,
        Factor: "G", 
        Texto:"92. En casa", 
        opciones: [
                    {OpcionText:"Utiliza su tiempo en platicar y descansar", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Piensa ocupar su tiempo con trabajos especiales", valor: 2}]  
}
Factores[92] = {
    NumeroDePregunta:93,
        Factor: "H", 
        Texto:"93. ¿Es usted tímido y cauteloso en hacer nuevas amistades?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[93] = {
    NumeroDePregunta:94,
        Factor: "I", 
        Texto:"94. ¿Cree usted que lo que se trata de expresar en la poesía, se podría expresar con la misma claridad en lenguaje común y corriente?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[94] = {
    NumeroDePregunta:95,
        Factor: "L", 
        Texto:"95. ¿Sospecha usted que las personas que aparentan amistad con usted a veces son desleales en su ausencia?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[95] = {
    NumeroDePregunta:96,
        Factor: "M", 
        Texto:"96. ¿Dejan generalmente sin cambio su personalidad aún las experiencias más dramáticas en el curso del año?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[96] = {
    NumeroDePregunta:97,
        Factor: "N", 
        Texto:"97. ¿Habla usted despacito o lentamente?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[97] = {
    NumeroDePregunta:98,
        Factor: "O", 
        Texto:"98. ¿Siente usted temor o disgusto casi incontrolable hacia algunas cosas; por ejemplo, algún animal, algún lugar particular, etc?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
Factores[98] = {
    NumeroDePregunta:99,
        Factor: "Q1", 
        Texto:"99. Dentro de un grupo, preferiría usted ser la persona que:", 
        opciones: [
                    {OpcionText:"Trabaja sobre desarrollos técnicos", valor: 2}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Algun texto que enumera estadísticas y otros datos", valor: 0}]  
}
Factores[99] = {
    NumeroDePregunta:100,
        Factor: "Q2", 
        Texto:"100. Para saber cómo votar sobre alguna cuestión social, leería usted:", 
        opciones: [
                    {OpcionText:"Una novela inteligente que ha recibido buenos comentarios sobre el tema", valor: 0}, 
                    {OpcionText:"Intermedio", valor: 1}, 
                    {OpcionText:"Algún texto que enumera estadísticas", valor: 2}]  
}
Factores[100] = {
    NumeroDePregunta:101,
        Factor: "Q3", 
        Texto:"101. ¿Tiene usted sueños de noche que son algo fantásticos?", 
        opciones: [
                    {OpcionText:"Si", valor: 0}, 
                    {OpcionText:"Ocasionalmente", valor: 1}, 
                    {OpcionText:"No", valor: 2}]  
}
Factores[101] = {
    NumeroDePregunta:102,
        Factor: "Q4", 
        Texto:"102. ¿Si se le deja solo en la casa por algún tiempo, tiende a ponerse ansioso?", 
        opciones: [
                    {OpcionText:"Si", valor: 2}, 
                    {OpcionText:"A veces", valor: 1}, 
                    {OpcionText:"No", valor: 0}]  
}
}
/////////////////////////////////////////////////////////////////////////////
function MetodoCrearPreguntas(){
    MetodoPreguntas();
    const divpreguntas = document.getElementById("DivContenedor");
console.log(divpreguntas);
var NuevaSeccion = "";
        Factores.forEach(Pregunta =>{
            NuevaSeccion += '<section id = "p' + Pregunta.NumeroDePregunta+ '">' +
            '<h4>' + Pregunta.Texto + '<h4>';
            Pregunta.opciones.forEach(opcion =>{
                NuevaSeccion += '<label>' +
                                '<input type = "radio" value = "'+ opcion.valor + '" name = "p'+ Pregunta.NumeroDePregunta +'"'+
                                'onclick="OpcionElegida('+ Pregunta.NumeroDePregunta + ',' + "'"+Pregunta.Factor+"'" + ',this)">' + opcion.OpcionText + '</label>'
            });
            NuevaSeccion += '</section>';
        });
        divpreguntas.innerHTML += NuevaSeccion;
}
////////////////////////////////////////////////////////////////////////////
function OpcionElegida(NumeroPregunta, FactorPregunta, RespuestaSeleccionada){
        Respuestas[NumeroPregunta] = {
            ValordeRespuesta: parseInt(RespuestaSeleccionada.value),
            Factor: FactorPregunta
        }
        console.log(Respuestas);  
}
//////////////////////////////////////////////////////////////////////////////
function SumarFactorD(){
    var SumaTotalFactorD = 0;
    let RespuestasFiltradasFactorD = Respuestas.filter(m => m.Factor == "D");
    RespuestasFiltradasFactorD.forEach(n =>{
        SumaTotalFactorD = SumaTotalFactorD + n.ValordeRespuesta;
    })
    ResumenFactores[0] = {
        FactorFinal: " ",
        Factor: "",
        Mensaje: " ",
        PuntajeTotal: SumaTotalFactorD
    }
}
function SumarFactorA(){
    var SumaTotalFactorA = 0;
    let RespuestasFiltradasFactorA = Respuestas.filter(m => m.Factor == "A");
    RespuestasFiltradasFactorA.forEach(n =>{
        SumaTotalFactorA = SumaTotalFactorA + n.ValordeRespuesta;
    }) 
    switch(SumaTotalFactorA){
        case 0:
        case 1:
        case 2:
        case 3:
            FactorA = "1B";
            MensajeFactorA = "Los A- tienden a ser más reservados, formales, impersonales y escépticos. Prefieren laborar solos, son rígidos y precisos al manejar sus asuntos; pueden ser, en ocasiones, altamente críticos y rudos.";
            break;
        case 4:
        case 5:
            FactorA = "2B";
            MensajeFactorA = "Los A- tienden a ser más reservados, formales, impersonales y escépticos. Prefieren laborar solos, son rígidos y precisos al manejar sus asuntos; pueden ser, en ocasiones, altamente críticos y rudos."; 
            break;
        case 6:
            FactorA = "3B";
            MensajeFactorA = "Los A- tienden a ser más reservados, formales, impersonales y escépticos. Prefieren laborar solos, son rígidos y precisos al manejar sus asuntos; pueden ser, en ocasiones, altamente críticos y rudos.";
            break;
        case 7:
            FactorA = "4M";
            MensajeFactorA = "";
            break;
        case 8:
            FactorA = "5M";
            MensajeFactorA = "";
            break;
        case 9:
            FactorA = "6M";
            MensajeFactorA = "";
            break;
        case 10:
            FactorA = "10A";
            MensajeFactorA = "Quienes obtienen puntuaciones altas (A+) cuentan con una mayor disposición hacia el afecto, tienden a ser más cariñosos, expresivos, dispuestos a cooperar, generosos, activos, y no temen a las críticas que puedan hacerse sobre ellos.";
            break;
        case 11:
            FactorA = "11A";
            MensajeFactorA = "Quienes obtienen puntuaciones altas (A+) cuentan con una mayor disposición hacia el afecto, tienden a ser más cariñosos, expresivos, dispuestos a cooperar, generosos, activos, y no temen a las críticas que puedan hacerse sobre ellos.";
            break;
        case 12:
            FactorA = "12A";
            MensajeFactorA = "Quienes obtienen puntuaciones altas (A+) cuentan con una mayor disposición hacia el afecto, tienden a ser más cariñosos, expresivos, dispuestos a cooperar, generosos, activos, y no temen a las críticas que puedan hacerse sobre ellos.";
            break;
    }
    ResumenFactores[1] = {
        FactorFinal: FactorA,
        Factor: "Factor A",
        Mensaje: MensajeFactorA,
        PuntajeTotal: SumaTotalFactorA
    }
}
function SumarFactorB(){
    var SumaTotalFactorB = 0;
    let RespuestasFiltradasFactorB = Respuestas.filter(m => m.Factor == "B");
    RespuestasFiltradasFactorB.forEach(n =>{
        SumaTotalFactorB = SumaTotalFactorB + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorB){
        case 0:
        case 1:
            FactorB = "1B";
            MensajeFactorB = "Los que obtienen calificaciones bajas (B-) tienden a interpretar la mayoría de las cosas de manera literal y concreta. Presentan dificultades para comprender conceptos y para el aprendizaje en general. Se les describe como lentos al reaccionar y de baja inteligencia.";
            break;
        case 2:
            FactorB = "2B";
            MensajeFactorB = "Los que obtienen calificaciones bajas (B-) tienden a interpretar la mayoría de las cosas de manera literal y concreta. Presentan dificultades para comprender conceptos y para el aprendizaje en general. Se les describe como lentos al reaccionar y de baja inteligencia.";
            break;
        case 3:
            FactorB = "3B";
            MensajeFactorB = "Los que obtienen calificaciones bajas (B-) tienden a interpretar la mayoría de las cosas de manera literal y concreta. Presentan dificultades para comprender conceptos y para el aprendizaje en general. Se les describe como lentos al reaccionar y de baja inteligencia.";
            break;
        case 4:
            FactorB = "4M";
            MensajeFactorB = "";
            break;
        case 5:
            FactorB = "7A";
            MensajeFactorB = "Quienes tienen puntuaciones altas (B+) se le percibe como muy inteligente. Puede captar, analizar y comprender con facilidad las ideas o conceptos que se le presenten.";
            break;
        case 6:
            FactorB = "8A";
            MensajeFactorB = "Quienes tienen puntuaciones altas (B+) se le percibe como muy inteligente. Puede captar, analizar y comprender con facilidad las ideas o conceptos que se le presenten.";
            break;
        case 7:
            FactorB = "9A";
            MensajeFactorB = "Quienes tienen puntuaciones altas (B+) se le percibe como muy inteligente. Puede captar, analizar y comprender con facilidad las ideas o conceptos que se le presenten.";
    }
    ResumenFactores[2] ={
        FactorFinal: FactorB,
        Factor: "Factor B",
        Mensaje: MensajeFactorB,
        PuntajeTotal: SumaTotalFactorB
    }
}
function SumarFactorC(){
    var SumaTotalFactorC = 0;
    let RespuestasFiltradasFactorC = Respuestas.filter(m => m.Factor == "C");
    RespuestasFiltradasFactorC.forEach(n =>{
        SumaTotalFactorC = SumaTotalFactorC + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorC){
        case 0:
        case 1:
        case 2:
        case 3:
            FactorC = "1B";
            MensajeFactorC = "Los que obtienen calificaciones bajas (C-) son por lo general personas que se frustran rápidamente bajo condiciones no satisfactorias, tienden a evadir la realidad y tienen una fortaleza de ego muy baja.";
            break;
        case 4:
        case 5:
            FactorC = "2B";
            MensajeFactorC = "Los que obtienen calificaciones bajas (C-) son por lo general personas que se frustran rápidamente bajo condiciones no satisfactorias, tienden a evadir la realidad y tienen una fortaleza de ego muy baja.";
            break;
        case 6:
            FactorC = "3B";
            MensajeFactorC = "Los que obtienen calificaciones bajas (C-) son por lo general personas que se frustran rápidamente bajo condiciones no satisfactorias, tienden a evadir la realidad y tienen una fortaleza de ego muy baja.";
            break;
        case 7:
            FactorC = "4M";
            MensajeFactorC = "";
            break;
        case 8:
            FactorC = "5M";
            MensajeFactorC = "";        
            break;
        case 9:
            FactorC = "6M";
            MensajeFactorC = "";
            break;
        case 10:
            FactorC = "7A";
            MensajeFactorC = "Puntuaciones altas (C+) son características de seres realistas y estables emocionalmente. Se les considera maduros, con una alta fortaleza de ego y se les adjudica una capacidad para mantener sólida la moral de un grupo.";
            break;
        case 11:
            FactorC = "8A";
            MensajeFactorC = "Puntuaciones altas (C+) son características de seres realistas y estables emocionalmente. Se les considera maduros, con una alta fortaleza de ego y se les adjudica una capacidad para mantener sólida la moral de un grupo.";        
            break;
        case 12:
            FactorC = "9A";
            MensajeFactorC = "Puntuaciones altas (C+) son características de seres realistas y estables emocionalmente. Se les considera maduros, con una alta fortaleza de ego y se les adjudica una capacidad para mantener sólida la moral de un grupo.";               
            break;
    }
    ResumenFactores[3] = {
        FactorFinal: FactorC,
        Factor: "Factor C",
        Mensaje: MensajeFactorC,
        PuntajeTotal: SumaTotalFactorC
    }
}
function SumarFactorE(){
    var SumaTotalFactorE = 0;
    let RespuestasFiltradasFactorE = Respuestas.filter(m => m.Factor == "E");
    RespuestasFiltradasFactorE.forEach(n =>{
        SumaTotalFactorE = SumaTotalFactorE + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorE){
        case 0:
            FactorE = "1B";
            MensajeFactorE = "Las personas que obtienen puntuaciones bajas (E-) tienden a ser sumisos, humildes y dóciles. Se dejan llevar fácilmente por otros, son conformistas, pasivos y considerados.";
            break;
        case 1:
            FactorE = "2B";
            MensajeFactorE = "Las personas que obtienen puntuaciones bajas (E-) tienden a ser sumisos, humildes y dóciles. Se dejan llevar fácilmente por otros, son conformistas, pasivos y considerados.";
            break;
        case 2:
            FactorE = "3B";
            MensajeFactorE = "Las personas que obtienen puntuaciones bajas (E-) tienden a ser sumisos, humildes y dóciles. Se dejan llevar fácilmente por otros, son conformistas, pasivos y considerados.";
            break;
        case 3:
            FactorE = "4M";
            MensajeFactorE = "";
            break;
        case 4:
            FactorE = "5M";
            MensajeFactorE = "";
            break;
        case 5:
        case 6:
            FactorE = "6M";
            MensajeFactorE = "";
            break;
        case 7:
            FactorE = "7A";
            MensajeFactorE = "Puntuaciones altas (E+) indican que el individuo es dominante. A este tipo de persona le resulta agradable y atractivo el estar en posiciones de poder para controlar y criticar a otros.Son agresivos, competitivos, tercos, asertivos y seguros de sí mismos. Tienden a ser autoritarios con otros y no se someten a la autoridad.";
            break;
        case 8:
        case 9:
            FactorE = "8A";
            MensajeFactorE = "Puntuaciones altas (E+) indican que el individuo es dominante. A este tipo de persona le resulta agradable y atractivo el estar en posiciones de poder para controlar y criticar a otros.Son agresivos, competitivos, tercos, asertivos y seguros de sí mismos. Tienden a ser autoritarios con otros y no se someten a la autoridad.";
            break;
        case 10:
        case 11:
        case 12:
            FactorE = "9A";
            MensajeFactorE = "Puntuaciones altas (E+) indican que el individuo es dominante. A este tipo de persona le resulta agradable y atractivo el estar en posiciones de poder para controlar y criticar a otros.Son agresivos, competitivos, tercos, asertivos y seguros de sí mismos. Tienden a ser autoritarios con otros y no se someten a la autoridad.";
            break;
    }
    ResumenFactores[4] = {
        Factor: "Factor E",
        FactorFinal: FactorE,
        Mensaje: MensajeFactorE,
        PuntajeTotal: SumaTotalFactorE
    }
}
function SumarFactorF(){
    var SumaTotalFactorF = 0;
    let RespuestasFiltradasFactorF = Respuestas.filter(m => m.Factor == "F");
    RespuestasFiltradasFactorF.forEach(n =>{
        SumaTotalFactorF = SumaTotalFactorF + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorF){
        case 0:
        case 1:
        case 2:
            FactorF = "1B";
            MensajeFactorF = "Puntuaciones bajas (F-) tienden a ser sumisos, humildes y dóciles. Se dejan llevar fácilmente por otros, son conformistas, pasivos y considerados.";
            break;
        case 3:
        case 4:
            FactorF = "2B";
            MensajeFactorF = "Puntuaciones bajas (F-) tienden a ser sumisos, humildes y dóciles. Se dejan llevar fácilmente por otros, son conformistas, pasivos y considerados.";
            break;
        case 5:
            FactorF = "3B";
            MensajeFactorF = "Puntuaciones bajas (F-) tienden a ser sumisos, humildes y dóciles. Se dejan llevar fácilmente por otros, son conformistas, pasivos y considerados.";
            break;
        case 6:
            FactorF = "4M";
            MensajeFactorF = "";
            break;
        case 7:
            FactorF = "5M";
            MensajeFactorF = "";
            break;
        case 8:
            FactorF = "6M";
            MensajeFactorF = "";
            break;
        case 9:
            FactorF = "7A";
            MensajeFactorF = "Las personas con puntuaciones altas (F+) tienden a ser altamente entusiastas, espontáneas, expresivas y alegres. Son individuos francos e impulsivos. Con frecuencia salen electos como líderes.";
            break;
        case 10:
            FactorF = "8A";
            MensajeFactorF = "Las personas con puntuaciones altas (F+) tienden a ser altamente entusiastas, espontáneas, expresivas y alegres. Son individuos francos e impulsivos. Con frecuencia salen electos como líderes.";
            break;
        case 11:
        case 12:
            FactorF = "9A";
            MensajeFactorF = "Las personas con puntuaciones altas (F+) tienden a ser altamente entusiastas, espontáneas, expresivas y alegres. Son individuos francos e impulsivos. Con frecuencia salen electos como líderes.";
            break;
    }
    ResumenFactores[5] = {
        FactorFinal: FactorF,
        Factor: "Factor F",
        Mensaje: MensajeFactorF,
        PuntajeTotal: SumaTotalFactorF
    }
}
function SumarFactorG(){
    var SumaTotalFactorG = 0;
    let RespuestasFiltradasFactorG = Respuestas.filter(m => m.Factor == "G");
    RespuestasFiltradasFactorG.forEach(n =>{
        SumaTotalFactorG = SumaTotalFactorG + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorG){
        case 0:
        case 1:
            FactorG = "1B";
            MensajeFactorG = "Los que obtienen calificaciones bajas (G-) son individuos que no se comportan de acuerdo a las reglas, ni se someten por completo a las normas de la sociedad o de su cultura. Su necesidad de logro se percibe como baja o ninguna, pero esto no implica que no sean productivos.";
            break;
        case 2:
        case 3:
            FactorG = "2B";
            MensajeFactorG = "Los que obtienen calificaciones bajas (G-) son individuos que no se comportan de acuerdo a las reglas, ni se someten por completo a las normas de la sociedad o de su cultura. Su necesidad de logro se percibe como baja o ninguna, pero esto no implica que no sean productivos.";
            break;
        case 4:
        case 5:
            FactorG = "3B";
            MensajeFactorG = "Los que obtienen calificaciones bajas (G-) son individuos que no se comportan de acuerdo a las reglas, ni se someten por completo a las normas de la sociedad o de su cultura. Su necesidad de logro se percibe como baja o ninguna, pero esto no implica que no sean productivos.";
            break;
        case 6:
            FactorG = "4M";
            MensajeFactorG = "";
            break;
        case 7:
            FactorG = "5M";
            MensajeFactorG = "";
            break;
        case 8:
            FactorG = "6M";
            MensajeFactorG = "";
            break;
        case 9:
        case 10:
            FactorG = "7A";
            MensajeFactorG = "Puntuaciones altas en este factor (G+) son representativas de personas moralistas, conformistas, responsables y concienzudas que tienden a actuar siempre de acuerdo a las reglas.";
            break;
        case 11:
            FactorG = "8A";
            MensajeFactorG = "Puntuaciones altas en este factor (G+) son representativas de personas moralistas, conformistas, responsables y concienzudas que tienden a actuar siempre de acuerdo a las reglas.";
            break;
        case 12:
            FactorG = "9A";
            MensajeFactorG = "Puntuaciones altas en este factor (G+) son representativas de personas moralistas, conformistas, responsables y concienzudas que tienden a actuar siempre de acuerdo a las reglas.";
            break;
    }
    ResumenFactores[6] = {
        FactorFinal: FactorG,
        Factor: "Factor G",
        Mensaje: MensajeFactorG,
        PuntajeTotal: SumaTotalFactorG
    }
}
function SumarFactorH(){
    var SumaTotalFactorH = 0;
    let RespuestasFiltradasFactorH = Respuestas.filter(m => m.Factor == "H");
    RespuestasFiltradasFactorH.forEach(n =>{
        SumaTotalFactorH = SumaTotalFactorH + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorH){
        case 0:
        case 1:
        case 2:
        case 3:
            FactorH = "1B";
            MensajeFactorH = "Los H- se limitan a lo seguro, predecible y estable para evitar situaciones o estímulos que puedan alterar su delicada homeostasis interna.";
            break;
        case 4:
        case 5:
            FactorH = "2B";
            MensajeFactorH = "Los H- se limitan a lo seguro, predecible y estable para evitar situaciones o estímulos que puedan alterar su delicada homeostasis interna.";
            break;
        case 6:
            FactorH = "3B";
            MensajeFactorH = "Los H- se limitan a lo seguro, predecible y estable para evitar situaciones o estímulos que puedan alterar su delicada homeostasis interna.";
            break;
        case 7:
            FactorH = "4M";
            MensajeFactorH = "";
            break;
        case 8:
            FactorH = "5M";
            MensajeFactorH = "";
            break;
        case 9:
            FactorH = "6M";
            MensajeFactorH = "";
            break;
        case 10:
            FactorH = "7A";
            MensajeFactorH = "En las personas que obtienen puntuaciones altas en este factor (H+) resulta dominante el sistema parasimpático, son capaces de funcionar bajo altos niveles de estrés, ignoran las señales que indiquen o presagien peligros externos, les encanta correr riesgos y disfrutan del éxtasis que les produce el ser aventureros.";
            break;
        case 11:
            FactorH = "8A";
            MensajeFactorH = "En las personas que obtienen puntuaciones altas en este factor (H+) resulta dominante el sistema parasimpático, son capaces de funcionar bajo altos niveles de estrés, ignoran las señales que indiquen o presagien peligros externos, les encanta correr riesgos y disfrutan del éxtasis que les produce el ser aventureros.";
            break;
        case 12:
            FactorH = "9A";
            MensajeFactorH = "En las personas que obtienen puntuaciones altas en este factor (H+) resulta dominante el sistema parasimpático, son capaces de funcionar bajo altos niveles de estrés, ignoran las señales que indiquen o presagien peligros externos, les encanta correr riesgos y disfrutan del éxtasis que les produce el ser aventureros.";
            break;
    }
    ResumenFactores[7] = {
        FactorFinal: FactorH,
        Factor: "Factor H",
        Mensaje: MensajeFactorH,
        PuntajeTotal: SumaTotalFactorH
    }
}
function SumarFactorI(){
    var SumaTotalFactorI = 0;
    let RespuestasFiltradasFactorI = Respuestas.filter(m => m.Factor == "I");
    RespuestasFiltradasFactorI.forEach(n =>{
        SumaTotalFactorI = SumaTotalFactorI + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorI){
        case 12:
        case 11:
            FactorI = "1B";
            MensajeFactorI = "Los (I-) se rigen por su pensamiento racional, siendo muy prácticos y realistas. Estos individuos son independientes, responsables, escépticos y, en ocasiones, pueden resultar cínicos y rudos.";
            break;
        case 10:
            FactorI = "2B";
            MensajeFactorI = "Los (I-) se rigen por su pensamiento racional, siendo muy prácticos y realistas. Estos individuos son independientes, responsables, escépticos y, en ocasiones, pueden resultar cínicos y rudos.";
            break;
        case 9:
        case 8:
            FactorI = "3B";
            MensajeFactorI = "Los (I-) se rigen por su pensamiento racional, siendo muy prácticos y realistas. Estos individuos son independientes, responsables, escépticos y, en ocasiones, pueden resultar cínicos y rudos.";
            break;
        case 7:
            FactorI = "4M";
            MensajeFactorI = "";
            break;
        case 6:
        case 5:
            FactorI = "5M";
            MensajeFactorI = "";
            break;
        case 4:
            FactorI = "6M";
            MensajeFactorI = "";
            break;
        case 3:
        case 2:
            FactorI = "7A";
            MensajeFactorI = "Los que obtienen puntuaciones altas (I+) funcionan bajo el dominio de sus sentimientos. Estas personas tienden a ser muy emotivas, de una sensibilidad extrema, distraídos, soñadores, intuitivos, impacientes, temperamentales y, por lo general, no son muy realistas.";
            break;
        case 1:
            FactorI = "8A";
            MensajeFactorI = "Los que obtienen puntuaciones altas (I+) funcionan bajo el dominio de sus sentimientos. Estas personas tienden a ser muy emotivas, de una sensibilidad extrema, distraídos, soñadores, intuitivos, impacientes, temperamentales y, por lo general, no son muy realistas.";
            break;
        case 0:
            FactorI = "9A";
            MensajeFactorI = "Los que obtienen puntuaciones altas (I+) funcionan bajo el dominio de sus sentimientos. Estas personas tienden a ser muy emotivas, de una sensibilidad extrema, distraídos, soñadores, intuitivos, impacientes, temperamentales y, por lo general, no son muy realistas.";
            break;
    }
    ResumenFactores[8] = {
        FactorFinal: FactorI,
        Factor: "Factor I",
        Mensaje: MensajeFactorI,
        PuntajeTotal: SumaTotalFactorI
    }
}
function SumarFactorL(){
    var SumaTotalFactorL = 0;
    let RespuestasFiltradasFactorL = Respuestas.filter(m => m.Factor == "L");
    RespuestasFiltradasFactorL.forEach(n =>{
        SumaTotalFactorL = SumaTotalFactorL + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorL){
        case 12:
        case 11:
            FactorL = "1B";
            MensajeFactorL = "Las personas que obtienen bajas puntuaciones (L-) se caracterizan primordialmente por sentirse uno con los demás. No se perciben como un mundo aparte, sino como parte de un mundo compuesto por toda la humanidad.";
            break;
        case 10:
            FactorL = "2B";
            MensajeFactorL = "Las personas que obtienen bajas puntuaciones (L-) se caracterizan primordialmente por sentirse uno con los demás. No se perciben como un mundo aparte, sino como parte de un mundo compuesto por toda la humanidad.";
            break;
        case 9:
            FactorL = "3B";
            MensajeFactorL = "Las personas que obtienen bajas puntuaciones (L-) se caracterizan primordialmente por sentirse uno con los demás. No se perciben como un mundo aparte, sino como parte de un mundo compuesto por toda la humanidad.";
            break;
        case 8:
            FactorL = "4M";
            MensajeFactorL = "";
            break;
        case 7:
        case 6:
            FactorL = "5M";
            MensajeFactorL = "";
            break;
        case 5:
            FactorL = "6M";
            MensajeFactorL = "";
            break;
        case 4:
            FactorL = "7A";
            MensajeFactorL = "Los que puntean alto (L+) poseen unas fronteras personales tan marcadas que se desconectan del resto de la humanidad. Estas personas tienden a desconfiar de los demás, y se ha encontrado que su comportamiento tiende a ser paranoico.";
            break;
        case 3:
        case 2:
            FactorL = "8A";
            MensajeFactorL = "Los que puntean alto (L+) poseen unas fronteras personales tan marcadas que se desconectan del resto de la humanidad. Estas personas tienden a desconfiar de los demás, y se ha encontrado que su comportamiento tiende a ser paranoico.";
            break;
        case 1:
        case 0:
            FactorL = "9A";
            MensajeFactorL = "Los que puntean alto (L+) poseen unas fronteras personales tan marcadas que se desconectan del resto de la humanidad. Estas personas tienden a desconfiar de los demás, y se ha encontrado que su comportamiento tiende a ser paranoico.";
            break;
    }
    ResumenFactores[9] = {
        FactorFinal: FactorL,
        Factor: "Factor L",
        Mensaje: MensajeFactorL,
        PuntajeTotal: SumaTotalFactorL
    }
}
function SumarFactorM(){
    var SumaTotalFactorM = 0;
    let RespuestasFiltradasFactorM = Respuestas.filter(m => m.Factor == "M");
    RespuestasFiltradasFactorM.forEach(n =>{
        SumaTotalFactorM = SumaTotalFactorM + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorM){
        case 12:
        case 11:
            FactorM = "1B";
            MensajeFactorM = "En términos de creatividad, los M- son representativas de personas moralistas, conformistas, responsables y concienzudas que tienden a actuar siempre de acuerdo a las reglas.";
            break;
        case 10:
        case 9:
            FactorM = "2B";
            MensajeFactorM = "En términos de creatividad, los M- son representativas de personas moralistas, conformistas, responsables y concienzudas que tienden a actuar siempre de acuerdo a las reglas.";
            break;
        case 8:
            FactorM = "3B";
            MensajeFactorM = "En términos de creatividad, los M- son representativas de personas moralistas, conformistas, responsables y concienzudas que tienden a actuar siempre de acuerdo a las reglas.";
            break;
        case 7:
            FactorM = "4M";
            MensajeFactorM = "";
            break;
        case 6:
            FactorM = "5M";
            MensajeFactorM = "";
            break;
        case 5:
            FactorM = "6M";
            MensajeFactorM = "";
            break;
        case 4:
        case 3:
            FactorM = "7A";
            MensajeFactorM = "Las personas con altas puntuaciones (M+) se caracterizan por una intensa vida interna. Van por el mundo sumergidas en sus pensamientos, distraídos e inatentos a lo que sucede a su alrededor.";
            break;
        case 2:
            FactorM = "8A";
            MensajeFactorM = "Las personas con altas puntuaciones (M+) se caracterizan por una intensa vida interna. Van por el mundo sumergidas en sus pensamientos, distraídos e inatentos a lo que sucede a su alrededor.";
            break;
        case 1:
        case 0:
            FactorM = "9A";
            MensajeFactorM = "Las personas con altas puntuaciones (M+) se caracterizan por una intensa vida interna. Van por el mundo sumergidas en sus pensamientos, distraídos e inatentos a lo que sucede a su alrededor.";
            break;
    }
    ResumenFactores[10] = {
        FactorFinal: FactorM,
        Factor: "Factor M",
        Mensaje: MensajeFactorM,
        PuntajeTotal: SumaTotalFactorM
    }
}
function SumarFactorN(){
    var SumaTotalFactorN = 0;
    let RespuestasFiltradasFactorN = Respuestas.filter(m => m.Factor == "N");
    RespuestasFiltradasFactorN.forEach(n =>{
        SumaTotalFactorN = SumaTotalFactorN + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorN){
        case 0:
        case 1:
            FactorN = "1B";
            MensajeFactorN = "Los que puntean bajo (N-) son características de personas más sobrias, prudentes, serias, taciturnas, introspectivas, restringidas";
            break;
        case 2:
            FactorN = "2B";
            MensajeFactorN = "Los que puntean bajo (N-) son características de personas más sobrias, prudentes, serias, taciturnas, introspectivas, restringidas";
            break;
        case 3:
            FactorN = "3B";
            MensajeFactorN = "Los que puntean bajo (N-) son características de personas más sobrias, prudentes, serias, taciturnas, introspectivas, restringidas";
            break;
        case 4:
            FactorN = "4M";
            MensajeFactorN = "";
            break;
        case 5:
            FactorN = "5M";
            MensajeFactorN = "";
            break;
        case 6:
            FactorN = "6M";
            MensajeFactorN = "";
            break;
        case 7:
            FactorN = "7A";
            MensajeFactorN = "Quienes obtienen puntuaciones altas (N+) tienden a ser calculadoras, frías, refinadas, diplomáticas, conscientes socialmente, utilitaristas y usan sus destrezas sociales para relacionarse con personas.";
            break;
        case 8:
        case 9:
            FactorN = "8A";
            MensajeFactorN = "Quienes obtienen puntuaciones altas (N+) tienden a ser calculadoras, frías, refinadas, diplomáticas, conscientes socialmente, utilitaristas y usan sus destrezas sociales para relacionarse con personas.";
            break;
        case 10:
        case 11:
            FactorN = "9A";
            MensajeFactorN = "Quienes obtienen puntuaciones altas (N+) tienden a ser calculadoras, frías, refinadas, diplomáticas, conscientes socialmente, utilitaristas y usan sus destrezas sociales para relacionarse con personas.";
            break;
    }
    ResumenFactores[11] = {
        FactorFinal: FactorN,
        Factor: "Factor N",
        Mensaje: MensajeFactorN,
        PuntajeTotal: SumaTotalFactorN
    }
}
function SumarFactorO(){
    var SumaTotalFactorO = 0;
    let RespuestasFiltradasFactorO = Respuestas.filter(m => m.Factor == "O");
    RespuestasFiltradasFactorO.forEach(n =>{
        SumaTotalFactorO = SumaTotalFactorO + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorO){
        case 12:
        case 11:
            Factor0 = "1B"
            MensajeFactorO = "Los que puntean bajo (O-) tienen una visión muy positiva de su persona, son seguros de sí mismos y no están propensos a experimentar culpa.";
            break;
        case 10:
        case 9:
            FactorO = "2B";
            MensajeFactorO = "Los que puntean bajo (O-) tienen una visión muy positiva de su persona, son seguros de sí mismos y no están propensos a experimentar culpa.";
            break;
        case 8:
            FactorO = "3B";
            MensajeFactorO = "Los que puntean bajo (O-) tienen una visión muy positiva de su persona, son seguros de sí mismos y no están propensos a experimentar culpa.";
            break;
        case 7:
            FactorO = "4M";
            MensajeFactorO = "";
            break;
        case 6:
            FactorO = "5M";
            MensajeFactorO = "";
            break;
        case 5:
            FactorO = "6M";
            MensajeFactorO = "";
            break;
        case 4:
        case 3:
            FactorO = "7A";
            MensajeFactorO = "Altas puntuaciones (O+) son obtenidas por personas cuya vida interna se rige por el sufrimiento, tienen expectativas personales muy altas, se preocupan demasiado, experimentan muchos sentimientos de culpa, son inseguros y no se sienten aceptados en situaciones grupales.";
            break;
        case 2:
            FactorO = "8A";
            MensajeFactorO = "Altas puntuaciones (O+) son obtenidas por personas cuya vida interna se rige por el sufrimiento, tienen expectativas personales muy altas, se preocupan demasiado, experimentan muchos sentimientos de culpa, son inseguros y no se sienten aceptados en situaciones grupales.";
            break;
        case 1:
        case 0:
            FactorO = "9A";
            MensajeFactorO = "Altas puntuaciones (O+) son obtenidas por personas cuya vida interna se rige por el sufrimiento, tienen expectativas personales muy altas, se preocupan demasiado, experimentan muchos sentimientos de culpa, son inseguros y no se sienten aceptados en situaciones grupales.";
            break;
    }
    ResumenFactores[12] = {
        FactorFinal: FactorO,
        Factor: "Factor O",
        Mensaje: MensajeFactorO,
        PuntajeTotal: SumaTotalFactorO
    }
}
function SumarFactorQ1(){
    var SumaTotalFactorQ1 = 0;
    let RespuestasFiltradasFactorQ1 = Respuestas.filter(m => m.Factor == "Q1");
    RespuestasFiltradasFactorQ1.forEach(n =>{
        SumaTotalFactorQ1 = SumaTotalFactorQ1 + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorQ1){
        case 0:
            FactorQ1 = "1B";
            MensajeFactorQ1 = "Los Q1-, muy conservadores y tradicionales. Aceptan lo establecido sin cuestionarlo, no les interesa el pensamiento intelectual o analítico y demuestran una marcada resistencia al cambio.";
            break;
        case 1:
            FactorQ1 = "2B";
            MensajeFactorQ1 = "Los Q1-, muy conservadores y tradicionales. Aceptan lo establecido sin cuestionarlo, no les interesa el pensamiento intelectual o analítico y demuestran una marcada resistencia al cambio.";
            break;
        case 2:
        case 3:
            FactorQ1 = "3B";
            MensajeFactorQ1 = "Los Q1-, muy conservadores y tradicionales. Aceptan lo establecido sin cuestionarlo, no les interesa el pensamiento intelectual o analítico y demuestran una marcada resistencia al cambio.";
            break;
        case 4:
            FactorQ1 = "4M";
            MensajeFactorQ1 = "";
            break;
        case 5:
            FactorQ1 = "5M";
            MensajeFactorQ1 = "";
            break;
        case 6:
        case 7:
            FactorQ1 = "6M";
            MensajeFactorQ1 = "";
            break;
        case 8:
            FactorQ1 = "7A";
            MensajeFactorQ1 = "Los Q1+ se sienten menos atados a su pasado que el resto de los individuos, tienden a ser muy liberales y rechazan lo tradicional y convencional.";
            break;
        case 9:
        case 10:
            FactorQ1 = "8A";
            MensajeFactorQ1 = "Los Q1+ se sienten menos atados a su pasado que el resto de los individuos, tienden a ser muy liberales y rechazan lo tradicional y convencional.";
            break;
        case 11:
        case 12:
            FactorQ1 = "9A";
            MensajeFactorQ1 = "Los Q1+ se sienten menos atados a su pasado que el resto de los individuos, tienden a ser muy liberales y rechazan lo tradicional y convencional.";
            break;
    }
    ResumenFactores[13] = {
        FactorFinal: FactorQ1,
        Factor: "Factor Q1",
        Mensaje: MensajeFactorQ1,
        PuntajeTotal: SumaTotalFactorQ1
    }
}
function SumarFactorQ2(){
    var SumaTotalFactorQ2 = 0;
    let RespuestasFiltradasFactorQ2 = Respuestas.filter(m => m.Factor == "Q2");
    RespuestasFiltradasFactorQ2.forEach(n =>{
        SumaTotalFactorQ2 = SumaTotalFactorQ2 + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorQ2){
        case 0:
        case 1:
        case 2:
        case 3:
            FactorQ2 = "1B";
            MensajeFactorQ2 = "Los Q2- demuestran una preferencia por estar en grupo la mayor parte del tiempo y toman sus decisiones con base a lo que piensan otros y lo que establece la sociedad, en vez de utilizar su propio juicio, y necesitan sentir que pertenecen a un grupo donde son aceptados y queridos.";
            break;
        case 4:
        case 5:
            FactorQ2 = "2B";
            MensajeFactorQ2 = "Los Q2- demuestran una preferencia por estar en grupo la mayor parte del tiempo y toman sus decisiones con base a lo que piensan otros y lo que establece la sociedad, en vez de utilizar su propio juicio, y necesitan sentir que pertenecen a un grupo donde son aceptados y queridos.";
            break;
        case 6:
            FactorQ2 = "3B";
            MensajeFactorQ2 = "Los Q2- demuestran una preferencia por estar en grupo la mayor parte del tiempo y toman sus decisiones con base a lo que piensan otros y lo que establece la sociedad, en vez de utilizar su propio juicio, y necesitan sentir que pertenecen a un grupo donde son aceptados y queridos.";
            break;
        case 7:
            FactorQ2 = "F4M";
            MensajeFactorQ2 = "";
            break;
        case 8:
            FactorQ2 = "F5M";
            MensajeFactorQ2 = "";
            break;
        case 9:
            FactorQ2 = "F6M";
            MensajeFactorQ2 = "";
            break;
        case 10:
            FactorQ2 = "F7A";
            MensajeFactorQ2 = "Los que obtienen puntuaciones altas en este factor (Q2+) son autosuficientes que acostumbran tomar decisiones sin preocuparse por las opiniones ajenas, prefieren estar solos la mayor parte del tiempo y hacen sus cosas sin pedir ayuda a los demás.";
            break;
        case 11:
            FactorQ2 = "8A"
            MensajeFactorQ2 = "Los que obtienen puntuaciones altas en este factor (Q2+) son autosuficientes que acostumbran tomar decisiones sin preocuparse por las opiniones ajenas, prefieren estar solos la mayor parte del tiempo y hacen sus cosas sin pedir ayuda a los demás.";
        case 12:
            FactorQ2 = "9A";
            MensajeFactorQ2 = "Los que obtienen puntuaciones altas en este factor (Q2+) son autosuficientes que acostumbran tomar decisiones sin preocuparse por las opiniones ajenas, prefieren estar solos la mayor parte del tiempo y hacen sus cosas sin pedir ayuda a los demás.";
            break;
    }
    ResumenFactores[14] ={
        FactorFinal: FactorQ2,
        Factor: "Factor Q2",
        Mensaje: MensajeFactorQ2,
        PuntajeTotal: SumaTotalFactorQ2
    }
}
function SumarFactorQ3(){
    var SumaTotalFactorQ3 = 0;
    let RespuestasFiltradasFactorQ3 = Respuestas.filter(m => m.Factor == "Q3");
    RespuestasFiltradasFactorQ3.forEach(n =>{
        SumaTotalFactorQ3 = SumaTotalFactorQ3 + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorQ3){
        case 0:
        case 1:
        case 2:
            FactorQ3 = "1B";
            MensajeFactorQ3 = "Los Q3- no se esfuerzan por controlarse y disciplinarse para lograr igualarse a los ideales de conducta, y no le dan importancia alguna a las reglas que establece la sociedad.";
            break;
        case 3:
        case 4:
            FactorQ3 = "2B";
            MensajeFactorQ3 = "Los Q3- no se esfuerzan por controlarse y disciplinarse para lograr igualarse a los ideales de conducta, y no le dan importancia alguna a las reglas que establece la sociedad.";
            break;
        case 5:
            FactorQ3 = "3B";
            MensajeFactorQ3 = "Los Q3- no se esfuerzan por controlarse y disciplinarse para lograr igualarse a los ideales de conducta, y no le dan importancia alguna a las reglas que establece la sociedad.";
            break;
        case 6:
            FactorQ3 = "4M";
            MensajeFactorQ3 = "";
            break;
        case 7:
        case 8:
            FactorQ3 = "5M";
            MensajeFactorQ3 = "";
            break;
        case 9:
            FactorQ3 = "6M";
            MensajeFactorQ3 = "";
            break;
        case 10:
            FactorQ3 = "7A";
            MensajeFactorQ3 = "Los que obtienen puntuaciones altas (Q3+) se esfuerzan por igualar su conducta a la imagen ideal y socialmente aceptable que se han creado.";
            break;
        case 11:
            FactorQ3 = "8A";
            MensajeFactorQ3 = "Los que obtienen puntuaciones altas (Q3+) se esfuerzan por igualar su conducta a la imagen ideal y socialmente aceptable que se han creado.";
            break;
        case 12:
            FactorQ3 = "9A";
            MensajeFactorQ3 = "Los que obtienen puntuaciones altas (Q3+) se esfuerzan por igualar su conducta a la imagen ideal y socialmente aceptable que se han creado.";
            break;
    }
    ResumenFactores[15] ={
        FactorFinal: FactorQ3,
        Factor: "Factor Q3",
        Mensaje: MensajeFactorQ3,
        PuntajeTotal: SumaTotalFactorQ3
    }
}
function SumarFactorQ4(){
    var SumaTotalFactorQ4 = 0;
    let RespuestasFiltradasFactorQ4 = Respuestas.filter(m => m.Factor == "Q4");
    RespuestasFiltradasFactorQ4.forEach(n =>{
        SumaTotalFactorQ4 = SumaTotalFactorQ4 + n.ValordeRespuesta;
    })
    switch(SumaTotalFactorQ4){
        case 12:
        case 11:
            FactorQ4 = "1B";
            MensajeFactorQ4 = "Los Q4-, quienes se caracterizan primordialmente por la ausencia de tensión nerviosa, llevan una existencia tranquila y relajada, regida por la calma, la paciencia y un alto grado de satisfacción que podría conducir a la vagancia y al conformismo";
            break;
        case 10:
        case 9:
            FactorQ4 = "2B";
            MensajeFactorQ4 = "Los Q4-, quienes se caracterizan primordialmente por la ausencia de tensión nerviosa, llevan una existencia tranquila y relajada, regida por la calma, la paciencia y un alto grado de satisfacción que podría conducir a la vagancia y al conformismo";
            break;
        case 8:
            FactorQ4 = "3B";
            MensajeFactorQ4 = "Los Q4-, quienes se caracterizan primordialmente por la ausencia de tensión nerviosa, llevan una existencia tranquila y relajada, regida por la calma, la paciencia y un alto grado de satisfacción que podría conducir a la vagancia y al conformismo";
            break;
        case 7:
        case 6:
            FactorQ4 = "4M";
            MensajeFactorQ4 = "";
            break;
        case 5:
            FactorQ4 = "5M";
            MensajeFactorQ4 = "";
            break;
        case 4:
            FactorQ4 = "6M";
            MensajeFactorQ4 = "";
            break;
        case 3:
            FactorQ4 = "7A";
            MensajeFactorQ4 = "Los que puntean alto (Q4+) experimentan niveles extremos de tensión nerviosa, padecen de una incomodidad subjetiva constante, son impacientes y se distinguen por su incapacidad para mantenerse inactivos";
            break;
        case 2:
            FactorQ4 = "8A";
            MensajeFactorQ4 = "Los que puntean alto (Q4+) experimentan niveles extremos de tensión nerviosa, padecen de una incomodidad subjetiva constante, son impacientes y se distinguen por su incapacidad para mantenerse inactivos";
            break;
        case 1:
        case 0:
            FactorQ4 = "9A";
            MensajeFactorQ4 = "Los que puntean alto (Q4+) experimentan niveles extremos de tensión nerviosa, padecen de una incomodidad subjetiva constante, son impacientes y se distinguen por su incapacidad para mantenerse inactivos";
            break;
    }
    ResumenFactores[16] = {
        FactorFinal: FactorQ4,
        Factor: "Factor Q4",
        Mensaje: MensajeFactorQ4,
        PuntajeTotal: SumaTotalFactorQ4
    }
}
//Se guarda la lista de objetos ResumenFactores en el localStorage
function ListaLocalStorage(){
    localStorage.setItem("lstFactores", JSON.stringify(ResumenFactores));
}
function RadioBtnLocalStorage(){
    
}
/////////////////////////////////////////////////////////////////
//Se llaman a todas las funciones
function SumarTodo(){
        SumarFactorA();
        SumarFactorB();
        SumarFactorC();
        SumarFactorE();
        SumarFactorF();
        SumarFactorG();
        SumarFactorH();
        SumarFactorI();
        SumarFactorL();
        SumarFactorM();
        SumarFactorN();
        SumarFactorO();
        SumarFactorQ1();
        SumarFactorQ2();
        SumarFactorQ3();
        SumarFactorQ4();
        SumarFactorD();
        ListaLocalStorage();
        console.log(ResumenFactores);
}
///////////////////////////////////////////////////////////////////
