interface IProps {
  children: React.ReactNode;
}

const Content = ({children}: IProps) => {
  const responsiveContentClasses =
    "ms-sidebar-width-narrow lg:ms-sidebar-width lg:peer-checked:ms-sidebar-width-narrow peer-checked:ms-sidebar-width";

  return (
    <section
      className={`mt-header-height px-container-padding pt-2rem transition-all ${responsiveContentClasses}`}
    >
      {children}
    </section>
  );
};

export default Content;
