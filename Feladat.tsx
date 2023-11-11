/**
 * Egy feladat adatbázis interfésze, alább az adatbázisban szereplő adatok
 *
 * @property {number} ID - A feladat azonosítója. (key)
 * @property {string} Kerdes - A feladat kérdése.
 * @property {string} Kerdes2 - A feladat második kérdése.
 * @property {string} Kerdes3 - A feladat harmadik kérdése.
 * @property {string} Valasz1 - Az első válaszlehetőség.
 * @property {string} Valasz2 - A második válaszlehetőség.
 * @property {string} Valasz3 - A harmadik válaszlehetőség.
 * @property {string} Valasz4 - A negyedik válaszlehetőség.
 * @property {string} Valasz5 - Az ötödik válaszlehetőség.
 * @property {string} Valasz6 - A hatodik válaszlehetőség.
 * @property {number} Megoldas - A helyes válasz sorszáma.
 * @property {string} Magyarazas - A feladat magyarázata.
 * @property {string} Magyarazas2 - A feladat második magyarázata.
 * @property {number} ReszFeladatszam - A részfeladat száma.
 * @property {number} Feladatszam - A feladat száma.
 * @property {number} Pont - A feladat pontszáma.
 * @property {string} Feladattipus - A feladat típusa.
 * @property {string} Evszam - Az évszám.
 * @property {string} Tantargy - A tantárgy neve.
 * @property {number} Emelt - Az emelt szint jelzője (0 vagy 1).
 */

export interface Feladat {
    ID: number;
    Kerdes: string;
    Kerdes2: string;
    Kerdes3: string;
    Valasz1: string;
    Valasz2: string;
    Valasz3: string;
    Valasz4: string;
    Valasz5: string;
    Valasz6: string;
    Megoldas: number;
    Magyarazas: string;
    Magyarazas2: string;
    ReszFeladatszam: number;
    Feladatszam: number;
    Pont: number;
    Feladattipus: string;
    Evszam: string;
    Tantargy: string;
    Emelt: number;
  }