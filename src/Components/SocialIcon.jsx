const SocialIcon = (props) => {
  return (
    <props.icon
      className="social-icon hover:text-blue-400"
      size={30}
      onClick={props.navigate}
    />
  );
};
export default SocialIcon;
