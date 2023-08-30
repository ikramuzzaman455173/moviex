import { useState } from 'react'

const SwitchTab = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [left, setLeft] = useState(0)
  const activeTab = (tab, index) => {
    setLeft(index * 100)
    setTimeout(() => {
      setSelectedTab(index)
    }, 300);
    onTabChange(tab, index)
  }

  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {data?.map((tab, index) => (
          <span key={index} onClick={()=>activeTab(tab,index)} className={`tabItem ${selectedTab===index?"active":""}`}>{tab}</span>
        ))}
        <span className="movingBg" style={{left}} />
      </div>
    </div>
  )
}

export default SwitchTab