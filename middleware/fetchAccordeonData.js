import { get } from 'axios'

export default function ({ store }) {
  return get('https://eoyge3duj7xtdqd.m.pipedream.net/').then(
    (response) => {
      store.commit('addAccordeonData', response.data)
    }
  )
}
