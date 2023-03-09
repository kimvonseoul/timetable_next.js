const add_message = 'addMessage'

export const addMessage = (data:any) => ({
    type: add_message,
    data
})

const initialState = {
    id: 1,
    data: [
        {user1: 'kimvonseoul', user2: 'sophia', text: [
            {sender: 'kimvonseoul', time:'2023-03-09 18:00', text: 'hello world!'},
            {sender: 'sophia', time:'2023-03-09 18:01', text: 'nice to meet you!'},
            {sender: 'sophia', time:'2023-03-09 18:01', text: 'nice to meet you!'},
            {sender: 'sophia', time:'2023-03-09 18:01', text: 'nice to meet you!'},
            {sender: 'sophia', time:'2023-03-09 18:01', text: 'nice to meet you!'}
        ], user1_isChecked: true, user2_isChecked: false}
    ]
}

export default function message_reducer(state=initialState, action:any){
    switch(action.type){
        case add_message:
            const messageNumber = action.data.messageNumber;
            const sender = action.data.sender;
            const time = new Date();
            const text = action.data.text;
            const newText = {sender: sender, time: String(time), text: text}
            console.log(newText);
            state.data[messageNumber].text.push(newText);
            console.log(state.data[messageNumber].text);
            return {...state}
        default:
            return state
    }
}