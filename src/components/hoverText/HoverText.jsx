export const HoverText = ({ children }) => {
  return (
    <div className="text_container">
      <span className="text">{children}</span>
      <span className="text" aria-hidden={true}>
        {children}
      </span>
    </div>
  );
};
