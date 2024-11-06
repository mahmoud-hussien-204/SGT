interface IProps {
  children: React.ReactNode;
}

const FormCard = ({ children }: IProps) => {
  return (
    <div className="w-full max-w-[27.5rem] bg-neutral-bg border border-neutral-border rounded-1rem p-2.5rem">
      {children}
    </div>
  );
};

export default FormCard;
