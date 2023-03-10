import 'mocha';
import {expect} from 'chai';
import {SeriesCollection} from "../src/ejercicio-1/seriesCollection";
import {DocumentalsCollection} from "../src/ejercicio-1/documentalsCollection";
import {MoviesCollection} from "../src/ejercicio-1/moviesCollection";


describe("SeriesCollection Tests", () => {
    const seriesCollection = new SeriesCollection([
        {
            title: "Los Simpson",
            year: 1989,
            episodes: 700,
            genre: "Comedy"
        },
        {
            title: "One Piece",
            year: 1999,
            episodes: 1000,
            genre: "Adventure"
        },
        {
            title: "Game of Thrones",
            year: 2011,
            episodes: 73,
            genre: "Fantasy"
        }
    ]);
    it("searchTitle", () => {
        expect(seriesCollection.searchTitle("Simpson")).to.be.eql([
            {
                title: "Los Simpson",
                year: 1989,
                episodes: 700,
                genre: "Comedy"
            }
        ]);
    });
    it("searchYear", () => {
        expect(seriesCollection.searchYear(1999)).to.be.eql([
            {
                title: "One Piece",
                year: 1999,
                episodes: 1000,
                genre: "Adventure"
            }
        ]);
    }
    );
    it("searchGenre", () => {
        expect(seriesCollection.searchGenre("Fantasy")).to.be.eql([
            {
                title: "Game of Thrones",
                year: 2011,
                episodes: 73,
                genre: "Fantasy"
            }
        ]);
    }
    );
    it("searchEpisodes", () => {
        expect(seriesCollection.searchEpisodes(73)).to.be.eql([
            {
                title: "Game of Thrones",
                year: 2011,
                episodes: 73,
                genre: "Fantasy"
            }
        ]);
    });
    it("Setter", () => {
        seriesCollection.items = [
            {
                title: "Los Simpson",
                year: 1989,
                episodes: 700,
                genre: "Comedy"
            }]
        expect(seriesCollection.items).to.be.eql([
            {
                title: "Los Simpson",
                year: 1989,
                episodes: 700,
                genre: "Comedy"
            }
        ]);
    });
});
describe("DocumentalsCollection Tests", () => {
    const documentalsCollection = new DocumentalsCollection([
        {
            title: "Animals",
            year: 2019,
            genre: "Nature",
            duration: 78
        },
        {
            title: "The Ted Bundy Tapes",
            year: 2019,
            genre: "Crime",
            duration: 256
        }
    ]);
    it("searchTitle", () => {
        expect(documentalsCollection.searchTitle("Animals")).to.be.eql([
            {
                title: "Animals",
                year: 2019,
                genre: "Nature",
                duration: 78
            }
        ]);
    });
    it("searchYear", () => {
        expect(documentalsCollection.searchYear(2019)).to.be.eql([
            {
                title: "Animals",
                year: 2019,
                genre: "Nature",
                duration: 78
            },
            {
                title: "The Ted Bundy Tapes",
                year: 2019,
                genre: "Crime",
                duration: 256
            }
        ]);
    });
    it("searchGenre", () => {
        expect(documentalsCollection.searchGenre("Nature")).to.be.eql([
            {
                title: "Animals",
                year: 2019,
                genre: "Nature",
                duration: 78
            }
        ]);
    }
    );
    it("searchDuration", () => {
        expect(documentalsCollection.searchDuration(78)).to.be.eql([
            {
                title: "Animals",
                year: 2019,
                genre: "Nature",
                duration: 78
            }
        ]);
    });
});
describe("MoviesCollection Tests", () => {
    const moviesCollection = new MoviesCollection([
        {
            title: "2012",
            year: 2009,
            genre: "Action",
            director: "Roland Emmerich",
        },
        {
            title: "Endgame",
            year: 2019,
            genre: "Action",
            director: "Anthony Russo",
        }
    ]);
    it("searchTitle", () => {
        expect(moviesCollection.searchTitle("Endgame")).to.be.eql([
            {
                title: "Endgame",
                year: 2019,
                genre: "Action",
                director: "Anthony Russo",
            }
        ]);
    });
    it("searchYear", () => {
        expect(moviesCollection.searchYear(2019)).to.be.eql([
            {
                title: "Endgame",
                year: 2019,
                genre: "Action",
                director: "Anthony Russo",
            }
        ]);
    }
    );
    it("searchGenre", () => {
        expect(moviesCollection.searchGenre("Action")).to.be.eql([
            {
                title: "2012",
                year: 2009,
                genre: "Action",
                director: "Roland Emmerich",
            },
            {
                title: "Endgame",
                year: 2019,
                genre: "Action",
                director: "Anthony Russo",
            }
        ]);
    }
    );
    it("searchDirector", () => {
        expect(moviesCollection.searchDirector("Anthony Russo")).to.be.eql([
            {
                title: "Endgame",
                year: 2019,
                genre: "Action",
                director: "Anthony Russo",
            }
        ]);
    }
    );
});
