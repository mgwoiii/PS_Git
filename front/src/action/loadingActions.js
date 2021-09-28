export const LOADING_TRUE = 'loading/LOADING_TRUE';
export const LOADING_FALSE = 'loading/LOADING_FALSE';

export const loadingTrue = () => {
    return {
        type : LOADING_TRUE,
    }
}

export const loadingFalse = () => {
    return {
        type : LOADING_FALSE,
    }
}