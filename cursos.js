let cursos = [{
	id: 1,
	nombre: 'programacion1',
	duracion: '40 horas',
	valor: 120000
},
{
	id: 2,
	nombre: 'programacion2',
	duracion: '60 horas',
	valor: 150000
},
{
	id: 3,
	nombre: 'programacion3',
	duracion: '80 horas',
	valor: 200000
}];

const fs = require ('fs');
const opciones = {
	id: {
		demand: true,
		alias:'i'
	},
	nombre: {
		demand:true,
		alias:'n'
	},
	cedula: {
		demand:true,
		alias:'c'
	}
}

const argv = require ('yargs')
.command('inscribir','aspirante',opciones)
.argv

let recorrercurso = (cursos) => {
	for (let i=0; i < cursos.length; i++){
		setTimeout (function(){
			console.log	('\r\n' + 'El ID: ' + cursos[i].id + '\r\n' + 'Pertenece al curso de: '  + cursos[i].nombre + '\r\n' + 'Con una duración de: '  + cursos[i].duracion  + '\r\n' + 'Tiene un valor de: ' + cursos[i].valor + ' pesos colombianos ' + '\r\n' )
		}, (2000 * i))
	}
}

let crearArchivo = () => {
	var buscar = cursos.find(elemento => elemento.id == argv.id)
	if (buscar){
		texto = 'El estudiante: ' + argv.n + '\r\n' + 
			'Con cc: ' + argv.c + '\r\n' +
			'Se ha matriculado al curso de: ' + buscar.nombre + '\r\n' + 
			'Con una duración de: ' + buscar.duracion + '\r\n' + 
			'Tiene un valor de: ' + buscar.valor + '\r\n' ;
			fs.writeFile ('inscripcion.txt', texto, (err) => {
				if (err) throw (err);
				console.log ('Se ha creado el archivo exitosamente');
			})
	}
	else if ( argv.id != undefined || argv.id != null) {
		console.log('El curso con el id ' + argv.id + ' no se encuentra en los cursos ofertados ');
		recorrercurso(cursos);
	} 
	else if ( argv.id == undefined ){
		recorrercurso(cursos);
	}		
}

module.exports = { crearArchivo };

