import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '../../lib/components/Table';

const data = [
    { id: 1, name: 'person489', team: 'civil engineer', country: 'Brazil' },
    { id: 2, name: 'person132', team: 'software engineer', country: 'UK' },
    { id: 3, name: 'person669', team: 'civil engineer', country: 'China' },
    { id: 4, name: 'person788', team: 'software engineer', country: 'UK' },
    { id: 5, name: 'person647', team: 'civil engineer', country: 'Brazil' },
    { id: 6, name: 'person847', team: 'surgeon', country: 'Australia' },
    { id: 7, name: 'person71', team: 'artist', country: 'North America' },
    { id: 8, name: 'person832', team: 'software engineer', country: 'China' },
    { id: 9, name: 'person568', team: 'civil engineer', country: 'Pakistan' },
    { id: 10, name: 'person231', team: 'teacher', country: 'India' },
    { id: 11, name: 'person835', team: 'software engineer', country: 'Brazil' },
    { id: 12, name: 'person492', team: 'civil engineer', country: 'UK' },
    { id: 13, name: 'person993', team: 'civil engineer', country: 'UAE' },
    { id: 14, name: 'person617', team: 'artist', country: 'China' },
    { id: 15, name: 'person116', team: 'civil engineer', country: 'North America' }
  ];


  const columns = [
    {
        header: 'ID',
    },
    {
        header: 'Name',
    },
    {
        header: 'Team',
    },
    {
        header: 'Country',
    },
];

const rowRender = (item: Record<string, string>) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.team}</span>
            <span>{item.country}</span>
        </div>
    );
};

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        columns: [],
        data: [],
        isFetching: false,
        loadMoreFunction: () => {},
        renderHeader: () => <div />,
        rowRender: () => <div />,
        tableClassname: '',
    },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default Table',
    args: {
        columns: [],
        data: data,
        isFetching: false,
        loadMoreFunction: () => {},
        renderHeader: () => <div />,
        rowRender: (item) => rowRender(item as Record<string, string>),
        tableClassname: '',
    },
};

export const WithHeader: Story = {
    name: 'Table with Header',
    args: {
        columns,
        data: data,
        isFetching: false,
        loadMoreFunction: () => {},
        renderHeader: (data) => <span>{data}</span>,
        rowRender: (item) => rowRender(item as Record<string, string>),
        tableClassname: '',
    },
};

