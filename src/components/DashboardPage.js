import React from 'react';
import { Appbar, Button, Panel } from 'muicss/react';


const DashboardPage = () => (
  <div>
    Dashboard page content
    <Appbar />
          <Panel>
            <Button className="button">My Button</Button>
          </Panel>

  </div>
);

export default DashboardPage;
