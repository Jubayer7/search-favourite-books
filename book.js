// Search area
const searchButton = () => {
    const searchArea = document.getElementById('input-area')
    const searchText = searchArea.value;
    // NO result found
    if (searchText == '') {
        const noResult = document.getElementById('no-result')
        noResult.innerText = 'No result found';
        document.getElementById('result-found').style.display = 'none'
    }
    else {
        const noResult = document.getElementById('no-result')
        noResult.innerText = '';
        document.getElementById('result-found').style.display = 'block'
    }

    // search remove area
    searchArea.value = '';
    const url = ` https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => loasResult(data.docs))
}

const loasResult = books => {
    // Total result found
    const resultFound = document.getElementById('result-found')
    // Display result Remove area
    resultFound.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
    <p>Total result found: ${books.length}</p>`
    resultFound.appendChild(div)
    // Show display result
    const displayResult = document.getElementById('load-result')
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img  src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-100 img-fluid" alt="..."/>
        <div class="card-body">
            <h5 class="card-title text-primary">${book.title}</h5>
            <p class="card-text text-success"> <span class="fw-bold ">Author Name: ${book.author_name}</span> </p>
            <p class="card-text text-success"> <span class="fw-bold">Publish year: ${book.publish_year}</span> </p>
        </div>`
        displayResult.appendChild(div);
    })
}