/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import * as Styled from './style';

interface ExtensionInfoModalProps {
  isExtensionInstall?: boolean;
  isOpen: boolean;
  handleClose: () => void;
  handleSubmitTILContentToGithub?: () => void;
}

const ExtensionInfoModal = (props: ExtensionInfoModalProps) => {
  const { isExtensionInstall, isOpen, handleClose, handleSubmitTILContentToGithub } = props;

  const handleGithubUpload = () => {
    handleClose();
    handleSubmitTILContentToGithub?.();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Styled.Title>깃허브 업로드 기능</Styled.Title>
      <Styled.Info>
        <Styled.InfoText>학습일지를 깃허브에 업로드 할 수 있습니다.</Styled.InfoText>
        <Styled.InfoText>확장 프로그램을 설치후 새로고침을 해주세요.</Styled.InfoText>
        <Styled.InfoText css={Styled.InfoTextStyles}>확장 프로그램에서 업로드할 레포를 등록해주세요.</Styled.InfoText>
      </Styled.Info>
      <Styled.ButtonContainer>
        <Link href="#" target="_blank">
          <Button variant="default" onClick={handleClose}>
            안내페이지로 이동
          </Button>
        </Link>
        {isExtensionInstall && (
          <Button onClick={handleGithubUpload} variant="primary">
            업로드
          </Button>
        )}
      </Styled.ButtonContainer>
    </Modal>
  );
};

export default ExtensionInfoModal;
