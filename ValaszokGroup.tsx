import React, {  } from "react";
import { View } from 'react-native';

import styles from "./ValaszokGroup.style";
import Valaszok from "./Valaszok";
import { useValaszokContext } from './ValaszokContext';

interface ValaszokGroupProps {
  valasz: string[];
  jo: number;
  ID: number;
  index: number;
}

const ValaszokGroup: React.FC<ValaszokGroupProps> = React.memo(({ valasz, jo, ID, index }) => {
  const { answeredQuestions, setAnsweredQuestions, ellenorizve } = useValaszokContext();
  ValaszokGroup.displayName = "ValaszokGroup";

  const handleSelection = (i: number) => {
    const updatedAnsweredQuestions = [...answeredQuestions];
    updatedAnsweredQuestions[index].selectedAnswerIndex = i;
    setAnsweredQuestions(updatedAnsweredQuestions);
  };

  return (
    <View style={styles.container}>
      {valasz.map((object, i) => {
        const isSelected = answeredQuestions[index]?.selectedAnswerIndex === i;

        return (
          <Valaszok
            key={`${ID}_${i}`}
            valasz={object}
            jo={jo === i + 1}
            isSelected={isSelected}
            ellenorizve={ellenorizve[index]}
            onSelection={() => handleSelection(i)}
          />
        );
      })}
    </View>
  );
}, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

export default ValaszokGroup
