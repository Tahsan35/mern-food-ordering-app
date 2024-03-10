import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-orange-500"></Menu>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>
            <span>Welcome to mama eats.com</span>
          </SheetTitle>
          <Separator>
            <SheetDescription className="flex">
              <Button className="flex-1 font-bold bg-orange-500">Log in</Button>
            </SheetDescription>
          </Separator>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
