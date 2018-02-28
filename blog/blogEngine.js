const fs=require('fs')
const pug = require('pug');
const base='./blog'
var watch = require('node-watch');


function renderBlogIndex() {
  console.log('rendering blog index')
  const entries=getBlogPostsPaths().map(getPostData)

  fs.writeFileSync(base+'/index.html', pug.renderFile(base+'/index.pug', {
    entries
  }))
}

function getBlogPostsPaths() {
  let paths=fs.readdirSync(base)
    .filter(filename=>filename.match(/^20/) && filename.match(/\.pug$/))
    .map(f=>base+'/'+f)
  paths.sort().reverse()
  return paths
}

watch(base, { recursive: false}, function(evt, name) {
  if(name.match(/.pug$/)){
    if(name.match('20')){
    console.log(name+' changed, rerendering post')
      rerenderPost(name)
    }
    console.log(name+' changed, rerendering list')
    renderBlogIndex()
  }
  if(name.match(/item\.pug/)){
    rerenderAllPosts()
  }
});

function getPostData(path) {
  let content=fs.readFileSync(path).toString()
  let lines=content.split('\n');
  return {
    title:lines[0].replace('h2 ',''),
    intro:lines[1].replace('.intro ',''),
    date:path.match(/[0-9\-]+/)[0],
    content
  }
}

function rerenderPost(file) {
  console.info('rendering '+file)
  let {title, date,intro, content}=getPostData(file);
  fs.writeFileSync(base+'/'+date+'.html',
    pug.renderFile(base+'/item.pug', {
      title, date,intro, html:pug.render(content)
  }))
}

function rerenderAllPosts() {
  getBlogPostsPaths().forEach(rerenderPost)
}
renderBlogIndex()
rerenderAllPosts()
