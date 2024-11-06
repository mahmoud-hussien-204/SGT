interface IProps {
  children: React.ReactNode;
}

const Title = ({children}: IProps) => {
  return (
    <div className='mb-1.5rem'>
      <h2 className='text-28 font-semibold text-neutral-1100'>{children}</h2>
    </div>
  );
};

export default Title;
