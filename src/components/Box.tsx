interface IProps {
  children: React.ReactNode;
}

const Box = ({children}: IProps) => {
  return (
    <div className='rounded-1rem border border-neutral-border bg-neutral-bg p-1.5rem'>
      {children}
    </div>
  );
};

export default Box;
