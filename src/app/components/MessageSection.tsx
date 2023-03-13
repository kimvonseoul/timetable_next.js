import ProfileSection from "./profileSection";
import Link from 'next/link'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import {addMessage} from '../reducers/DB/messages'

const MessageSection = (props:any) => {
    let messageData = props.data?.text;
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
            messageNumber : props.data.messageNumber,
            text: inputMessage,
            sender: 'kimvonseoul'
        }
        dispatch(addMessage(data));
        setInputMessage('');
    }
    let date = messageData[0].date;
    console.log(date + 'date check')
    const t = () => {
        let m = [1, 3, 5, 4, 2];
        m.map((e:any, k:any)=>{
            <p>{e}</p>
        })
    }
    return (
        <div id='main'>
            <section id='message-main'>
                <div id='message-header'>
                    <Link href='/' id='message-home-btn'>&lt;</Link>
                    <h2>Message - {props.name}</h2>
                </div>
                <hr/>
                <div id='message-section'>
                    {messageData?.length != 0 && (messageData.map((e:any, k:any)=>{
                        if(date == e.date){
                            if(e.sender == 'kimvonseoul'){
                                return (<div className='my-text-area' key={k}><div className='my-text'>{e.text}</div> <p>{e.time}</p></div>)
                            } else {
                                return (<div className='others-text-area' key={k}><div className='others-text'>{e.text}</div> <p>{e.time}</p></div>)
                            }
                        } else {
                            date = e.date;
                            if(e.sender == 'kimvonseoul'){
                                return (<div key={k}><div className='my-text-area' key={k}><div className='my-text'>{e.text}</div> <p>{e.time}</p></div><p className='message-date'>{date}</p></div>)
                            } else {
                                return (<div key={k}><div className='others-text-area' key={k}><div className='others-text'>{e.text}</div> <p>{e.time}</p></div><p className='message-date'>{date}</p></div>)
                            }
                        }
                    }))}
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