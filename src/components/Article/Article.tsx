import React from 'react'

const Article = () => {
    return (
        <div>Article</div>
    )
}

export default Article

// skrót rafce

// zad. 1
// 1. Wyświetl komponent Article w HomePage
// 2. Stwórz plik interfaces.ts w folderze helpers, w tym pliku stwórz interface ArticleObj, w tym interfejsie umieść 3 własności: url, urlToImage, title, wszystkie 3 będą stringami. Do tego stwórz interface ArticleProps, będzie on rozszerzeniem ArticleObj z dodanym polem key (który będzie liczbą)
// 3. Przekaż jako props todaysArticles[0] do komponentu Article w HomePage
// 4. Odpowiednio otypuj i odbierz propsy w Article
// 5. Wyświetl url, urlToImage, title w równorzędnych tagach <p> w Article
