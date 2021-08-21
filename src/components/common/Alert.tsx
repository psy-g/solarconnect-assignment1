import { Modal } from 'antd';

export const useAlert = () => {   
    const warning = (type: string) => {

        Modal.warning({
            title: '오류',
            content: type === '비밀번호' ? 
                (`${type}를 확인하여 주시기 바랍니다(숫자 4자리).`) : 
                (`${type}을 입력하여 주시기 바랍니다.`),
        })  
    }

    return {
        warning,
    }
}