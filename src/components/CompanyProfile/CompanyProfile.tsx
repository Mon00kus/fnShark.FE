import React, { Component, useEffect, useState } from 'react'
import { CompanyKeyMetrics } from '../../company';
import { useOutletContext } from 'react-router';
import { getKeyMetrics } from '../../Api';
import RadioList from '../RadioList/RadioList';

type Props = {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    subTitle:"Total value of all a company's shares of stock"
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
    subTitle: "Messures the companies hability to pay short term debt obligations"
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
  {
    label: "Cash Per Share",
    render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
  {
    label: "Return of assets",
    render: (company: CompanyKeyMetrics) => company.averageInventoryTTM,
    subTitle: "Returns on assets is the messure of how effective a company"
  },
  {
    label: "Capex Per Share TTM",
    render: (company: CompanyKeyMetrics) => company.capexPerShareTTM,
    subTitle: "Capex is used by a company to aquire, upgrade, and maintain physical"
  },
  {
    label: "Graham Number",
    render: (company: CompanyKeyMetrics) => company.grahamNumberTTM,
    subTitle: "This is the upperbouind of the price range that a defensive investor..."
  },
  {
    label: "PE Ratio",
    render: (company: CompanyKeyMetrics) => company.peRatioTTM,
    subTitle: "This is the upperbouind of the price range that a defensive investor..."
  },
 
];

type State = {}

const CompanyProfile = (props : Props) => {
    const ticker = useOutletContext<string>();

    const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();

    useEffect(() => {
      const getCompanyKeyMetrics = async() => {
        const value = await getKeyMetrics(ticker);
        setCompanyData(value?.data[0])
      };
      getCompanyKeyMetrics();
    }, []);
    
    return <>
      {
        companyData ? (
          <RadioList data={companyData} config={tableConfig} />
        ) : (          
          <>loading...</>
        )        
      }
    </>
}

export default CompanyProfile;