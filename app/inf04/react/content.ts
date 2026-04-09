export const reactLessons = [
  {
    id: "intro",
    title: "Wprowadzenie do komponentów",
    isDraft: false,
    description: "React to biblioteka, która pozwala budować UI z małych, niezależnych części.",
    teoria: "Komponenty to serce Reacta. Pozwalają one na dzielenie interfejsu na niezależne, wielokrotnego użytku części, które można traktować jak osobne elementy klocków LEGO.\n\nW React każdy komponent jest funkcją JavaScript, która zwraca kod JSX (wygląda jak HTML, ale ma moc JS).",
    przyklad: "function Welcome() {\n  return <h1>Witaj na kursie INF.04!</h1>;\n}\n\n// Użycie:\n// <Welcome />",
    tasks: [
      "Zainstaluj rozszerzenie ES7+ React Snippets",
      "Stwórz swój pierwszy komponent funkcjonalny",
      "Wyświetl 'Hello World' na stronie"
    ],
    downloadUrl: "#"
  },
  {
    id: "props",
    title: "Przekazywanie danych (Props)",
    isDraft: true,
    description: "Dowiedz się, jak przesyłać informacje z jednego komponentu do drugiego.",
    teoria: "Props (skrót od properties) to system przekazywania danych w dół drzewa komponentów - od rodzica do dziecka. Są one tylko do odczytu (read-only).",
    przyklad: "function Greeting(props) {\n  return <h1>Cześć, {props.name}!</h1>;\n}\n\n// Użycie:\n// <Greeting name='Ewelina' />",
    tasks: [
      "Stwórz komponent bazowy",
      "Przekaż imię użytkownika przez props",
      "Wyświetl powitanie dynamicznie"
    ],
    downloadUrl: "#"
  }
];