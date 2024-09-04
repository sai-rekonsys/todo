"use client"

import { deleteTodo } from "@/app/actions/todoActions"
import Form from "../ui/Form"
import Input from "../ui/Input"
import Button from "../ui/Button"
import { BsFillTrash2Fill } from "react-icons/bs"
import { todoType } from "@/types/todoType"



const DeleteTodo = ({todo} : {todo:todoType}) => {
  return (
    <Form action={deleteTodo}>
        <Input type="hidden" name="inputId" value={todo.id}/>

<Button actionButton text={<BsFillTrash2Fill />} type="submit"/>
    </Form>
  )
}

export default DeleteTodo