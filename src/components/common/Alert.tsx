import { Modal } from 'antd';

export const useAlert = () => {   
    const warning = (type: string) => {
        Modal.warning({
            title: '오류',
            content: type === 'text' ? ('할 일을 입력하여 주시기 바랍니다.') : ('목표일을 입력하여 주시기 바랍니다.'),
        })  
    }

    return {
        warning,
    }
}