import { Navigation } from '@mui/icons-material';
import React from 'react'

const SocialLogin = (props) => {
    const getUrlParameter = (name) => { // 쿼리 파라미터에서 값을 추출해주는 함수
        let search = window.location.search;
        let params = new URLSearchParams(search);
        return params.get(name);
    }

    const token = getUrlParameter("token");

    console.log("토큰 파싱" + token);

    if(token){
        console.log("로컬 스토리지 토큰 저장" + token);
        localStorage.setItem("ACCESS_TOKEN", token);
        return (
            <Navigation 
            to={{
                pathname:"/",
                state:{from:props.location},
            }}
            />
        );
    } else {
        return (
            <Navigation
                to={{
                    pathname: "/login",
                    state: {from: props.location},
                }}
            />
        );
    }
};

export default SocialLogin;