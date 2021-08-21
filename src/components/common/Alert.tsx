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

interface UseDeleteProps {
    removeTodo: (id: number) => void;
}

export const useDelete = ({ removeTodo }: UseDeleteProps) => {
    const showDeleteConfirm = (id: number) => {
        const { confirm } = Modal;

        confirm({
          title: '삭제 확인',
          content: '정말 삭제하시겠습니까?',
          okText: '예(삭제)',
          okType: 'danger',
          cancelText: '아니오',
          onOk() {
            removeTodo(id);
          },
          onCancel() {
          },
        });
    }

    return {
        showDeleteConfirm
    }
} 