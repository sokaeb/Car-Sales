import { ADD_FEATURES, REMOVE_FEATURES } from '../actions/index';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FEATURES:
          let addTotal = state.car.price;
          
          // return {
          //   ...state,
          //   additionalFeatures: state.additionalFeatures.filter((feature) => feature.id !== action.payload.id),
          //   car: {
          //     ...state.car,
          //     price: total += action.payload.car.price,
          //     features: [...state.car.features, action.payload],
          //   }
          // }
            return {
                ...state,
                car: {...state.car, 
                  price: (addTotal += action.payload.price),
                features: [...state.car.features, action.payload] 
                }
            }
        case REMOVE_FEATURES:
            // console.log(state.car.features)
            let removeTotal = state.car.price;
        return {
            ...state,
            car: {...state.car, 
              price: (removeTotal -= action.payload.price),
              features: [...state.car.features.filter(item =>
                item.id !== action.payload.id)]
              },
              additionalFeatures: [...state.additionalFeatures]
            };
        default:
        return state;
    }
}
