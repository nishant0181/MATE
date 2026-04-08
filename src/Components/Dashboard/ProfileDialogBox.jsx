import React,{ useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../Components/ui/dialog";
import { Label } from "../../Components/ui/label";
import { Button } from "../../Components/ui/button";
import { universityNames ,BranchNames } from "../../lib/GeneralData";


// eslint-disable-next-line no-unused-vars
export default function ProfileDialogBox({ isOpen, changeDialog ,setProfile})  {

    const [university, setUniversity] = useState(universityNames[0]);
    const [branch, setBranch] = useState(BranchNames[0][0]);
    const [semester, setSemester] = useState("1");


    const handleContinue = () => {
        // Here you can add logic to save the user's selections if needed
        

        setProfile({ university, degree: branch, semester, setUp: true });
        changeDialog();
    };
    
  return (
    <div >
      <Dialog open={isOpen} onOpenChange={changeDialog}>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Welcome to Your Dashboard!
            </DialogTitle>
            <DialogDescription className="text-base">
              Let&apos;s personalize your experience. Select your branch and
              semester to see relevant notes.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="branch" className="text-base font-medium">
                Select Your University
              </Label>
              <Select value={university} onValueChange={setUniversity}>
                <SelectTrigger id="branch" className="h-11">
                  <SelectValue placeholder="GTU" />
                </SelectTrigger>
                <SelectContent>
                    {universityNames.map((university) => (
                        <SelectItem key={university} value={university}>
                            {university}
                        </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            {/* Branch Selection */}
            <div className="space-y-2">
              <Label htmlFor="branch" className="text-base font-medium">
                Select Your Branch   
              </Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger id="branch" className="h-11">
                  <SelectValue placeholder="Choose your branch" />
                </SelectTrigger>
                <SelectContent>
                    {BranchNames.map((branch) => (
                        <SelectItem key={branch[1]} value={branch[0]}>
                            {branch[0]} ({branch[1]})
                        </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            {/* Semester Selection */}
            <div className="space-y-2">
              <Label htmlFor="semester" className="text-base font-medium">
                Select Your Semester
              </Label>
              <Select value={semester} onValueChange={setSemester}>
                <SelectTrigger id="semester" className="h-11">
                  <SelectValue placeholder="Choose your semester" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    
                    <SelectItem key={sem} value={sem.toString()}>
                      Semester {sem}
                      
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex">
            <Button  onClick={handleContinue} className="flex-1" size="lg">
              Continue to Dashboard
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
