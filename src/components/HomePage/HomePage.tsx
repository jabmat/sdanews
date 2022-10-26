// import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../../helpers/helpers';
import { Typography, List } from '@mui/material';
import Article from '../Article/Article';

const HomePage = () => {
	// zad. 2 - rozwiązanie
	// 1.
	const [todaysArticles, setTodaysArticles] = useState([]);

	useEffect(() => {
		// zad. 1
		// stworzenie stringa z datą
		// 2022-10-25, rrrr-mm-dd
		// w zmiennej date zapisz wczorajszą datę (24.10.2022), skorzystaj z obiektu Date który jest wbudowany w js
		// turnary operator
		const today = new Date();
		const day =
			today.getDate() - 1 < 10
				? `0${today.getDate() - 1}`
				: today.getDate() - 1;

		const month =
			today.getMonth() + 1 < 10
				? `0${today.getMonth() + 1}`
				: today.getMonth() + 1;
		const year = today.getFullYear();

		const date = `${year} - ${month}-${day}`;

		// get request
		axios
			.get(
				`https://newsapi.org/v2/everything?q=world&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
			)
			.then((response) => {
				// console.log(response.data.articles);
				setTodaysArticles(response.data.articles);
            }).catch((err) => console.error(err.message));
        
        // return () => {}; // używamy, gdy chcemy coś wykonać zaraz po pojawieniu się na ekranie

		// zad. 2
		// 1. Stwórz stan todaysArticles (funckja aktualizujaca stan będzie sie nazywala setTodaysArticles), wartość początkowa: [] (pusta lista)
		// 2. Do axios.get dopisz thena, w którym wrzucisz zwrócone z API dane do stanu todaysArticles (dane o ktore nam chodzi to lista artykułow, jest ona zagnieżdzona na 2 poziome w responsie, najpierw wyloguj response i poszukaj)
		// 3. Dopisz catcha, w srodku console.log blad
		// 4. Zauważ różnice w działaniu axiosa i fetcha, zapisz tą różnice
	}, []); // LISTA DEPENENCJI, nie wpisuj do listy dependencji stanu który aktualizujesz w środku useEffect'a

	// (, []) - lista dependencji - funkcja wykona się tylko raz, a później nie będzie reagować na zmianę stanu
	// drugi argument:
	// 1. Nie podawać w ogóle
	// 2. Podać pustą listę
	// 3. Podać zapełnioną listę
    // console.log(todaysArticles);

    // Komponent Typography (MUI)
    // 1. Typography to komponent służący do wyświetlania tekstu
    // 2. Przyjmmuje kilka ważnych atrybutów: variant='h2', component='h2' (jeżeli variant i component jest tym samym, to nie trzeba pisać component), align='center', sx (atrybut wszystkich komponentów MUI, atrybut do którego możemy przekazać obiekt i pisać w nim CSS, i tak: p - padding, m - margin, mt - marginTop, mb - marginBottom, mx = margin w osi X (marginLeft + marginRight), my - margin w osi Y)
    // 

    // Komponent List (MUI)
    // List to <ul> z HTML'a przystosowany tak
    // zad. 3
    {/* Wyświetl Typography, ma wyglądać jak h2, ma być wyśrodkowany, wielkość czcionki ma być ustawiona na 2rem, margines dolny ma być ustawiony .8rem, wyświetlany tekst: "Today's hottest news:" */}
      {/* Wyświetl List (komponent z MUI), ustaw jej szerokość na 100%, i wyśrodkuj jej kontent */}

	// return <div>HomePage3</div>;
	// return  <Typography variant='h2' align='center' fontSize= '.8'>Today's hottest news:</Typography>;

    return (
        <>
            <Typography variant='h2' align='center' sx={{ fontSize: '2rem', my: '.8rem' }}>Today's hottest news:</Typography>
            
            <List sx={{ width: '100%', alignContent: 'center' }}></List>
		</>
		
		
		
    );
};

export default HomePage;

// Ściąganie newsów z API oraz ich wyświetlanie
// useEffect
// axios

// Praca z API w React
// fetch, axios, React Query?
// axios to bardziej rozbudowany fetch
