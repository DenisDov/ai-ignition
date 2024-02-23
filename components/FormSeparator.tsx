import { Separator } from "@/components/ui/separator";

const FormSeparator = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <Separator />
      </div>
      {text && <div className="mx-4">{text}</div>}
      <div className="flex-1">
        <Separator />
      </div>
    </div>
  );
};

export default FormSeparator;
