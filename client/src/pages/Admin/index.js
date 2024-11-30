import React from 'react'
import PageTitle from '../../components/PageTitle'
import DraftList from './DraftList'
import PublishedList from './PublishedList'
import { Tabs } from 'antd'
import '../../stylesheets/admin.css' // Import your custom CSS file for admin page styling

// Admin page with tabs.
function Admin() {

  return (

    <div className="admin-container"> 

      
      {/* Use Tabs component from Ant Design */}
      <Tabs defaultActiveKey='1' className="tabs-container"> 

        {/* Drafts tab */}
        <Tabs.TabPane tab={<span className="tab-title">Drafted Shows</span>} key="1">
          {/* Render DraftList component */}
          <DraftList />
        </Tabs.TabPane>

        {/* Published tab */}
        <Tabs.TabPane tab={<span className="tab-title">Published Shows</span>} key="2">
          {/* Render PublishedList component */}
          <PublishedList />
        </Tabs.TabPane>

      </Tabs>

    </div>

  )
}

export default Admin
