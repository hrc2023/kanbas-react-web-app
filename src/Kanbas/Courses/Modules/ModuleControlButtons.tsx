import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="fs-4 me-3" aria-label="Add module" />
      <IoEllipsisVertical className="fs-4" aria-label="More options" />
    </div>
  );
}
