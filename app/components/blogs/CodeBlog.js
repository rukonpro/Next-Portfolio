"use client"
import React from 'react';
import { CopyBlock,androidstudio } from 'react-code-blocks'
const CodeBlog = ({code,language,showLineNumbers}) => {
    return (
        <section className="rounded overflow-x-auto w-full bg-[#282b2e]">
                <CopyBlock
                text={code}
                language={language}
                showLineNumbers={showLineNumbers}
                wrapLines
                theme={androidstudio}
            />
        </section>
    );
};

export default CodeBlog;