export const TABNUMBER = 'tabnumber/TABNUMBER';


export const tabNumber = (number) => {
    return {
        type : TABNUMBER,
        payload : number

    }
}