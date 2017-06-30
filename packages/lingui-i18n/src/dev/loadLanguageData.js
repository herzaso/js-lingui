// @flow
import MakePlural from 'make-plural/make-plural'

MakePlural.load(
  require('make-plural/data/plurals.json'),
  require('make-plural/data/ordinals.json')
)

export default (language: string) => {
  const plurals = new MakePlural(language, {
    cardinals: true,
    ordinals: true
  })

  return { plurals }
}
