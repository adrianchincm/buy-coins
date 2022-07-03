import Navigation from "./Navigation";

const Layout = (props: any) => {
  return (
    <div>
      <Navigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
