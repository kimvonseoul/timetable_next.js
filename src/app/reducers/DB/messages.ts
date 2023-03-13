const add_message = 'addMessage'
const add_db = 'addDB'

export const addMessage = (data:any) => ({
    type: add_message,
    data
});
export const addDB = (data:any) => ({
    type: add_db,
    data
})
const initialState = {
    id: 2,
    data: [
        {id: 1, user1: 'kimvonseoul', user2: 'sophia', text: [
            {sender: 'kimvonseoul', date: '3/13', time:'22:00', text: ' '},
            {sender: 'sophia', date: '3/12', time:'18:00', text: 'nice to meet you!'},
            {sender: 'sophia', date: '3/12', time:'18:00', text: 'nice to meet you!'},
            {sender: 'sophia', date: '3/10', time:'18:00', text: 'nice to meet you!'},
            {sender: 'kimvonseoul', date: '3/9', time:'18:00', text: 'hello world!'}
        ], user1_isChecked: true, user2_isChecked: false},
        {id: 2, user1: 'kimvonseoul', user2: 'dummydata1', text: [
            {sender: 'sophia', date: '3/12', time:'18:00', text: 'nice to meet you!'},
            {sender: 'sophia', date: '3/12', time:'18:00', text: 'nice to meet you!'},
            {sender: 'sophia', date: '3/10', time:'18:00', text: 'dummy data for message'},
            {sender: 'kimvonseoul', date: '3/9', time:'18:00', text: 'hello world!'}
        ], user1_isChecked: true, user2_isChecked: false}
    ]
}

export default function message_reducer(state=initialState, action:any){
    switch(action.type){
        case add_message:
            const messageNumber = action.data.messageNumber;
            const sender = action.data.sender;
            let date_info = new Date();
            let date = String(date_info.getMonth()+1)+ '/'+ String(date_info.getDate());
            const time = String(date_info.getHours()) + ':' + String(date_info.getMinutes());
            const text = action.data.text;
            const newText = {sender: sender, date: String(date), time: time, text: text}
            console.log(newText);
            state.data[messageNumber].text.unshift(newText);
            console.log(state.data[messageNumber].text);
            return {...state}
        case add_db:
            state.id++;
            let newData = {
                id: state.id,
                user1: action.data.user1,
                user2: action.data.user2,
                text: [],
                user1_isChecked: false, 
                user2_isChecked: false
            }
            state.data.concat(newData);
            console.log(state.data);
            return {...state, data: [...state.data, newData]}
        default:
            return state
    }
}