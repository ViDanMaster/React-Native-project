import React from 'react';
import { Feladat } from "../database/Feladat";
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './EredmenyCard.style';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';

interface ResultButtonProps {
    selectedAnswers: string,
    pontszam: number
    feladat: Feladat,
}

const ResultButton: React.FC<ResultButtonProps> = ({
    selectedAnswers,
    pontszam,
    feladat
}) => {
    return(
        <TouchableOpacity style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.feladatszamText}>{1}.</Text>
            </View>
            <MathJaxSvg style={styles.webView}>{`<div class="kerdes-preview">${feladat.Kerdes.substring(0,50)}..</div>`}</MathJaxSvg>
            <View style={[styles.textContainer, {alignItems: 'flex-end'}]}>
                <Text style={styles.pontszamText}>{pontszam}/{pontszam}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ResultButton