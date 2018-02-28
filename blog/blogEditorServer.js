var express = require('express')
var app = express()

const fs=require('fs')
const pug = require('pug');
const base='./blog'
const resolvePath=require('path').resolve
var upload_image = require("./image_upload.js");

var html2jade = require('html2jade');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function (req, res) {
  res.redirect('/'+new Date().toISOString().slice(0,10))
})
app.get('/scribens.js', (req,res)=>{
  res.sendFile(resolvePath(__dirname+'/scribens2.js'))
})
app.get('/favicon.png', (req,res)=>{
  console.log('fav')
  res.sendFile(resolvePath(__dirname+'/../favicon.png'))
})
app.get('/blog/imgs/:filename', function (req, res) {
  console.log(req.params)
  res.sendFile(resolvePath(__dirname+'/imgs/'+req.params.filename))
})



app.get('/:date', function (req, res) {

  let pages=getDatesList().map(date=>({
    date,
    title: fs.readFileSync(base+'/'+date+'.pug').toString().split('\n')[0].replace('h2 ','')
  }))

  let title='',intro='',content="";
  try{
    let lines= fs.readFileSync(base+'/'+req.params.date+'.pug').toString().split('\n')
    title=(lines[0]||'').replace(/^h2 /,'')
    intro=(lines[1]||'').replace(/^.intro /,'')
     content=pug.render(lines.slice(2).join('\n'))

  }catch(e){
    console.log(e)
    // file doenst exist yet
  }
  res.send(pug.renderFile(base+'/editor.pug',{
    pages,
    title,
    intro,
    content
  }))
})

function getDatesList() {
  const files= fs.readdirSync(base)
    .filter(filename=>filename.match(/^20/) && filename.match(/\.pug$/))
    .map(f=>f.replace('.pug',''))
  files.sort().reverse()
  return files
}

app.post('/upload_image', function (req, res) {
  console.log('upload image')
  upload_image(req, function(err, data) {

    if (err) {
      console.error(err)
      return res.status(404).end(JSON.stringify(err));
    }

      console.info(data)
    res.send(data);
  });
})

app.post('/:date', function (req, res, next) {
  console.log(req.body)
  let date=req.params.date
  let dates=getDatesList()
  let nextDate= dates[dates.indexOf(date)+1] || date

  save(req,res, '/'+(req.body.goNext===''?nextDate:date))
})

function save(req,res,redirect){
  const {title, intro, content} = req.body;
  html2jade.convertHtml(req.body.content, {}, function (err, jade) {
    if(err) return next(err)

    fs.writeFileSync(base+'/'+req.params.date+'.pug', 'h2 '+title+'\n.intro '+intro+'\n'+
      jade)
    res.redirect(redirect)
  });
}

app.listen(1338);