import SkillsCard from "@/app/components/skills/SkillsCard";
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
                            className="text-lg font-bold  text-white w-64 border py-2 px-5 rounded-lg hover:bg-[#350b70]">
                            See more
                        </button>
                    </Link>
                </div>
            </div>
    );
};

export default SkillsMapping;
