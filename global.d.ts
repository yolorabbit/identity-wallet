/// <reference types="nativewind/types" />
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

declare module 'react-native-table-component' {
  import { ComponentType } from 'react';
  import { ViewStyle, TextStyle, ViewProps, TextProps } from 'react-native';

  export interface TableProps extends ViewProps {
    borderStyle?: ViewStyle;
  }

  export interface TableWrapperProps extends ViewProps {}

  export interface RowProps extends ViewProps {
    data: any[];
    widthArr?: number[];
    height?: number;
    flexArr?: number[];
    textStyle?: TextStyle;
    onPress?: (index: number) => void;
  }

  export interface RowsProps extends ViewProps {
    data: any[][];
    widthArr?: number[];
    heightArr?: number[];
    flexArr?: number[];
    textStyle?: TextStyle;
    onPress?: (index: number) => void;
  }

  export const Table: ComponentType<TableProps>;
  export const TableWrapper: ComponentType<TableWrapperProps>;
  export const Row: ComponentType<RowProps>;
  export const Rows: ComponentType<RowsProps>;
}
