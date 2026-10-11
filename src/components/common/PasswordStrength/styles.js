import styled from 'styled-components';

 export  const StrengthContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  
`;

 export  const StrengthBars = styled.div`
  display: flex;
  gap: 4px;
  height: 4px;
`;

 export  const Bar = styled.div`
  flex: 1;
  background-color: ${(props) => (props.active ? props.color : 'var(--color-border)')};
  border-radius: 2px;
  transition: background-color 0.3s;
`;

 export  const StrengthText = styled.span`
  font-size: 11px;
  color: ${(props) => props.color || 'var(--text-muted)'};
  font-weight: var(--fw-medium);
`;