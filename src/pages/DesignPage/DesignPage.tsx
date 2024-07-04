import React from 'react'
import Table from '../../components/Table/Table';
import RadioList from '../../components/RadioList/RadioList';
import { TestDataCompany } from '../../components/Table/TestData';

type Props = {};

const data = TestDataCompany;

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>
        Design guide - This is the design guide for Fin Shark. These are reuable
        components of the app with brief instructions on how to use them.
      </h1>
      <RadioList config={tableConfig} data={data} />
      <Table />
      <h3>
        Table - Table takes in a configuration object and company data as
        params. Use the config to style your table.
      </h3>
    </>
  ); 
};

export default DesignPage;