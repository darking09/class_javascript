/*var nombreApellido = "Niño Camilo";
var estatura = 150.5;
var soltero = true; // false
var programadores = ['Cristian', 2, 'Gonzalo', 'Jose', 'Fernando'];*/


var print =  document.getElementById('root');
let programadores = '15';


if (true) {
	console.log('Imprima dos '+programadores);	
}

programadores = ['mateo', 'camilo', 'felipe', 'cesar'];



/*if (programadores === 101) {
	console.log('Es 101');
} else if(programadores === 100) {
	console.log('Es 100');
} else {
	console.log('Es otro numero');
}

console.log(programadores === 100 ? 'es 100' : programadores === 101 ? 'es 101' : ' no lo es');*/

/*switch(programadores) {
	case 'Mateo':
		console.log('Es Mateo');
		break;
	case 101:
		console.log('Es 101');
		break;
	default:
		console.log('No lo es');
}*/


/*for(let i = 0; i < programadores.length; i++) {
	console.log(programadores[i]);
}*/

programadores.forEach(function(item, index) {
	console.log(item, index);
})

//console.log(i);

print.innerHTML = '<h1 class="nombre" >Clase de Javascript II</h1>';