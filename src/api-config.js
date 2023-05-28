let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost"){
    backendHost = "http://localhost:8080";
} else {
    // <일랙스틱 빈스톡 애플리케이션 URL>
    backendHost = "http://prod-demo-api-service.ap-northeast-2.elasticbeanstalk.com";
}

export const API_BASE_URL = `${backendHost}`;