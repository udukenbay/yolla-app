import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SeoFooter.module.scss';

const data = [
  {
    id: '1',
    tabTitle: 'Malaysia Property Market News',
  },
  {
    id: '2',
    tabTitle: 'Popular Searches',
  },
];

const SeoFooter = () => {
  const [visibleTab, setVisibleTab] = React.useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      className={visibleTab === item.id ? styles.tabActive : styles.tabTitle}
      role="presentation"
    >
      <h3>{item.tabTitle}</h3>
    </li>
  ));

  const listContent = data.map((item) =>
    item.id === '1' ? (
      <ul>
        <li
          key="uniqueId1"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/news/current/"> Current</a>
        </li>
        <li
          key="uniqueId2"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/news/insights-reports/">
            Insights / Reports
          </a>
        </li>
        <li
          key="uniqueId3"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/news/new-launches/">
            New Launches
          </a>
        </li>
        <li
          key="uniqueId4"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/news/other/">Other</a>
        </li>
      </ul>
    ) : (
      <ul>
        <li
          key="uniqueId5"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/financing/mortgage-calculator/">
            Malaysia Mortgage Calculator
          </a>
        </li>
        <li
          key="uniqueId6"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/financing/">
            Home Loan Malaysia
          </a>
        </li>
        <li
          key="uniqueId7"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/realestateagents/search">
            Real Estate Agency Malaysia
          </a>
        </li>
        <li
          key="uniqueId8"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/condominiums/">
            List Of Condominium
          </a>
        </li>
        <li
          key="uniqueId9"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/expo">Malaysia Property Expo</a>
        </li>
        <li
          key="uniqueId10"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/sale/kuala-lumpur/terrace-link-townhouse/">
            KL House For Sale
          </a>
        </li>
        <li
          key="uniqueId11"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/sale/kuala-lumpur/condominium/">
            KL Condo For Sale
          </a>
        </li>
        <li
          key="uniqueId12"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/sale/penang/terrace-link-townhouse/">
            Penang House For Sale
          </a>
        </li>
        <li
          key="uniqueId13"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/sale/penang/condominium/">
            Penang Condo For Sale
          </a>
        </li>
        <li
          key="uniqueId4"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/sale/johor-bahru/terrace-link-townhouse/">
            JB House For Sale
          </a>
        </li>
        <li
          key="uniqueId15"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/sale/johor-bahru/condominium/">
            JB Condo For Sale
          </a>
        </li>
        <li
          key="uniqueId16"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/rent/condominium/">
            Malaysia Condo For Rent
          </a>
        </li>
        <li
          key="uniqueId17"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/rent/terrace-link-townhouse/">
            Malaysia House For Rent
          </a>
        </li>
        <li
          key="uniqueId18"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/rent/apartment/">
            Malaysia Apartment For Rent
          </a>
        </li>
        <li
          key="uniqueId19"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://newlaunch.iproperty.com.my/">
            Malaysia New Launch Property
          </a>
        </li>
        <li
          key="uniqueId20"
          style={visibleTab === item.id ? {} : { display: 'none' }}
        >
          <a href="https://www.iproperty.com.my/property/Popular_Areas_in_Malaysia">
            Living In Malaysia
          </a>
        </li>
      </ul>
    ),
  );

  return (
    <div className={styles.seoFooterWrapper}>
      <Container className={styles.seoFooterContainer}>
        <Row>
          <Col md={12} sm={12}>
            <div className={styles.tabs}>
              <ul className={styles.tabsTitles}>{listTitles}</ul>
              <div className={styles.tabsContent}>{listContent}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SeoFooter;
