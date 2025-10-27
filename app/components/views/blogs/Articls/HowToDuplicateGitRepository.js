import React from 'react';
import BlogUser from "../BlogUser";
import AvatarRukon from "@/public/images/rukon.jpg";
import Image from "next/image";
import HowToDuplicateGitRepositoryBanner from "@/public/BlogsImage/HowToDuplicateRepository .jpg";
import CodeBlog from "../CodeBlog";
import {H1, H3} from "../BlogComponents/BlogComponents";

const HowToDuplicateGitRepository = () => {
    return (
        <div>
            <H1>How to Duplicating a repository?</H1>
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
            <H1>Git:</H1>
            <br/>
            <H3>1. Clone the Repository:</H3>
            <CodeBlog language="javascript">
                {
                    `git clone <repository_url>`
                }
            </CodeBlog>
            <br/>
            <p className="pt-5 text-lg">This creates a local copy of the repository on your machine.</p>
            <br/>
            <br/>
            <H3>2. Change Directory into the Cloned Repository:</H3>
            <br/>
            <CodeBlog language="javascript">
                {
                    `cd <repository_directory>`
                }
            </CodeBlog>
            <br/>
            <H3>3. (Optional) Rename the Remote (if you want to push changes to a new
                repository):</H3>
            <br/>
            <CodeBlog language="JavaScript">
                {
                    `git remote rename origin upstream`
                }
            </CodeBlog>
            <br/>
            <H3>4. Create a New Repository (Optional):</H3>
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
            <H3>5. Add a New Remote (if you created a new repository):</H3>
            <br/>
            <CodeBlog language="javascript">
                {
                    `git remote add origin <new_repository_url>`
                }
            </CodeBlog>
            <br/>
            <H3>6. Push to the New Repository (if you created a new repository):</H3>
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