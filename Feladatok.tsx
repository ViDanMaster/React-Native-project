import React, {  } from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';

import {MathJaxSvg} from 'react-native-mathjax-html-to-svg';
import styles from "./Feladat.style";
import ValaszokGroup from "./ValaszokGroup";
import { svgs } from '../../constants';
import { Feladat } from '../database/Feladat';
import MathJaxSvgHtml from '../common/TesztKomponens';

interface FeladatokProps {
  feladat: Feladat;
  index: number;
}

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const stylesDarab = StyleSheet.create({
  kerdesWrapper: {
    width: windowWidth,
  },
});

const Feladatok: React.FC<FeladatokProps> = React.memo(({ feladat, index }) => {
  Feladatok.displayName = "Feladatok";


  let svgValue: string | null = null;
  for (const [property, value] of Object.entries(svgs)) {
    if (property === feladat.Kerdes2) {
      svgValue = value.toString();
      break;
    }
  }

  return (
    <ScrollView style={{ height: windowHeight - styles.navContainer.height }}>
      <View style={stylesDarab.kerdesWrapper}>
        <View style={styles.feladatSzamTextContainer}>
          <Text style={styles.feladatSzamText}>{1}.</Text>
        </View>
        <View style={styles.kerdesContainer}>
          <MathJaxSvgHtml feladat={feladat.Kerdes} />
          {feladat.Kerdes2 && <SvgXml width={300} height={300} xml={svgValue} />}
          {feladat.Kerdes3 && (
            <MathJaxSvgHtml feladat={feladat.Kerdes3}/>)}
        </View>

      </View>
      <ValaszokGroup
        key={"Valaszok" + feladat.ID}
        ID={feladat.ID}
        valasz={[feladat.Valasz1, feladat.Valasz2, feladat.Valasz3, feladat.Valasz4]}
        jo={feladat.Megoldas}
        index={index}
      />
    </ScrollView>
  );
}, (prevProps, nextProps) => {
  return prevProps.index === nextProps.index;
});

export default Feladatok;
