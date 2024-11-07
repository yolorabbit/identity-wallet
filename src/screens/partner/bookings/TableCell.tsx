import React from "react";
import { CustomText } from "../../../components/common";
import { StyleSheet, View } from "react-native";

const TableCell = ({ data, isHeader, width }: any) => {
  return (
    <View style={[styles.tableCellContainer, { width }]}>
      {isHeader ? (
        <CustomText title={data} size="tag" weight="semibold" color="textPrimary" />

      ) : (
        <CustomText title={data} size="tag" weight="normal" color="textSecondary" />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  tableCellContainer: {
    borderRightWidth: 1,
    padding: 8,
    borderColor: '#E9E9E9',
  },
});

export default TableCell;