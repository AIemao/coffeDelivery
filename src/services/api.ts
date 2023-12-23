import axios from 'axios'

export const fetchAddressByCep = async (cep: string) => {
  const cepWithoutSpecialCharacter = cep.replace('-', '')
  try {
    const response = await axios.get(
      `https://viacep.com.br/ws/${cepWithoutSpecialCharacter}/json/`,
    )
    const data = response.data
    if ('erro' in data) {
      console.log('CEP não encontrado.')
      return null
    } else {
      return data
    }
  } catch (error) {
    console.error('Erro ao buscar endereço:', error)
    throw error
  }
}
