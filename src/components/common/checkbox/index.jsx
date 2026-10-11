import { Form } from "react-bootstrap";
import { CheckboxStyles } from "./styles"; 
import { useTranslation } from "react-i18next";

const CheckboxComponent = ({ itemObject, ...flatProps }) => {
  const {
    id,
    name,
    fieldLabel,
    fieldValue,
    onChangeFunction,
    onBlurFunction,
    errorMessage,
  } = itemObject ?? flatProps;
 const { t } = useTranslation();
  return (
    <CheckboxStyles>
      <Form.Check
        type="checkbox"
        id={id || name}
        name={name}
        label={t(fieldLabel)}
        checked={Boolean(fieldValue)}
        onChange={(e) => onChangeFunction?.(e.target.checked)}
        onBlur={() => onBlurFunction?.()}
      />
      {errorMessage && (
        <p className="field-error text-danger" style={{ fontSize: "12px", marginTop: "4px" }}>
          {t(errorMessage)}
        </p>
      )}
    </CheckboxStyles>
  );
};

export default CheckboxComponent;