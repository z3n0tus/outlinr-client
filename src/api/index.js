import axios from 'axios'
import uuid from 'uuid-v4'

const API_BASE_URL = "https://1b6cq5b751.execute-api.eu-west-1.amazonaws.com/prod"

export const API_URLS = {
  CREATE_ENTITY: (type) => `${API_BASE_URL}/entity/${type}`,
  GET_ENTITIES: (type, owner) => `entities/${type}/${owner}`
}

const acceptableEntityTypes = [
  'character',
  'story',
  'subplot',
  'event'
]

export const getEntities = async (owner, entityType) => {
  if (!acceptableEntityTypes.includes(entityType)) {
    console.error(`You gave ${entityType} as an entity type but the only acceptable entity types are ${acceptableEntityTypes}`)
    return []
  }

  const response = await axios.get(`${API_BASE_URL}/entities/${entityType}/${owner}`)
  return response.data
}

export const saveEntity = async (owner, entityType, entityBody) => {
  if (!acceptableEntityTypes.includes(entityType)) {
    console.error(`You gave ${entityType} as an entity type but the only acceptable entity types are ${acceptableEntityTypes}`)
    return null
  }

  if (!entityBody.id) {
    entityBody.id = uuid()
  }

  console.log(JSON.stringify({ ...entityBody, owner: owner }))

  const response = await axios.post(`${API_URLS.CREATE_ENTITY(entityType)}`, { ...entityBody, owner: owner })
  console.log(response)
}

export const saveCharacterAndEvents = async (owner, character, events) => {
  const promises = []

  events.forEach(event => {
    promises.push(saveEntity(owner, "event", event))
  })

  promises.push(saveEntity(owner, "character", character))

  await Promise.all(promises)
}