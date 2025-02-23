import test from "./test.mjs";
import books from "./example_files/books.json" assert { type: "json" };

//#region function -----------------------------------------------------------------
// Write your function her.

function returnBooksStartingWithThe(books) {
    if (!books || !Array.isArray(books)) {
        return [];
    }

    let result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].title.startsWith("The ")) {
            result[result.length] = books[i];
        }
    }
    return result;
}

function returnBooksWithTInAuthorsName(books) {
    if (!books || !Array.isArray(books)) {
        return [];
    }

    let result = [];
    for (let i = 0; i < books.length; i++) {
        let authorName = books[i].author.toLowerCase();
        if (authorName.indexOf("t") !== -1) {
            result[result.length] = books[i];
        }
    }
    return result;
}

function numberOfBooksWrittenAfter(books, year) {
    if (!books || !Array.isArray(books)) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year > year) {
            count = count + 1;
        }
    }
    return count;
}

function numberOfBooksWrittenBefore(books, year) {
    if (!books || !Array.isArray(books)) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year < year) {
            count = count + 1;
        }
    }
    return count;
}

function returnIsbnForAuthor(books, author) {
    if (!books || !Array.isArray(books) || !author) {
        return [];
    }

    let result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].author === author) {
            result[result.length] = books[i].isbn;
        }
    }
    return result;
}

function listBooksAlphabetically(books, ascending) {
    if (!books || !Array.isArray(books)) {
        return [];
    }

    let result = [];
    for (let i = 0; i < books.length; i++) {
        result[i] = books[i]; 
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            let shouldSwap = ascending ? 
                result[j].title > result[j + 1].title :
                result[j].title < result[j + 1].title;
            
            if (shouldSwap) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

function listBooksChronologically(books, ascending) {
    if (!books || !Array.isArray(books)) {
        return [];
    }

    let result = [];
    for (let i = 0; i < books.length; i++) {
        result[i] = books[i];
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            let shouldSwap = ascending ? 
                result[j].publication_year > result[j + 1].publication_year :
                result[j].publication_year < result[j + 1].publication_year;
            
            if (shouldSwap) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

function listBooksGroupedByAuthorLastName(books) {
    if (!books || !Array.isArray(books)) {
        return [];
    }

    let result = [];

    for (let i = 0; i < books.length; i++) {
        let authorName = books[i].author;
        let lastName;

        if (authorName.includes("(Translated)")) {
            lastName = authorName.split(" ")[0];
        } else {
            lastName = authorName.split(" ").pop();
        }

        if (!result[lastName]) {
            result[lastName] = [];
        }
        result[lastName][result[lastName].length] = books[i];
    }
    return result;
}

function listBooksGroupedByAuthorFirstName(books) {
    if (!books || !Array.isArray(books)) {
        return [];
    }

    let result = [];

    for (let i = 0; i < books.length; i++) {
        let firstName = books[i].author.split(" ")[0];

        if (!result[firstName]) {
            result[firstName] = [];
        }
        result[firstName][result[firstName].length] = books[i];
    }
    return result;
}

//#endregion

//#region Tests --------------------------------------------------------------------
// Write your tests her.
const booksJson = books;

const bookTests = test("Book tests");

const booksStartingWithThe = returnBooksStartingWithThe(booksJson);
bookTests.isEqual(booksStartingWithThe.length, 34, "Should find exactly 34 books starting with 'The'");
bookTests.isEqual(returnBooksStartingWithThe(null).length, 0, "Should handle null input");
bookTests.isEqual(returnBooksStartingWithThe([]).length, 0, "Should handle empty array");
bookTests.isEqual(booksStartingWithThe.some(book => book.title === "The Light Fantastic"), true, "Should find 'The Light Fantastic'");

const booksWithT = returnBooksWithTInAuthorsName(booksJson);
bookTests.isEqual(booksWithT.length, 51, "Should find exactly 51 books with 't' in author name");
bookTests.isEqual(returnBooksWithTInAuthorsName(null).length, 0, "Should handle null input");
bookTests.isEqual(booksWithT.some(book => book.author === "Terry Pratchett"), true, "Should find Terry Pratchett books");

bookTests.isEqual(numberOfBooksWrittenAfter(booksJson, 1992), 95, "Should find 95 books after 1992");
bookTests.isEqual(numberOfBooksWrittenAfter(null, 1992), 0, "Should handle null input");
bookTests.isEqual(numberOfBooksWrittenAfter(booksJson, 2020), 2, "Should find 2 books after 2020");
bookTests.isEqual(numberOfBooksWrittenAfter(booksJson, 1800), 115, "Should find all books after 1800");

bookTests.isEqual(numberOfBooksWrittenBefore(booksJson, 2004), 44, "Should find 44 books before 2004");
bookTests.isEqual(numberOfBooksWrittenBefore(null, 2004), 0, "Should handle null input");
bookTests.isEqual(numberOfBooksWrittenBefore(booksJson, 1900), 1, "Should find 1 book before 1900");
bookTests.isEqual(numberOfBooksWrittenBefore(booksJson, 2025), 115, "Should find all books before 2025");

const isbn = returnIsbnForAuthor(booksJson, "John Scalzi");
bookTests.isEqual(isbn.length, 15, "Should find exactly 15 John Scalzi books");
bookTests.isEqual(returnIsbnForAuthor(null, "John Scalzi").length, 0, "Should handle null input");
bookTests.isEqual(returnIsbnForAuthor(booksJson, "").length, 0, "Should handle empty author name");
bookTests.isEqual(returnIsbnForAuthor(booksJson, "Non Existent Author").length, 0, "Should handle non-existent author");

const alphabeticalBooks = listBooksAlphabetically(booksJson, true);
bookTests.isEqual(alphabeticalBooks[0].title, "A Hat Full of Sky", "First book should be 'A Hat Full of Sky'");
bookTests.isEqual(alphabeticalBooks[alphabeticalBooks.length-1].title, "Zoe's Tale", "Last book should be 'Zoe's Tale'");
bookTests.isEqual(listBooksAlphabetically(null, true).length, 0, "Should handle null input");

const chronologicalBooks = listBooksChronologically(booksJson, true);
bookTests.isEqual(chronologicalBooks[0].publication_year, 1854, "First book should be from 1854");
bookTests.isEqual(chronologicalBooks[chronologicalBooks.length-1].publication_year, 2021, "Last book should be from 2021");
bookTests.isEqual(listBooksChronologically(null, true).length, 0, "Should handle null input");

const byLastName = listBooksGroupedByAuthorLastName(booksJson);
bookTests.isEqual(byLastName["Pratchett"].length, 42, "Should find 42 Pratchett books");
bookTests.isEqual(byLastName["Gaiman"].length, 13, "Should find 13 Gaiman books");
bookTests.isEqual(listBooksGroupedByAuthorLastName(null).length, 0, "Should handle null input");

const byFirstName = listBooksGroupedByAuthorFirstName(booksJson);
bookTests.isEqual(byFirstName["Terry"].length, 41, "Should find 41 Terry books");
bookTests.isEqual(byFirstName["Neil"].length, 15, "Should find 15 Neil books");
bookTests.isEqual(listBooksGroupedByAuthorFirstName(null).length, 0, "Should handle null input");
//#endregion