const initialState=1;

const changeNumberr=(state=initialState,action)=>{
    switch(action.type){
        case "MULTIPLY" : return state*action.payy;
        case "DIVIDE" : return state/5;
        default : return state;
    }

}

export default changeNumberr;