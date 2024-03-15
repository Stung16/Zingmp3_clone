import React from "react";

const Hub = () => {
  return (
    <div className="w-full h-full">
      <div className="container text-center py-12 mx-auto">
        <h1 className="text-white text-4xl font-semibold mb-4">
          Trang đang được cập nhật...
        </h1>
        <p className="text-white mb-10">
          Xin lỗi vì sự bất tiện này bạn hãy quay lại sau nhé!
        </p>
        <a
          href="/"
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 tracking-wider uppercase text-sm"
        >
          ← Quay về trang chủ
        </a>
      </div>
    </div>
  );
};

export default Hub;
