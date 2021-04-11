const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it');
const prism = require('markdown-it-prism');
const {ROOT_PATH, SRC_PATH} = require('./const') ;

const md = new MarkdownIt({html:true});
md.use(prism,{
  plugins:[
    'highlight-keywords'
  ]
})




const main = async ()=> {
  console.log('Runing...')
  try {
    const htmls = await readMDToHTML();
    ensureOutputDir();
    writeHTMLToJSFiles(htmls);
    writeEnvToFile(htmls.length)
  } catch (error) {
    console.log(error.message);
  }
  console.log('Done')
}

const readMDToHTML = async ()=>{
  const MD_PATH = getMDPath();
  const exists = await fs.existsSync(MD_PATH);
  if(!exists) throw new Error('README.md does not exist at :' + MD_PATH);
  const mdString = fs.readFileSync(MD_PATH, {encoding:'utf-8'});

  const htmlString =  md.render(mdString); // micromark(mdString,{allowDangerousHtml:true});
  return htmlString.split('<hr>').slice(1);
}

const replaceAll = function (find, replace, str) {
  var find = find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return str.replace(new RegExp(find, 'g'), replace);
}

const writeHTMLToJSFiles =  (htmls)=>{
  
  htmls.forEach((html, index)=>{
    const questionIndex = index + 1;
    const filePath = generateFilePath(questionIndex);
    const _html = replaceAll('`','\\`', replaceAll('$',"\\$", html))
    const content = `export default ()=> {
      return (
        <div className="question" data-index="${questionIndex}" dangerouslySetInnerHTML = {{ __html: \`${_html}\` }}></div>
      );
    }`
     fs.writeFileSync(filePath, content);
  })
}

const writeEnvToFile = (fileSize)=>{
  fs.writeFileSync(path.join(SRC_PATH, '../.env'), `PUBLIC_URL=/javascript-questions
REACT_APP_Q_FILE_SIZE=${fileSize}`);
}

const getMDPath = ()=>{
  return path.join(ROOT_PATH, 'README.md')
}

const ensureOutputDir = ()=>{
  const dirPath = path.join(SRC_PATH,'q');
  if(fs.existsSync(dirPath)) return;
  fs.mkdirSync(dirPath);
}

const generateFilePath = (index) =>{
  return path.join(SRC_PATH,'q', index + '.js');
}

main();



