import * as api from '../api'

class Store {
  constructor() {
    this.stories = {
      data: [],
      filled: false,
    }
    this.characters = {
      data: [],
      filled: false
    }
    this.subplots = {
      data: [],
      filled: false
    }
    this.events = {
      data: [],
      filled: false
    }
  }

  getStories() {
    const promise = new Promise((resolve, _) => {
      if (!this.stories.filled) {
        api.getEntities('Lee', 'story').then((data) => {
          this.stories = {
            data,
            filled: true
          }

          resolve(this.stories.data)
        })
      } else {
        resolve(this.stories.data)
      }
    })

    return promise
  }

  setStories(stories) {
    this.stories = [...stories]
  }

  getCharacters() {
    const promise = new Promise((resolve, _) => {
      if (!this.characters.filled) {
        api.getEntities('Lee', 'character').then((data) => {
          this.characters = {
            data,
            filled: true
          }

          resolve(this.characters.data)
        })
      } else {
        resolve(this.characters.data)
      }
    })

    return promise
  }

  setCharacters(characters) {
    this.characters = [...characters]
  }

  getSubplots() {
    const promise = new Promise((resolve, _) => {
      if (!this.subplots.filled) {
        api.getEntities('Lee', 'subplot').then((data) => {
          this.subplots = {
            data,
            filled: true
          }

          resolve(this.subplots.data)
        })
      } else {
        resolve(this.subplots.data)
      }
    })

    return promise
  }

  setSubplots(subplots) {
    this.subplots = [...subplots]
  }

  getEvents() {
    const promise = new Promise((resolve, _) => {
      if (!this.events.filled) {
        api.getEntities('Lee', 'event').then((data) => {
          this.events = {
            data,
            filled: true
          }
          
          resolve(this.events.data)
        })
      } else {
        resolve(this.events.data)
      }
    })

    return promise
  }

  setEvents(events) {
    this.events = [...events]
  }

  async clear() {
    this.stories, this.characters, this.events, this.subplots = { data: [], filled: false }
  }
}

export default new Store()