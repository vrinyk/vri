import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
}

const ImagePlaceholder = ({
  label = "Add image here",
  className = "",
  aspectRatio = "16/9",
}: ImagePlaceholderProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border bg-secondary/50 ${className}`}
      style={{ aspectRatio }}
    >
      <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
      <span className="font-body text-sm text-muted-foreground/60">{label}</span>
    </div>
  );
};

export default ImagePlaceholder;
