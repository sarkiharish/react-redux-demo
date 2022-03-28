import React,{useState} from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
    const [number, setnumber] = useState(1)
  return (
    <div>
      <h2>Number of Cakes : {props.numOfCakes}</h2>
      <input type='text' value={number} onChange={e=>setnumber(e.target.value)}></input>
      <button onClick={()=>props.buyCake(number)}>Buy {number} cakes</button>
    </div>
  );
}

const mapStateTOProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateTOProps, mapDispatchToProps)(NewCakeContainer);