import "./scss/styles.css";
import "./scss/styles.scss";

const app = () => {
    const url = "./code-test.json";

    fetch( url , {
    method: 'GET',
    headers : { 
        'Content-Type': 'application/json',
        }
    })
    .then( response => response.json())
    .then( data => {
        let articles='';
        console.log("data", data.articles);
        data.articles.map( article => {
            articles+= `
            <div class="grid-flex">
                <div class="col col-left col-text">
                <div class="col col-right Aligner-item">
                    <p class="category">${ article.primarySectionRouteName }</p>
                    <a href="${ article.link }"><h2>${ article.headline }</h2></a>
                    <p>${ article.standfirst }</p>
                </div>
                </div>
                <div class="col-right">
                    <a href="${ article.link }">
                        <img 
                            src="${article.thumbnail.src}" 
                            alt="${article.thumbnail.title}"
                            title="${article.thumbnail.title}"
                        />
                    </a>
                </div>
            </div>`
        })
        
        document.getElementById('articles').innerHTML = articles;


    }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
    });
    //document.getElementById('articles').innerHTML = Articles();
}

//Init app
app();
