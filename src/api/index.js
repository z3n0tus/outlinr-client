import axios from 'axios'

const API_BASE_URL = "https://1b6cq5b751.execute-api.eu-west-1.amazonaws.com/prod"

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