// Search area
const searchButton = () => {
    const searchArea = document.getElementById('input-area')
    const searchText = searchArea.value;
    searchArea.value = '';
    const url = ` https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => loasResult(data.docs))
}

const loasResult = books => {
    const displayResult = document.getElementById('load-result')
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text"> <span class="fw-bold">Author Name: ${book.author_name}</span> </p>
            <p class="card-text"> <span class="fw-bold">Frist Publish Date: ${book.first_publish_year}</span> </p>
        </div>`
        displayResult.appendChild(div);
    })
}