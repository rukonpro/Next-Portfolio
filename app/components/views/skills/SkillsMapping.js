import SkillsCard from "./SkillsCard";
import Link from "next/link";

const SkillsMapping = ({data}) => {

    return (
            <div>
                <h1 className={`text-[#f8cafb] text-3xl  font-bold pt-15 pb-3`}>{data?.title}</h1>
                <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        data?.data?.slice(0, 4).map((data, index) => {
                            return (
                                <li
                                    key={index}
                                    id={data?.title + index + data?.logo + data?.color}
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    data-aos-duration="1000"
                                    data-aos-delay="0"
                                >
                                    <SkillsCard data={data}/>
                                </li>
                            )
                        })
                    }
                </ol>

                <div className="flex justify-center py-5">
                    <Link
                        href={`skills/${data?.id}`}
                        passHref={true}
                        legacyBehavior={true}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="1000"
                    >
                        <button
                            aria-label={`All ${data.title}`}
                            type="button"
                            className="px-6 py-3 rounded-lg transition-colors duration-300 bg-[#9669fe]/50 hover:bg-[#7b55cc]/50 ">
                            See more
                        </button>
                    </Link>
                </div>
            </div>
    );
};

export default SkillsMapping;
