import avatar from "../assets/OIG-removebg-preview.png"

function Tooltip({ content, position }) {
  const tooltipStyle = {
    position: 'absolute',
    top: position.top + 'px',
    left: position.left + 'px',
    color: '#fff',
    padding: '8px',
    borderRadius: '4px',
    textAlign : 'center',
    transition: 'left 0.3s ease',
  };

  const containerStyle = {
    backgroundColor: 'transparent', 
    padding: '10px',
    fontWeight: 'extrabold',
  };

  return (
    <div style={tooltipStyle} className="flex justify-center items-center z-10">
      <div style={containerStyle} className="flex flex-col justify-center items-center">
        {content}
        <img src={avatar} alt="Avatar" className="w-[50px] h-[50px]" />
      </div>
    </div>
  );
}

export default Tooltip;
