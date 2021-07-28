import axios from 'axios';

export const fetchPizzas = (category, sortBy) => (dispatch) => { // Асинхронный экшен при помощью либы redux-thunk
    const url = `/pizzas?${(category !== null) ? `category=${category}` : ''}${sortBy && `&_sort=${sortBy}&_order=asc`}`;;
    dispatch(setIsLoaded(false));
    axios.get(url).then((res) => {
        dispatch(setPizzas(res.data));
    });
}

export const setPizzas = (pizzas) => ({ // Синхронный экшен который выполнится в случае если стейт не изменился
    type: 'SET_PIZZAS',
    payload: pizzas
});

export const setIsLoaded = (isLoaded) => ({
    type: 'SET_ISLOADED',
    payload: isLoaded
})