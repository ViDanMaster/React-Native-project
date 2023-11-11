import * as SQLite from 'expo-sqlite';
import { Feladat } from './Feladat';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const databaseName = 'FeladatokDatabase31.db';

/**
 * Megnyitja az adatbázist és visszaadja a hivatkozást.
 *
 * @returns Az adatbázis hivatkozása. (Ezzel lehet megnyitni a lemásolt adatbázist)
 */
async function openDatabase() {
  const databaseDirectory = FileSystem.documentDirectory + 'SQLite/';
  const databasePath = databaseDirectory + databaseName;

  if (!(await FileSystem.getInfoAsync(databaseDirectory)).exists) {
    await FileSystem.makeDirectoryAsync(databaseDirectory);
  }

  if (!(await FileSystem.getInfoAsync(databasePath)).exists) {
    await FileSystem.downloadAsync(
      Asset.fromModule(require('../../assets/FeladatokAdatbazis.db')).uri,
      databasePath
    );
  }

  return SQLite.openDatabase(databaseName);
}

const db = openDatabase();

/**
 * Az összes adat lekérése az adatbázisból.
 *
 * @returns Az összes feladat egy tömbben.
 */
export const fetchAllData = async (): Promise<Feladat[]> => {
  try {
    const result = await new Promise<Feladat[]>(async (resolve, reject) => {
      (await db).transaction((txn: { executeSql: (arg0: string, arg1: never[], arg2: (_: any, resultSet: any) => void, arg3: (_: any, error: any) => boolean) => void; }) => {
        txn.executeSql(
          'SELECT * FROM Feladatok',
          [],
          (_, resultSet) => {
            const data: Feladat[] = [];
            for (let i = 0; i < resultSet.rows.length; i++) {
              const row = resultSet.rows.item(i);
              const feladat: Feladat = {
                ID: row.ID,
                Kerdes: row.Kerdes,
                Kerdes2: row.Kerdes2,
                Kerdes3: row.Kerdes3,
                Valasz1: row.Valasz1,
                Valasz2: row.Valasz2,
                Valasz3: row.Valasz3,
                Valasz4: row.Valasz4,
                Valasz5: row.Valasz5,
                Valasz6: row.Valasz6,
                Megoldas: row.Megoldas,
                Magyarazas: row.Magyarazas,
                Magyarazas2: row.Magyarazas2,
                ReszFeladatszam: row.ReszFeladatszam,
                Feladatszam: row.Feladatszam,
                Pont: row.Pont,
                Feladattipus: row.Feladattipus,
                Evszam: row.Evszam,
                Tantargy: row.Tantargy,
                Emelt: row.Emelt,
              };
              data.push(feladat);
            }
            resolve(data);
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
    return result;
  } catch (error: any) {
    throw new Error('Failed to fetch data from the database: ' + error.message);
  }
};

/**
 * Feladatok lekérése tantárgy, emelt és évszám szerint az adatbázisból.
 *
 * @param {string} tantargy - A tantárgy neve. (string)
 * @param {boolean} emelt - Az emelt szint jelzője (0 vagy 1).
 * @param {string} evszam - Az évszám. (string)
 * @returns A specifikus tantárgy listája egy tömbben
 */
export const fetchFeladatokByUser = async (tantargy: string, emelt: number, evszam: string): Promise<Feladat[]> => {
  try {
    const result = await new Promise<any>(async (resolve, reject) => {
      (await db).transaction((txn: { executeSql: (arg0: string, arg1: (string | number)[], arg2: (_: any, result: any) => void, arg3: (err: any) => boolean) => void; }) => {
        txn.executeSql(
          'SELECT * FROM Feladatok WHERE Tantargy = ? AND Emelt = ? AND Evszam = ?',
          [tantargy, emelt, evszam],
          (_, result) => {
            resolve(result);
          },
          (err) => {
            reject(err);
            return false;
          },
        );
      });
    });

    const feladatok: Feladat[] = [];
    const rows = result.rows;

    for (let i = 0; i < rows.length; i++) {
      const row = rows.item(i);
      const feladat: Feladat = {
        ID: row.ID,
        Kerdes: row.Kerdes,
        Kerdes2: row.Kerdes2,
        Kerdes3: row.Kerdes3,
        Valasz1: row.Valasz1,
        Valasz2: row.Valasz2,
        Valasz3: row.Valasz3,
        Valasz4: row.Valasz4,
        Valasz5: row.Valasz5,
        Valasz6: row.Valasz6,
        Megoldas: row.Megoldas,
        Magyarazas: row.Magyarazas,
        Magyarazas2: row.Magyarazas2,
        ReszFeladatszam: row.ReszFeladatszam,
        Feladatszam: row.Feladatszam,
        Pont: row.Pont,
        Feladattipus: row.Feladattipus,
        Evszam: row.Evszam,
        Tantargy: row.Tantargy,
        Emelt: row.Emelt,
      };

      feladatok.push(feladat);
    }

    return feladatok;
  } catch (error: any) {
    throw new Error('Failed to fetch feladatok: ' + error.message);
  }
};

/**
 * Get the count of Feladat records in the database.
 *
 * @returns The count of Feladat records.
 */
export const getFeladatCount = async (): Promise<number> => {
  try {
    const result = await new Promise<number>(async (resolve, reject) => {
      (await db).transaction((txn: { executeSql: (arg0: string, arg1: never[], arg2: (_: any, resultSet: any) => void, arg3: (_: any, error: any) => boolean) => void; }) => {
        txn.executeSql(
          'SELECT COUNT(*) as count FROM Feladatok',
          [],
          (_, resultSet) => {
            const count = resultSet.rows.item(0).count;
            resolve(count);
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
    return result;
  } catch (error: any) {
    throw new Error('Failed to get Feladat count from the database: ' + error.message);
  }
};
