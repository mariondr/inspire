import React from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'
import { browserHistory, Link } from 'react-router'
import { translate } from 'react-i18next'

import SearchInput from 'common/components/SearchInput'
import CatalogPreview from 'common/components/CatalogPreview'

import styles from './HomePage.scss'

class HomePage extends React.PureComponent {
  static propTypes = {
    catalogs: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired
    })).isRequired,

    t: PropTypes.func.isRequired
  }

  search = value => {
    browserHistory.push({
      pathname: '/search',
      query: {
        q: value,
        availability: 'yes'
      }
    })
  }

  render() {
    const { catalogs, t } = this.props

    return (
      <DocumentTitle title={t('HomePage.home')}>
        <div>
          <div className={styles.masthead}>
            <h1>
              {t('HomePage.tagline')}
            </h1>
            <SearchInput
              placeholder={t('HomePage.SearchInputPlaceholder')}
              onSearch={this.search}
              hasButton
            />
            <Link className={styles.datasetLinks} to='/search?availability=yes'>{t('HomePage.datasetsLink')}</Link>
          </div>

          <div className={styles.datagouv}>
            <div className={styles.paper}>
              <h2>{t('HomePage.catalogsSectionTitle')}</h2>
              <div className={styles.catalogs}>
                {catalogs.map(catalog => (
                  <div key={catalog._id} className={styles.catalog}>
                    <CatalogPreview catalog={catalog} />
                  </div>
                ))}
              </div>
              <Link to='catalogs' className={styles.link}>{t('HomePage.catalogsLink')}</Link>

              <h2 id='evenements'>{t('HomePage.eventsSectionTitle')}</h2>
              <div>
                <Link to='events' className={styles.link}>{t('HomePage.eventsLink')}</Link>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default translate('Home')(HomePage)