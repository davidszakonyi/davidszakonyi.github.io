const homeBtn = document.getElementById('navi-home');
homeBtn.addEventListener('click', switchPage, false);
homeBtn.myParam = 'home';

const backBtn = document.getElementById('back');
backBtn.addEventListener('click', switchPage, false);
backBtn.myParam = 'home';

const booksBtn = document.getElementById('navi-books');
booksBtn.addEventListener('click', switchPage, false);
booksBtn.myParam = 'books';

const currentBtn = document.getElementById('navi-current');
currentBtn.addEventListener('click', switchPage, false);
currentBtn.myParam = 'current';

const pubBtn = document.getElementById('navi-papers');
pubBtn.addEventListener('click', switchPage, false);
pubBtn.myParam = 'publication';

const creativeBtn = document.getElementById('navi-teaching');
creativeBtn.addEventListener('click', switchPage, false);
creativeBtn.myParam = 'teaching';

const cvBtn = document.getElementById('navi-cv');
cvBtn.addEventListener('click', switchPage, false);
cvBtn.myParam = 'cv';

const contactBtn = document.getElementById('navi-contact');
contactBtn.addEventListener('click', switchPage, false);
contactBtn.myParam = 'contact';

const newsArchiveBtn = document.getElementById('news-more');
newsArchiveBtn.addEventListener('click', switchPage, false);
newsArchiveBtn.myParam = 'archive';

const homeDiv = document.getElementById('home');
const booksDiv = document.getElementById('books');
const currentDiv = document.getElementById('current');
const pubDiv = document.getElementById('papers');
const creativeDiv = document.getElementById('teaching');
const cvDiv = document.getElementById('cv');
const contactDiv = document.getElementById('contact');
const newsArchiveDiv = document.getElementById('newsarchive')

function switchPage (page) {
    if (page.currentTarget.myParam == 'home') {
        console.log('home');
        
        homeDiv.style.display = 'block';
        booksDiv.style.display = 'none';
        currentDiv.style.display = 'none';

        pubDiv.style.display = 'none';
        creativeDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
        // this rough logic works -- 
        // need to add a smooth transition
        
    }

    if (page.currentTarget.myParam == 'books') {
        console.log('books');
        booksDiv.style.display = 'block';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        currentDiv.style.display = 'none';

        creativeDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
    }
    
    if (page.currentTarget.myParam == 'current') {
        console.log('current');
        booksDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        currentDiv.style.display = 'block';

        creativeDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
    }
   
    if (page.currentTarget.myParam == 'publication') {
        console.log('pub');
        booksDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'block';
        currentDiv.style.display = 'none';

        creativeDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
    }

    if (page.currentTarget.myParam == 'teaching') {
        console.log('teaching');
        booksDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        currentDiv.style.display = 'none';

        creativeDiv.style.display = 'block';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
    }

    if (page.currentTarget.myParam == 'cv') {
        console.log('cv');
        booksDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        currentDiv.style.display = 'none';

        creativeDiv.style.display = 'none';
        cvDiv.style.display = 'block';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
    }

    if (page.currentTarget.myParam == 'contact') {
        console.log('contact');
        booksDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        currentDiv.style.display = 'none';

        creativeDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'block';
        newsArchiveDiv.style.display = 'none';
    }
    if (page.currentTarget.myParam == 'archive') {
        console.log('contact');
        booksDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        creativeDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'block';
    }
}