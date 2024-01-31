import Image from "next/image";

const SkillsCard = ({data}) => {
    return (
        <div
            style={{background: `linear-gradient(to top right, rgba(14, 14, 54, 0.03), ${data?.color})`}}
            className={` skillsCard rounded-[10px] flex   cursor-pointer select-none  p-3 h-full`}
        >

            <div className="grid grid-cols-6 items-center gap-2 ">
                <div   className="col-span-3">
                    {
                        data?.logo?  <Image
                            data-aos="zoom-out-right"
                            data-aos-offset="10"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine"
className="object-contain h-28"
                            src={data?.logo}
                            alt={data?.title}/>:''
                    }
                </div>
                <div className="col-span-3">
                    <h1 className=" text-[20px] font-bold py-1 text-white">{data?.title}</h1>
                    <p className="text-sm text-[#fccdff] ">{data?.description} </p>
                </div>
            </div>


        </div>
    );
};

export default SkillsCard;