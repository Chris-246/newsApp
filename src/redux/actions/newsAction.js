export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
    return async dispatch => {

        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8696338332b04d7d929c3dc748845771');

        const responseData = await response.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: responseData.articles,
        });
    }
}

export const toggleFav = url => {
    return {
        type: TOGGLE_FAVORITES,
        payload: url,
    }
}