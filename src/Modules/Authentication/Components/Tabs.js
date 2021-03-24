import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import clsx from 'clsx';

const TabPanel = (props) => {
  const classes = useStyles();
  const { tabs } = props;
  return (
    <Tabs className={clsx(classes.TabsPanel, {
      'align-items-center justify-content-center mt-2': true
    })} defaultActiveKey="login" id="uncontrolled-tab-example">
      {tabs.map((tab, index) => (
        <Tab eventKey={tab.value} key={index} title={tab.title}>
          {tab.component}
        </Tab>
      ))}
    </Tabs>
  )
}


const useStyles = makeStyles((theme) => ({
  TabsPanel: {
    border: '1px solid',
    borderColor: theme.colors.grey,
    height: 114,
    '& a': {
      color: theme.colors.darkGrey,
      fontSize: '24px',
      backgroundColor: theme.colors.transparent,
      border: 'none!important',
      borderColor: 'none!important',
      padding: '0 80px',
      '&:hover, :active': {
        border: 'none!important',
      }
    },
    '& .nav-link.active': {
      fontWeight: '700'
    },
  },
}));

export default TabPanel;