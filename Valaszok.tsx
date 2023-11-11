import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './Valaszok.style';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';

interface ValaszokProps {
  valasz: string;
  isSelected: boolean;
  onSelection: () => void;
  jo: boolean;
  ellenorizve: boolean;
}

const Valaszok: React.FC<ValaszokProps> = React.memo(
  ({ valasz, isSelected, onSelection, jo, ellenorizve }) => {
    Valaszok.displayName = "Valaszok";
    
    let itemStyle = styles.unSelected;
    if (isSelected && !ellenorizve) {
      itemStyle = styles.selected;
    } else if (isSelected && ellenorizve && !jo) {
      itemStyle = styles.selectedRossz;
    } else if (ellenorizve && jo) {
      itemStyle = styles.selectedHelyes;
    }

    return (
      <TouchableOpacity
        style={[styles.valaszButton, itemStyle]}
        onPress={onSelection}
        disabled={ellenorizve}
      >
        <MathJaxSvg style={styles.valaszMathJax}>{`<span class='valasz' style='overflow: hidden; user-select: none; display: table; margin: 0 auto; font-size: 7vw;'>${valasz}</span>`}</MathJaxSvg>
      </TouchableOpacity>
    );
  },(prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  });

export default Valaszok;
