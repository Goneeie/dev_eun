import './App.css';
import React, {useState} from 'react';
import Modal from "react-modal";
// import Input from './Input';

const PostCard = (props) => {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </section>
  );
}

const PostModal = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </article>
  );
}



function App() {
      const [titles, setTitles] = useState(["남자 코트 추천", "강남 우동맛집" , "파이썬 독학"]);
      const [contents, setContents] = useState(["2월 17일 발행", "2월 17일 발행" , "2월 17일 발행"]);
      const [isClicked, setIsClicked] = useState(false); 
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [text, setText] = useState("");

      const onTextChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value); }

    return (
      <div className="App">

      

       {titles.map((title, index) => {
            return (
              <div>
                <PostCard title = {title} content = {contents[index]} />
                <button onClick={() => setModalIsOpen(true)}>open {title} </button>
                <Modal isOpen={modalIsOpen}> 
                  <PostModal title = {title} content = {contents[index]} /> {/* Modal 창 안에 title과 contents가 안들어가요 */}
                  <button onClick={() => setModalIsOpen(false)}>close </button> 
                </Modal>
              </div>
            );
            
       })}


      

      <button
        onClick={() => {
          if(isClicked) setIsClicked(false);
          else setIsClicked(true);
        }}
      >
        더보기
      </button>
      {isClicked ? <PostModal title = {titles[0]} content={contents[0]} /> : null}

      <div>
        <input type="text" onChange = {onTextChange} value = {text} />
        <button onClick={()=> setTitles([text, ...titles])}> 글작성 </button> 
      </div>

    </div>
  );
}


export default App;