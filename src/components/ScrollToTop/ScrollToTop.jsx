import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){
    const {pathname} = useLocation();

    useEffect(()=>{
        // window.scrollTo(0,0);
        window.scrollTo({left:0,top:0,behavior:'smooth'});
    },[pathname]);

    return null;
}