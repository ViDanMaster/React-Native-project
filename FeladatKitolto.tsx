import React, { useCallback, useRef, useState } from 'react';
import { Dimensions, FlatList } from "react-native";
import Feladatok from "../Feladatok/Feladatok";
import { Feladat } from '../database/Feladat';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../Feladatok/Feladat.style';
import NavBar from '../Feladatok/NavBar';
import { useValaszokContext } from '../Feladatok/ValaszokContext';

const { width: windowWidth } = Dimensions.get("window");

const FeladatKitolto = () => {
  const { feladatok } = useValaszokContext();
  const [index, setIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const indexRef = useRef(index);
  indexRef.current = index;

  const onScroll = useCallback((event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
      flatListRef.current?.scrollToIndex({ index: roundIndex });
    }
  }, []);

  const renderItem = useCallback(({ item, index }: { item: Feladat; index: number }) => {
    return (
        <Feladatok
          feladat={item}
          index={index}/>
    );
  }, []);

  const keyExtractor = useCallback((item : any) => item.ID, []);
  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      index,
      length: windowWidth,
      offset: index * windowWidth,
    }),
    [windowWidth])

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        ref={flatListRef} 
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        overScrollMode="never"
        data={feladatok}
        renderItem={renderItem}
        onScroll={onScroll}
        pagingEnabled={true}
        horizontal={true}
        initialNumToRender={1}
        maxToRenderPerBatch={2}
        scrollEventThrottle={16}
        windowSize={11}
        showsHorizontalScrollIndicator={false}
      />
      <NavBar index={index} flatListRef={flatListRef} />
    </SafeAreaView>
  );
};

export default FeladatKitolto;
