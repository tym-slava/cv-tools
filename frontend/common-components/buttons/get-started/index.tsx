import { Button } from "@heroui/react";
import Link from "next/link";
import { PencilLine } from "lucide-react";

function GetStartedBtn() {
  return (
    <Link href="/cv-builder">
      <Button
        color="primary"
        endContent={<PencilLine className="h-4 w-4" />}
      >
        Get started
      </Button>
    </Link>
  );
}

export default GetStartedBtn;
