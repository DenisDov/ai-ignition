import { Separator } from "@/components/ui/separator";

const FormSeparator = ({ text }: { text: string }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1 }}>
        <Separator />
      </div>
      {text && <div className="mx-4">{text}</div>}
      <div style={{ flex: 1 }}>
        <Separator />
      </div>
    </div>
  );
};

export default FormSeparator;
