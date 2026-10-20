
import { useTranslation } from 'react-i18next';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import styled from 'styled-components';

export default function SocialLogins() {
  const { t } = useTranslation(); 

  return (
    <>
      <DividerText>{t('socialLogins.orSignUpWith', 'or sign up with')}</DividerText>
      <SocialButtonsWrapper>
        <SocialBtn type="button">
          <FcGoogle style={{ marginRight: '8px', fontSize: '18px' }} /> {t('socialLogins.google', 'Google')}
        </SocialBtn>
        <SocialBtn type="button">
          <FaFacebookF style={{ marginRight: '8px', fontSize: '18px', color: '#1877f2' }} /> {t('socialLogins.facebook', 'Facebook')}
        </SocialBtn>
      </SocialButtonsWrapper>
    </>
  );
}

const DividerText = styled.div`
  text-align: center;
  color: #888;
  font-size: 12px;
  margin: 20px 0 15px 0;
`;

const SocialButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const SocialBtn = styled.button`
  flex: 1;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #fbf9fa;
  }
`;