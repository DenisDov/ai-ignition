import { Separator } from "@/components/ui/separator";

const FormSeparator = ({ text }: { text: string }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1 }}>
        <Separator />
      </div>
      {text && <div style={{ margin: "0 10px" }}>{text}</div>}
      <div style={{ flex: 1 }}>
        <Separator />
      </div>
    </div>
  );
};

export default FormSeparator;
