import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ArticleObj, SearchFormData } from "../../helpers/interfaces";
import axios from 'axios'
import SearchForm from "../SearchForm/SearchForm";
import { List } from "@mui/material";
import { API_KEY } from "../../helpers/helpers";
import Article from "../Article/Article";

const SearchPage = () => {

    const [keyword, setKeyword] = useState('')
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        if (keyword !== '') {
            axios.get(
                `https://newsapi.org/v2/everything?q=${keyword}&from=2022-11-14&language=en&sortBy=popularity&apiKey=${API_KEY}`
            ).then((data) => {
                setArticles(data.data.articles);
                console.log('its working!!!')
            }).catch((err) => console.error(err.message));
        }
    }, [keyword]);

    return (
			<>
				<SearchForm setKeyword={setKeyword} />
				<List
					sx={{
						width: '100%',
						bgcolor: 'background.paper',
						alignContent: 'center',
					}}>
					{articles.length > 0 &&
						articles.map((art: ArticleObj) => {
							return <Article art={art} key={art.title} />;
						})}
				</List>
			</>
		);
};

export default SearchPage

// zad. 4 16.11.22
// treść
// 1. Stwórz stan keyword, wartość początkowa ''
// 2. Stwórz stan articles, wartość początkowa []
// 3. Wywołaj useEffect, zapełniona lista dependencji, reakcja na zmiane keyword
// W UE:
// 4. Stwórz ifa w którym sprawdzisz czy keyword jest różny od pustego stringa
// W ifie:
// 5. Strzał do API axiosem, url: https://newsapi.org/v2/everything?q=*tutaj dynamicznie wstawiany stan keyword*&from=2022-11-14&language=en&sortBy=popularity&apiKey=${API_KEY}
// 6. Do wywołania axiosa przypnij thena, w thenie wywołanie setArticles(data.data.articles), parametr thena nazwij data
// JSX:
// - Wyświetlenie SearchForm
// - List (MUI) sx: width 100%, bgcolor: background.paper, alignContent center


// STATE LIFTING - wnoszenie stanu do komponentu wyżej / przekazywanie informacji z komponentu dziecka do rodzica
// 1. Musimy mieć jakiś stan w komponencie rodzicu
// 2. Musimy przekazać funkcję aktualizującą stan do komponentu dziecka (props/context/redux/czymkolwiek czy sie da). W przypadku propsów pamiętaj o interfejsie (typ: (value: *tu typ zmiennej stanowej* => void)) i o odebraniu funkcji w child component w parametrze.
// 3. W środku child component wywołujemy funkcję (pkt 2), funkcja ta zawsze (!) będzie wiedzieć który stan w którym komponencie ma zaktualizować. Zmienna stanowa i setter są zawsze ze sobą związane, niezależnie gdzie się znajdą.

// zad. 1 17.11.2022
// treść
// 1. Przekaż propsem do SearchForma setKeyword (odpowiednio otypuj) i przyjmij w parametrze w SearchForm
// 2. W SearchForm wywołaj setKeyword w funkcji liftKeywordUp, do setKeyword podaj po prostu keyword zwracany z formularza

// 3. W List (u mnie linia 27) stwórz renderowanie warunkowe które będzie zależne od tego czy stan articles ma długość większą niż 0. Jeżeli warunek jest prawdziwy, wywołaj (cały czas w JSX'ie) metodę .map() na stanie articles.
// 4. .map() :
// - do tego mapa będą wpadać pojedyńcze artykuły z api, więc parametrem będzie 1 artykuł (nazwij jak chcesz)
// - z mapa zwracaj komponent Article, przekaż mu artykuł z parametru mapa, klucz według uznania, musi być stringiem i musi być unikalny
// - nie zapomnij że w mapie potrzebny jest return!