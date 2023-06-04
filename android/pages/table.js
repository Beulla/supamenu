import React from 'react';
import { View } from 'react-native';
import ClipPath from 'react-native-svg';
import Path from 'react-native-svg';
import Svg from 'react-native-svg';
const Ellipse = () => {
  return (
    <View>
      <Svg width={100} height={50} viewBox="0 0 37.82 12.16">
              <ClipPath id="clip">
                <Path d="M36.817 6.07937C36.817 8.88462 28.7991 11.1587 18.9085 11.1587C9.01791 11.1587 1 8.88462 1 6.07937C1 3.27411 9.01791 1 18.9085 1C28.7991 1 36.817 3.27411 36.817 6.07937Z" />
              </ClipPath>
              <Path d="M1 1V11.1587H36.817V1" fill="#000000" clipPath="url(#clip)" />
              <ClipPath id="clip2">
                <Path d="M0 0V12.1587H37.817V0M36.817 6.07937C36.817 8.88462 28.7991 11.1587 18.9085 11.1587C9.01791 11.1587 1 8.88462 1 6.07937C1 3.27411 9.01791 1 18.9085 1C28.7991 1 36.817 3.27411 36.817 6.07937Z" />
              </ClipPath>
              <Path d="M36.817 6.07937C36.817 8.88462 28.7991 11.1587 18.9085 11.1587C9.01791 11.1587 1 8.88462 1 6.07937C1 3.27411 9.01791 1 18.9085 1C28.7991 1 36.817 3.27411 36.817 6.07937Z" strokeWidth={2} stroke="#F7941D" clipPath="url(#clip2)" />
            </Svg>
    </View>
  );
};

export default Ellipse;
