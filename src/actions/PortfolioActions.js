const portfolioAction = dispatch => ({
    updatePortfolio: (portfolio) => {
        if(portfolio.id){
            dispatch({
                type: 'EDIT',
                payload: { portfolio },
              })
        }
        else{
            portfolio.id = Date.now() % 1000;
            dispatch({
                type: 'UPDATE_PORTFOLIO',
                payload: { portfolio },
            })
        }
      
    },
    addPortfolio: (id) => {
        dispatch({
            type: 'ADDITION',
            payload: {id}
        })
    },
    deletePortfolio: (portfolio, type) => {
        dispatch({
            type: 'DELETE_PORTFOLIO',
            payload: { portfolio, type }
        })
    },
    editPortfolio: () => {
        dispatch({
            type: 'EDIT_PORTFOLIO',
            payload: { }
        })
    },
    subtractPortfolio: (id) => {
        dispatch({
            type: 'SUBTRACTION',
            payload: { id }
        })
    },
    savePortfolio: () => {
        dispatch({
            type: 'SAVE_PORTFOLIO',
            payload: { }
        })
    },
    rebalance: () => {
        dispatch({
            type: 'REBALANCE',
            payload: { }
        })
    },
    resetPortfolio: () => {
        dispatch({
            type: 'RESET',
            payload: { }
        })
    }
});

export default portfolioAction;