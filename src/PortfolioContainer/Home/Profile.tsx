import React from 'react'
import styles from './Profile.module.scss'

export const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.details}>
          <div className={styles.colz}>
            <a href="https://example.com">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://example.com">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://example.com">
              <i className="fa fa-instagram-square"></i>
            </a>
            <a href="https://example.com">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://example.com">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <div className={styles.details_name}>
          <span className={styles.primary_text}>
            {''}
            Hello, I'M <span className={styles.highlighted_text}>Tahara</span>
          </span>
        </div>
      </div>
    </div>
  )
}
