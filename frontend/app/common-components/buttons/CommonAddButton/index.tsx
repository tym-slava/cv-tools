import React from "react";
import { Button } from "@heroui/react";
import { Plus } from "lucide-react";

interface CommonAddButtonProps {
  buttonText: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

function CommonAddButton(props: CommonAddButtonProps) {
  const { buttonText, type = "button", onClick } = props;

  return (
    <Button
      type={type}
      className="common-add-button__component"
      color="primary"
      variant="ghost"
      radius="full"
      size="sm"
      onPress={onClick}
    >
      <Plus />
      {buttonText}
    </Button>
  );
}

export default CommonAddButton;
