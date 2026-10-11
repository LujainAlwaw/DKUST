import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Styles = styled.span`
  display: inline-block;
  margin-bottom: 0.85rem;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-pill);
  background: ${({ variant }) =>
    variant === "private" ? "var(--soft-color)" : "var(--soft-color)"};
  color: ${({ variant }) =>
    variant === "private" ? "var(--secondary-color)" : "var(--main-color)"};
  font-weight: 700;
  font-size: var(--font-size-xs);
`;

const StatusBadge = ({ text, variant = "public" }) => {
  const { t } = useTranslation();

  return <Styles variant={variant}>{t(text)}</Styles>;
};

export default StatusBadge;
