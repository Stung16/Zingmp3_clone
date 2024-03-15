import "./loading.css";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#241b30] bg-opacity-50 z-[1000]">
      <div className="loader bg-white p-5 rounded-full flex space-x-3">
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;