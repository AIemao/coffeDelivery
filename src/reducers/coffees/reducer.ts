import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
  quantity: number
}

interface CoffeesState {
  coffees: Coffee[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      return produce(state, (draft) => {
        const foundCoffee = draft.coffees.find(
          (coffee) => coffee.id === action.payload.idCoffee,
        )
        if (foundCoffee) {
          foundCoffee.quantity += 1
        }
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        const foundCoffee = draft.coffees.find(
          (coffee) => coffee.id === action.payload.idCoffee,
        )
        if (foundCoffee && foundCoffee.quantity > 0) {
          foundCoffee.quantity -= 1
        }
      })
    }

    case ActionTypes.RESET_QUANTITY_OF_SPECIFIC_COFFEE: {
      return produce(state, (draft) => {
        const foundCoffee = draft.coffees.find(
          (coffee) => coffee.id === action.payload.idCoffee,
        )
        if (foundCoffee) {
          foundCoffee.quantity = 0
        }
      })
    }

    case ActionTypes.RESET_QUANTITY_ALL_COFFEES: {
      return produce(state, (draft) => {
        draft.coffees = draft.coffees.map((coffee) => {
          if (coffee.quantity > 0) {
            return { ...coffee, quantity: 0 }
          }
          return coffee
        })
      })
    }

    default:
      return state
  }
}
