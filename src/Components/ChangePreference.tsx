import { Settings } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "@/Components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";

export function ChangePreference() {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 w-full sm:w-auto cursor-pointer text-muted-foreground border-border bg-transparent hover:bg-accent/50 hover:text-accent-foreground"
        >
          <Settings className="h-4 w-4 " />
          Change Preferences
        </Button>
      </DialogTrigger>
      {/* Remove max-w-md since NotesNeo modal looks naturally sized, slightly dark bg */}
      <DialogContent className="sm:max-w-md border-border bg-[#121212]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            Welcome to Your Dashboard!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm pt-1">
            Let's personalize your experience. Select your branch and semester
            to see relevant notes.
          </DialogDescription>
        </DialogHeader>

        <form action="">
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label className="text-sm font-semibold opacity-90">
                Select Your Branch
              </Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger className="w-full bg-[#18181b] border-border text-foreground hover:bg-[#27272a]/50">
                  <SelectValue placeholder="Choose your branch" />
                </SelectTrigger>
                <SelectContent className="bg-[#18181b] border-border">
                  <SelectItem value="btech">B.Tech</SelectItem>
                  <SelectItem value="mca">MCA</SelectItem>
                  <SelectItem value="bca">BCA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label className="text-sm font-semibold opacity-90">
                Select Your Semester
              </Label>
              <Select value={semester} onValueChange={setSemester}>
                <SelectTrigger className="w-full bg-[#18181b] border-border text-foreground hover:bg-[#27272a]/50">
                  <SelectValue placeholder="Choose your semester" />
                </SelectTrigger>
                <SelectContent className="bg-[#18181b] border-border">
                  <SelectItem value="1">Semester 1</SelectItem>
                  <SelectItem value="2">Semester 2</SelectItem>
                  <SelectItem value="3">Semester 3</SelectItem>
                  <SelectItem value="4">Semester 4</SelectItem>
                  <SelectItem value="5">Semester 5</SelectItem>
                  <SelectItem value="6">Semester 6</SelectItem>
                  <SelectItem value="7">Semester 7</SelectItem>
                  <SelectItem value="8">Semester 8</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              className="w-full bg-[#8A8A8A] hover:bg-[#6e6e6e] text-black font-semibold tracking-wide border-none h-11 transition-all"
            >
              Continue to Dashboard
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
