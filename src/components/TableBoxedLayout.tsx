import AppHelper from "@/helpers/appHelper";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const TableBoxedLayoutContainer = ({children, className}: IProps) => {
  return (
    <table
      className={AppHelper.classes(
        "w-full border-separate border-spacing-y-1.25rem align-middle",
        className
      )}
    >
      {children}
    </table>
  );
};

export const TableBoxedLayoutTHead = ({children, className}: IProps) => {
  return <thead className={className}>{children}</thead>;
};

export const TableBoxedLayoutTBody = ({children, className}: IProps) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableBoxedLayoutTR = ({children, className}: IProps) => {
  return (
    <tr
      className={AppHelper.classes("transition-all duration-300 hover:bg-neutral-300", className)}
    >
      {children}
    </tr>
  );
};

type TableBoxedLayoutTDProps = IProps &
  React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;

export const TableBoxedLayoutTD = ({children, className, ...props}: TableBoxedLayoutTDProps) => {
  return (
    <td
      className={AppHelper.classes(
        "h-[3.875rem] border-y border-neutral-border p-0 px-1rem text-14 text-neutral-400 first:rounded-es-0.75rem first:rounded-ss-0.75rem first:border-s last:rounded-ee-0.75rem last:rounded-se-0.75rem last:border-e",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};

export const TableBoxedLayoutSkeleton = (props: Omit<TableBoxedLayoutTDProps, "children">) => {
  return (
    <TableBoxedLayoutTD {...props}>
      <div className='skeleton h-2rem w-full opacity-50'></div>
    </TableBoxedLayoutTD>
  );
};

export const TableBoxedLayoutFlexContent = ({children}: IProps) => {
  return <div className='flex items-center gap-0.5rem'>{children}</div>;
};
