export const IncNumber=(num)=>{
    return {
        type : "INCREMENT",
        newnumb : num
    }
}

export const DcrNumber=()=>{
    return {
        type : "DECREMENT"
    }
}

export const Multiply=(n)=>{
    return {
        type : "MULTIPLY",
        payy : n
    }
}

export const Divide=()=>{
    return {
        type : "DIVIDE"
    }
}

