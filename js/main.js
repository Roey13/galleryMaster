'use strict'
var gProjs;
var gProjNames = ['bookshop', 'minesweeper', 'pacman']
var gModalNum = 0;

var gProjDatas = [
  {name: 'Bookshop',
  desc: 'Come on in if you\'re a Harry Potter fan',
  url: 'https://roey13.github.io/bookshop/',
  publishedAt: 'April 6th 2021',
  labels: ['books', 'reading', 'magic']
  },
  {name: 'Minesweeper',
  desc: 'Come on in if like to live dangerously',
  url: 'https://roey13.github.io/minesweeperSprint/',
  publishedAt: 'March 26th 2021',
  labels: ['gaming', 'fun', 'bombs']
  },
  {name: 'Pacman',
  desc: 'Come on in if you\'re hungry',
  url: 'https://roey13.github.io/pacman/',
  publishedAt: 'March 3rd 2021',
  labels: ['gaming', 'fun', 'food']
  }
];

function initPage() {
  console.log('Starting up');
  addProj()
}

function createProj(project) {
  var proj = {
    id: project.name,
    name: project.name,
    title: project.name,
    desc: project.desc,
    url: project.url,
    publishedAt: project.publishedAt,
    labels: project.labels
  }
  return proj
}

function addProj() {
  gProjs = gProjDatas.map(function (projectData) {
    return createProj(projectData);
  })
  console.log('gProjs', gProjs);
  renderProj();
}

function renderProj() {
  var strHTML = gProjs.map(function (proj) {
    gModalNum++
    return `
        <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderMoadl('${proj.id}')" >
        <a class="portfolio-link" data-toggle="modal" href="#${proj.id}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.id}-thumb.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.id}</h4>
          <p class="text-muted">${proj.labels[0]}</p>
            </div>
        </div>
        `;
  }).join('');
  var elPortf = document.querySelector('.portf-row');
  elPortf.innerHTML = strHTML;
}

function renderMoadl(projId) {
  var proj = gProjs.find(function (porject) {
    return porject.id === projId
  })
  var strHTML = `
  <div class="portfolio-modal modal fade" id="${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <h2>${proj.id}</h2>
              <p class="item-intro text-muted">${proj.id}</p>
              <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-full.jpg" alt="">
              <p>${proj.desc}</p>
              <ul class="list-inline">
                <li>Date: ${proj.publishedAt}</li>
                <li>Client: ${proj.id}</li>
                <li>Category: ${proj.labels[0]}</li>
                <li><a href="${proj.url}" target="_blank">Come on in!</a></li>
              </ul>
              <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
  var elModal = document.querySelector('.full-modal');
  elModal.innerHTML = strHTML;
}

function sendMail() {
  var eMail = $('.email').val();
  var subject = $('.subject').val();
  var message = $('.message').val();
  var href ='https://mail.google.com/mail/?view=cm&fs=1&to=' + eMail + '&su=' + subject + '&body=' + message;
  console.log('href',href);
  window.open(href)
}