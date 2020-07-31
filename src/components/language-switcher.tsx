import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { languages } from "../intl/languages"

const languageName: { [key: string]: string } = languages.names

const LanguageSwitcher = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({
          languages,
          language: currentLocale,
        }: {
          languages: string[]
          language: string
        }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `yellow` : `white`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default LanguageSwitcher
