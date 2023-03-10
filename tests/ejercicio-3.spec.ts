import 'mocha';
import {expect} from 'chai';
import {Artist} from'../src/ejercicio-3/artist';
import {Album, AlbumCollection} from'../src/ejercicio-3/album';
import {Song} from'../src/ejercicio-3/song';
import { Single, SingleCollection } from '../src/ejercicio-3/single';
import { Discography } from '../src/ejercicio-3/discography';

describe('Test Ejercicio 1', () => {
    describe('Comprobaciones Song', () => {
    it('Getters', () => {
        const song1 = new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix");
        expect(song1.name).to.be.equal("Cancion1");
        expect(song1.duration).to.be.equal(200);
        expect(song1.genres).to.be.eql(["Rock"]);
        expect(song1.single).to.be.equal(true);
        expect(song1.plays).to.be.equal(1000);
        expect(song1.version).to.be.equal("Orginal Mix");
    });
    it('Setters', () => {
        const song1 = new Song("Cancion1", 200, ["Rock"], true, 1000);
        song1.name = "Cancion2";
        song1.duration = 300;
        song1.genres = ["Pop"];
        song1.single = false;
        song1.plays = 2000;
        song1.version = "Chill Version";
        expect(song1.name).to.be.equal("Cancion2");
        expect(song1.duration).to.be.equal(300);
        expect(song1.genres).to.be.eql(["Pop"]);
        expect(song1.single).to.be.equal(false);
        expect(song1.plays).to.be.equal(2000);
        expect(song1.version).to.be.equal("Chill Version");
    });
    });
    describe('Comprobaciones single', () => {
    it('Getters', () => {
        const single1 = new Single("Cancion1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")]);
        expect(single1.name).to.be.equal("Cancion1");
        expect(single1.year).to.be.equal(1998);
        expect(single1.song).to.be.eql([new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")]);
    });
    it('Setters', () => {
        const single1 = new Single("Cancion1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")]);
        single1.name = "Cancion2";
        single1.year = 1999;
        single1.song = [new Song("Cancion2", 300, ["Pop"], false, 2000, "Chill Version")];
        expect(single1.name).to.be.equal("Cancion2");
        expect(single1.year).to.be.equal(1999);
        expect(single1.song).to.be.eql([new Song("Cancion2", 300, ["Pop"], false, 2000, "Chill Version")]);
    });
});
    describe('Comprobaciones SingleCollection', () => {
    it('Getters', () => {
        const singleCollection1 = new SingleCollection([new Single("Cancion1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")])]);
        expect(singleCollection1.singles).to.be.eql([new Single("Cancion1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")])]);
    });
    it('Setters', () => {
        const singleCollection1 = new SingleCollection([new Single("Cancion1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")])]);
        singleCollection1.singles = [new Single("Cancion2", 1999, [new Song("Cancion2", 300, ["Pop"], false, 2000, "Chill Version")])];
        expect(singleCollection1.singles).to.be.eql([new Single("Cancion2", 1999, [new Song("Cancion2", 300, ["Pop"], false, 2000, "Chill Version")])]);
    });
});
    describe('Comprobaciones Album', () => {
    it('Getters', () => {
        const album1 = new Album("Album1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")]);
        expect(album1.name).to.be.equal("Album1");
        expect(album1.year).to.be.equal(1998);
        expect(album1.songs).to.be.eql([new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")]);
    });
    it('Setters', () => {
        const album1 = new Album("Album1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")]);
        album1.name = "Album2";
        album1.year = 1999;
        album1.songs = [new Song("Cancion2", 300, ["Pop"], false, 2000, "Chill Version")];
        expect(album1.name).to.be.equal("Album2");
        expect(album1.year).to.be.equal(1999);
        expect(album1.songs).to.be.eql([new Song("Cancion2", 300, ["Pop"], false, 2000, "Chill Version")]);
    });
});
    describe("Comprobaciones AlbumCollection", () => {
    it('Getters', () => {
        const albumCollection1 = new AlbumCollection([new Album("Album1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")])]);
        expect(albumCollection1.albums).to.be.eql([new Album("Album1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")])]);
    });
    it('Setters', () => {
        const albumCollection1 = new AlbumCollection([new Album("Album1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")])]);
        albumCollection1.albums = [new Album("Album2", 1999, [new Song("Cancion2", 300, ["Pop"], false, 2000, "Chill Version")])];
        expect(albumCollection1.albums).to.be.eql([new Album("Album2", 1999, [new Song("Cancion2", 300, ["Pop"], false, 2000, "Chill Version")])]);
    });
});
    describe("Comprobaciones Discography", () => {
    it('Getters', () => {
        const albumCollection1 = new AlbumCollection([new Album("Album1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")])]);
        const discography1 = new Discography([albumCollection1]);
        expect(discography1.items).to.be.eql([albumCollection1]);
    });
    it('Setters', () => {
        const albumCollection1 = new AlbumCollection([new Album("Album1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")])]);
        const albumCollection2 = new AlbumCollection([new Album("Album2", 1999, [new Song("Cancion2", 300, ["Pop"], false, 2000, "Chill Version")])]);
        const discography1 = new Discography([albumCollection1]);
        discography1.items = [albumCollection2];
        expect(discography1.items).to.be.eql([albumCollection2]);
    });
});
describe("Comprobaciones Artist", () => {
    it('Getters', () => {
        const albumCollection1 = new AlbumCollection([new Album("Album1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")])]);
        const discography1 = new Discography([albumCollection1]);
        const artist1 = new Artist("Artista1", 654000, discography1);
        expect(artist1.name).to.be.equal("Artista1");
        expect(artist1.monthlyListeners).to.be.equal(654000);
        expect(artist1.discography).to.be.eql(discography1);
    });
    it('Setters', () => {
        const albumCollection1 = new AlbumCollection([new Album("Album1", 1998, [new Song("Cancion1", 200, ["Rock"], true, 1000, "Orginal Mix")])]);
        const albumCollection2 = new AlbumCollection([new Album("Album2", 1999, [new Song("Cancion2", 300, ["Pop"], false, 2000, "Chill Version")])]);
        const discography1 = new Discography([albumCollection1]);
        const discography2 = new Discography([albumCollection2]);
        const artist1 = new Artist("Artista1", 654000, discography1);
        artist1.name = "Artista2";
        artist1.monthlyListeners = 654001;
        artist1.discography = discography2;
        expect(artist1.name).to.be.equal("Artista2");
        expect(artist1.monthlyListeners).to.be.equal(654001);
        expect(artist1.discography).to.be.eql(discography2);
    });
});
});