import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import styles from '../eredmeny/Eredmeny.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResultButton from '../eredmeny/EredmenyCard';
import { Feladat } from '../database/Feladat';
import { FlashList } from '@shopify/flash-list';

interface ResultProps {
  navigation: any;
  route: any;
}

let erdemjegyStyle = {}

const Result: React.FC<ResultProps> = ({ navigation, route }) => {
  const { Feladatok, Pontszam, SelectedAnswers } = route.params;
  const [osszPontszam, setOsszPontszam] = useState<number>(1);
  const [erdemjegy, setErdemjegy] = useState<number>(0);
  const Szazalek = roundTo((Pontszam / osszPontszam) * 100, 2);

  function roundTo(n: number, digits: number) {
    if (digits === undefined) {
      digits = 0;
    }
  
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    var test =(Math.round(n) / multiplicator);
    return +(test.toFixed(digits));
  }

  useEffect(() => {
    OsszPontszamSzamolas();
  }, [Feladatok]);

  useEffect(() => {
    ErdemjegySzamolas();
  }, [osszPontszam])

  const OsszPontszamSzamolas = () => {
    let OsszPontszam = 0;
    Feladatok.forEach((element: Feladat) => {
      OsszPontszam += element.Pont;
    });
    setOsszPontszam(OsszPontszam);
  };

  const ErdemjegySzamolas = () => {
    switch (true) {
      case Szazalek < 25.0:
        setErdemjegy(1);
        erdemjegyStyle = {color: '#ff0000'}
        break;
      case Szazalek < 40.0:
        setErdemjegy(2);
        erdemjegyStyle = {color: '#ff6600'}
        break;
      case Szazalek < 60.0:
        setErdemjegy(3);
        erdemjegyStyle = {color: '#ffff66'}
        break;
      case Szazalek < 80.0:
        setErdemjegy(4);
        erdemjegyStyle = {color: '#ccff66'}
        break;
      case Szazalek >= 80.0:
        setErdemjegy(5);
        erdemjegyStyle = {color: '#00ff00'}
        break;
    }
  };

  const renderItem = ({ item, index }: { item: Feladat; index: number }) => (
    <ResultButton
      selectedAnswers={'Valasz' + (SelectedAnswers[index] + 1)}
      pontszam={item.Pont}
      feladat={item}
    />
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.pontszamHeader}>
        <View style={styles.pontszamContainer}>
          <Text style={styles.pontszamHeaderText}>Pontszám:</Text>
          <Text style={[styles.pontszamText, styles.pontszam]}>
            {Pontszam}/{osszPontszam}
          </Text>
        </View>
        <View style={styles.szazalekContainer}>
          <Text style={styles.pontszamHeaderText}>Százalék:</Text>
          <Text style={[styles.pontszamText, styles.szazalek]}>{Szazalek}%</Text>
        </View>
        <View style={styles.erdemjegyContainer}>
          <Text style={styles.pontszamHeaderText}>Érdemjegy:</Text>
          <Text style={[styles.pontszamText, erdemjegyStyle]}>{erdemjegy}</Text>
        </View>
      </View>
      <FlashList
        data={Feladatok}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={145}
        overScrollMode='never'
      />
    </SafeAreaView>
  );
};

export default Result;
