const fs=require('fs')
const pug = require('pug');
const base='./blog'
var watch = require('node-watch');
var RSS = require('rss');


function renderBlogIndex( ) {
  console.log('rendering blog index')
  const entries=getBlogPostsPaths().map(getPostData)

  fs.writeFileSync(base+'/index.html', pug.renderFile(base+'/index.pug', {
    entries
  }))
  renderRSSFeed(entries)
}

function renderRSSFeed(entries) {

  var feed = new RSS({
    title:'Blog cyberlégume',
    description:'Nouveautés dans cyberlégume et informations annexes sur le  projet',
    feed_url:'https://ciboulette.net/blog/news.xml',
    site_url:'https://ciboulette.net/',
    image_url:'https://ciboulette.net/img/cyberlogo.png',
    webMaster:'renan.lecaro@ŋmail.com',
    language:'fr-fr',
    copyright:'All rights reserved',
    pubDate: new Date(),
    ttl:300
  });
  entries.forEach(({title, intro, date, content})=>{
    feed.item({
      title,
      description:intro,
      url: 'https://ciboulette.net/blog/'+date,
      guid:date,
      date:new Date(date)
    })
  })
  const xml=feed.xml({indent: true})
  fs.writeFileSync(base+'/news.xml', xml)
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
      rerenderPost(name)
    }
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
    title:lines[0].replace('h1 ',''),
    intro:lines[1].replace('.intro ',''),
    date:path.match(/[0-9\-]+/)[0],
    content
  }
}

function rerenderPost(file) {
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
