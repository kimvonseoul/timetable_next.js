import ProfileSection from "./profileSection";
import Link from 'next/link'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import {addMessage} from '../reducers/DB/messages'

const MessageSection = (props:any) => {
    const messageState = useSelector((state:any)=> state.message_reducer);
    console.log(messageState.data[0]);
    const messageData = messageState.data[0].text;
    const dispatch = useDispatch();
    const [inputMessage, setInputMessage] = useState('');
    const messageOnChange = (e:any) => {
        e.preventDefault();
        setInputMessage(e.target.value);
        console.log(e.target.value);
    }
    const sendMessage = (e:any) => {
        e.preventDefault();
        let data = {
            messageNumber : 0,
            text: inputMessage,
            sender: 'kimvonseoul'
        }
        dispatch(addMessage(data));
        setInputMessage('');
    }
    let date:any;
    return (
        <div id='main'>
            <section id='message-main'>
                <div id='message-header'>
                    <Link href='/' id='message-home-btn'>&lt;</Link>
                    <h2>Message - {props.name}</h2>
                </div>
                <hr/>
                <div id='message-section'>
                    {messageData.map((e:any, k:any)=>{
                        if(date == e.date){
                            if(e.sender == 'kimvonseoul'){
                                return (<div className='my-text-area' key={k}><div className='my-text'>{e.text}</div> <p>{e.time}</p></div>)
                            } else {
                                return (<div className='others-text-area' key={k}><div className='others-text'>{e.text}</div> <p>{e.time}</p></div>)
                            }
                        } else {
                            date = e.date;
                            
                            if(e.sender == 'kimvonseoul'){
                                return (<><p className='message-date'>{e.date}</p><div className='my-text-area' key={k}><div className='my-text'>{e.text}</div> <p>{e.time}</p></div></>)
                            } else {
                                return (<><p className='message-date'>{e.date}</p><div className='others-text-area' key={k}><div className='others-text'>{e.text}</div> <p>{e.time}</p></div></>)
                            }
                        }
                        
                    })}
                </div>
                <div id='message-input-section'>
                    <form onSubmit={sendMessage}>
                        <input type="text" placeholder='input a message' value={inputMessage} onChange={messageOnChange}/>
                        <button>send</button>
                    </form>
                    
                </div>
            </section>
            <hr id='section-divider'/>
            <ProfileSection />
        </div>
    )
}

export default MessageSection;