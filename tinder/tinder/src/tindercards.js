import React,{useState , useEffect} from 'react'
import "./tindercards.css"
import TinderCard from "react-tinder-card"
import axios from "./axios"
function Tindercards() {
    const [people,setpeople] = useState([]);
useEffect(() => {
    async function fetchData(){
        const req = await axios.get('tinder/cards');
        setpeople(req.data); 
       
    }
   fetchData();
}, [])
    const swiped = (direction,nametodelete) => {
        console.log("removing"+" "+nametodelete+" "+direction);
    }
    const outOfFrame = (name) =>{
        console.log(name+" "+"left the screen")
    }
    return (
        <div className="tinderCards_container">
            <div>
            {people.map((e)=>
            <TinderCard className="Swipe"
            key ={e.name}
            preventSwipe={["down","up"]}
            onSwipe={(dir)=>swiped(dir,e.name)}
            onCardLeftScreen={()=>outOfFrame(e.name)}>
                <div style={{backgroundImage: `url(${e.imgUrl})`} }
                className="card" >
                    
                <h1 className="name">{e.name}</h1>
                </div>
               
            </TinderCard>
            )}
            </div>
        </div>
    )
}

export default Tindercards
