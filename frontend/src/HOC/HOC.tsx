const HOC = ({ children, design }: Props) => {
  return (
    <div className={`max-w-[1440px] mx-auto p-5 ${design} `}>
      {children}
    </div>
  );
};

export default HOC;

type Props = {
  children: JSX.Element | string | JSX.Element[] | undefined;
  design?: string;
};
