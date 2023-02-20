import React from 'react'
import * as styles from './textcolumn.module.scss';

function TextColumn({ block }) {
  return (
    <div className={`${styles.component_columns} ${block.backgroundColor}`}>
      <div className="container">
        {
          block.title && <div className="row">
            <h2 className={`text-${block.titleAlignment}`}>{ block.title }</h2>
          </div>
        }
        
        <div className="row gx-5">
          {
            block.columns.map(item => {
              return <div className={`col-lg-${12 / block.columns.length}`}>
                <h3>
                  {item.title }
                </h3>
                {item.text && <div dangerouslySetInnerHTML={{ __html: item.text }} />}
              </div>
            })
          }
        </div>
        
      </div>
    </div>
  )
}

export default TextColumn