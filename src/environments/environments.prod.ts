
// Ejemplo de environments producción
// para poder usar las variables de entorno debemos ir a angular.json 
// --> configurations --> production --> y agregar 
// "fileReplacements": [
// {
//     "replace": "src/environments/environments.ts",
//     "with": "src/environments/environments.prod.ts"
//   }
// ]
export const environments = {
    baseUrl: 'https://dominio-en-producction.com/api'
}