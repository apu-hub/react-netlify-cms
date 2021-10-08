import { useEffect } from "react";
import { useState } from "react";
import data from '../assets/posts.json';

function Main() {

    // const [posts, setPosts] = useState([]);

    useEffect(() => {
        // setPosts(JSON.parse(data));
        // console.log(JSON.parse(data));   // Only Dev
        return () => {
        }
    }, [])
    return (<>
        <center>
            {data.map((e) => {
                return (<div key={e.id}>
                    <b>Title : </b> {e.title}
                    <br />
                    <b>Message : </b> {e.message}
                </div>)
            })}
        </center>
    </>);
}

// function Blog(){

// }


export default Main;