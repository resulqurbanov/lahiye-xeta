import React from 'react'
import "./TrendsTag.scss"
import { TrendData } from '../../../../FakeData/TrendData'

const TrendsTag = () => {
  return (
    <div className='TrendsTag'>
           <h3>Trends for you</h3>
            {TrendData.map((trend)=>{
                return(
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}
    </div>
  )
}

export default TrendsTag