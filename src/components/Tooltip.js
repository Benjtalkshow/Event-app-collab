import avatar from "../assets/OIG-removebg-preview.png"

function Tooltip({ content, position }) {
  const tooltipStyle = {
    position: 'absolute',
    top: position.top + 'px',
    left: position.left + 'px',
    color: '#fff',
    borderRadius: '4px',
    textAlign : 'center',
    transition: 'left 0.3s ease',
  };

  const containerStyle = {
    backgroundColor: 'transparent', 
    fontWeight: 'extrabold',
    color: 'black',
  };

  return (
    <div style={tooltipStyle} className="flex justify-center items-center z-10">
      <div style={containerStyle} className="flex flex-col justify-center items-center">
        <p className="text-white bg-gray-900 p-3 w-[50%] ">{content}</p>.
        <img src={avatar} alt="Avatar" className="w-[45px] h-[45px]" />
      </div>
    </div>
  );
}

export default Tooltip;
