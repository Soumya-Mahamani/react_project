import initialData from '../initialData'

const initialState = initialData.model_portfolios;
const initialCustomizedState = initialData.customized_portfolio;
const model_portfolios = (state = initialState, action) => {
    switch (action.type) {
         case 'UPDATE_PORTFOLIO':
            let instrument = {id: action.payload.portfolio.id , name: action.payload.portfolio.name, type: action.payload.portfolio.type };
            let weight = {weight: action.payload.portfolio.weight, instrument: instrument};
            let data = [...state.data[0].constituents, weight];
            state.data[0].constituents = data;
          return {data: state.data}
        
          case 'DELETE_PORTFOLIO':
            let type = action.payload.type;
            let id = action.payload.portfolio
            let filteredPortfolio = state.data[0].constituents.filter(f => 
                  { 
                    if(f.instrument.type == type) 
                    { return f.instrument.id !== id }
                  else 
                    { return f } 
                  });
            state.data[0].constituents = filteredPortfolio
            return {data: state.data}

        case 'EDIT_PORTFOLIO':
          state.data[0].edit = true;
          return {data: state.data} 

        case 'SAVE_PORTFOLIO':
          state.data[0].edit = false;
          return {data: state.data} 

        case 'RESET':
          return {data: initialCustomizedState};

        case 'ADDITION': 
          let val = state.data[0].constituents.map(p => { if(p.instrument.id == action.payload.id) { let m = parseFloat(p.weight) + 1; p.weight = String(m); return p } else{ return p } })
          state.data[0].constituents = val;

          return {data: state.data}
        
        case 'SUBTRACTION': 
          let sub = state.data[0].constituents.map(p => { if(p.instrument.id == action.payload.id) 
            {
               let m = parseFloat(p.weight) - 1 ;
               if(m < 0){
                 m = 0;
                 p.weight = String(m);
               }
               else{
                p.weight = String(m);
               }
              return p 
            }
             else
             {
                return p 
              }
             })
          state.data[0].constituents = sub;

          return {data: state.data}


          case 'REBALANCE':
          debugger
             let new_data = initialCustomizedState[0].constituents;
             let length = new_data.length;
             let p = [];
             let z = Math.random().toFixed(2);
             if(length%2 == 0)
             {
               p = new_data.map((d,index) => {
                 if(index%2 == 0){
                    let m  = parseFloat(d.weight) + parseFloat(z);
                    m.toFixed(2);
                    d.weight = String(m);
                    return d
                 }
                 else{
                   let m = parseFloat(d.weight) - parseFloat(z).toFixed(2);
                   m.toFixed(2);
                   d.weight = String(m);
                   return d
                 }
               })
               initialCustomizedState[0].constituents = p;
             }
             else {
               p = new_data.map((d,index)=> {
                if(index !== length - 1)
                {
                  if(index%2 == 1){
                    let m  = parseFloat(d.weight) + parseFloat(z);
                    d.weight = String(m);
                    return d;
                }
                else{
                  let m = parseFloat(d.weight) - parseFloat(z);
                  d.weight = String(m);
                  return d;
                  }
                }
                else{
                  return d;
                }
               })
               initialCustomizedState[0].constituents = p;
             }
             return {data: initialCustomizedState}
          default:
          return {data: state};
      }
    };
export default model_portfolios