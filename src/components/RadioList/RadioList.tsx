import React from 'react';
import { TestDataCompany } from '../Table/TestData';

type Props = {
  config: any;
  data: any;
};

const data = TestDataCompany[0];

type Company = typeof data;

const config = [
    {
        Label : "Company Name",        
        render: (company: Company) => company.companyName,
        subTitle: "Este es el nombre de la company"
    }
];

const RadioList = ({ config, data }: Props) => {
    const renderedCells = config.map(( row : any ) => {
        return(
            <li className='py-3 sm:py-4'>
                <div className='flex item-center space-x-4'>
                    <p className='text-sm fonmt-medium text-gray-900 truncate'>
                        {row.Label}
                    </p>
                    <p className='text-sm text-gray-500 truncate'>
                        {row.subTitle && row.subTitle}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {row.render(data)}
                </div>
            </li>
        );
    });
    return (
        <div className='bg-white shadow rounded-lg ml-4 mt-6 mb-4 p-4 sm:p-6 h-full'>   
            <ul className='divide-y divided-gray-200'>
              { renderedCells }
            </ul>
        </div>
    );
};

export default RadioList;