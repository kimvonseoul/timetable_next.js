import ProfileSection from "./profileSection";
import Link from 'next/link'
import {useSelector} from 'react-redux'

const MessageSection = (props:any) => {
    const messageState = useSelector((state:any)=> state.message_reducer);
    console.log(messageState.data[0]);
    const messageData = messageState.data[0].text;
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
                        if(e.sender == 'kimvonseoul'){
                            return (<div className='my-text-area' key={k}><div className='my-text'>{e.text}</div> <p>{e.time}</p></div>)
                        } else {
                            return (<div className='others-text-area' key={k}><div className='others-text'>{e.text}</div> <p>{e.time}</p></div>)
                        }
                        
                    })}
                </div>
                <div id='message-input-section'>
                    <input type="text" placeholder='input a message'/>
                    <button>send</button>
                </div>
            </section>
            <hr id='section-divider'/>
            <ProfileSection />
        </div>
    )
}

export default MessageSection;