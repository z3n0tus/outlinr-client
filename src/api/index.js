import axios from 'axios'

const API_BASE_URL = "https://1b6cq5b751.execute-api.eu-west-1.amazonaws.com/prod"

export const getAllCharacters = async (owner) => {
  const response = await axios.get(`${API_BASE_URL}/entities/character/${owner}`)

  console.log('mrglgrgl')
  console.log(response)
}