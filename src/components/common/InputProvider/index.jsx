import { InputTypes } from "../../../constants/enums";
import InputField from "../InputField"; 
import CheckboxComponent from "../checkbox"; 

const InputProvider = ({ itemObject, ...flatProps }) => {
  const field = itemObject ?? flatProps;
  const type = field?.type;

  if (type === InputTypes.CHECKBOX) {
    return <CheckboxComponent itemObject={field} />;
  }

  if (
    type === InputTypes.TEXT ||
    type === InputTypes.EMAIL ||
    type === InputTypes.PASSWORD ||
    type === InputTypes.TEL
  ) {
    return <InputField itemObject={field} />; 
  }

  return null;
};

export default InputProvider;