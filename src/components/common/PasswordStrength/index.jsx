import { StrengthContainer,StrengthBars,Bar, StrengthText} from "./styles";

const getPasswordStrength = (password) => {
  if (!password) return { score: 0, label: '', color: '' };
  if (password.length < 6) return { score: 1, label: 'Too short', color: '#e74c3c' };
  if (password.length < 8) return { score: 2, label: 'Fair', color: '#ffc107' };
  if (password.length < 10) return { score: 3, label: 'Good', color: '#3498db' };
  return { score: 4, label: 'Strong', color: '#2ecc71' };
};

export default function PasswordStrength({ password }) {
  if (!password) return null;

  const strength = getPasswordStrength(password);

  return (
    <StrengthContainer>
      <StrengthBars>
        {[1, 2, 3, 4].map((index) => (
          <Bar
            key={index}
            active={index <= strength.score}
            color={strength.color}
          />
        ))}
      </StrengthBars>
      <StrengthText color={strength.color}>
        {strength.label}
      </StrengthText>
    </StrengthContainer>
  );
}

