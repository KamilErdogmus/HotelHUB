const Loader = () => {
  return (
    <div className="flex justify-center my-20 ">
      <div className="flex-col gap-4 w-full flex items-center justify-center mt-4">
        <div className="w-24 h-24 border-4 border-transparent text-blue-400 text-5xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
          <div className="w-20 h-20 border-4 border-transparent text-red-400 text-3xl animate-spin flex items-center justify-center border-t-blue-300 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-red-400 text-3xl animate-spin flex items-center justify-center border-t-blue-200 rounded-full">
              <div className="w-12 h-12 border-4 border-transparent text-red-400 text-3xl animate-spin  flex items-center justify-center border-t-blue-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
