import React from "react";
import {View, Text,TouchableOpacity} from "react-native"
import { useAppDispatch } from "../app/hooks";
import { increment,decrement,incrementByAmount } from "../features/counter/counterSlice";

const ButtonRedur = () =>{

    const dispatch = useAppDispatch();
    return(
        <>
         <TouchableOpacity
         onPress={()=> dispatch(increment())}
            style={{
                backgroundColor: "black",
                paddingVertical: 10,
                padding:10,
                borderRadius:5,
                margin:10,
            }}>
                <Text style={{color:'white',textAlign:'center', fontWeight:'bold'}}>INCREMENT</Text>
        </TouchableOpacity>



        <TouchableOpacity
          onPress={()=> dispatch(decrement())}
            style={{
              
                backgroundColor: "black",
                paddingVertical: 10,
                padding:10,
                borderRadius:5,
                margin:10,
            }}>
                <Text style={{color:'white',textAlign:'center', fontWeight:'bold'}}>DECREMENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=> dispatch(incrementByAmount(10))}
            style={{
              
                backgroundColor: "black",
                paddingVertical: 10,
                padding:10,
                borderRadius:5,
                margin:10,
            }}>
                <Text style={{color:'white',textAlign:'center', fontWeight:'bold'}}>ADD 10</Text>
        </TouchableOpacity>

        </>
    
        
    );
};

export default ButtonRedur;