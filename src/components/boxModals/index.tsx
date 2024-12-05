export const FeatureBox: React.FC<{
  img: string;
  title: string;
  content: string;
  alt: string;
}> = ({ img, title, content, alt }) => {
  return (
    <div className="flex-1  w-full md:w-[40%] lg:w-full  px-4 py-6 border border-accent-400 rounded-2xl relative h-full">
      <div className="bg-[#FCEED2] absolute inset-0 opacity-10 rounded-2xl"></div>
      <div className="flex items-center relative z-10">
        <div className="flex items-center justify-center w-64">
          <img src={img} alt={alt} className="text-[10px]" />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">{title}</h3>
          <p className="text-[#232323]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export const DesignBox: React.FC<{
  modelNumber: string;
  img: string;
  alt: string;
}> = ({ img, modelNumber, alt }) => {
  return (
    <>
      <div className="gap-3 p-4 order bg-white rounded-xl h-full">
        <div className=" flex flex-col gap-3  ">
          <img src={img} alt={alt} className="text-[10px] object-cover" />
          <div className="flex items-center gap-8 px-1">
            <div className="flex flex-col gap-1 w-full">
              <p className="text-neutral-700">Model Number</p>
              <h4 className="text-2xl text-baseBlack">{modelNumber}</h4>
            </div>
            <button className="btn-primary w-full">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
