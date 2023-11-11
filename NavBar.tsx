import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { AntDesign as Icon } from '@expo/vector-icons';
import styles from "./Feladat.style";
import { useValaszokContext } from "./ValaszokContext";
import { Feladat } from "../database/Feladat";
import { useNavigation } from "@react-navigation/native";
import Magyarazat from "./Magyarazat";

interface NavBarProps {
    index: number,
    flatListRef: React.RefObject<FlatList<any>>
}

type ResultNavigationProps = {
    navigate: (screen: string, params: {Feladatok: Feladat[], Pontszam: number, SelectedAnswers: { index: number; selectedAnswerIndex: number }[]}) => void
  };

const NavBar: React.FC<NavBarProps> = React.memo(({index, flatListRef}) => {
  const [isMagyarazatVisible, setMagyarazatVisible] = useState(false);
  const { answeredQuestions, ellenorizve, setEllenorizve, feladatok } = useValaszokContext();
  const [pontszam, setPontszam] = useState(0)
  const navigation = useNavigation<ResultNavigationProps>();

  function magyarazat(){
      setMagyarazatVisible((prev) => !prev);
    };
    
  function ellenorzes() {
    const updatedEllenorizve = [...ellenorizve];
    updatedEllenorizve[index] = true;
    setEllenorizve(updatedEllenorizve);
    console.log(answeredQuestions)

    if (answeredQuestions[index].selectedAnswerIndex === feladatok[index].Megoldas - 1) {
      const updatedPontszam = pontszam + feladatok[index].Pont;
      setPontszam(updatedPontszam);
    }
  }

    return (
        <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <Text>{pontszam}</Text>
          <View style={[styles.navBtnContainer, styles.prev]}>
            {index > 0 && (
              <TouchableOpacity
                style={styles.nextOrPrevBtn}
                onPress={() => {
                  if (index > 0) {
                    flatListRef.current?.scrollToIndex({ index: index - 1 });
                  }
                }}
              >
                <Icon style={styles.nextOrPrevBtnIcon} name="leftcircle" size={50} color="#222222" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.ellenorzesBtnContainer}>
            {!ellenorizve[index] && (
              <TouchableOpacity
                style={!ellenorizve[index] ? [styles.ellenorzesBtn, styles.activeBtn] : [styles.ellenorzesBtn, styles.inActiveBtn]}
                onPress={ellenorzes}
                disabled={ellenorizve[index]}
              >
                <Text style={!ellenorizve[index] ? [styles.ellenorzesBtnText, styles.activeText] : [styles.ellenorzesBtnText, styles.inActiveText]}>Ellenőrzés</Text>
              </TouchableOpacity>
            )}
            {ellenorizve[index] && (
              <TouchableOpacity
                style={[styles.ellenorzesBtn, styles.activeBtn]}
                onPress={magyarazat}
              >
                <Text style={[styles.ellenorzesBtnText, styles.activeText]}>Magyarázat</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={[styles.navBtnContainer]}>
            {index < (feladatok.length - 1) && (
              <TouchableOpacity style={styles.nextOrPrevBtn}
                onPress={() => {
                  flatListRef.current?.scrollToIndex({ index: index + 1 });
                }}>
                <Icon style={styles.nextOrPrevBtnIcon} name="rightcircle" size={50} color="#222222" />
              </TouchableOpacity>
            )}
            {index <= (feladatok.length - 1) && (
              <TouchableOpacity
                style={styles.nextOrPrevBtn}
                onPress={() => {
                  navigation.navigate('Eredmeny', {
                    Feladatok: feladatok,
                    Pontszam: pontszam,
                    SelectedAnswers: answeredQuestions,
                  });
                }}
              >
                <Icon style={styles.nextOrPrevBtnIcon} name="rightcircle" size={50} color="#222222" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {isMagyarazatVisible && <Magyarazat closeModal={magyarazat} magyarazat={feladatok[index].Magyarazas} />}
      </View>
    )
}, (prevProps, nextProps) => {
    return prevProps.index === nextProps.index && prevProps.flatListRef === nextProps.flatListRef;
  });

export default NavBar