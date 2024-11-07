import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import EmptyState from './EmptyState';
import { THEME } from '../../../constants';

const PastBookingsContent = () => {
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(0);

  // Function to handle segment change
  const handleSegmentChange = (index: number) => {
    setSelectedSegmentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.segmentContainer}>
        <View style={styles.backgroundContainer}>
          {/* Daily segment */}
          <TouchableOpacity
            style={[
              styles.segment,
              selectedSegmentIndex === 0 && styles.selectedSegment,
            ]}
            onPress={() => handleSegmentChange(0)}>
            <Text
              style={[
                styles.segmentText,
                selectedSegmentIndex === 0 && styles.selectedSegmentText,
              ]}>
              30 Days
            </Text>
          </TouchableOpacity>

          {/* Monthly segment */}
          <TouchableOpacity
            style={[
              styles.segment,
              selectedSegmentIndex === 1 && styles.selectedSegment,
            ]}
            onPress={() => handleSegmentChange(1)}>
            <Text
              style={[
                styles.segmentText,
                selectedSegmentIndex === 1 && styles.selectedSegmentText,
              ]}>
              60 Days
            </Text>
          </TouchableOpacity>

          {/* Monthly segment */}
          <TouchableOpacity
            style={[
              styles.segment,
              selectedSegmentIndex === 2 && styles.selectedSegment,
            ]}
            onPress={() => handleSegmentChange(2)}>
            <Text
              style={[
                styles.segmentText,
                selectedSegmentIndex === 2 && styles.selectedSegmentText,
              ]}>
              90 Days
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Render EmptyState component when all segments are selected */}
      {selectedSegmentIndex === 0 && (
        <View style={styles.emptyStateContainer}>
          <EmptyState days={30} />
        </View>
      )}

      {selectedSegmentIndex === 1 && (
        <View style={styles.emptyStateContainer}>
          <EmptyState days={60} />
        </View>
      )}

      {selectedSegmentIndex === 2 && (
        <View style={styles.emptyStateContainer}>
          <EmptyState days={90} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentContainer: {
    width: '100%',
    marginTop: 16,
  },
  backgroundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  segment: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedSegment: {
    backgroundColor: '#FD1362',
  },
  segmentText: {
    color: THEME.COLORS.textTertiary,
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  selectedSegmentText: {
    color: '#FFF',
  },
  emptyStateContainer: {
    marginTop: 48,
  },
});

export default PastBookingsContent;
