import React from 'react';
import BlogUser from "@/app/components/blogs/BlogUser";
import AvatarRukon from "@/public/images/rukon.jpg";
import Image from "next/image";
import HowToDuplicateGitRepositoryBanner from "@/public/BlogsImage/HowToDuplicateRepository .jpg";
import CodeBlog from "@/app/components/blogs/CodeBlog";

const HowToDuplicateGitRepository = () => {
    return (
        <div>
            <h1 className="lg:text-5xl text-2xl font-extrabold">How to Duplicating a repository?</h1>
            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="Dec 15, 2023"/>
            <br/>
            <div>
                <Image src={HowToDuplicateGitRepositoryBanner}
                       alt={"How to Duplicating a repository?"}
                       className="w-full"
                       placeholder="blur"
                       loading="lazy"
                />
            </div>

            <br/>
            <h1 className="text-2xl">Git:</h1>
            <br/>
            <h1 className="text-xl font-extrabold">1. Clone the Repository:</h1>
            <CodeBlog language="javascript">
                {
                    `git clone <repository_url>`
                }
            </CodeBlog>
            <br/>
            <p className="pt-5 text-lg">This creates a local copy of the repository on your machine.</p>
            <br/>
            <br/>
            <h1 className="text-lg font-extrabold">2. Change Directory into the Cloned Repository:</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `cd <repository_directory>`
                }
            </CodeBlog>
            <br/>
            <h1 className="text-lg font-extrabold">3. (Optional) Rename the Remote (if you want to push changes to a new
                repository):</h1>
            <br/>
            <CodeBlog language="JavaScript">
                {
                    `git remote rename origin upstream`
                }
            </CodeBlog>
            <br/>
            <h1 className="text-lg font-extrabold">4. Create a New Repository (Optional):</h1>
            <br/>
            <ul className="list-inside list-disc">
                <li className="pt-5 text-xl">If you want to create a new repository on GitHub or another Git hosting
                    service, create an empty repository.
                </li>
                <li className="pt-5 text-xl">If you’re using a different service, follow its instructions for creating a
                    new repository.
                </li>
            </ul>
            <br/>
            <h1 className="text-lg font-extrabold">5. Add a New Remote (if you created a new repository):</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `git remote add origin <new_repository_url>`
                }
            </CodeBlog>
            <br/>
            <h1 className="text-lg font-extrabold">6. Push to the New Repository (if you created a new repository):</h1>
            <br/>
            <CodeBlog language="javascript">
                {
                    `git push -u origin master`
                }
            </CodeBlog>
        </div>
    );
};

export default HowToDuplicateGitRepository;