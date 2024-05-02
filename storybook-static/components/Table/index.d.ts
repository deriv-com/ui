import React from '../../../node_modules/react';
import { ColumnDef } from "@tanstack/react-table";
import "./Table.scss";
type TProps<T> = {
    columns?: ColumnDef<T>[];
    data: T[];
    emptyDataMessage?: string;
    isFetching: boolean;
    loadMoreFunction: () => void;
    renderHeader?: (data: string) => JSX.Element;
    rowRender: (data: T) => JSX.Element;
    tableClassname?: string;
};
export declare const Table: <T>({ columns, data, emptyDataMessage, isFetching, loadMoreFunction, renderHeader, rowRender, tableClassname, }: TProps<T>) => React.JSX.Element;
export {};
