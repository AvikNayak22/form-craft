import { Button } from "../ui/button";

type DeleteFormButtonProps = {
  formId: string;
};

const DeleteFormButton = ({ formId }: DeleteFormButtonProps) => {
  const handleDelete = () => {};

  return (
    <Button onClick={handleDelete} className="flex-1" variant="destructive">
      Delete
    </Button>
  );
};

export default DeleteFormButton;
