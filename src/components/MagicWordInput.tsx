interface MagicWordInputProps {
  value: string;
  setValue: (val: string) => void;
}

const MagicWordInput = ({ value, setValue }: MagicWordInputProps) => {
  return (
    <input
      className="border-b border-burlywood h-11 w-full placeholder:text-center text-center my-3"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Magical Word Here"
    />
  );
};

export default MagicWordInput;
