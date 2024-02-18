import HeaderComponent from "../HeaderComponent/HeaderComponent";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ className, children }) => {

  return (
    <>
      <HeaderComponent />
      <main className={`main__container ${className}`} >
        {children}
      </main>
    </>
  );
};

export default Layout;