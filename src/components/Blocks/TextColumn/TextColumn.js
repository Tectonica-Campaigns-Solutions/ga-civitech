import React from 'react';
import * as styles from './textcolumn.module.scss';

function TextColumn({ block }) {
  return (
    <div className={`${styles.component_columns} ${block.backgroundColor}`}>
      <div className="container">
        {block.title && (
          <div className="row">
            <h2 className={`text-${block.titleAlignment}`}>{block.title}</h2>
            {block.introduction && <div className={styles.intro} dangerouslySetInnerHTML={{ __html: block.introduction }} />}
          </div>

        )}

        <div className="row gx-5">
          {block.columns.map(item => {
            return (
              <div className={`col-lg-${12 / block.columns.length}`} key={item.id}>
                {
                  item.icon && item.icon.url && <img className={styles.icon} src={item.icon.url}/>
                }
                { item.title && <h3>{item.title}</h3> }
                
                {item.text && <div dangerouslySetInnerHTML={{ __html: item.text }} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TextColumn;
