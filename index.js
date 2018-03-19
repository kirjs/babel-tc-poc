const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const code = `
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string = 'Angular 5';
}

`;


const ast = require('babylon').parse(code, {
	sourceType: 'module',
	plugins: [
		'typescript',
		'decorators',
		'classProperties'
	]
});


traverse(ast, {
	StringLiteral(path) {
		path.node.value = 'lol';
	}
});

console.log(generate(ast).code);