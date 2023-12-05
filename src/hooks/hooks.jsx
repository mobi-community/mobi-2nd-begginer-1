import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const useQueryString = () => {
    // search: string쭈루룩 가져온다
    const { search } = useLocation();
    // parse: key=value 키값 쌍을 object로 바꾼다
    // ‘key=value1&key2=value2’ //서치
    const queryObject = queryString.parse(search);
    // {key:’value1’, key2:’value2’} //쿼리
    console.log(`search`, search);
    console.log(`query`, queryObject);

    return queryObject;
};

export default useQueryString;

/**
 * 
 * queryString.parse 값이 이렇게 나온다!!!!! 변환이된다! 서치>쿼리
 * ‘key=value1&key2=value2’ //서치
=> {key:’value1’, key2:’value2’} //쿼리
 * 
 */
