// import { useTranslation } from "react-i18next";
// import styled from "styled-components";

// const Styles = styled.span`
//   display: inline-block;
//   margin-bottom: 0.85rem;
//   padding: 0.25rem 0.65rem;
//   border-radius: var(--radius-pill);
//   background: ${({ variant }) =>
//     variant === "private" ? "var(--soft-color)" : "var(--soft-color)"};
//   color: ${({ variant }) =>
//     variant === "private" ? "var(--secondary-color)" : "var(--main-color)"};
//   font-weight: 700;
//   font-size: var(--font-size-xs);
// `;

// const StatusBadge = ({ text, variant = "public" }) => {
//   const { t } = useTranslation();

//   return <Styles variant={variant}>{t(text)}</Styles>;
// };

// export default StatusBadge;

import { useTranslation } from "react-i18next";
import styled from "styled-components";

// استخدام $variant كـ Transient Prop لمنع تسريبها للـ DOM
const Styles = styled.span`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 12px;
  background: ${({ $variant }) =>
    $variant === "private" ? "var(--soft-color)" : "rgba(0, 230, 118, 0.1)"};
  color: ${({ $variant }) =>
    $variant === "private" ? "var(--secondary-color)" : "var(--main-color)"};
  white-space: nowrap;
`;

const StatusBadge = ({ text, variant = "public" }) => {
  const { t } = useTranslation();

  return <Styles $variant={variant}>{t(text)}</Styles>;
};

export default StatusBadge;