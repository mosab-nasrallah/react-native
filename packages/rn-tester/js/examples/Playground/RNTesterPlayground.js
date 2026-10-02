/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {RNTesterModuleExample} from '../../types/RNTesterTypes';

import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Playground() {
  return (
    <View style={styles.container}>
      {/* Android: falls back to the system font with no log. iOS logs "Unrecognized font family". */}
      <Text style={styles.text}>This font family does not exist</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontFamily: 'FontFamilyThatDoesNotExist',
  },
});

export default {
  title: 'Playground',
  name: 'playground',
  description: 'Test out new features and ideas.',
  render: (): React.Node => <Playground />,
} as RNTesterModuleExample;
