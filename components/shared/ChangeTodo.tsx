import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { changestatus } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoType";



const ChangeTodo = ({todo} :{todo: todoType}) => {

   
  return (
    <Form action={changestatus}>
        <Input 
        name="inputId"
        value={todo.id}
        type="hidden"
        />
        <Button 
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle/>}/>
    </Form>

  );
};

export default ChangeTodo;
