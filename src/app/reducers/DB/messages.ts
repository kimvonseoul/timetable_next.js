const add_message = 'addMessage'

export const addMessage = (data:any) => ({
    type: add_message,
    data
})

const initialState = {
    id: 1,
    data: [
        {id: 1, user1: 'kimvonseoul', user2: 'sophia', text: [
            {sender: 'kimvonseoul', date: '2023-03-09', time:'18:00', text: 'hello world!'},
            {sender: 'sophia', date: '2023-03-10', time:'18:00', text: 'nice to meet you!'},
            {sender: 'sophia', date: '2023-03-12', time:'18:00', text: 'nice to meet you!'},
            {sender: 'sophia', date: '2023-03-12', time:'18:00', text: 'nice to meet you!'}
        ], user1_isChecked: true, user2_isChecked: false},
        {id: 2, user1: 'kimvonseoul', user2: 'dummydata1', text: [
            {sender: 'kimvonseoul', date: '03/09', time:'18:00', text: 'hello world!'},
            {sender: 'sophia', date: '03/10', time:'18:00', text: 'dummy data for message'},
            {sender: 'sophia', date: '03/12', time:'18:00', text: 'nice to meet you!'},
            {sender: 'sophia', date: '03/12', time:'18:00', text: 'nice to meet you!'}
        ], user1_isChecked: true, user2_isChecked: false}
    ]
}

export default function message_reducer(state=initialState, action:any){
    switch(action.type){
        case add_message:
            const messageNumber = action.data.messageNumber;
            const sender = action.data.sender;
            let date_info = new Date();
            let date = String(date_info.getMonth()+1)+ '月'+ String(date_info.getDate()) + '日';
            const time = String(date_info.getHours()) + ':' + String(date_info.getMinutes());
            const text = action.data.text;
            const newText = {sender: sender, date: String(date), time: time, text: text}
            console.log(newText);
            state.data[messageNumber].text.push(newText);
            console.log(state.data[messageNumber].text);
            return {...state}
        default:
            return state
    }
}