interface IProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const FormCardTitle = ({ icon, subtitle, title }: IProps) => {
  return (
    <div className="text-center">
      <div className="flex justify-center">{icon}</div>
      <h2 className="text-neutral-1100 text-24 font-bold leading-1.875rem mt-1rem mb-0.3rem">
        {title}
      </h2>
      <h5 className="text-neutral-500 text-14 leading-1rem">{subtitle}</h5>
    </div>
  );
};

export default FormCardTitle;
