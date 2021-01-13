let btnSearch = document.getElementById('btn-search')
let btnClear = document.getElementById('btn-clear')
var search = document.getElementById('search')
var bookSection = document.getElementById('book-section');

    search.addEventListener("keydown", e=>{
        if(e.key == 'Enter'){
            handleList();
        }else if(e.key == 'Escape'){
            clearSection();

        }
    })

    btnClear.addEventListener('click', e =>{
        clearSection();
    })

    btnSearch.addEventListener("click", (e)=>{
        handleList();
    })

    function getBooks(url){

        axios.get(url).then( req => {
            
            populateList(req.data.items)

        }).catch(err => {
    
            let div = document.createElement('div');
                div.className = 'col-9'
                div.innerHTML = `
                    <h1>Nenhum Livro foi Encontrado</h1>
                `
            let row = document.createElement('div');
            row.className = 'row';
            row.style.margin = '20px';
            row.style.padding = '10px';
            row.style.borderBottom = "1px solid #D3D3D3" 

                row.appendChild(div);
                bookSection.appendChild(row);
        });
    }

    function handleList(){
        
        let query = search.value;
        let url = ` https://www.googleapis.com/books/v1/volumes?q=${query}`
        getBooks(url)
    }
    
    function populateList(list){
        
        clearSection();

            Array.from(list).forEach(node => {

                let title = node.volumeInfo.title ? node.volumeInfo.title : '';
                let description = node.volumeInfo.description ? node.volumeInfo.description : '';
                let author = node.volumeInfo.authors ? node.volumeInfo.authors : '';
                if( node.volumeInfo.language == 'pt'){
                    var lang = 'Português' 
                }else if(node.volumeInfo.language == 'en'){
                    var lang = 'Inglês' 
                }
                let image = node.volumeInfo.imageLinks.thumbnail ? node.volumeInfo.imageLinks.thumbnail : '';
                if(node.volumeInfo.publishedDate){
                    var dateRelease = new Date(node.volumeInfo.publishedDate ).getFullYear();
                }else{
                    var dateRelease = '';
                }            
                let genre = node.volumeInfo.categories ? node.volumeInfo.categories : '';
                let link = node.volumeInfo.previewLink ? node.volumeInfo.previewLink : '';
        
                let divImg = document.createElement('div')
                divImg.className = 'col-3';
                let img = document.createElement("img");
                img.src = `${image}`
                divImg.appendChild(img)
        
                let div = document.createElement('div');
                    div.className = 'col-9'
                    div.innerHTML = `
                        <h4>${title}</h4>
                        <div class="d-flex flex-column justify-content-center">
                            <div class="d-flex flex-row">
                            <small>${dateRelease}</small>
                            <small>${genre}</small>
                            <small>${lang}</small>
                            </div>
                            <small>${author}</small>
                            <small><a href="${link}">Google Store</a></small>
                        </div>
                        <p>${description}</p>
                    `
                let row = document.createElement('div');
                row.className = 'row';
                row.style.margin = '20px';
                row.style.padding = '10px';
                row.style.borderBottom = "1px solid #D3D3D3" 
    
                    row.appendChild(divImg);
                    row.appendChild(div);
                    bookSection.appendChild(row);
            })       
       
    }

    function clearSection(){
            
        Array.from(bookSection.children).forEach(item => {
             item.parentElement.removeChild(item);
         })
        }