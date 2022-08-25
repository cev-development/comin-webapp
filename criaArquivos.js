const fs = require('fs').promises;
const { writeFileSync } = require('fs');

async function listarArquivosDoDiretorio(diretorio, arquivos) {

    if(!arquivos)
        arquivos = [];

    let listaDeArquivos = await fs.readdir(diretorio);
    for(let k in listaDeArquivos) {
        let stat = await fs.stat(diretorio + '/' + listaDeArquivos[k]);
        if(stat.isDirectory())
            await listarArquivosDoDiretorio(diretorio + '/' + listaDeArquivos[k], arquivos);
        else
            arquivos.push(listaDeArquivos[k]);
    }

    return arquivos;

}

(async () => {
  const files = await listarArquivosDoDiretorio('./src/assets/logoHeader');
  const linesImport = [];
  const linesExport = [];

  files.forEach(file => {
    const [name] = file.split('.');
    const lineImport = `import ${name}Src from './${file}';`;
    const lineExport = `export const ${name} = () => <img src={${name}Src} alt="${name}"/>;`;
    linesImport.push(lineImport);
    linesExport.push(lineExport);
  });

  const stringLinesImport = linesImport.join("\n");
  const stringLinesExport = linesExport.join("\n");

  writeFileSync('./src/assets/logoHeader/index.tsx', `${stringLinesImport} \n ${stringLinesExport}`)

  console.log(files)
})();
