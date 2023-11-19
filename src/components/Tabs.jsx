//children is anything passed to tab content
const Tabs = ({ children, buttons, ButtonContainer }) => {
  return (
    // it is any content that would be under the tab menu of buttons
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};
export default Tabs;
