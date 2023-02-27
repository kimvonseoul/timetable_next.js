const TEST = 'TEST';

export const testAction = (text:string) => ({type:TEST, text});

const initialState:any = [];

const test = (state=initialState, action:any) => {
    switch (action.type){
        case TEST:
            console.log('uploaded');
            return [...state, action.text];
        default:
            return state;
    }
}
export default test;